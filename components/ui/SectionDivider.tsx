type Props = {
  ornament?: "palm" | "diamond" | "dot";
  className?: string;
};

export function SectionDivider({ ornament = "palm", className = "" }: Props) {
  return (
    <div className={`flex items-center justify-center gap-5 py-6 select-none ${className}`} aria-hidden="true">
      <span className="h-px w-28 sm:w-40 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-[#D4AF37]/45" />
        <span className="absolute inset-1.5 rounded-full border border-[#D4AF37]/25" />
        <Ornament kind={ornament} />
      </span>
      <span className="h-px w-28 sm:w-40 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
    </div>
  );
}

function Ornament({ kind }: { kind: "palm" | "diamond" | "dot" }) {
  if (kind === "palm") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#E8C87C]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V11" />
        <path d="M12 11c0-3-2.5-4.5-5-4.5-1.5 0-2.5 1-2.5 1" />
        <path d="M12 11c0-3 2.5-4.5 5-4.5 1.5 0 2.5 1 2.5 1" />
        <path d="M12 11c-1-2.5-3-3.5-5-3.5" />
        <path d="M12 11c1-2.5 3-3.5 5-3.5" />
        <path d="M12 11V8c0-1.5 1-3 2.5-3" />
        <path d="M12 11V8c0-1.5-1-3-2.5-3" />
      </svg>
    );
  }
  if (kind === "diamond") {
    return <span className="h-2 w-2 rotate-45 bg-[#E8C87C]" />;
  }
  return <span className="h-1.5 w-1.5 rounded-full bg-[#E8C87C]" />;
}
