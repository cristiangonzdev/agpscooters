export function ChromaKeyFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="agp-key-black" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    3 3 3 0 0"
          />
        </filter>
        <filter id="agp-key-white" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -9 -9 -9 0 22"
          />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2.2" intercept="-0.35" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
