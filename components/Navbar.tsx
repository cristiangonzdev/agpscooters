"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Logo } from "./ui/Logo";
import { LangToggle } from "./LangToggle";

type Props = { lang: Lang };

export function Navbar({ lang }: Props) {
  const dict = getDict(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#vehicles", label: dict.nav.vehicles },
    { href: "#testimonials", label: dict.nav.testimonials },
    { href: "#how", label: dict.nav.how },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
  ];

  const waLink = buildWhatsAppLink(dict.hero.genericWhatsApp);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out
        ${scrolled
          ? "bg-[#0A0A0B]/80 backdrop-blur-md border-b border-[#D4AF37]/15"
          : "bg-transparent border-b border-transparent"}`}
    >
      <nav className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={`/${lang}`}
          className="group flex items-center"
          aria-label="AGP Mobility Scooters Lanzarote"
        >
          <Logo size="lg" />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-2 text-[13px] font-medium tracking-wide text-ink-primary/80 transition-colors duration-300 hover:text-[#E8C87C]"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle current={lang} ariaLabel={dict.aria.toggleLang} />
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.aria.openWhatsApp}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-br from-[#E8C87C] via-[#D4AF37] to-[#B8892E] px-5 text-sm font-semibold text-[#0A0A0B] shadow-[0_6px_22px_-8px_rgba(212,175,55,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(232,200,124,0.7)]"
          >
            {dict.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle current={lang} ariaLabel={dict.aria.toggleLang} />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={dict.aria.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#E8C87C] transition-colors hover:border-[#E8C87C] hover:bg-[#D4AF37]/5"
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label={dict.aria.closeMenu}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[#0A0A0B]/90 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 flex flex-col bg-[#0A0A0B] px-5 pb-10 pt-5">
            <div className="flex items-center justify-between">
              <Logo size="lg" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={dict.aria.closeMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#E8C87C]"
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <ul className="mt-8 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-4 font-display text-2xl text-ink-primary transition-colors hover:bg-[#D4AF37]/5 hover:text-[#E8C87C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.aria.openWhatsApp}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-gradient-to-br from-[#E8C87C] via-[#D4AF37] to-[#B8892E] px-6 text-base font-semibold text-[#0A0A0B]"
            >
              {dict.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
