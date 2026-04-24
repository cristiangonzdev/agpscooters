import type { Lang } from "./scooters";

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const LAST_UPDATED = "2026-04-21";

const DISCLAIMER: Record<Lang, string> = {
  es:
    "Este texto constituye un borrador informativo. Recomendamos revisarlo con asesoramiento jurídico antes de su publicación definitiva.",
  en:
    "This text is an informational draft. We recommend having it reviewed by legal counsel before final publication.",
  de:
    "Dieser Text ist ein informativer Entwurf. Wir empfehlen eine juristische Prüfung vor der endgültigen Veröffentlichung.",
  fr:
    "Ce texte constitue un projet d'information. Nous recommandons de le faire réviser par un conseil juridique avant sa publication définitive.",
};

export function getDisclaimer(lang: Lang): string {
  return DISCLAIMER[lang];
}

const PRIVACY: Record<Lang, LegalDoc> = {
  es: {
    title: "Política de privacidad",
    updated: LAST_UPDATED,
    intro:
      "En AGP Mobility Scooters tratamos tus datos con transparencia y responsabilidad. Este documento explica qué datos recogemos, para qué los usamos y qué derechos tienes sobre ellos, de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: [
          "AGP Mobility Scooters (en adelante, \"AGP\").",
          "Dirección: Lanzarote, Islas Canarias, España.",
          "Contacto: admin@agpscooterslanzarote.com · +34 613 99 24 17.",
          "CIF / NIF: [COMPLETAR CON DATOS DEL TITULAR].",
        ],
      },
      {
        heading: "2. Datos que tratamos",
        body: [
          "Tratamos únicamente los datos que nos facilitas voluntariamente al contactarnos: nombre, teléfono, correo electrónico, fechas de estancia y, en su caso, dirección de entrega del scooter en Lanzarote.",
          "No recogemos datos de categorías especiales (salud, origen, etc.) salvo los estrictamente necesarios para adaptar el servicio a una movilidad reducida, y siempre con tu consentimiento expreso.",
        ],
      },
      {
        heading: "3. Finalidad y base jurídica",
        body: [
          "a) Gestionar tu consulta o reserva por WhatsApp, teléfono o correo electrónico. Base: ejecución de un contrato o medidas precontractuales a petición del interesado (art. 6.1.b RGPD).",
          "b) Cumplir obligaciones legales derivadas de la prestación del servicio (fiscales, contables). Base: obligación legal (art. 6.1.c RGPD).",
          "c) Enviarte información útil sobre tu alquiler durante la estancia. Base: interés legítimo (art. 6.1.f RGPD).",
        ],
      },
      {
        heading: "4. Conservación",
        body: [
          "Conservamos tus datos durante el tiempo imprescindible para gestionar tu alquiler y, después, durante los plazos legales aplicables (contables, fiscales, responsabilidad civil), generalmente 5 años.",
          "Pasados esos plazos, tus datos se suprimen o anonimizan.",
        ],
      },
      {
        heading: "5. Destinatarios",
        body: [
          "No cedemos tus datos a terceros salvo obligación legal.",
          "Algunos proveedores que nos ayudan a prestar el servicio (mensajería WhatsApp Business, proveedor de correo, gestoría) pueden acceder a datos mínimos bajo contrato de encargo del tratamiento conforme al art. 28 RGPD.",
        ],
      },
      {
        heading: "6. Tus derechos",
        body: [
          "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos a admin@agpscooterslanzarote.com.",
          "Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
      {
        heading: "7. Seguridad",
        body: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o destrucción.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: LAST_UPDATED,
    intro:
      "At AGP Mobility Scooters we handle your data transparently and responsibly. This document explains what we collect, why we use it and your rights over it under the EU General Data Protection Regulation (GDPR) and Spanish data-protection law (LOPDGDD).",
    sections: [
      {
        heading: "1. Data controller",
        body: [
          "AGP Mobility Scooters (\"AGP\").",
          "Address: Lanzarote, Canary Islands, Spain.",
          "Contact: admin@agpscooterslanzarote.com · +34 613 99 24 17.",
          "Tax ID: [TO BE COMPLETED BY OWNER].",
        ],
      },
      {
        heading: "2. Data we process",
        body: [
          "We only process data you provide voluntarily when contacting us: name, phone number, email address, dates of stay and, where applicable, the scooter delivery address in Lanzarote.",
          "We do not collect special categories of data (health, origin, etc.) except when strictly necessary to adapt the service to reduced mobility, and always with your explicit consent.",
        ],
      },
      {
        heading: "3. Purpose and legal basis",
        body: [
          "a) To handle your enquiry or booking via WhatsApp, phone or email. Basis: performance of a contract or pre-contractual measures at your request (GDPR art. 6.1.b).",
          "b) To meet legal obligations (tax, accounting). Basis: legal obligation (GDPR art. 6.1.c).",
          "c) To send you useful information about your rental during your stay. Basis: legitimate interest (GDPR art. 6.1.f).",
        ],
      },
      {
        heading: "4. Retention",
        body: [
          "We keep your data only as long as necessary to manage your rental, and afterwards for the applicable legal periods (accounting, tax, civil liability), generally 5 years.",
          "After those periods your data is deleted or anonymised.",
        ],
      },
      {
        heading: "5. Recipients",
        body: [
          "We do not share your data with third parties except where required by law.",
          "Some providers that help us deliver the service (WhatsApp Business messaging, email provider, accountant) may access minimal data under data-processing contracts pursuant to GDPR art. 28.",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "You can exercise your rights of access, rectification, erasure, objection, restriction and portability by emailing admin@agpscooterslanzarote.com.",
          "If you believe we haven't handled your request properly, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
      {
        heading: "7. Security",
        body: [
          "We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or destruction.",
        ],
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    updated: LAST_UPDATED,
    intro:
      "Bei AGP Mobility Scooters verarbeiten wir Ihre Daten transparent und verantwortungsvoll. Dieses Dokument erläutert, welche Daten wir erheben, wozu wir sie verwenden und welche Rechte Sie gemäß der DSGVO und dem spanischen Datenschutzgesetz (LOPDGDD) haben.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        body: [
          "AGP Mobility Scooters (nachfolgend AGP).",
          "Anschrift: Lanzarote, Kanarische Inseln, Spanien.",
          "Kontakt: admin@agpscooterslanzarote.com · +34 613 99 24 17.",
          "Steuernummer (CIF/NIF): [VOM INHABER ZU ERGÄNZEN].",
        ],
      },
      {
        heading: "2. Welche Daten wir verarbeiten",
        body: [
          "Wir verarbeiten ausschließlich Daten, die Sie uns freiwillig bei der Kontaktaufnahme bereitstellen: Name, Telefon, E-Mail-Adresse, Aufenthaltsdaten und ggf. die Lieferadresse des Scooters auf Lanzarote.",
          "Besondere Kategorien personenbezogener Daten (Gesundheit, Herkunft usw.) verarbeiten wir nur, wenn unbedingt erforderlich zur Anpassung des Services an eingeschränkte Mobilität und immer mit Ihrer ausdrücklichen Einwilligung.",
        ],
      },
      {
        heading: "3. Zweck und Rechtsgrundlage",
        body: [
          "a) Bearbeitung Ihrer Anfrage oder Buchung über WhatsApp, Telefon oder E-Mail. Rechtsgrundlage: Vertragsdurchführung bzw. vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).",
          "b) Erfüllung gesetzlicher Pflichten (steuerlich, buchhalterisch). Rechtsgrundlage: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).",
          "c) Versand nützlicher Informationen zu Ihrer Miete während des Aufenthalts. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).",
        ],
      },
      {
        heading: "4. Speicherdauer",
        body: [
          "Wir speichern Ihre Daten nur so lange wie nötig zur Abwicklung Ihrer Miete, anschließend während der geltenden gesetzlichen Fristen (Buchhaltung, Steuer, zivilrechtliche Haftung), in der Regel 5 Jahre.",
          "Nach Ablauf dieser Fristen werden Ihre Daten gelöscht oder anonymisiert.",
        ],
      },
      {
        heading: "5. Empfänger",
        body: [
          "Wir geben Ihre Daten nicht an Dritte weiter, außer bei gesetzlicher Verpflichtung.",
          "Einige Dienstleister (WhatsApp Business, E-Mail-Provider, Steuerberater) können im Rahmen von Auftragsverarbeitungsverträgen gemäß Art. 28 DSGVO auf minimale Daten zugreifen.",
        ],
      },
      {
        heading: "6. Ihre Rechte",
        body: [
          "Sie können Ihre Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit per E-Mail an admin@agpscooterslanzarote.com ausüben.",
          "Sollten wir Ihre Anfrage nicht zufriedenstellend bearbeiten, können Sie sich an die spanische Datenschutzbehörde (AEPD, www.aepd.es) wenden.",
        ],
      },
      {
        heading: "7. Sicherheit",
        body: [
          "Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten vor unbefugtem Zugriff, Verlust oder Zerstörung.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    updated: LAST_UPDATED,
    intro:
      "Chez AGP Mobility Scooters, nous traitons vos données avec transparence et responsabilité. Ce document explique quelles données nous recueillons, à quoi elles servent et quels sont vos droits conformément au Règlement (UE) 2016/679 (RGPD) et à la loi espagnole LOPDGDD.",
    sections: [
      {
        heading: "1. Responsable du traitement",
        body: [
          "AGP Mobility Scooters (« AGP »).",
          "Adresse : Lanzarote, Îles Canaries, Espagne.",
          "Contact : admin@agpscooterslanzarote.com · +34 613 99 24 17.",
          "Numéro fiscal (CIF/NIF) : [À COMPLÉTER PAR LE TITULAIRE].",
        ],
      },
      {
        heading: "2. Données traitées",
        body: [
          "Nous ne traitons que les données que vous nous fournissez volontairement en nous contactant : nom, téléphone, adresse e-mail, dates de séjour et, le cas échéant, adresse de livraison du scooter à Lanzarote.",
          "Nous ne collectons pas de catégories particulières de données (santé, origine, etc.) sauf lorsque strictement nécessaire pour adapter le service à une mobilité réduite, et toujours avec votre consentement explicite.",
        ],
      },
      {
        heading: "3. Finalité et base juridique",
        body: [
          "a) Gérer votre demande ou réservation via WhatsApp, téléphone ou e-mail. Base : exécution d'un contrat ou mesures précontractuelles (art. 6.1.b RGPD).",
          "b) Respecter les obligations légales (fiscales, comptables). Base : obligation légale (art. 6.1.c RGPD).",
          "c) Vous envoyer des informations utiles sur votre location pendant le séjour. Base : intérêt légitime (art. 6.1.f RGPD).",
        ],
      },
      {
        heading: "4. Conservation",
        body: [
          "Nous conservons vos données uniquement le temps nécessaire à la gestion de votre location, puis pendant les durées légales applicables (comptables, fiscales, responsabilité civile), généralement 5 ans.",
          "Passés ces délais, vos données sont supprimées ou anonymisées.",
        ],
      },
      {
        heading: "5. Destinataires",
        body: [
          "Nous ne partageons pas vos données avec des tiers sauf obligation légale.",
          "Certains prestataires (WhatsApp Business, fournisseur e-mail, comptable) peuvent accéder à des données minimales dans le cadre de contrats de sous-traitance conformes à l'art. 28 RGPD.",
        ],
      },
      {
        heading: "6. Vos droits",
        body: [
          "Vous pouvez exercer vos droits d'accès, rectification, effacement, opposition, limitation et portabilité par e-mail à admin@agpscooterslanzarote.com.",
          "Si vous estimez que nous n'avons pas traité correctement votre demande, vous pouvez saisir l'Agence espagnole de protection des données (www.aepd.es).",
        ],
      },
      {
        heading: "7. Sécurité",
        body: [
          "Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger vos données contre les accès non autorisés, la perte ou la destruction.",
        ],
      },
    ],
  },
};

const TERMS: Record<Lang, LegalDoc> = {
  es: {
    title: "Términos y condiciones de alquiler",
    updated: LAST_UPDATED,
    intro:
      "Estas condiciones regulan el alquiler de scooters de movilidad prestado por AGP Mobility Scooters en Lanzarote. Al realizar una reserva aceptas expresamente estas condiciones.",
    sections: [
      {
        heading: "1. Objeto",
        body: [
          "AGP alquila scooters de movilidad eléctrica destinados a personas con movilidad reducida y visitantes que requieran apoyo en sus desplazamientos durante su estancia en Lanzarote.",
          "La modalidad de reserva y confirmación es directa, mediante WhatsApp, teléfono o correo electrónico.",
        ],
      },
      {
        heading: "2. Reserva y confirmación",
        body: [
          "La reserva se considera firme cuando AGP confirma por escrito la disponibilidad, el precio y la fecha de entrega.",
          "Para alquilar es imprescindible ser mayor de 18 años y facilitar un documento identificativo válido en el momento de la entrega.",
        ],
      },
      {
        heading: "3. Precio, pago y fianza",
        body: [
          "Los precios publicados en la web son indicativos y pueden variar en función de la temporada o la duración.",
          "El pago se realiza en el momento de la entrega del scooter, en efectivo o por los medios electrónicos aceptados por AGP.",
          "AGP podrá solicitar una fianza reembolsable cuyo importe se comunicará antes de confirmar la reserva.",
        ],
      },
      {
        heading: "4. Entrega y devolución",
        body: [
          "AGP entrega el scooter en la dirección indicada dentro de las zonas de cobertura (Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife, Puerto Calero) a la hora acordada.",
          "En el momento de la entrega se firma un parte de estado del scooter. El cliente se compromete a devolverlo en las mismas condiciones de uso.",
        ],
      },
      {
        heading: "5. Uso responsable",
        body: [
          "El scooter debe circular por aceras y zonas peatonales, respetando las normas de tráfico aplicables y con prudencia.",
          "Está prohibido su uso bajo los efectos del alcohol o sustancias, así como superar la capacidad de plazas o el peso máximo indicado en la ficha del vehículo.",
        ],
      },
      {
        heading: "6. Cancelaciones y modificaciones",
        body: [
          "Cancelación gratuita hasta 48 h antes de la fecha de entrega.",
          "Entre 48 h y 24 h antes de la entrega: cargo del 50 % del importe total.",
          "Menos de 24 h antes o no presentación: cargo del 100 %.",
          "Las modificaciones de fechas están sujetas a disponibilidad.",
        ],
      },
      {
        heading: "7. Seguro y responsabilidad",
        body: [
          "AGP incluye un seguro de responsabilidad civil en todos sus alquileres.",
          "Opcionalmente, el cliente puede contratar cobertura adicional de robo y daños por 5 €/día.",
          "El cliente responde por daños derivados de un uso negligente o contrario a estas condiciones.",
        ],
      },
      {
        heading: "8. Legislación aplicable",
        body: [
          "Estas condiciones se rigen por la legislación española.",
          "Las controversias se resolverán ante los juzgados y tribunales correspondientes al domicilio del consumidor, de acuerdo con la normativa vigente.",
        ],
      },
    ],
  },
  en: {
    title: "Rental terms & conditions",
    updated: LAST_UPDATED,
    intro:
      "These terms govern the rental of mobility scooters provided by AGP Mobility Scooters in Lanzarote. By placing a booking you expressly accept them.",
    sections: [
      {
        heading: "1. Scope",
        body: [
          "AGP rents electric mobility scooters to guests with reduced mobility and visitors who need travel support during their stay in Lanzarote.",
          "Bookings are handled directly via WhatsApp, phone or email.",
        ],
      },
      {
        heading: "2. Booking & confirmation",
        body: [
          "A booking is only firm once AGP confirms availability, price and delivery date in writing.",
          "Renters must be 18+ and present valid ID upon delivery.",
        ],
      },
      {
        heading: "3. Price, payment & deposit",
        body: [
          "Prices on the website are indicative and may vary by season or duration.",
          "Payment is made on delivery, in cash or by the electronic methods accepted by AGP.",
          "AGP may request a refundable deposit, the amount of which will be communicated before confirmation.",
        ],
      },
      {
        heading: "4. Delivery & return",
        body: [
          "AGP delivers the scooter to the address provided within the coverage areas (Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife, Puerto Calero) at the agreed time.",
          "A condition check is signed on delivery. The customer commits to returning the scooter in the same condition.",
        ],
      },
      {
        heading: "5. Responsible use",
        body: [
          "The scooter must be used on pavements and pedestrian areas, following applicable traffic rules and with due care.",
          "Use under the influence of alcohol or substances is prohibited, as is exceeding the seat count or maximum weight shown on the vehicle spec card.",
        ],
      },
      {
        heading: "6. Cancellations & changes",
        body: [
          "Free cancellation up to 48 hours before delivery.",
          "Between 48 h and 24 h before delivery: 50 % of the total will be charged.",
          "Less than 24 h or no-show: 100 %.",
          "Date changes are subject to availability.",
        ],
      },
      {
        heading: "7. Insurance & liability",
        body: [
          "AGP includes third-party liability insurance with every rental.",
          "Optionally, the customer may add theft and damage cover for €5/day.",
          "The customer is liable for damages caused by negligent use or breach of these terms.",
        ],
      },
      {
        heading: "8. Governing law",
        body: [
          "These terms are governed by Spanish law.",
          "Disputes will be resolved before the courts corresponding to the consumer's domicile, in line with applicable consumer-protection rules.",
        ],
      },
    ],
  },
  de: {
    title: "Mietbedingungen",
    updated: LAST_UPDATED,
    intro:
      "Diese Bedingungen regeln die Vermietung von Mobilitätsscootern durch AGP Mobility Scooters auf Lanzarote. Mit Ihrer Buchung akzeptieren Sie diese Bedingungen ausdrücklich.",
    sections: [
      {
        heading: "1. Gegenstand",
        body: [
          "AGP vermietet elektrische Mobilitätsscooter an Gäste mit eingeschränkter Mobilität und Besucher, die während ihres Aufenthalts auf Lanzarote Unterstützung bei der Fortbewegung benötigen.",
          "Buchungen erfolgen direkt per WhatsApp, Telefon oder E-Mail.",
        ],
      },
      {
        heading: "2. Buchung und Bestätigung",
        body: [
          "Eine Buchung ist erst verbindlich, wenn AGP Verfügbarkeit, Preis und Liefertermin schriftlich bestätigt.",
          "Mieter müssen mindestens 18 Jahre alt sein und bei der Lieferung einen gültigen Ausweis vorzeigen.",
        ],
      },
      {
        heading: "3. Preis, Zahlung und Kaution",
        body: [
          "Die auf der Website genannten Preise sind Richtwerte und können je nach Saison oder Dauer variieren.",
          "Die Zahlung erfolgt bei Lieferung in bar oder mit den von AGP akzeptierten elektronischen Zahlungsarten.",
          "AGP kann eine rückerstattbare Kaution verlangen, deren Höhe vor der Bestätigung mitgeteilt wird.",
        ],
      },
      {
        heading: "4. Lieferung und Rückgabe",
        body: [
          "AGP liefert den Scooter an die angegebene Adresse innerhalb der Liefergebiete (Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife, Puerto Calero) zur vereinbarten Uhrzeit.",
          "Bei der Lieferung wird ein Zustandsprotokoll unterzeichnet. Der Kunde verpflichtet sich, den Scooter im gleichen Zustand zurückzugeben.",
        ],
      },
      {
        heading: "5. Verantwortungsvolle Nutzung",
        body: [
          "Der Scooter ist auf Gehwegen und in Fußgängerzonen zu nutzen, unter Einhaltung der Verkehrsregeln und mit Umsicht.",
          "Die Nutzung unter Einfluss von Alkohol oder Substanzen ist ebenso untersagt wie das Überschreiten der Sitzplätze oder des auf dem Datenblatt angegebenen Höchstgewichts.",
        ],
      },
      {
        heading: "6. Stornierung und Änderungen",
        body: [
          "Kostenlose Stornierung bis 48 Stunden vor Lieferung.",
          "Zwischen 48 h und 24 h vor Lieferung: 50 % des Gesamtbetrags werden berechnet.",
          "Unter 24 h oder Nichterscheinen: 100 %.",
          "Terminänderungen nach Verfügbarkeit.",
        ],
      },
      {
        heading: "7. Versicherung und Haftung",
        body: [
          "AGP schließt bei jeder Miete eine Haftpflichtversicherung ein.",
          "Optional kann der Kunde einen Diebstahl- und Schadensschutz für 5 €/Tag hinzufügen.",
          "Der Kunde haftet für Schäden durch fahrlässige Nutzung oder Verletzung dieser Bedingungen.",
        ],
      },
      {
        heading: "8. Anwendbares Recht",
        body: [
          "Für diese Bedingungen gilt spanisches Recht.",
          "Streitigkeiten werden vor den Gerichten am Wohnsitz des Verbrauchers gemäß den geltenden Verbraucherschutzvorschriften entschieden.",
        ],
      },
    ],
  },
  fr: {
    title: "Conditions générales de location",
    updated: LAST_UPDATED,
    intro:
      "Ces conditions régissent la location de scooters de mobilité assurée par AGP Mobility Scooters à Lanzarote. En effectuant une réservation, vous les acceptez expressément.",
    sections: [
      {
        heading: "1. Objet",
        body: [
          "AGP loue des scooters de mobilité électriques aux personnes à mobilité réduite et aux visiteurs nécessitant un soutien pour leurs déplacements pendant leur séjour à Lanzarote.",
          "Les réservations se font directement via WhatsApp, téléphone ou e-mail.",
        ],
      },
      {
        heading: "2. Réservation et confirmation",
        body: [
          "Une réservation n'est ferme qu'après confirmation écrite par AGP de la disponibilité, du tarif et de la date de livraison.",
          "Le locataire doit être majeur (18 ans) et présenter une pièce d'identité valide lors de la livraison.",
        ],
      },
      {
        heading: "3. Tarif, paiement et caution",
        body: [
          "Les tarifs publiés sur le site sont indicatifs et peuvent varier selon la saison ou la durée.",
          "Le paiement s'effectue à la livraison, en espèces ou par les moyens électroniques acceptés par AGP.",
          "AGP pourra demander une caution remboursable dont le montant sera communiqué avant confirmation.",
        ],
      },
      {
        heading: "4. Livraison et restitution",
        body: [
          "AGP livre le scooter à l'adresse indiquée dans les zones de couverture (Costa Teguise, Puerto del Carmen, Playa Blanca, Arrecife, Puerto Calero) à l'heure convenue.",
          "Un constat d'état est signé à la livraison. Le client s'engage à restituer le scooter dans le même état.",
        ],
      },
      {
        heading: "5. Utilisation responsable",
        body: [
          "Le scooter doit circuler sur les trottoirs et zones piétonnes, en respectant les règles de circulation applicables et avec prudence.",
          "Son utilisation sous l'effet d'alcool ou de substances est interdite, de même que le dépassement du nombre de places ou du poids maximum indiqué sur la fiche du véhicule.",
        ],
      },
      {
        heading: "6. Annulations et modifications",
        body: [
          "Annulation gratuite jusqu'à 48 h avant la livraison.",
          "Entre 48 h et 24 h avant la livraison : 50 % du montant total sont facturés.",
          "Moins de 24 h ou non-présentation : 100 %.",
          "Les changements de date sont soumis à disponibilité.",
        ],
      },
      {
        heading: "7. Assurance et responsabilité",
        body: [
          "AGP inclut une assurance responsabilité civile dans toutes ses locations.",
          "En option, le client peut ajouter une couverture vol et dommages pour 5 €/jour.",
          "Le client répond des dommages résultant d'une utilisation négligente ou d'un manquement à ces conditions.",
        ],
      },
      {
        heading: "8. Loi applicable",
        body: [
          "Ces conditions sont régies par le droit espagnol.",
          "Les litiges seront résolus devant les tribunaux du domicile du consommateur, conformément à la réglementation applicable.",
        ],
      },
    ],
  },
};

const LEGAL_NOTICE: Record<Lang, LegalDoc> = {
  es: {
    title: "Aviso legal",
    updated: LAST_UPDATED,
    intro:
      "De conformidad con el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilita la siguiente información general.",
    sections: [
      {
        heading: "1. Datos identificativos del titular",
        body: [
          "Denominación: AGP Mobility Scooters.",
          "Titular: [COMPLETAR CON NOMBRE COMERCIAL Y/O RAZÓN SOCIAL].",
          "CIF / NIF: [COMPLETAR].",
          "Domicilio: Lanzarote, Islas Canarias, España.",
          "Contacto: admin@agpscooterslanzarote.com · +34 613 99 24 17.",
        ],
      },
      {
        heading: "2. Objeto",
        body: [
          "El presente sitio web (agpmobilityscooters.com) tiene por finalidad dar a conocer los servicios de alquiler de scooters de movilidad prestados por AGP y facilitar la comunicación con clientes potenciales, principalmente mediante WhatsApp.",
        ],
      },
      {
        heading: "3. Condiciones de uso",
        body: [
          "El acceso y uso del sitio web implica la aceptación plena de este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios, respetando la legalidad vigente.",
        ],
      },
      {
        heading: "4. Propiedad intelectual e industrial",
        body: [
          "Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño) son propiedad de AGP o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.",
          "Queda prohibida su reproducción, distribución o transformación sin autorización expresa.",
        ],
      },
      {
        heading: "5. Responsabilidad",
        body: [
          "AGP no garantiza la disponibilidad continua del sitio web y no se responsabiliza de los daños derivados de interrupciones, fallos técnicos o accesos no autorizados ajenos a su control.",
        ],
      },
      {
        heading: "6. Enlaces a terceros",
        body: [
          "El sitio web puede contener enlaces a páginas de terceros. AGP no se responsabiliza de sus contenidos ni políticas.",
        ],
      },
      {
        heading: "7. Legislación aplicable",
        body: [
          "El presente aviso legal se rige por la legislación española.",
        ],
      },
    ],
  },
  en: {
    title: "Legal notice",
    updated: LAST_UPDATED,
    intro:
      "In accordance with article 10 of Spain's Law 34/2002 on Information Society Services and E-Commerce (LSSI-CE), we provide the following general information.",
    sections: [
      {
        heading: "1. Owner identification",
        body: [
          "Name: AGP Mobility Scooters.",
          "Owner: [COMPLETE WITH COMMERCIAL NAME / COMPANY NAME].",
          "Tax ID: [COMPLETE].",
          "Address: Lanzarote, Canary Islands, Spain.",
          "Contact: admin@agpscooterslanzarote.com · +34 613 99 24 17.",
        ],
      },
      {
        heading: "2. Purpose",
        body: [
          "This website (agpmobilityscooters.com) aims to present AGP's mobility scooter rental services and to facilitate communication with prospective customers, primarily via WhatsApp.",
        ],
      },
      {
        heading: "3. Conditions of use",
        body: [
          "Accessing and using the website implies full acceptance of this legal notice. Users agree to make proper use of the content and services, complying with applicable law.",
        ],
      },
      {
        heading: "4. Intellectual property",
        body: [
          "All website content (text, images, logos, design) is the property of AGP or of third parties who have authorised its use, and is protected by intellectual-property law.",
          "Its reproduction, distribution or transformation without express authorisation is prohibited.",
        ],
      },
      {
        heading: "5. Liability",
        body: [
          "AGP does not guarantee uninterrupted availability of the website and accepts no liability for damages arising from outages, technical failures or unauthorised access beyond its control.",
        ],
      },
      {
        heading: "6. Third-party links",
        body: [
          "The website may contain links to third-party pages. AGP is not responsible for their content or policies.",
        ],
      },
      {
        heading: "7. Governing law",
        body: [
          "This legal notice is governed by Spanish law.",
        ],
      },
    ],
  },
  de: {
    title: "Impressum",
    updated: LAST_UPDATED,
    intro:
      "Gemäß Artikel 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und elektronischen Handel (LSSI-CE) werden folgende allgemeine Angaben bereitgestellt.",
    sections: [
      {
        heading: "1. Angaben zum Inhaber",
        body: [
          "Bezeichnung: AGP Mobility Scooters.",
          "Inhaber: [HANDELSNAME / FIRMENNAME ERGÄNZEN].",
          "Steuernummer (CIF/NIF): [ERGÄNZEN].",
          "Anschrift: Lanzarote, Kanarische Inseln, Spanien.",
          "Kontakt: admin@agpscooterslanzarote.com · +34 613 99 24 17.",
        ],
      },
      {
        heading: "2. Zweck",
        body: [
          "Diese Website (agpmobilityscooters.com) dient der Präsentation der von AGP angebotenen Mobilitätsscooter-Vermietung und der Kommunikation mit potenziellen Kunden, hauptsächlich über WhatsApp.",
        ],
      },
      {
        heading: "3. Nutzungsbedingungen",
        body: [
          "Der Zugriff und die Nutzung der Website bedeuten die vollständige Annahme dieses Impressums. Der Nutzer verpflichtet sich zu einer rechtmäßigen Nutzung der Inhalte und Dienste.",
        ],
      },
      {
        heading: "4. Urheber- und gewerbliche Schutzrechte",
        body: [
          "Alle Inhalte der Website (Texte, Bilder, Logos, Gestaltung) sind Eigentum von AGP oder Dritter, die deren Verwendung genehmigt haben, und durch geistige Eigentumsrechte geschützt.",
          "Ihre Vervielfältigung, Verbreitung oder Bearbeitung ohne ausdrückliche Genehmigung ist untersagt.",
        ],
      },
      {
        heading: "5. Haftung",
        body: [
          "AGP garantiert keine ununterbrochene Verfügbarkeit der Website und haftet nicht für Schäden durch Ausfälle, technische Störungen oder unbefugte Zugriffe außerhalb ihrer Kontrolle.",
        ],
      },
      {
        heading: "6. Links zu Dritten",
        body: [
          "Die Website kann Links zu Seiten Dritter enthalten. AGP übernimmt keine Verantwortung für deren Inhalte oder Richtlinien.",
        ],
      },
      {
        heading: "7. Anwendbares Recht",
        body: [
          "Dieses Impressum unterliegt spanischem Recht.",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales",
    updated: LAST_UPDATED,
    intro:
      "Conformément à l'article 10 de la loi espagnole 34/2002 sur les services de la société de l'information et du commerce électronique (LSSI-CE), les informations générales suivantes sont fournies.",
    sections: [
      {
        heading: "1. Identification du titulaire",
        body: [
          "Dénomination : AGP Mobility Scooters.",
          "Titulaire : [COMPLÉTER NOM COMMERCIAL / RAISON SOCIALE].",
          "Numéro fiscal (CIF/NIF) : [À COMPLÉTER].",
          "Adresse : Lanzarote, Îles Canaries, Espagne.",
          "Contact : admin@agpscooterslanzarote.com · +34 613 99 24 17.",
        ],
      },
      {
        heading: "2. Objet",
        body: [
          "Ce site (agpmobilityscooters.com) a pour objet de présenter les services de location de scooters de mobilité fournis par AGP et de faciliter la communication avec les clients potentiels, principalement via WhatsApp.",
        ],
      },
      {
        heading: "3. Conditions d'utilisation",
        body: [
          "L'accès et l'utilisation du site impliquent l'acceptation pleine des présentes mentions légales. L'utilisateur s'engage à utiliser correctement les contenus et services, dans le respect de la loi en vigueur.",
        ],
      },
      {
        heading: "4. Propriété intellectuelle",
        body: [
          "Tous les contenus du site (textes, images, logos, design) sont la propriété d'AGP ou de tiers ayant autorisé leur usage et sont protégés par le droit de la propriété intellectuelle.",
          "Leur reproduction, distribution ou transformation sans autorisation expresse est interdite.",
        ],
      },
      {
        heading: "5. Responsabilité",
        body: [
          "AGP ne garantit pas la disponibilité continue du site et décline toute responsabilité pour les dommages résultant d'interruptions, de défaillances techniques ou d'accès non autorisés échappant à son contrôle.",
        ],
      },
      {
        heading: "6. Liens vers des tiers",
        body: [
          "Le site peut contenir des liens vers des pages tierces. AGP n'est pas responsable de leurs contenus ni politiques.",
        ],
      },
      {
        heading: "7. Loi applicable",
        body: [
          "Les présentes mentions légales sont régies par le droit espagnol.",
        ],
      },
    ],
  },
};

export type LegalType = "privacy" | "terms" | "notice";

const DOCS: Record<LegalType, Record<Lang, LegalDoc>> = {
  privacy: PRIVACY,
  terms: TERMS,
  notice: LEGAL_NOTICE,
};

export function getLegalDoc(type: LegalType, lang: Lang): LegalDoc {
  return DOCS[type][lang];
}

const BACK_LABEL: Record<Lang, string> = {
  es: "Volver al inicio",
  en: "Back to home",
  de: "Zur Startseite",
  fr: "Retour à l'accueil",
};

export function getBackLabel(lang: Lang): string {
  return BACK_LABEL[lang];
}

const UPDATED_LABEL: Record<Lang, string> = {
  es: "Última actualización",
  en: "Last updated",
  de: "Zuletzt aktualisiert",
  fr: "Dernière mise à jour",
};

export function getUpdatedLabel(lang: Lang): string {
  return UPDATED_LABEL[lang];
}
