import Image from "next/image";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  priority?: boolean;
};

const HEIGHTS: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-10",
  md: "h-12",
  lg: "h-16",
  xl: "h-20",
  "2xl": "h-20 sm:h-24",
};

export function Logo({ className = "", size = "md", priority = false }: Props) {
  const heightClass = HEIGHTS[size];
  return (
    <span
      className={`relative inline-flex items-center ${heightClass} ${className}`}
      aria-label="AGP Mobility Scooters Lanzarote"
    >
      <Image
        src="/images/logo.jpeg"
        alt="AGP Mobility Scooters Lanzarote"
        width={1536}
        height={1024}
        priority={priority}
        className={`${heightClass} w-auto select-none`}
        style={{ filter: "url(#agp-key-black)" }}
        draggable={false}
      />
    </span>
  );
}
