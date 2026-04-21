import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { LegalPage } from "@/components/LegalPage";

type Props = { params: Promise<{ lang: string }> };

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <LegalPage type="terms" lang={lang} />;
}
