"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, MapPin, Wallet, Zap } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";

type Props = { lang: Lang };

export function TrustStrip({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();

  const items = [
    { icon: MapPin, label: dict.trust.delivery },
    { icon: Zap, label: dict.trust.range },
    { icon: Wallet, label: dict.trust.payment },
    { icon: Clock, label: dict.trust.support },
  ];

  return (
    <section aria-label="Trust indicators" className="relative border-y border-[#D4AF37]/15 bg-[#0A0A0B]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 sm:px-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#D4AF37]/15 lg:px-12">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 px-2 text-center lg:px-6"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#E8C87C]">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium tracking-wide text-ink-primary/90 md:text-base">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
