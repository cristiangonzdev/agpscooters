"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Gauge, Route, User, Weight } from "lucide-react";
import type { Scooter, Lang, PriceDuration } from "@/lib/scooters";
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
  const { specsLabels, pricing, cta, badge1, badge2, badgePremium } = dict.vehicles;

  const [selected, setSelected] = useState<PriceDuration>(scooter.default_duration);
  const selectedTier =
    scooter.prices.find((p) => p.duration === selected) ?? scooter.prices[0];

  const perDayEquivalent = (() => {
    const days =
      selectedTier.duration === "3d" ? 3 : selectedTier.duration === "7d" ? 7 : null;
    if (!days) return null;
    const value = selectedTier.price_eur / days;
    return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
  })();

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

  const buildWhatsAppMessage = (): string => {
    const durationLabel = pricing.durations[selectedTier.duration];
    const base = scooter.whatsapp_message[lang];
    const tail: Record<Lang, string> = {
      es: ` Me interesa la tarifa de ${durationLabel} (${selectedTier.price_eur} €).`,
      en: ` I'm interested in the ${durationLabel} rate (€${selectedTier.price_eur}).`,
      de: ` Ich interessiere mich für den Tarif ${durationLabel} (${selectedTier.price_eur} €).`,
      fr: ` Je suis intéressé par le tarif ${durationLabel} (${selectedTier.price_eur} €).`,
    };
    return `${base}${tail[lang]}`;
  };

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="gold-border-shimmer group relative flex flex-col overflow-hidden rounded-2xl bg-[#141416] border border-[#D4AF37]/15 transition-colors duration-300 hover:border-[#D4AF37]/40"
    >
      <div className="relative aspect-square overflow-hidden bg-[#0A0A0B]">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
          <Image
            src={scooter.image}
            alt={`${scooter.name} — ${scooter.tagline[lang]}`}
            fill
            quality={95}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-[50%_42%]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,11,0.15) 0%, transparent 28%, transparent 65%, rgba(10,10,11,0.55) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 50%, transparent 55%, rgba(10,10,11,0.35) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/15"
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
          <div className="rounded-xl border border-[#D4AF37]/15 bg-[#0A0A0B]/60 p-4 sm:p-5">
            <div
              className="text-[10px] uppercase tracking-[0.18em] text-ink-muted"
              id={`pricing-${scooter.id}`}
            >
              {pricing.chooseDuration}
            </div>

            <div
              role="tablist"
              aria-labelledby={`pricing-${scooter.id}`}
              className="mt-2.5 flex flex-wrap gap-1.5"
            >
              {scooter.prices.map((tier) => {
                const isActive = tier.duration === selected;
                return (
                  <button
                    key={tier.duration}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setSelected(tier.duration)}
                    className={`relative inline-flex min-h-[34px] items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] ${
                      isActive
                        ? "border-[#D4AF37] bg-[#D4AF37] text-[#0A0A0B] shadow-[0_0_14px_-2px_rgba(212,175,55,0.55)]"
                        : "border-[#D4AF37]/25 bg-transparent text-[#E8C87C]/80 hover:border-[#D4AF37]/60 hover:text-[#E8C87C]"
                    }`}
                  >
                    {pricing.durations[tier.duration]}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-end justify-between gap-4">
              <div className="relative min-w-0 overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={selectedTier.duration}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="font-display text-5xl leading-none tabular-nums gold-gradient-text">
                      {selectedTier.price_eur}
                    </span>
                    <span className="font-display text-3xl leading-none text-[#E8C87C]">€</span>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={`sub-${selectedTier.duration}`}
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="mt-1.5 flex items-center gap-2 text-xs text-ink-muted"
                  >
                    <span>{pricing.forDuration[selectedTier.duration]}</span>
                    {perDayEquivalent ? (
                      <>
                        <span aria-hidden="true" className="text-[#D4AF37]/30">
                          ·
                        </span>
                        <span className="tabular-nums text-[#E8C87C]/80">
                          {perDayEquivalent} €{pricing.perDayHint}
                        </span>
                      </>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <WhatsAppButton
              message={buildWhatsAppMessage()}
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
