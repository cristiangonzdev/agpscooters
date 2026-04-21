import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LANGS, isLang } from "@/lib/i18n";
import { HtmlLangSync } from "@/components/HtmlLangSync";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <>
      <HtmlLangSync lang={lang} />
      {children}
    </>
  );
}
