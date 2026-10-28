# Architektura

Web používá Next.js App Router v `apps/web` a React Server Components pro stránku a převážnou část obsahu. Volba šablony a odstranění CMS jsou zdůvodněny v [ADR-0001](../../memory/decisions/ADR-0001-nextjs-without-cms.md).

Interaktivní hranici tvoří malé komponenty `site-header` (mobilní menu), `project-gallery` (filtr a další reference) a `hero-artwork` (reakce na kurzor). Služby používají nativní `details` a fungují bez klientského JavaScriptu.

Reference jsou typovaná statická data. Screenshoty a logo jsou soubory v `public/`, obrázky obsluhuje `next/image`. Fonty Manrope a Instrument Serif se načítají přes `next/font/local`; návštěvník nekontaktuje Google Fonts. Licenční texty jsou přiloženy.

Design používá bílý základ, petrolejovou `#122c31` / `#257c7b` a vínovou `#8b242b`. Přechody jsou krátké, bez scroll listenerů a bez skrývání obsahu. Úvodní obrazová animace trvá 1,5 sekundy; reakce na kurzor je jen na desktopu. `prefers-reduced-motion` vypíná obojí.

Nevzniká databáze ani serverový stav, nepoužívá se analytika ani formulář. Kontakt je přes `mailto:` a `tel:`. Náhled má `noindex`; metadataBase přebírá volitelný `SITE_URL`, jinak lokální URL. Kanonická URL se stanoví až podle skutečné publikační domény. Screenshoty se importují staticky, aby se změna souboru promítla do jeho hashe a optimalizovaného náhledu.
