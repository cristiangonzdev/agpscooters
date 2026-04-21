import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Lang } from "@/lib/scooters";
import { getLegalDoc, getBackLabel, getDisclaimer, getUpdatedLabel, type LegalType } from "@/lib/legal";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";

type Props = {
  type: LegalType;
  lang: Lang;
};

export function LegalPage({ type, lang }: Props) {
  const doc = getLegalDoc(type, lang);

  return (
    <>
      <Navbar lang={lang} />
      <main className="relative min-h-screen overflow-x-clip pb-24 pt-32 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 65%)",
          }}
        />

        <article className="relative mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-ink-muted transition-colors hover:text-[#E8C87C]"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            {getBackLabel(lang)}
          </Link>

          <header className="mt-8 border-b border-[#D4AF37]/15 pb-10">
            <h1 className="font-display text-4xl leading-tight tracking-[-0.01em] text-ink-primary sm:text-5xl md:text-6xl">
              {doc.title}
            </h1>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
              {getUpdatedLabel(lang)} · {doc.updated}
            </p>
          </header>

          <div
            role="note"
            className="mt-8 rounded-lg border border-[#D4AF37]/25 bg-[#141416] px-5 py-4 text-sm leading-relaxed text-ink-muted"
          >
            {getDisclaimer(lang)}
          </div>

          <p className="mt-10 text-base leading-relaxed text-ink-primary/90 md:text-lg">
            {doc.intro}
          </p>

          <div className="mt-12 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl leading-snug text-ink-primary sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-primary/85 md:text-base">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer lang={lang} />
      <WhatsAppFAB lang={lang} />
    </>
  );
}
