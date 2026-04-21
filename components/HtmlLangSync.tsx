"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/scooters";

export function HtmlLangSync({ lang }: { lang: Lang }) {
  useEffect(() => {
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}
