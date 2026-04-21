import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ChromaKeyFilters } from "@/components/ChromaKeyFilters";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AGP Mobility Scooters Lanzarote · Alquiler premium con entrega",
  description:
    "Alquiler de scooters de movilidad premium en Lanzarote. Entrega en tu hotel o apartamento. Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife.",
  metadataBase: new URL("https://agpmobilityscooters.com"),
  openGraph: {
    title: "AGP Mobility Scooters Lanzarote",
    description:
      "Scooters de movilidad premium con entrega en tu hotel. Reserva por WhatsApp.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0A0A0B] text-ink-primary antialiased">
        <ChromaKeyFilters />
        {children}
      </body>
    </html>
  );
}
