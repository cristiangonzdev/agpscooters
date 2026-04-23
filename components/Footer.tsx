import Link from "next/link";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { Logo } from "./ui/Logo";

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  const dict = getDict(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#D4AF37]/15 bg-[#0A0A0B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div className="flex flex-col gap-4">
          <Logo size="2xl" />
          <p className="text-base font-medium tracking-wide text-ink-primary/85 sm:text-lg">
            {dict.footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-muted">
          <Link href={`/${lang}/privacidad`} className="transition-colors hover:text-[#E8C87C]">
            {dict.footer.privacy}
          </Link>
          <span aria-hidden="true" className="h-3 w-px bg-[#D4AF37]/20" />
          <Link href={`/${lang}/terminos`} className="transition-colors hover:text-[#E8C87C]">
            {dict.footer.terms}
          </Link>
          <span aria-hidden="true" className="h-3 w-px bg-[#D4AF37]/20" />
          <Link href={`/${lang}/aviso-legal`} className="transition-colors hover:text-[#E8C87C]">
            {dict.footer.legal}
          </Link>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-7 sm:px-8 lg:px-12">
          <p className="text-center text-xs text-ink-muted">
            © {year} AGP Mobility Scooters · {dict.footer.rights}
          </p>

          <div aria-hidden="true" className="flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/45" />
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D4AF37]/55" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/45" />
          </div>

          <a
            href={dict.footer.designerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 text-center"
          >
            <span className="text-[11px] font-medium tracking-[0.12em] text-ink-muted">
              {dict.footer.designedBy}{" "}
              <span className="font-semibold gold-gradient-text transition-opacity group-hover:opacity-90">
                {dict.footer.designerName}
              </span>
            </span>
            <span className="text-[10px] italic tracking-wide text-ink-muted/80 underline-offset-2 group-hover:text-[#E8C87C] group-hover:underline">
              {dict.footer.designerCta}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
