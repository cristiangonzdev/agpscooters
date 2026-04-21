import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Size = "md" | "lg" | "xl";

type Props = {
  message: string;
  ariaLabel: string;
  children: ReactNode;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
};

const sizes: Record<Size, string> = {
  md: "min-h-[44px] px-5 text-sm gap-2",
  lg: "min-h-[52px] px-7 text-base gap-2.5",
  xl: "min-h-[60px] px-9 text-lg gap-3",
};

export function WhatsAppButton({ message, ariaLabel, children, size = "lg", fullWidth = false, className = "" }: Props) {
  const iconSize = size === "xl" ? 22 : size === "lg" ? 20 : 18;
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group relative inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide
        bg-[#25D366] text-white
        shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)]
        hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.8)]
        hover:-translate-y-0.5 hover:bg-[#22c55e]
        active:translate-y-0
        transition-all duration-300 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
        ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <MessageCircle size={iconSize} strokeWidth={2.25} className="transition-transform duration-300 group-hover:rotate-[-8deg]" />
      <span>{children}</span>
    </a>
  );
}
