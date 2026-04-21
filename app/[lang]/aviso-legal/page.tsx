import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";

type Props = { params: Promise<{ lang: string }> };

export default async function LegalNoticePage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <LegalPage type="notice" lang={lang} />;
}
