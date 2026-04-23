import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

// Bottom-right "sparkle" watermark footprint, as fractions of the image.
// Slightly oversized on purpose so feathered edges are fully covered.
const WM = {
  rightPct: 0.135,  // patch width
  bottomPct: 0.085, // patch height
};

// We sample a clean band of background immediately to the LEFT of the watermark
// (same vertical range), then blur it slightly so the swap is imperceptible.
const files = [
  "public/images/scooter-confort.png",
  "public/images/scooter-doble.png",
  "public/images/scooter-premium.png",
];

async function scrub(file) {
  const full = path.resolve(file);
  const meta = await sharp(full).metadata();
  const W = meta.width;
  const H = meta.height;

  const patchW = Math.round(W * WM.rightPct);
  const patchH = Math.round(H * WM.bottomPct);
  const patchX = W - patchW;
  const patchY = H - patchH;

  // Source band: directly to the left of the watermark, same vertical range.
  const srcX = Math.max(0, patchX - patchW);
  const src = await sharp(full)
    .extract({ left: srcX, top: patchY, width: patchW, height: patchH })
    .toBuffer();

  // Slight blur hides any sand-grain repetition from the horizontal mirror.
  const patch = await sharp(src)
    .flop()
    .blur(1.5)
    .png({ compressionLevel: 9 })
    .toBuffer();

  // Feathered mask so the patch edges fade into the surrounding photo.
  const feather = Math.round(Math.min(patchW, patchH) * 0.25);
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${patchW}" height="${patchH}">
       <defs>
         <radialGradient id="g" cx="50%" cy="50%" r="60%">
           <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
           <stop offset="70%" stop-color="#fff" stop-opacity="1"/>
           <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
         </radialGradient>
       </defs>
       <rect x="${feather}" y="${feather}"
             width="${patchW - feather * 2}" height="${patchH - feather * 2}"
             fill="url(#g)"/>
       <rect x="0" y="0" width="${patchW}" height="${patchH}"
             fill="url(#g)" opacity="0.9"/>
     </svg>`
  );

  const featheredPatch = await sharp(patch)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const tmp = full + ".clean.png";
  await sharp(full)
    .composite([{ input: featheredPatch, left: patchX, top: patchY }])
    .png({ compressionLevel: 9 })
    .toFile(tmp);

  await fs.rename(tmp, full);
  console.log(`cleaned ${file}  (${W}x${H}, patch ${patchW}x${patchH} at ${patchX},${patchY})`);
}

for (const f of files) {
  await scrub(f);
}
