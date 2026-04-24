"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, Mail, MapPin, MapPinned, MessageCircle, Phone } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { buildWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

type Props = { lang: Lang };

const EMAIL = "admin@agpscooterslanzarote.com";

function formatPhone(raw: string): string {
  return `+${raw.slice(0, 2)} ${raw.slice(2, 5)} ${raw.slice(5, 8)} ${raw.slice(8, 10)} ${raw.slice(10)}`;
}

export function Contact({ lang }: Props) {
  const dict = getDict(lang);
  const reduce = useReducedMotion();
  const displayPhone = formatPhone(WHATSAPP_NUMBER);

  const info = [
    {
      icon: Phone,
      label: dict.contact.phone,
      value: displayPhone,
      href: `tel:+${WHATSAPP_NUMBER}`,
    },
    {
      icon: MessageCircle,
      label: dict.contact.whatsapp,
      value: displayPhone,
      href: buildWhatsAppLink(dict.contact.ctaWhatsAppMessage),
      external: true,
    },
    {
      icon: Mail,
      label: dict.contact.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: Clock,
      label: dict.contact.hours,
      value: dict.contact.hoursValue,
    },
    {
      icon: MapPinned,
      label: dict.contact.coverage,
      value: dict.contact.coverageValue,
    },
    {
      icon: MapPin,
      label: dict.contact.address,
      value: dict.contact.addressValue,
      href: dict.contact.addressMapsUrl,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-32 border-t border-[#D4AF37]/20 bg-marble-secondary py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-[#D4AF37]/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E8C87C]">
              {dict.contact.kicker}
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.01em] text-ink-primary text-balance sm:text-5xl">
            {dict.contact.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-y-7 sm:grid-cols-2 sm:gap-x-10"
          >
            {info.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#E8C87C]">
                    <Icon size={17} strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-base leading-relaxed text-ink-primary">{item.value}</dd>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group rounded-lg transition-colors hover:bg-[#D4AF37]/5 focus-visible:bg-[#D4AF37]/5"
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </motion.dl>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, #B8892E 45%, #8B6914 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 20% 10%, rgba(255,255,255,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(10,10,11,0.35) 0%, transparent 60%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#0A0A0B]/20"
            >
              <span className="absolute inset-2 rounded-full border border-[#0A0A0B]/15" />
              <span className="font-display text-sm italic text-[#0A0A0B]/70">AGP</span>
            </div>

            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0A0A0B]/75">
                {dict.nav.cta}
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-[#0A0A0B] text-balance sm:text-4xl">
                {dict.contact.ctaTitle}
              </h3>
              <p className="mt-4 max-w-md text-[#0A0A0B]/85">{dict.contact.ctaBody}</p>

              <a
                href={buildWhatsAppLink(dict.contact.ctaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.aria.openWhatsApp}
                className="group mt-8 inline-flex min-h-[60px] items-center justify-center gap-3 rounded-full bg-[#0A0A0B] px-9 text-lg font-semibold text-[#E8C87C] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#141416] hover:text-[#E8C87C]"
              >
                <MessageCircle size={22} strokeWidth={2.25} />
                <span>{dict.contact.ctaButton}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
