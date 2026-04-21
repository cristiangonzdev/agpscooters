"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { SectionDivider } from "../ui/SectionDivider";

type Props = { lang: Lang };

export function FAQ({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative scroll-mt-24 bg-[#0A0A0B] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[#D4AF37]/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E8C87C]">
              {dict.faq.kicker}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.01em] text-ink-primary sm:text-5xl">
            {dict.faq.title}
          </h2>
          <SectionDivider className="mt-6" ornament="diamond" />
        </motion.div>

        <div className="mt-10 divide-y divide-[#D4AF37]/15 border-y border-[#D4AF37]/15">
          {dict.faq.items.map((item, i) => (
            <motion.details
              key={item.q}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }}
              className="group/faq"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 transition-colors duration-200 hover:text-[#E8C87C]">
                <span className="font-display text-lg leading-snug text-ink-primary transition-colors group-open/faq:text-[#E8C87C] sm:text-xl md:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#D4AF37]/35 text-[#E8C87C] transition-transform duration-300 group-open/faq:rotate-45 group-open/faq:border-[#E8C87C]"
                >
                  <Plus size={18} strokeWidth={1.75} />
                </span>
              </summary>
              <div className="pb-7 pr-12">
                <p className="text-base leading-relaxed text-ink-muted">{item.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
