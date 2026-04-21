import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Vehicles } from "@/components/sections/Vehicles";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

type Props = { params: Promise<{ lang: string }> };

export default async function LandingPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <>
      <Navbar lang={lang} />
      <main className="relative overflow-x-clip">
        <Hero lang={lang} />
        <TrustStrip lang={lang} />
        <Vehicles lang={lang} />
        <Testimonials lang={lang} />
        <HowItWorks lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppFAB lang={lang} />
    </>
  );
}
