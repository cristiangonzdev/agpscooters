# AGP Mobility Scooters · Lanzarote

Landing page one-page para alquiler de scooters de movilidad en Lanzarote. Conversión 100 % por WhatsApp.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lucide React.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000 → redirige a /es
npm run build
npm start
```

Rutas: `/es` (por defecto) y `/en`. El toggle en la navbar conserva el hash/scroll.

## Cambiar el número de WhatsApp

Un único lugar: [`lib/whatsapp.ts`](lib/whatsapp.ts) → constante `WHATSAPP_NUMBER` (formato E.164 sin `+`, ej. `34613992417`). Todos los CTAs leen desde ahí.

## Editar los 3 scooters

Edita el array `SCOOTERS` en [`lib/scooters.ts`](lib/scooters.ts). Cada entrada tiene:

- `id` — slug único.
- `name` — nombre comercial (se muestra tal cual).
- `tagline.es` / `tagline.en` — frase corta bajo el nombre.
- `capacity` — `1` o `2`.
- `badge` — `"1-PAX"` | `"2-PAX"` | `"PREMIUM"`. Determina el pill de la esquina.
- `range_km`, `max_speed_kmh`, `max_weight_kg` — specs numéricos.
- `prices` — array de tarifas por duración (`"4h" | "1d" | "3d" | "7d"`) con `price_eur`. La tarjeta muestra pills dinámicos para cada entrada.
- `default_duration` — duración seleccionada por defecto al renderizar la tarjeta.
- `image` — ruta dentro de `/public` (ej. `/images/scooter-confort.jpg`).
- `whatsapp_message.es` / `whatsapp_message.en` — texto pre-rellenado del WhatsApp.

Para añadir un cuarto modelo: solo añade una entrada más al array. El grid en `components/sections/Vehicles.tsx` es responsive automáticamente.

## Reemplazar imágenes

Coloca los archivos en `public/images/` con estos nombres y se mostrarán sin tocar código:

| Ruta esperada | Uso | Recomendado |
|---|---|---|
| `public/images/hero-bg.jpg` | Fondo del Hero | 2400×1600 · paseo marítimo de Lanzarote al atardecer, composición que deje aire en la mitad izquierda |
| `public/images/scooter-confort.jpg` | Card "AGP Confort" | 1200×900 · scooter sobre fondo oscuro o con viñeta |
| `public/images/scooter-doble.jpg` | Card "AGP Doble" | idem |
| `public/images/scooter-premium.jpg` | Card "AGP Premium XL" | idem |
| `public/images/about-couple.jpg` | Sección "Por qué AGP" | 1200×1500 (4:5) · foto cálida de clientes reales disfrutando el servicio |

Los `TODO:` en el código señalan cada punto de reemplazo.

## Textos ES / EN

Todos los strings viven en [`lib/i18n.ts`](lib/i18n.ts) bajo el objeto `DICT`. Edita una key y se actualiza en ambos idiomas desde un solo sitio.

## Estructura

```
app/
  layout.tsx            root (html, body, fuentes, metadata)
  page.tsx              redirect → /es
  [lang]/
    layout.tsx          sincroniza <html lang> vía client hook
    page.tsx            ensambla todas las secciones
components/
  Navbar.tsx            sticky, transparente en top → blur al scroll
  Footer.tsx
  WhatsAppFAB.tsx       botón flotante verde con pulse
  LangToggle.tsx        ES / EN
  HtmlLangSync.tsx      actualiza lang del <html> en cliente
  sections/             Hero · TrustStrip · Vehicles · HowItWorks · About · FAQ · Contact
  ui/                   GoldButton · WhatsAppButton · VehicleCard · SectionDivider · Logo
lib/
  scooters.ts           array tipado de los 3 modelos + tipos
  i18n.ts               diccionario ES/EN + helpers
  whatsapp.ts           WHATSAPP_NUMBER + buildWhatsAppLink
```

## Deploy en Vercel

Sin pasos especiales:

1. Push del repo a GitHub.
2. "Import Project" en Vercel, preset "Next.js".
3. Listo. Cada push a `main` dispara preview/prod.

## Accesibilidad

- `prefers-reduced-motion` desactiva las animaciones de Framer Motion.
- Todos los CTAs de WhatsApp llevan `aria-label` específico.
- Targets de toque ≥ 44px en móvil.
- Contraste AA verificado en dorado sobre negro y verde WhatsApp sobre blanco.

## Créditos

Diseño y desarrollo — AGP Mobility Scooters · Lanzarote, 2026.
