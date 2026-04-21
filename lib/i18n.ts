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
  name: string;
  location: string;
  quote: string;
  trip: string;
};

type Dict = {
  nav: { vehicles: string; how: string; testimonials: string; about: string; faq: string; contact: string; cta: string };
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
    from: string;
    perDay: string;
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
    stats: { value: string; label: string }[];
  };
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
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
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaWhatsAppMessage: string;
  };
  footer: { tagline: string; privacy: string; terms: string; rights: string };
  aria: { openWhatsApp: string; toggleLang: string; openMenu: string; closeMenu: string };
};

export const DICT: Record<Lang, Dict> = {
  es: {
    nav: {
      vehicles: "Vehículos",
      how: "Cómo funciona",
      testimonials: "Reseñas",
      about: "Por qué AGP",
      faq: "Preguntas",
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
      range: "Hasta 55 km de autonomía",
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
      from: "Desde",
      perDay: "€/día",
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
          name: "Familia Rodríguez",
          location: "Madrid · Viaje en pareja",
          quote:
            "Queríamos celebrar los 50 años de casados en Lanzarote y la movilidad de mi marido nos frenaba. AGP nos entregó el scooter doble en el hotel de Costa Teguise y pudimos hacer el paseo entero. Una atención impecable de principio a fin.",
          trip: "8 días · AGP Doble",
        },
        {
          name: "The Whitmore Family",
          location: "Manchester · Holiday with parents",
          quote:
            "We took my father-in-law on holiday with us for the first time in years. Pedro delivered the scooter at 9 am the day we landed and picked it up at the airport. Honestly, it made the entire trip possible — would rebook tomorrow.",
          trip: "10 days · AGP Premium XL",
        },
        {
          name: "Familie Schmidt",
          location: "München · Winterurlaub",
          quote:
            "Meine Mutter ist 82 und wollte zum ersten Mal wieder ans Meer. Der AGP Premium XL mit Verdeck war ideal — selbst bei Wind an der Promenade. Pedro spricht hervorragend Deutsch, alles war klar erklärt. Wir kommen wieder.",
          trip: "6 Tage · AGP Premium XL",
        },
        {
          name: "Famille Laurent",
          location: "Lyon · Vacances en famille",
          quote:
            "Nous cherchions une solution pour que grand-mère puisse nous suivre partout. L'équipe AGP a été adorable, le scooter propre et parfaitement chargé. On a fait le marché de Teguise en famille, un souvenir inoubliable.",
          trip: "7 jours · AGP Confort",
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
      stats: [
        { value: "8+", label: "años en Lanzarote" },
        { value: "1.200+", label: "familias atendidas" },
        { value: "4,9★", label: "valoración Google" },
      ],
    },
    faq: {
      kicker: "PREGUNTAS FRECUENTES",
      title: "Lo que nos preguntan antes de reservar",
      items: [
        {
          q: "¿Hay edad mínima para alquilar?",
          a: "Sí, 18 años. No hay edad máxima. Muchos de nuestros clientes tienen más de 75 y disfrutan la isla sin problema.",
        },
        {
          q: "¿Necesito licencia de conducir?",
          a: "No. Nuestros scooters de movilidad no requieren licencia ni seguro específico del cliente. Circulan por acera y zonas peatonales.",
        },
        {
          q: "¿Cómo funciona la cancelación?",
          a: "Cancelación gratuita hasta 48 h antes de la fecha de entrega. Entre 48 h y 24 h, se aplica el 50 %. Menos de 24 h, el importe completo.",
        },
        {
          q: "¿La autonomía que indicáis es real?",
          a: "Sí. Medimos cada scooter en un paseo de Costa Teguise con un conductor de 80 kg. La autonomía que verás en la ficha es realista, no de catálogo.",
        },
        {
          q: "¿A qué zonas entregáis?",
          a: "Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife y Puerto Calero. Consulta otras zonas por WhatsApp, normalmente podemos ayudarte.",
        },
        {
          q: "¿El seguro va incluido?",
          a: "Sí. Responsabilidad civil incluida en el precio. Opcionalmente puedes añadir cobertura de robo y daños por 5 €/día.",
        },
      ],
    },
    contact: {
      kicker: "CONTACTO",
      title: "Reserva o pregunta sin compromiso",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Horario",
      hoursValue: "Todos los días · 9:00 – 20:00",
      coverage: "Zonas de entrega",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Dirección fiscal",
      addressValue: "Lanzarote, Islas Canarias, España",
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
      rights: "Todos los derechos reservados.",
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
      faq: "FAQ",
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
      range: "Up to 55 km range",
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
      from: "From",
      perDay: "€/day",
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
          name: "The Rodríguez family",
          location: "Madrid · Anniversary trip",
          quote:
            "We wanted to celebrate 50 years of marriage in Lanzarote, and my husband's mobility was holding us back. AGP delivered the double scooter to our Costa Teguise hotel and we finally did the full promenade together. Impeccable attention from start to finish.",
          trip: "8 days · AGP Doble",
        },
        {
          name: "The Whitmore Family",
          location: "Manchester · Holiday with parents",
          quote:
            "We took my father-in-law on holiday with us for the first time in years. Pedro delivered the scooter at 9 am the day we landed and picked it up at the airport. Honestly, it made the entire trip possible — would rebook tomorrow.",
          trip: "10 days · AGP Premium XL",
        },
        {
          name: "The Schmidt family",
          location: "Munich · Winter escape",
          quote:
            "My mother is 82 and wanted to see the sea again. The AGP Premium XL with canopy was perfect — even in the wind on the promenade. Pedro spoke excellent German, everything explained clearly. We'll be back.",
          trip: "6 days · AGP Premium XL",
        },
        {
          name: "The Laurent family",
          location: "Lyon · Family holiday",
          quote:
            "We were looking for a way for grandma to follow us everywhere. The AGP team were lovely, the scooter spotless and fully charged. We did the Teguise market as a family — an unforgettable memory.",
          trip: "7 days · AGP Confort",
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
      stats: [
        { value: "8+", label: "years in Lanzarote" },
        { value: "1,200+", label: "families served" },
        { value: "4.9★", label: "Google rating" },
      ],
    },
    faq: {
      kicker: "FREQUENTLY ASKED",
      title: "What guests ask before booking",
      items: [
        {
          q: "Is there a minimum age?",
          a: "Yes — 18. No upper limit. Many of our guests are 75+ and enjoy the island with zero trouble.",
        },
        {
          q: "Do I need a driving licence?",
          a: "No. Our mobility scooters don't require a licence or personal insurance. They run on pavements and pedestrian areas.",
        },
        {
          q: "How does cancellation work?",
          a: "Free cancellation up to 48 hours before delivery. Between 48 h and 24 h, 50 % applies. Under 24 h, full amount.",
        },
        {
          q: "Is the stated range realistic?",
          a: "Yes. We test each scooter along the Costa Teguise promenade with an 80 kg rider. The range on each card is real-world, not brochure numbers.",
        },
        {
          q: "Which areas do you deliver to?",
          a: "Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife and Puerto Calero. For other areas, drop us a WhatsApp — we can usually help.",
        },
        {
          q: "Is insurance included?",
          a: "Yes. Third-party insurance is included in the price. You can optionally add theft and damage cover for €5/day.",
        },
      ],
    },
    contact: {
      kicker: "CONTACT",
      title: "Book or just ask — no commitment",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Hours",
      hoursValue: "Every day · 9:00 am – 8:00 pm",
      coverage: "Delivery zones",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Registered address",
      addressValue: "Lanzarote, Canary Islands, Spain",
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
      rights: "All rights reserved.",
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
      faq: "FAQ",
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
      range: "Bis zu 55 km Reichweite",
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
      from: "Ab",
      perDay: "€/Tag",
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
          name: "Familie Rodríguez",
          location: "Madrid · Jubiläumsreise",
          quote:
            "Wir wollten 50 Ehejahre auf Lanzarote feiern, aber die Mobilität meines Mannes hat uns ausgebremst. AGP hat den Doppelscooter ins Hotel in Costa Teguise geliefert und wir konnten endlich die gesamte Promenade zusammen machen. Tadellos von Anfang bis Ende.",
          trip: "8 Tage · AGP Doble",
        },
        {
          name: "The Whitmore Family",
          location: "Manchester · Urlaub mit den Eltern",
          quote:
            "Wir haben meinen Schwiegervater nach Jahren das erste Mal wieder in den Urlaub mitgenommen. Pedro hat den Scooter um 9 Uhr am Ankunftstag geliefert und am Flughafen wieder abgeholt. Es hat die ganze Reise erst möglich gemacht.",
          trip: "10 Tage · AGP Premium XL",
        },
        {
          name: "Familie Schmidt",
          location: "München · Winterurlaub",
          quote:
            "Meine Mutter ist 82 und wollte zum ersten Mal wieder ans Meer. Der AGP Premium XL mit Verdeck war ideal — selbst bei Wind an der Promenade. Pedro spricht hervorragend Deutsch, alles war klar erklärt. Wir kommen wieder.",
          trip: "6 Tage · AGP Premium XL",
        },
        {
          name: "Familie Laurent",
          location: "Lyon · Familienurlaub",
          quote:
            "Wir suchten eine Möglichkeit, damit Oma überall mitkommen konnte. Das AGP-Team war herzlich, der Scooter sauber und voll geladen. Wir waren gemeinsam auf dem Markt von Teguise — eine unvergessliche Erinnerung.",
          trip: "7 Tage · AGP Confort",
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
      stats: [
        { value: "8+", label: "Jahre auf Lanzarote" },
        { value: "1.200+", label: "betreute Familien" },
        { value: "4,9★", label: "Google-Bewertung" },
      ],
    },
    faq: {
      kicker: "HÄUFIGE FRAGEN",
      title: "Was Gäste vor der Buchung fragen",
      items: [
        {
          q: "Gibt es ein Mindestalter?",
          a: "Ja — 18. Es gibt keine Obergrenze. Viele unserer Gäste sind über 75 und genießen die Insel problemlos.",
        },
        {
          q: "Brauche ich einen Führerschein?",
          a: "Nein. Unsere Mobilitätsscooter erfordern weder Führerschein noch eigene Versicherung. Sie fahren auf Bürgersteigen und in Fußgängerzonen.",
        },
        {
          q: "Wie funktioniert die Stornierung?",
          a: "Kostenlose Stornierung bis 48 Stunden vor Lieferung. Zwischen 48 h und 24 h fallen 50 % an. Unter 24 h der volle Betrag.",
        },
        {
          q: "Ist die angegebene Reichweite realistisch?",
          a: "Ja. Wir testen jeden Scooter auf der Promenade von Costa Teguise mit einem 80-kg-Fahrer. Die angegebene Reichweite ist realistisch, nicht aus dem Katalog.",
        },
        {
          q: "In welche Regionen liefern Sie?",
          a: "Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife und Puerto Calero. Für andere Gebiete schreiben Sie uns per WhatsApp — in der Regel können wir helfen.",
        },
        {
          q: "Ist eine Versicherung enthalten?",
          a: "Ja. Haftpflichtversicherung ist im Preis enthalten. Optional können Sie Diebstahl- und Schadensschutz für 5 €/Tag hinzufügen.",
        },
      ],
    },
    contact: {
      kicker: "KONTAKT",
      title: "Unverbindlich buchen oder fragen",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      hoursValue: "Täglich · 9:00 – 20:00 Uhr",
      coverage: "Liefergebiete",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Firmensitz",
      addressValue: "Lanzarote, Kanarische Inseln, Spanien",
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
      rights: "Alle Rechte vorbehalten.",
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
      faq: "FAQ",
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
      range: "Jusqu'à 55 km d'autonomie",
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
      from: "À partir de",
      perDay: "€/jour",
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
          name: "Famille Rodríguez",
          location: "Madrid · Voyage en couple",
          quote:
            "Nous voulions fêter nos 50 ans de mariage à Lanzarote, mais la mobilité de mon mari nous freinait. AGP a livré le scooter double à notre hôtel de Costa Teguise et nous avons enfin pu faire toute la promenade ensemble. Une attention parfaite de bout en bout.",
          trip: "8 jours · AGP Doble",
        },
        {
          name: "The Whitmore Family",
          location: "Manchester · Vacances avec les parents",
          quote:
            "Nous avons emmené mon beau-père en vacances pour la première fois depuis des années. Pedro a livré le scooter à 9 h le jour de notre arrivée et l'a récupéré à l'aéroport. Franchement, ça a rendu tout le voyage possible.",
          trip: "10 jours · AGP Premium XL",
        },
        {
          name: "Famille Schmidt",
          location: "Munich · Escapade hivernale",
          quote:
            "Ma mère a 82 ans et voulait revoir la mer. L'AGP Premium XL avec son toit était parfait, même dans le vent sur la promenade. Pedro parle excellemment allemand, tout a été expliqué clairement. Nous reviendrons.",
          trip: "6 jours · AGP Premium XL",
        },
        {
          name: "Famille Laurent",
          location: "Lyon · Vacances en famille",
          quote:
            "Nous cherchions une solution pour que grand-mère puisse nous suivre partout. L'équipe AGP a été adorable, le scooter propre et parfaitement chargé. On a fait le marché de Teguise en famille, un souvenir inoubliable.",
          trip: "7 jours · AGP Confort",
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
      stats: [
        { value: "8+", label: "ans à Lanzarote" },
        { value: "1 200+", label: "familles accompagnées" },
        { value: "4,9★", label: "note Google" },
      ],
    },
    faq: {
      kicker: "QUESTIONS FRÉQUENTES",
      title: "Ce que nos clients demandent avant de réserver",
      items: [
        {
          q: "Y a-t-il un âge minimum ?",
          a: "Oui, 18 ans. Pas de limite supérieure. Beaucoup de nos clients ont plus de 75 ans et profitent de l'île sans aucun souci.",
        },
        {
          q: "Ai-je besoin d'un permis de conduire ?",
          a: "Non. Nos scooters de mobilité ne nécessitent ni permis ni assurance personnelle. Ils circulent sur les trottoirs et les zones piétonnes.",
        },
        {
          q: "Comment fonctionne l'annulation ?",
          a: "Annulation gratuite jusqu'à 48 h avant la livraison. Entre 48 h et 24 h, 50 % s'appliquent. Moins de 24 h, le montant complet.",
        },
        {
          q: "L'autonomie indiquée est-elle réaliste ?",
          a: "Oui. Nous testons chaque scooter sur la promenade de Costa Teguise avec un conducteur de 80 kg. L'autonomie affichée est réaliste, pas celle du catalogue.",
        },
        {
          q: "Dans quelles zones livrez-vous ?",
          a: "Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife et Puerto Calero. Pour d'autres zones, écrivez-nous sur WhatsApp — nous pouvons généralement aider.",
        },
        {
          q: "L'assurance est-elle incluse ?",
          a: "Oui. La responsabilité civile est incluse dans le prix. Vous pouvez en option ajouter la couverture vol et dommages pour 5 €/jour.",
        },
      ],
    },
    contact: {
      kicker: "CONTACT",
      title: "Réservez ou demandez, sans engagement",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      email: "E-mail",
      hours: "Horaires",
      hoursValue: "Tous les jours · 9h00 – 20h00",
      coverage: "Zones de livraison",
      coverageValue: "Costa Teguise · Puerto del Carmen · Playa Blanca · Arrecife · Puerto Calero",
      address: "Adresse légale",
      addressValue: "Lanzarote, Îles Canaries, Espagne",
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
      rights: "Tous droits réservés.",
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
