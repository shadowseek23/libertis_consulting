# Web Libertis Consulting

Datum: 2026-10-28 · Stav: dokončeno

## Cíl

Vytvořit funkční český prezentační web kreativního studia v Next.js ze sdílené šablony, bez Sanity. Zpracovat všech sedm dodaných referencí včetně skutečných screenshotů.

## Kontext

Zadání uživatele: strategie značky, obsahová komunikace a digitální prezentace. Bílý základ, výrazné barevné prvky, kvalitní fonty, profesionální a svěží vzhled. Inspirace Clay, Applifting a okrajově Koala42. Dodané logo a paleta petrolejové, vínové a bílé.

## Milníky

1. Převzetí šablony — zachování historie, odstranění Sanity, instalace závislostí a rezervace portů.
2. Obsah a podklady — prohlídka referencí, krátké popisy a screenshoty, hlavní vizuál.
3. Web — responzivní hlavní stránka, služby, reference, přístupné interakce a kontakt.
4. Kontroly a předání — typecheck, formát, lint, produkční build, lokální náhled a dokumentace.

## Akceptační kritéria

- Next.js App Router běží na rezervovaném portu 5600; projekt nevyžaduje Sanity ani jeho proměnné.
- Bílá stránka má výraznou typografii a lokální obrazové podklady.
- Každá ze sedmi referencí má popis, screenshot a původní odkaz.
- Navigace, filtrování referencí, mobilní menu a rozbalení služeb mají funkční ovládání.
- Animace respektují prefers-reduced-motion; obsah je dostupný i bez animace.
- Kontakt nevymýšlí skutečné kontaktní údaje ani nepředstírá odeslání poptávky.
- Typecheck, formát, lint a build projdou.

## Checklist

- [x] Šablona bez Sanity, závislosti a porty
- [x] Screenshoty a ověřené popisy všech sedmi referencí
- [x] Implementace webu a lokálních vizuálů
- [x] Kontroly, dokumentace a předání

## Otevřené otázky

- Uživatel doplnil kontakt: Daniel Sýkora, hello@libertisconsulting.com, +420 724 587 758. Web používá mailto a tel, bez formuláře. Identifikace provozovatele zbývá před veřejným spuštěním.
- U Altenergy, Niderle, Svoboda pro stromy a Hravé sporty uživatel nedodal rozsah spolupráce. Popisy vycházejí z veřejného obsahu, bez vymyšlených výsledků nebo metrik.

## Validace

- `bun run typecheck`, Prettier, `bun run lint` a `bun run build` prošly. Next.js 16.4.3 sestavil statickou hlavní stránku bez varování.
- HTTP 200 na portu 5600, fonty lokálně načtené, bílý základ ověřený v DOM.
- Filtr: 4 počáteční reference, 3 strategické projekty, po rozbalení všech 7 skutečných odkazů.
- Mobilní menu: otevření, navigace, uzavření přes Escape a návrat focusu. Služby se rozbalují nativně.
- Rozměry: desktop výchozího prohlížeče, 768 × 1024, 390 × 844 a 360 × 800. Šířka dokumentu odpovídá dostupné šířce bez horizontálního přesahu.
- Kontaktní odkazy odpovídají dodanému e-mailu a telefonu. Žádná zpráva se neodesílala.
- Screenshoty všech sedmi referencí zkontrolovány a publikovány jen do lokálního přehledu `/references/index.html`. Náhledy jsou v `docs/previews/`.
- `prefers-reduced-motion` je ošetřen v CSS i v reakci hlavního vizuálu na kurzor; obsah se neskrývá před scroll animací.
- Spotřeba tokenů této konverzace není v dostupné telemetrii samostatně měřitelná; číselný odhad není vydáván za měření.

## Předání

Lokální web: http://localhost:5600. Screenshoty a zdroje: `docs/references.md`. Sdílená šablona se zachovanou historií, Sanity odstraněno. Souběžný úkol pro GLB model má samostatný plán a není součástí tohoto výstupu. Veřejné nasazení ani git push neproběhly.
