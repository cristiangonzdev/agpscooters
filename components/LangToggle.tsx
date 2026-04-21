"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { LANGS, LANG_META } from "@/lib/i18n";

type Props = {
  current: Lang;
  ariaLabel: string;
  className?: string;
};

export function LangToggle({ current, ariaLabel, className = "" }: Props) {
  const pathname = usePathname() ?? `/${current}`;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const swap = (target: Lang) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${target}`;
    segments[0] = target;
    return `/${segments.join("/")}`;
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border px-3 py-1.5 transition-all duration-300
          ${open
            ? "border-[#E8C87C] bg-[#D4AF37]/10 text-[#E8C87C]"
            : "border-[#D4AF37]/30 bg-[#0A0A0B]/40 text-ink-primary/90 backdrop-blur-sm hover:border-[#D4AF37]/60 hover:text-[#E8C87C]"}`}
      >
        <Flag code={current} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">{current}</span>
        <ChevronDown
          size={13}
          strokeWidth={2}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="listbox"
        aria-label={ariaLabel}
        className={`absolute right-0 top-[calc(100%+10px)] z-50 min-w-[192px] overflow-hidden rounded-xl border border-[#D4AF37]/25 bg-[#0A0A0B]/95 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 ease-out
          ${open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
        />
        <ul className="py-1">
          {LANGS.map((lng) => {
            const active = lng === current;
            return (
              <li key={lng}>
                <Link
                  href={swap(lng)}
                  onClick={() => setOpen(false)}
                  role="option"
                  aria-selected={active}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200
                    ${active
                      ? "bg-[#D4AF37]/10 text-[#E8C87C]"
                      : "text-ink-primary/90 hover:bg-[#D4AF37]/5 hover:text-[#E8C87C]"}`}
                >
                  <Flag code={lng} />
                  <span className="flex-1 font-medium">{LANG_META[lng].native}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                    {lng}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Flag({ code }: { code: Lang }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 flex-none items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/30 bg-[#141416]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        {code === "es" && <FlagES />}
        {code === "en" && <FlagEN />}
        {code === "de" && <FlagDE />}
        {code === "fr" && <FlagFR />}
      </svg>
    </span>
  );
}

function FlagES() {
  return (
    <g>
      <rect width="24" height="24" fill="#AA151B" />
      <rect y="7" width="24" height="10" fill="#F1BF00" />
      <circle cx="8.5" cy="12" r="1.1" fill="#AA151B" stroke="#F1BF00" strokeWidth="0.3" />
    </g>
  );
}

function FlagEN() {
  return (
    <g>
      <rect width="24" height="24" fill="#012169" />
      <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3" />
    </g>
  );
}

function FlagDE() {
  return (
    <g>
      <rect width="24" height="8" y="0" fill="#000000" />
      <rect width="24" height="8" y="8" fill="#DD0000" />
      <rect width="24" height="8" y="16" fill="#FFCE00" />
    </g>
  );
}

function FlagFR() {
  return (
    <g>
      <rect width="8" height="24" x="0" fill="#0055A4" />
      <rect width="8" height="24" x="8" fill="#FFFFFF" />
      <rect width="8" height="24" x="16" fill="#EF4135" />
    </g>
  );
}
