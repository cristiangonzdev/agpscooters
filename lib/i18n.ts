import type { Lang } from "./scooters";

export const LANGS: Lang[] = ["es", "en", "de", "fr"];
export const DEFAULT_LANG: Lang = "es";

export const LANG_META: Record<Lang, { label: string; native: string }> = {
  es: { label: "Spanish", native: "Español" },
  en: { label: "English", native: "English" },
  de: { label: "German", native: "Deutsch" },
  fr: { label: "French", native: "Français" },
};

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}

type Testimonial = {
  quote: string;
  trip: string;
};

type Dict = {
  nav: { vehicles: string; how: string; testimonials: string; about: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    title_line1: string;
    title_accent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
    scroll: string;
    genericWhatsApp: string;
  };
  trust: { delivery: string; range: string; payment: string; support: string };
  vehicles: {
    kicker: string;
    title_line: string;
    title_accent: string;
    subtitle: string;
    specsLabels: { range: string; speed: string; weight: string; seats: string; seatsUnit: string };
    badge1: string;
    badge2: string;
    badgePremium: string;
    pricing: {
      chooseDuration: string;
      durations: { "4h": string; "1d": string; "3d": string; "7d": string };
      forDuration: { "4h": string; "1d": string; "3d": string; "7d": string };
      perDayHint: string;
    };
    cta: string;
  };
  how: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: { title: string; body: string }[];
  };
  testimonials: {
    kicker: string;
    title_line: string;
    title_accent: string;
    subtitle: string;
    items: Testimonial[];
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    bullets: { title: string; body: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
    hoursValue: string;
    coverage: string;
    coverageValue: string;
    address: string;
    addressValue: string;
    addressMapsUrl: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaWhatsAppMessage: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    terms: string;
    legal: string;
    rights: string;
    designedBy: string;
    designerName: string;
    designerCta: string;
    designerUrl: string;
  };
  aria: { openWhatsApp: string; toggleLang: string; openMenu: string; closeMenu: string };
};

export const DICT: Record<Lang, Dict> = {
  es: {
    nav: {
      vehicles: "Vehículos",
      how: "Cómo funciona",
      testimonials: "Reseñas",
      about: "Por qué AGP",
      contact: "Contacto",
      cta: "WhatsApp",
    },
    hero: {
      eyebrow: "Alquiler de scooters de movilidad · Lanzarote",
      title_line1: "Vive Lanzarote",
      title_accent: "sin límites",
      subtitle:
        "Scooters de movilidad premium con entrega en tu hotel o apartamento. Costa Teguise, Puerto del Carmen, Playa Blanca y Arrecife.",
      ctaPrimary: "Reservar por WhatsApp",
      ctaSecondary: "Ver vehículos",
      badge: "Servicio Premium · Lanzarote",
      scroll: "Desliza para descubrir",
      genericWhatsApp:
        "Hola, me gustaría información para alquilar un scooter de movilidad en Lanzarote. ¿Disponibilidad y precios?",
    },
    trust: {
      delivery: "Entrega en hotel",
      range: "Hasta 50 km de autonomía",
      payment: "Pago al recibir",
      support: "Asistencia 24/7",
    },
    vehicles: {
      kicker: "TRES MODELOS · ALQUILER DIARIO O SEMANAL",
      title_line: "Nuestra",
      title_accent: "flota",
      subtitle:
        "Scooters revisados, cargados y listos para recogerte. Elige el modelo que mejor encaje con tu viaje.",
      specsLabels: {
        range: "Autonomía",
        speed: "Velocidad máx.",
        weight: "Peso máx. soportado",
        seats: "Plazas",
        seatsUnit: "plaza",
      },
      badge1: "1 PERSONA",
      badge2: "2 PERSONAS",
      badgePremium: "PREMIUM",
      pricing: {
        chooseDuration: "Elige duración",
        durations: { "4h": "4 h", "1d": "1 día", "3d": "3 días", "7d": "1 semana" },
        forDuration: { "4h": "por 4 horas", "1d": "por 1 día", "3d": "por 3 días", "7d": "por 1 semana" },
        perDayHint: "/día",
      },
      cta: "Reservar este modelo por WhatsApp",
    },
    how: {
      kicker: "CUATRO PASOS · SIN COMPLICACIONES",
      title: "Cómo funciona",
      subtitle: "Un proceso pensado para que lo más difícil sea elegir el sitio al que vas primero.",
      steps: [
        { title: "Elige tu scooter", body: "Mira los tres modelos y decide el que mejor te encaja." },
        { title: "Escríbenos por WhatsApp", body: "Te confirmamos disponibilidad y precio en minutos." },
        { title: "Entrega en tu alojamiento", body: "Te lo llevamos a tu hotel o apartamento a la hora que prefieras." },
        { title: "Disfruta Lanzarote", body: "Paseo marítimo, calas, centro, lo que te apetezca. Sin prisas." },
      ],
    },
    testimonials: {
      kicker: "LO QUE DICEN NUESTROS CLIENTES",
      title_line: "Historias de",
      title_accent: "familias reales",
      subtitle: "Cinco estrellas Google y decenas de reseñas. Estas son algunas de las nuestras favoritas.",
      items: [
        {
          quote:
            "Queríamos celebrar los 50 años de casados en Lanzarote y la movilidad de mi marido nos frenaba. AGP nos entregó el scooter doble en el hotel de Costa Teguise y pudimos hacer el paseo entero. Una atención impecable de principio a fin.",
          trip: "8 días · AGP Doble",
        },
        {
          quote:
            "Llevamos años escapando del frío inglés en Lanzarote y este invierno, por fin, mi marido ha vuelto a pasear como antes. Nos trajeron el Premium XL al apartamento, con una sonrisa y en un inglés perfecto. Hicimos el paseo de Puerto del Carmen entero, parando donde nos apetecía. Sin duda, el mejor regalo del viaje.",
          trip: "14 días · AGP Premium XL",
        },
      ],
    },
    about: {
      kicker: "POR QUÉ AGP",
      title: "Movilidad con cuidado, no con papeleo",
      lead:
        "Somos un negocio familiar en Lanzarote especializado en movilidad para personas mayores y con movilidad reducida. Sin oficinas. Sin colas. Te atendemos directamente en tu hotel, hablas con quien te va a entregar el scooter, y punto.",
      bullets: [
        { title: "Entrega puerta a puerta", body: "En todas las zonas turísticas de la isla, sin coste añadido en estancias de 3+ días." },
        { title: "Scooters revisados antes de cada alquiler", body: "Batería al 100 %, frenos, luces y presión de ruedas comprobados. Siempre." },
        { title: "Atención en tu idioma", body: "Español, inglés, alemán y francés. Cualquier duda durante el alquiler, una llamada y lo resolvemos." },
      ],
    },
    contact: {
      kicker: "CONTACTO",
      title: "Reserva o pregunta sin compromiso",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Horario",
      hoursValue: "Todos los días · 09:00 – 18:00",
      coverage: "Zonas de entrega",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Dirección fiscal",
      addressValue: "Calle León y Castillo 147B · Arrecife · Lanzarote",
      addressMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+Le%C3%B3n+y+Castillo+147B+Arrecife+Lanzarote",
      ctaTitle: "¿Listo para moverte sin límites?",
      ctaBody: "Una conversación por WhatsApp. Te confirmamos disponibilidad y precio en minutos.",
      ctaButton: "Escribir por WhatsApp",
      ctaWhatsAppMessage:
        "Hola, me gustaría reservar un scooter de movilidad en Lanzarote. ¿Podéis ayudarme con disponibilidad y precio?",
    },
    footer: {
      tagline: "Scooters de movilidad premium · Lanzarote",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      legal: "Aviso legal",
      rights: "Todos los derechos reservados.",
      designedBy: "Designed by",
      designerName: "Logika Digital",
      designerCta: "(pincha para visitar web)",
      designerUrl: "https://logikateam.com",
    },
    aria: {
      openWhatsApp: "Abrir WhatsApp",
      toggleLang: "Cambiar idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
  },
  en: {
    nav: {
      vehicles: "Vehicles",
      how: "How it works",
      testimonials: "Reviews",
      about: "Why AGP",
      contact: "Contact",
      cta: "WhatsApp",
    },
    hero: {
      eyebrow: "Mobility scooter rentals · Lanzarote",
      title_line1: "Live Lanzarote",
      title_accent: "without limits",
      subtitle:
        "Premium mobility scooters delivered to your hotel or apartment. Costa Teguise, Puerto del Carmen, Playa Blanca and Arrecife.",
      ctaPrimary: "Book on WhatsApp",
      ctaSecondary: "See our scooters",
      badge: "Premium service · Lanzarote",
      scroll: "Scroll to discover",
      genericWhatsApp:
        "Hello, I'd like information about renting a mobility scooter in Lanzarote. Could you confirm availability and prices?",
    },
    trust: {
      delivery: "Hotel delivery",
      range: "Up to 50 km range",
      payment: "Pay on delivery",
      support: "24/7 support",
    },
    vehicles: {
      kicker: "THREE MODELS · DAILY OR WEEKLY RENTAL",
      title_line: "Our",
      title_accent: "fleet",
      subtitle:
        "Serviced, charged and ready to be dropped off wherever you're staying. Pick the model that fits your trip.",
      specsLabels: {
        range: "Range",
        speed: "Top speed",
        weight: "Max. weight",
        seats: "Seats",
        seatsUnit: "seat",
      },
      badge1: "1 SEAT",
      badge2: "2 SEATS",
      badgePremium: "PREMIUM",
      pricing: {
        chooseDuration: "Choose duration",
        durations: { "4h": "4 h", "1d": "1 day", "3d": "3 days", "7d": "1 week" },
        forDuration: { "4h": "for 4 hours", "1d": "for 1 day", "3d": "for 3 days", "7d": "for 1 week" },
        perDayHint: "/day",
      },
      cta: "Book this model on WhatsApp",
    },
    how: {
      kicker: "FOUR STEPS · NO FUSS",
      title: "How it works",
      subtitle: "A process designed so the hardest decision is where you're heading first.",
      steps: [
        { title: "Pick your scooter", body: "Browse the three models and choose the one that fits you best." },
        { title: "Message us on WhatsApp", body: "We confirm availability and price within minutes." },
        { title: "Delivery to your stay", body: "We drop it off at your hotel or apartment at your preferred time." },
        { title: "Enjoy Lanzarote", body: "The promenade, the coves, the centre. Whatever you fancy — no rush." },
      ],
    },
    testimonials: {
      kicker: "WHAT OUR GUESTS SAY",
      title_line: "Stories from",
      title_accent: "real families",
      subtitle: "Five-star Google reviews and dozens of kind words. Here are some of our favourites.",
      items: [
        {
          quote:
            "We wanted to celebrate 50 years of marriage in Lanzarote, and my husband's mobility was holding us back. AGP delivered the double scooter to our Costa Teguise hotel and we finally did the full promenade together. Impeccable attention from start to finish.",
          trip: "8 days · AGP Doble",
        },
        {
          quote:
            "We've been escaping the British winters in Lanzarote for years, and this season my husband finally got his old strolls back. They brought the Premium XL to our apartment with a smile and perfect English. We did the full Puerto del Carmen promenade, stopping wherever we fancied. Easily the best gift of the trip.",
          trip: "14 days · AGP Premium XL",
        },
      ],
    },
    about: {
      kicker: "WHY AGP",
      title: "Mobility with care, not paperwork",
      lead:
        "We're a family-run business in Lanzarote focused on mobility for seniors and guests with reduced mobility. No front office. No queues. You deal directly with the person who'll deliver your scooter — that's it.",
      bullets: [
        { title: "Door-to-door delivery", body: "Across every major resort on the island — free of charge on stays of 3+ days." },
        { title: "Every scooter serviced before rental", body: "Battery at 100 %, brakes, lights and tyre pressure checked. Every time." },
        { title: "Support in your language", body: "Spanish, English, German and French. One call and any issue is sorted during your rental." },
      ],
    },
    contact: {
      kicker: "CONTACT",
      title: "Book or just ask — no commitment",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Hours",
      hoursValue: "Every day · 09:00 – 18:00",
      coverage: "Delivery zones",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Registered address",
      addressValue: "Calle León y Castillo 147B · Arrecife · Lanzarote",
      addressMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+Le%C3%B3n+y+Castillo+147B+Arrecife+Lanzarote",
      ctaTitle: "Ready to move without limits?",
      ctaBody: "One quick chat on WhatsApp. Availability and price confirmed in minutes.",
      ctaButton: "Message us on WhatsApp",
      ctaWhatsAppMessage:
        "Hello, I'd like to rent a mobility scooter in Lanzarote. Could you help me with availability and pricing?",
    },
    footer: {
      tagline: "Premium mobility scooters · Lanzarote",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      legal: "Legal notice",
      rights: "All rights reserved.",
      designedBy: "Designed by",
      designerName: "Logika Digital",
      designerCta: "(click to visit site)",
      designerUrl: "https://logikateam.com",
    },
    aria: {
      openWhatsApp: "Open WhatsApp",
      toggleLang: "Change language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
  de: {
    nav: {
      vehicles: "Fahrzeuge",
      how: "So funktioniert's",
      testimonials: "Bewertungen",
      about: "Über AGP",
      contact: "Kontakt",
      cta: "WhatsApp",
    },
    hero: {
      eyebrow: "Mobilitätsscooter-Verleih · Lanzarote",
      title_line1: "Lanzarote erleben",
      title_accent: "ohne Grenzen",
      subtitle:
        "Premium-Mobilitätsscooter, direkt zu Ihrem Hotel oder Apartment geliefert. Costa Teguise, Puerto del Carmen, Playa Blanca und Arrecife.",
      ctaPrimary: "Über WhatsApp buchen",
      ctaSecondary: "Fahrzeuge ansehen",
      badge: "Premium-Service · Lanzarote",
      scroll: "Nach unten scrollen",
      genericWhatsApp:
        "Guten Tag, ich hätte gern Informationen zur Miete eines Mobilitätsscooters auf Lanzarote. Können Sie mir Verfügbarkeit und Preise nennen?",
    },
    trust: {
      delivery: "Lieferung ins Hotel",
      range: "Bis zu 50 km Reichweite",
      payment: "Zahlung bei Lieferung",
      support: "24/7-Unterstützung",
    },
    vehicles: {
      kicker: "DREI MODELLE · TAGES- ODER WOCHENMIETE",
      title_line: "Unsere",
      title_accent: "Flotte",
      subtitle:
        "Gewartet, geladen und bereit — wir bringen ihn direkt zu Ihrer Unterkunft. Wählen Sie das Modell, das am besten zu Ihrer Reise passt.",
      specsLabels: {
        range: "Reichweite",
        speed: "Höchstgeschw.",
        weight: "Max. Gewicht",
        seats: "Sitzplätze",
        seatsUnit: "Sitz",
      },
      badge1: "1 PLATZ",
      badge2: "2 PLÄTZE",
      badgePremium: "PREMIUM",
      pricing: {
        chooseDuration: "Dauer wählen",
        durations: { "4h": "4 Std.", "1d": "1 Tag", "3d": "3 Tage", "7d": "1 Woche" },
        forDuration: { "4h": "für 4 Stunden", "1d": "für 1 Tag", "3d": "für 3 Tage", "7d": "für 1 Woche" },
        perDayHint: "/Tag",
      },
      cta: "Dieses Modell per WhatsApp buchen",
    },
    how: {
      kicker: "VIER SCHRITTE · OHNE AUFWAND",
      title: "So funktioniert's",
      subtitle: "Ein Ablauf, bei dem die schwerste Entscheidung ist, wohin Sie zuerst fahren wollen.",
      steps: [
        { title: "Scooter wählen", body: "Schauen Sie sich die drei Modelle an und entscheiden Sie, welches am besten passt." },
        { title: "Per WhatsApp schreiben", body: "Wir bestätigen Verfügbarkeit und Preis innerhalb von Minuten." },
        { title: "Lieferung zur Unterkunft", body: "Wir bringen ihn zur gewünschten Uhrzeit zu Ihrem Hotel oder Apartment." },
        { title: "Lanzarote genießen", body: "Promenade, Buchten, Zentrum — worauf Sie Lust haben. Ohne Eile." },
      ],
    },
    testimonials: {
      kicker: "WAS UNSERE GÄSTE SAGEN",
      title_line: "Geschichten von",
      title_accent: "echten Familien",
      subtitle: "Fünf-Sterne-Bewertungen auf Google und viele herzliche Worte. Hier einige unserer Lieblinge.",
      items: [
        {
          quote:
            "Wir wollten 50 Ehejahre auf Lanzarote feiern, aber die Mobilität meines Mannes hat uns ausgebremst. AGP hat den Doppelscooter ins Hotel in Costa Teguise geliefert und wir konnten endlich die gesamte Promenade zusammen machen. Tadellos von Anfang bis Ende.",
          trip: "8 Tage · AGP Doble",
        },
        {
          quote:
            "Wir fliehen seit Jahren im Winter aus England nach Lanzarote, und diese Saison konnte mein Mann endlich wieder spazieren wie früher. Der Premium XL wurde mit einem Lächeln und in perfektem Englisch ans Apartment gebracht. Wir haben die ganze Promenade von Puerto del Carmen gemacht und angehalten, wo wir wollten. Das schönste Geschenk der Reise.",
          trip: "14 Tage · AGP Premium XL",
        },
      ],
    },
    about: {
      kicker: "ÜBER AGP",
      title: "Mobilität mit Sorgfalt, nicht mit Papierkram",
      lead:
        "Wir sind ein Familienbetrieb auf Lanzarote, spezialisiert auf Mobilität für Senioren und Gäste mit eingeschränkter Mobilität. Kein Büro. Keine Warteschlangen. Sie sprechen direkt mit der Person, die Ihnen den Scooter bringt — so einfach ist das.",
      bullets: [
        { title: "Lieferung bis vor die Tür", body: "In allen touristischen Regionen der Insel — ohne Zusatzkosten bei Aufenthalten ab 3 Tagen." },
        { title: "Vor jeder Miete geprüft", body: "Akku auf 100 %, Bremsen, Licht und Reifendruck kontrolliert. Immer." },
        { title: "Betreuung in Ihrer Sprache", body: "Spanisch, Englisch, Deutsch und Französisch. Ein Anruf und jedes Problem ist während der Miete gelöst." },
      ],
    },
    contact: {
      kicker: "KONTAKT",
      title: "Unverbindlich buchen oder fragen",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      hoursValue: "Täglich · 09:00 – 18:00 Uhr",
      coverage: "Liefergebiete",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Firmensitz",
      addressValue: "Calle León y Castillo 147B · Arrecife · Lanzarote",
      addressMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+Le%C3%B3n+y+Castillo+147B+Arrecife+Lanzarote",
      ctaTitle: "Bereit, sich ohne Grenzen zu bewegen?",
      ctaBody: "Ein kurzes Gespräch per WhatsApp. Verfügbarkeit und Preis in Minuten bestätigt.",
      ctaButton: "Per WhatsApp schreiben",
      ctaWhatsAppMessage:
        "Guten Tag, ich möchte einen Mobilitätsscooter auf Lanzarote mieten. Können Sie mir mit Verfügbarkeit und Preis weiterhelfen?",
    },
    footer: {
      tagline: "Premium-Mobilitätsscooter · Lanzarote",
      privacy: "Datenschutz",
      terms: "AGB",
      legal: "Impressum",
      rights: "Alle Rechte vorbehalten.",
      designedBy: "Designed by",
      designerName: "Logika Digital",
      designerCta: "(zum Besuch der Website klicken)",
      designerUrl: "https://logikateam.com",
    },
    aria: {
      openWhatsApp: "WhatsApp öffnen",
      toggleLang: "Sprache wechseln",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
  },
  fr: {
    nav: {
      vehicles: "Véhicules",
      how: "Comment ça marche",
      testimonials: "Avis",
      about: "Pourquoi AGP",
      contact: "Contact",
      cta: "WhatsApp",
    },
    hero: {
      eyebrow: "Location de scooters de mobilité · Lanzarote",
      title_line1: "Vivez Lanzarote",
      title_accent: "sans limites",
      subtitle:
        "Scooters de mobilité premium livrés à votre hôtel ou appartement. Costa Teguise, Puerto del Carmen, Playa Blanca et Arrecife.",
      ctaPrimary: "Réserver sur WhatsApp",
      ctaSecondary: "Voir les véhicules",
      badge: "Service Premium · Lanzarote",
      scroll: "Faites défiler pour découvrir",
      genericWhatsApp:
        "Bonjour, je souhaite des informations pour louer un scooter de mobilité à Lanzarote. Pourriez-vous me confirmer la disponibilité et les tarifs ?",
    },
    trust: {
      delivery: "Livraison à l'hôtel",
      range: "Jusqu'à 50 km d'autonomie",
      payment: "Paiement à la livraison",
      support: "Assistance 24/7",
    },
    vehicles: {
      kicker: "TROIS MODÈLES · LOCATION À LA JOURNÉE OU À LA SEMAINE",
      title_line: "Notre",
      title_accent: "flotte",
      subtitle:
        "Révisés, chargés et prêts à être livrés où que vous logiez. Choisissez le modèle qui correspond à votre séjour.",
      specsLabels: {
        range: "Autonomie",
        speed: "Vitesse max.",
        weight: "Poids max.",
        seats: "Places",
        seatsUnit: "place",
      },
      badge1: "1 PLACE",
      badge2: "2 PLACES",
      badgePremium: "PREMIUM",
      pricing: {
        chooseDuration: "Choisir la durée",
        durations: { "4h": "4 h", "1d": "1 jour", "3d": "3 jours", "7d": "1 semaine" },
        forDuration: { "4h": "pour 4 heures", "1d": "pour 1 jour", "3d": "pour 3 jours", "7d": "pour 1 semaine" },
        perDayHint: "/jour",
      },
      cta: "Réserver ce modèle sur WhatsApp",
    },
    how: {
      kicker: "QUATRE ÉTAPES · SANS SOUCI",
      title: "Comment ça marche",
      subtitle: "Un processus pensé pour que la décision la plus difficile soit celle de votre première destination.",
      steps: [
        { title: "Choisissez votre scooter", body: "Parcourez les trois modèles et choisissez celui qui vous convient le mieux." },
        { title: "Écrivez-nous sur WhatsApp", body: "Nous confirmons la disponibilité et le tarif en quelques minutes." },
        { title: "Livraison sur place", body: "Nous le déposons à votre hôtel ou appartement à l'heure qui vous convient." },
        { title: "Profitez de Lanzarote", body: "La promenade, les criques, le centre-ville, ce qui vous fait envie. Sans presse." },
      ],
    },
    testimonials: {
      kicker: "CE QUE DISENT NOS CLIENTS",
      title_line: "Histoires de",
      title_accent: "familles réelles",
      subtitle: "Cinq étoiles sur Google et des dizaines de mots gentils. Voici quelques-uns de nos préférés.",
      items: [
        {
          quote:
            "Nous voulions fêter nos 50 ans de mariage à Lanzarote, mais la mobilité de mon mari nous freinait. AGP a livré le scooter double à notre hôtel de Costa Teguise et nous avons enfin pu faire toute la promenade ensemble. Une attention parfaite de bout en bout.",
          trip: "8 jours · AGP Doble",
        },
        {
          quote:
            "Cela fait des années que nous fuyons l'hiver anglais à Lanzarote, et cette saison mon mari a enfin retrouvé ses balades d'autrefois. Ils nous ont apporté le Premium XL à l'appartement, avec le sourire et un anglais parfait. Nous avons fait toute la promenade de Puerto del Carmen, en nous arrêtant où bon nous semblait. Le plus beau cadeau du voyage.",
          trip: "14 jours · AGP Premium XL",
        },
      ],
    },
    about: {
      kicker: "POURQUOI AGP",
      title: "De la mobilité avec soin, pas avec de la paperasse",
      lead:
        "Nous sommes une entreprise familiale à Lanzarote, spécialisée dans la mobilité pour seniors et personnes à mobilité réduite. Pas de bureau d'accueil. Pas de files d'attente. Vous échangez directement avec celui qui vous livrera le scooter — c'est tout.",
      bullets: [
        { title: "Livraison porte-à-porte", body: "Dans toutes les stations balnéaires de l'île — gratuite pour les séjours de 3 jours et plus." },
        { title: "Scooter révisé avant chaque location", body: "Batterie à 100 %, freins, lumières et pression des pneus vérifiés. À chaque fois." },
        { title: "Assistance dans votre langue", body: "Espagnol, anglais, allemand et français. Un appel et tout problème est réglé pendant votre location." },
      ],
    },
    contact: {
      kicker: "CONTACT",
      title: "Réservez ou demandez, sans engagement",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      email: "E-mail",
      hours: "Horaires",
      hoursValue: "Tous les jours · 09h00 – 18h00",
      coverage: "Zones de livraison",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Adresse légale",
      addressValue: "Calle León y Castillo 147B · Arrecife · Lanzarote",
      addressMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+Le%C3%B3n+y+Castillo+147B+Arrecife+Lanzarote",
      ctaTitle: "Prêt à bouger sans limites ?",
      ctaBody: "Une conversation rapide sur WhatsApp. Disponibilité et tarif confirmés en quelques minutes.",
      ctaButton: "Écrire sur WhatsApp",
      ctaWhatsAppMessage:
        "Bonjour, je souhaite louer un scooter de mobilité à Lanzarote. Pouvez-vous m'aider avec la disponibilité et les tarifs ?",
    },
    footer: {
      tagline: "Scooters de mobilité premium · Lanzarote",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      legal: "Mentions légales",
      rights: "Tous droits réservés.",
      designedBy: "Designed by",
      designerName: "Logika Digital",
      designerCta: "(cliquez pour visiter le site)",
      designerUrl: "https://logikateam.com",
    },
    aria: {
      openWhatsApp: "Ouvrir WhatsApp",
      toggleLang: "Changer de langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
  },
};

export function getDict(lang: Lang): Dict {
  return DICT[lang];
}
