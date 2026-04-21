"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getDict } from "@/lib/i18n";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Props = { lang: Lang };

export function WhatsAppFAB({ lang }: Props) {
  const dict = getDict(lang);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppLink(dict.hero.genericWhatsApp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.aria.openWhatsApp}
      className={`whatsapp-pulse fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-500 ease-out
        hover:scale-110 hover:bg-[#22c55e]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </a>
  );
}
