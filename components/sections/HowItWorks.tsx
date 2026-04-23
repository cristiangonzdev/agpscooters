"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Package, Sparkles, Sparkle } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";

type Props = { lang: Lang };

const ICONS = [Sparkle, MessageCircle, Package, Sparkles] as const;
const ROMAN = ["I", "II", "III", "IV"] as const;

export function HowItWorks({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();

  return (
    <section id="how" className="relative scroll-mt-32 overflow-hidden bg-[#0A0A0B] py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 80% 15%, rgba(212,175,55,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 15% 85%, rgba(212,175,55,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#D4AF37] opacity-[0.05] blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[#D4AF37]/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E8C87C]">
              {dict.how.kicker}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.01em] text-ink-primary sm:text-5xl">
            {dict.how.title}
          </h2>
          <p className="mt-5 text-base text-ink-muted md:text-lg">{dict.how.subtitle}</p>
        </motion.div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(212,175,55,0.25) 12%, rgba(212,175,55,0.25) 88%, transparent 100%)",
            }}
          />

          {dict.how.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-display text-[120px] leading-none text-[#D4AF37]/5"
                >
                  {ROMAN[i]}
                </span>

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-[#D4AF37]/40" />
                  <span className="absolute inset-2 rounded-full border border-[#D4AF37]/20" />
                  <span
                    className="absolute inset-3 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.03) 60%, transparent 100%)",
                    }}
                  />
                  <Icon size={26} strokeWidth={1.5} className="relative text-[#E8C87C]" />
                </div>

                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E8C87C]">
                  {ROMAN[i]}
                </p>

                <h3 className="mt-2 font-display text-2xl leading-snug text-ink-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  {step.body}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
