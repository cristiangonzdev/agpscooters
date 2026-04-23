"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { SectionDivider } from "../ui/SectionDivider";

type Props = { lang: Lang };

const PHOTOS = ["/images/testimonial-1.jpg", "/images/testimonial-2.jpg"] as const;

export function Testimonials({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();
  const items = dict.testimonials.items.slice(0, 2);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-32 overflow-hidden bg-[#0A0A0B] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 20% 20%, rgba(212,175,55,0.11) 0%, transparent 60%), radial-gradient(ellipse 70% 55% at 80% 85%, rgba(212,175,55,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
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
              {dict.testimonials.kicker}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.01em] text-ink-primary sm:text-5xl md:text-6xl">
            {dict.testimonials.title_line}{" "}
            <span className="gold-gradient-text italic">{dict.testimonials.title_accent}</span>
          </h2>
          <p className="mt-5 text-base text-ink-muted md:text-lg">{dict.testimonials.subtitle}</p>
          <SectionDivider className="mt-6" ornament="diamond" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {items.map((item, i) => {
            const photo = PHOTOS[i] ?? PHOTOS[0];
            return (
              <motion.figure
                key={i}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#141416] transition-colors duration-300 hover:border-[#D4AF37]/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0B] sm:aspect-[16/10]">
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,11,0.15) 0%, transparent 40%, rgba(20,20,22,0.9) 100%)",
                    }}
                  />
                  <Quote
                    aria-hidden="true"
                    size={44}
                    strokeWidth={1.2}
                    className="absolute left-5 top-5 text-[#E8C87C]/85 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                    fill="currentColor"
                  />
                </div>

                <figcaption className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                  <div className="flex gap-0.5" aria-label="5 estrellas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} strokeWidth={0} fill="#E8C87C" />
                    ))}
                  </div>

                  <blockquote className="font-display text-lg leading-[1.55] text-ink-primary/95 sm:text-xl">
                    <span aria-hidden="true" className="text-[#E8C87C]">&ldquo;</span>
                    {item.quote}
                    <span aria-hidden="true" className="text-[#E8C87C]">&rdquo;</span>
                  </blockquote>

                  <div className="mt-auto flex items-center justify-end border-t border-[#D4AF37]/15 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8C87C]">
                      {item.trip}
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
