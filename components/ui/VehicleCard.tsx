"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Gauge, Route, User, Weight } from "lucide-react";
import type { Scooter, Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { WhatsAppButton } from "./WhatsAppButton";

type Props = {
  scooter: Scooter;
  lang: Lang;
  index: number;
};

export function VehicleCard({ scooter, lang, index }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();
  const { specsLabels, from, perDay, cta, badge1, badge2, badgePremium } = dict.vehicles;

  const specs = [
    { icon: Route, label: specsLabels.range, value: `${scooter.range_km} km` },
    { icon: Gauge, label: specsLabels.speed, value: `${scooter.max_speed_kmh} km/h` },
    { icon: Weight, label: specsLabels.weight, value: `${scooter.max_weight_kg} kg` },
    {
      icon: User,
      label: specsLabels.seats,
      value:
        scooter.capacity === 1
          ? `1 ${specsLabels.seatsUnit}`
          : `2 ${specsLabels.seats.toLowerCase()}`,
    },
  ];

  const badgeLabel =
    scooter.badge === "PREMIUM"
      ? badgePremium
      : scooter.badge === "2-PAX"
      ? badge2
      : badge1;

  const bookLabels: Record<Lang, string> = {
    es: `Reservar ${scooter.name} por WhatsApp`,
    en: `Book ${scooter.name} on WhatsApp`,
    de: `${scooter.name} per WhatsApp buchen`,
    fr: `Réserver ${scooter.name} sur WhatsApp`,
  };
  const whatsappAria = bookLabels[lang];

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="gold-border-shimmer group relative flex flex-col overflow-hidden rounded-2xl bg-[#141416] border border-[#D4AF37]/15 transition-colors duration-300 hover:border-[#D4AF37]/40"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 58%, #1C1C1F 0%, #141416 55%, #0A0A0B 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]">
          <Image
            src={scooter.image}
            alt={`${scooter.name} — ${scooter.tagline[lang]}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
            style={{ filter: "url(#agp-key-white)" }}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 52%, rgba(212,175,55,0.05) 0%, transparent 50%, rgba(10,10,11,0.75) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141416] via-[#141416]/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#141416]/70 to-transparent"
        />

        <div className="absolute right-4 top-4 z-10">
          <span className="inline-flex items-center rounded-full border border-[#D4AF37]/70 bg-[#0A0A0B]/85 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#E8C87C] backdrop-blur-sm">
            {badgeLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-3xl leading-tight gold-gradient-text">{scooter.name}</h3>
          <p className="mt-2 text-base text-ink-muted">{scooter.tagline[lang]}</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#D4AF37]/15 pt-5">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <li key={spec.label} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#E8C87C]">
                  <Check size={12} strokeWidth={3} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    <Icon size={11} strokeWidth={2} />
                    <span>{spec.label}</span>
                  </div>
                  <div className="mt-0.5 font-sans text-[15px] font-medium tabular-nums text-ink-primary">
                    {spec.value}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto">
          <div className="flex items-baseline gap-3">
            {scooter.price_crossed_eur_day ? (
              <span className="text-sm tabular-nums text-ink-muted line-through decoration-[#8B6914] decoration-1">
                {scooter.price_crossed_eur_day}€
              </span>
            ) : null}
            <div className="flex items-baseline gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">{from}</span>
              <span className="font-display text-4xl tabular-nums gold-gradient-text leading-none">
                {scooter.price_from_eur_day}
              </span>
              <span className="text-sm text-[#E8C87C]">{perDay}</span>
            </div>
          </div>

          <div className="mt-5">
            <WhatsAppButton
              message={scooter.whatsapp_message[lang]}
              ariaLabel={whatsappAria}
              size="lg"
              fullWidth
            >
              {cta}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
