"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle, Star } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Props = { lang: Lang };

export function Hero({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0A0A0B]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(212,175,55,0.18) 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 10% 85%, rgba(27,77,92,0.28) 0%, transparent 55%), linear-gradient(180deg, #0A0A0B 0%, #141416 50%, #0A0A0B 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-1/2 z-0 hidden -translate-y-1/2 lg:block"
      >
        <Image
          src="/images/logo.jpeg"
          alt=""
          width={1536}
          height={1024}
          priority
          className="h-[min(80vh,780px)] w-auto"
          style={{ filter: "url(#agp-key-black)" }}
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[20%] z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37] opacity-[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[10%] z-0 h-[380px] w-[380px] rounded-full bg-[#1B4D5C] opacity-[0.25] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-[#0A0A0B]"
      />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8 sm:pt-32 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E8C87C]">
              {dict.hero.eyebrow}
            </span>
          </div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl leading-[1.02] tracking-[-0.01em] text-ink-primary text-balance sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            {dict.hero.title_line1}{" "}
            <span className="gold-gradient-text italic">{dict.hero.title_accent}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-primary/80 md:text-xl"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href={buildWhatsAppLink(dict.hero.genericWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.aria.openWhatsApp}
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#E8C87C] via-[#D4AF37] to-[#B8892E] px-8 text-base font-semibold text-[#0A0A0B] shadow-[0_14px_40px_-12px_rgba(212,175,55,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(232,200,124,0.8)]"
            >
              <MessageCircle size={20} strokeWidth={2.25} />
              <span>{dict.hero.ctaPrimary}</span>
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#vehicles"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-[#D4AF37]/50 px-8 text-base font-medium text-[#E8C87C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8C87C] hover:bg-[#D4AF37]/5"
            >
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/25 bg-[#0A0A0B]/50 px-4 py-2 backdrop-blur-sm"
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} strokeWidth={0} fill="#E8C87C" />
              ))}
            </div>
            <span className="text-xs font-medium tracking-wide text-ink-primary/90">
              {dict.hero.badge}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 flex flex-col items-center gap-2 text-ink-muted">
        <span className="text-[10px] uppercase tracking-[0.32em]">{dict.hero.scroll}</span>
        <ChevronDown size={18} strokeWidth={1.5} className="scroll-hint text-[#E8C87C]" />
      </div>
    </section>
  );
}
