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
                    -5 -5 -5 0 14.5"
          />
        </filter>
      </defs>
    </svg>
  );
}
