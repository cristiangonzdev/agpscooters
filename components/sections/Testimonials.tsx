"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { SectionDivider } from "../ui/SectionDivider";

type Props = { lang: Lang };

const PHOTO_MAP: Record<number, string | null> = {
  0: "/images/testimonial-1.jpg",
  1: null,
  2: "/images/testimonial-2.jpg",
  3: null,
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => w.length > 0 && !/^(the|family|familie|famille)$/i.test(w))
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

export function Testimonials({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();
  const items = dict.testimonials.items;

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0B] py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 20%, rgba(212,175,55,0.07) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(27,77,92,0.1) 0%, transparent 60%)",
        }}
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
            const photo = PHOTO_MAP[i] ?? null;
            const hasPhoto = Boolean(photo);
            return (
              <motion.figure
                key={item.name + i}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#141416] transition-colors duration-300 hover:border-[#D4AF37]/40"
              >
                {hasPhoto && photo ? (
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
                          "linear-gradient(180deg, rgba(10,10,11,0.2) 0%, transparent 40%, rgba(20,20,22,0.85) 100%)",
                      }}
                    />
                    <Quote
                      aria-hidden="true"
                      size={42}
                      strokeWidth={1.2}
                      className="absolute left-5 top-5 text-[#E8C87C]/80 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                      fill="currentColor"
                    />
                  </div>
                ) : (
                  <div className="relative flex items-center justify-between border-b border-[#D4AF37]/15 px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-14 w-14 flex-none items-center justify-center">
                        <span className="absolute inset-0 rounded-full border border-[#D4AF37]/35" />
                        <span className="absolute inset-1.5 rounded-full border border-[#D4AF37]/20" />
                        <span className="font-display text-lg gold-gradient-text leading-none">
                          {initials(item.name)}
                        </span>
                      </div>
                      <div>
                        <div className="font-display text-xl leading-snug text-ink-primary">
                          {item.name}
                        </div>
                        <div className="text-xs text-ink-muted">{item.location}</div>
                      </div>
                    </div>
                    <Quote
                      aria-hidden="true"
                      size={28}
                      strokeWidth={1.4}
                      className="text-[#E8C87C]/60"
                      fill="currentColor"
                    />
                  </div>
                )}

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

                  <div className="mt-auto flex items-center justify-between border-t border-[#D4AF37]/15 pt-4">
                    {hasPhoto ? (
                      <div>
                        <div className="font-display text-base leading-tight text-ink-primary">
                          {item.name}
                        </div>
                        <div className="text-xs text-ink-muted">{item.location}</div>
                      </div>
                    ) : (
                      <div />
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8C87C]">
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
