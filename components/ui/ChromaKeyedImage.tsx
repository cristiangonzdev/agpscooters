"use client";

import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  draggable?: boolean;
  /** Luminance above which a pixel is considered background (0–1). */
  threshold?: number;
  /** How many erosion passes to run on the halo band. */
  erosion?: number;
  /** Luminance threshold for erosion band (edge halos). */
  haloThreshold?: number;
};

export function ChromaKeyedImage({
  src,
  alt,
  className,
  style,
  draggable = false,
  threshold = 0.78,
  erosion = 4,
  haloThreshold = 0.42,
}: Props) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        setProcessedSrc(src);
        return;
      }

      ctx.drawImage(img, 0, 0);

      let imageData: ImageData;
      try {
        imageData = ctx.getImageData(0, 0, w, h);
      } catch {
        setProcessedSrc(src);
        return;
      }

      const data = imageData.data;
      const softBand = 0.04;
      const upper = threshold + softBand;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i] / 255;
        const g = data[i + 1] / 255;
        const b = data[i + 2] / 255;
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum >= upper) {
          data[i + 3] = 0;
        } else if (lum > threshold) {
          const t = (lum - threshold) / softBand;
          data[i + 3] = Math.round((1 - t) * data[i + 3]);
        }
      }

      for (let iter = 0; iter < erosion; iter++) {
        const snapshot = new Uint8ClampedArray(data);
        for (let y = 1; y < h - 1; y++) {
          for (let x = 1; x < w - 1; x++) {
            const i = (y * w + x) * 4;
            if (snapshot[i + 3] === 0) continue;

            let hasTransparentNeighbor = false;
            for (let dy = -1; dy <= 1 && !hasTransparentNeighbor; dy++) {
              for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const ni = ((y + dy) * w + (x + dx)) * 4;
                if (snapshot[ni + 3] < 96) {
                  hasTransparentNeighbor = true;
                  break;
                }
              }
            }

            if (!hasTransparentNeighbor) continue;

            const r = snapshot[i] / 255;
            const g = snapshot[i + 1] / 255;
            const b = snapshot[i + 2] / 255;
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            if (lum > haloThreshold) {
              data[i + 3] = 0;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      try {
        const url = canvas.toDataURL("image/png");
        if (!cancelled) setProcessedSrc(url);
      } catch {
        if (!cancelled) setProcessedSrc(src);
      }
    };

    img.onerror = () => {
      if (!cancelled) setProcessedSrc(src);
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, threshold, erosion, haloThreshold]);

  return (
    <img
      src={processedSrc ?? ""}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: processedSrc ? 1 : 0,
        transition: "opacity 400ms ease-out",
      }}
      draggable={draggable}
    />
  );
}
