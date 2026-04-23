"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Lang } from "@/lib/scooters";
import { SCOOTERS } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { VehicleCard } from "../ui/VehicleCard";
import { SectionDivider } from "../ui/SectionDivider";

type Props = { lang: Lang };

export function Vehicles({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();

  return (
    <section id="vehicles" className="relative scroll-mt-32 bg-marble py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
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
              {dict.vehicles.kicker}
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/60" />
          </div>

          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.01em] text-ink-primary sm:text-5xl md:text-6xl">
            {dict.vehicles.title_line}{" "}
            <span className="gold-gradient-text italic">{dict.vehicles.title_accent}</span>
          </h2>

          <p className="mt-5 text-base text-ink-muted md:text-lg">{dict.vehicles.subtitle}</p>

          <SectionDivider className="mt-6" />
        </motion.div>

        <div className="mt-12 grid gap-7 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SCOOTERS.map((scooter, i) => (
            <VehicleCard key={scooter.id} scooter={scooter} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
