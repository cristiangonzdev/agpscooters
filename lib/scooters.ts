export type Lang = "es" | "en" | "de" | "fr";

export type ScooterBadge = "1-PAX" | "2-PAX" | "PREMIUM";

export type PriceDuration = "4h" | "1d" | "3d" | "7d";

export type PriceTier = {
  duration: PriceDuration;
  price_eur: number;
};

export type Scooter = {
  id: string;
  name: string;
  tagline: Record<Lang, string>;
  capacity: 1 | 2;
  badge: ScooterBadge;
  range_km: number;
  max_speed_kmh: number;
  max_weight_kg: number;
  prices: PriceTier[];
  default_duration: PriceDuration;
  image: string;
  whatsapp_message: Record<Lang, string>;
};

export const SCOOTERS: Scooter[] = [
  {
    id: "agp-confort",
    name: "AGP Confort",
    tagline: {
      es: "Robusto, estable, ideal para un día explorando.",
      en: "Sturdy, stable, ideal for a day out exploring.",
      de: "Robust und stabil — perfekt für einen Tag unterwegs.",
      fr: "Robuste et stable, idéal pour une journée d'exploration.",
    },
    capacity: 1,
    badge: "1-PAX",
    range_km: 40,
    max_speed_kmh: 20,
    max_weight_kg: 150,
    prices: [
      { duration: "1d", price_eur: 20 },
      { duration: "3d", price_eur: 50 },
      { duration: "7d", price_eur: 100 },
    ],
    default_duration: "1d",
    image: "/images/scooter-confort.png",
    whatsapp_message: {
      es: "Hola, me interesa alquilar el AGP Confort. ¿Disponibilidad y precio para mis fechas en Lanzarote?",
      en: "Hi, I'd like to rent the AGP Confort. Could you confirm availability and price for my dates in Lanzarote?",
      de: "Hallo, ich möchte den AGP Confort mieten. Könnten Sie mir Verfügbarkeit und Preis für meine Daten in Lanzarote bestätigen?",
      fr: "Bonjour, je souhaite louer l'AGP Confort. Pouvez-vous me confirmer la disponibilité et le tarif pour mes dates à Lanzarote ?",
    },
  },
  {
    id: "agp-doble",
    name: "AGP Doble",
    tagline: {
      es: "Dos plazas cómodas para pasear en pareja.",
      en: "Two comfortable seats to ride together.",
      de: "Zwei bequeme Sitze, um zu zweit unterwegs zu sein.",
      fr: "Deux sièges confortables pour se balader à deux.",
    },
    capacity: 2,
    badge: "2-PAX",
    range_km: 50,
    max_speed_kmh: 25,
    max_weight_kg: 220,
    prices: [
      { duration: "1d", price_eur: 50 },
      { duration: "3d", price_eur: 100 },
      { duration: "7d", price_eur: 190 },
    ],
    default_duration: "1d",
    image: "/images/scooter-doble.png",
    whatsapp_message: {
      es: "Hola, me interesa alquilar el AGP Doble. ¿Disponibilidad y precio para mis fechas en Lanzarote?",
      en: "Hi, I'd like to rent the AGP Doble. Could you confirm availability and price for my dates in Lanzarote?",
      de: "Hallo, ich möchte den AGP Doble mieten. Könnten Sie mir Verfügbarkeit und Preis für meine Daten in Lanzarote bestätigen?",
      fr: "Bonjour, je souhaite louer l'AGP Doble. Pouvez-vous me confirmer la disponibilité et le tarif pour mes dates à Lanzarote ?",
    },
  },
  {
    id: "agp-premium-xl",
    name: "AGP Premium XL",
    tagline: {
      es: "La flagship. Techo, dos plazas y confort superior.",
      en: "The flagship. Canopy, two seats and superior comfort.",
      de: "Das Flaggschiff. Verdeck, zwei Sitze und höchster Komfort.",
      fr: "Le modèle phare. Toit, deux places et confort supérieur.",
    },
    capacity: 2,
    badge: "PREMIUM",
    range_km: 50,
    max_speed_kmh: 25,
    max_weight_kg: 250,
    prices: [
      { duration: "4h", price_eur: 50 },
      { duration: "1d", price_eur: 60 },
      { duration: "3d", price_eur: 120 },
      { duration: "7d", price_eur: 250 },
    ],
    default_duration: "1d",
    image: "/images/scooter-premium.png",
    whatsapp_message: {
      es: "Hola, me interesa alquilar el AGP Premium XL. ¿Disponibilidad y precio para mis fechas en Lanzarote?",
      en: "Hi, I'd like to rent the AGP Premium XL. Could you confirm availability and price for my dates in Lanzarote?",
      de: "Hallo, ich möchte den AGP Premium XL mieten. Könnten Sie mir Verfügbarkeit und Preis für meine Daten in Lanzarote bestätigen?",
      fr: "Bonjour, je souhaite louer l'AGP Premium XL. Pouvez-vous me confirmer la disponibilité et le tarif pour mes dates à Lanzarote ?",
    },
  },
];
