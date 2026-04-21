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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex flex-col gap-2">
          <Logo size="md" />
          <p className="text-xs text-ink-muted">{dict.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:gap-6">
          <Link href={`/${lang}/privacidad`} className="transition-colors hover:text-[#E8C87C]">
            {dict.footer.privacy}
          </Link>
          <span className="hidden h-3 w-px bg-[#D4AF37]/20 sm:inline-block" />
          <Link href={`/${lang}/terminos`} className="transition-colors hover:text-[#E8C87C]">
            {dict.footer.terms}
          </Link>
        </div>

        <p className="text-xs text-ink-muted">
          © {year} AGP Mobility Scooters · {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
