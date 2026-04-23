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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-6 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs text-ink-muted text-center sm:text-left">
            © {year} AGP Mobility Scooters · {dict.footer.rights}
          </p>

          <a
            href={dict.footer.designerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-0.5 text-center sm:items-end sm:text-right"
          >
            <span className="text-[11px] font-medium tracking-wide text-ink-muted">
              {dict.footer.designedBy}{" "}
              <span className="font-semibold gold-gradient-text transition-opacity group-hover:opacity-90">
                {dict.footer.designerName}
              </span>
            </span>
            <span className="text-[10px] italic tracking-wide text-ink-muted/80 underline-offset-2 group-hover:underline group-hover:text-[#E8C87C]">
              {dict.footer.designerCta}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
