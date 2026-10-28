# ADR-0001: Next.js ze sdílené šablony bez CMS

Datum: 2026-10-28 · Status: Accepted

## Kontext

Uživatel výslovně vybral Next.js šablonu bez Sanity. Projekt vzniká z `$TEMPLATES/nextjs-sanity-template` oficiálním skriptem se zachováním historie.

## Rozhodnutí

Zachovat bun workspaces a `apps/web`, Next.js 16 App Router, React 19, TypeScript a kontrolní nástroje šablony. Odstranit Studio, Sanity závislosti, CDN konfiguraci a projektové registrace Sanity. Statický obsah je v typovaném datovém modulu. Animace řešit CSS a malými klientskými komponentami bez další animační knihovny. Fonty a média obsluhovat lokálně.

## Zamítnuté alternativy

- Samostatná HTML stránka: jednoduchá, ale uživatel zvolil Next.js.
- Sanity CMS: uživatel jej výslovně vyloučil; zde není potřebný.
- Přidání animační knihovny: aktuální interakce zvládnou nativní webová API.

## Důsledky

Úprava obsahu vyžaduje změnu zdrojových souborů a nový build. Žádné nové aplikační závislosti nad rámec šablony. Lokální rezervace: web 5600, produkční náhled 5601. Příprava i předání jsou lokální; `git push` je dle pokynů uživatele zakázán, proto se nepoužije publikační workflow Sites vyžadující push.

## Dokumentace

- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://nextjs.org/docs/app/api-reference/components/font
- https://nextjs.org/docs/app/api-reference/components/image
