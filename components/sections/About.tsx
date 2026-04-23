"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Handshake, Languages, ShieldCheck } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { SectionDivider } from "../ui/SectionDivider";

type Props = { lang: Lang };

const ICONS = [Handshake, ShieldCheck, Languages] as const;

export function About({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative scroll-mt-32 bg-marble-secondary py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          height: "60%",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-[#D4AF37]/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E8C87C]">
              {dict.about.kicker}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.1] tracking-[-0.01em] text-ink-primary text-balance sm:text-5xl md:text-6xl">
            {dict.about.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-primary/85 md:text-lg">
            {dict.about.lead}
          </p>

          <SectionDivider className="mt-8" ornament="palm" />
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-7 md:grid-cols-3 md:gap-8"
        >
          {dict.about.bullets.map((bullet, i) => {
            const Icon = ICONS[i] ?? Handshake;
            return (
              <li
                key={bullet.title}
                className="group relative flex flex-col rounded-2xl border border-[#D4AF37]/15 bg-[#0A0A0B]/40 p-6 transition-colors duration-300 hover:border-[#D4AF37]/35 sm:p-7"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/5 text-[#E8C87C]">
                  <Icon size={21} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug text-ink-primary sm:text-2xl">
                  {bullet.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-[15px]">
                  {bullet.body}
                </p>
              </li>
            );
          })}
        </motion.ul>

      </div>
    </section>
  );
}
