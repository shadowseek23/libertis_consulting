import type { StaticImageData } from "next/image";
import schwarzImage from "../../public/references/schwarz3d.jpg";
import dabriconImage from "../../public/references/dabricon.jpg";
import sabrisImage from "../../public/references/sabris.jpg";
import niderleImage from "../../public/references/niderle.jpg";
import altenergyImage from "../../public/references/altenergy.jpg";
import svobodaImage from "../../public/references/svoboda-pro-stromy.jpg";
import hraveImage from "../../public/references/hrave-sporty.jpg";

export type Project = {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: StaticImageData;
  url: string;
  field: string;
  tags: string[];
  strategy: boolean;
  color: string;
};

export const projects: Project[] = [
  {
    id: "schwarz3d",
    name: "SCHWARZ 3D",
    headline: "Precizní práce. Výrazná prezentace.",
    description:
      "Osobitá microsite pro 3D studio. Od komunikace značky přes texty a vizuální styl až po UI, motion design a technické řešení — aby preciznost vizualizací byla cítit i z webu.",
    image: schwarzImage,
    url: "https://schwarz3d.com/",
    field: "3D vizualizace",
    tags: ["Strategie značky", "Web & motion", "Vývoj"],
    strategy: true,
    color: "#dfe8e3",
  },
  {
    id: "dabricon",
    name: "DABRICON",
    headline: "Složitá expertíza. Jasná komunikace.",
    description:
      "Prezentační web pro poradce v oblasti podnikatelských rizik. Analýzu a obsahovou strategii jsme propojili s designem a vývojem. Konkrétní řešení doplňují relevantní reference, které dávají expertíze kontext.",
    image: dabriconImage,
    url: "https://dabricon.com/",
    field: "Řízení podnikatelských rizik",
    tags: ["Obsahová strategie", "UI design", "Vývoj"],
    strategy: true,
    color: "#ede4d9",
  },
  {
    id: "sabris",
    name: "SABRIS",
    headline: "Od produktů k tomu, co zákazník řeší.",
    description:
      "Vedení UI týmu a zpřehlednění komunikace dodavatele SAP řešení. Roztříštěné portfolio jsme zastřešili expertními oblastmi, které propojují potřeby zákazníků, přínosy řešení a příběhy z praxe.",
    image: sabrisImage,
    url: "https://www.sabris.com/",
    field: "Podnikové IT a SAP",
    tags: ["Struktura obsahu", "UX/UI", "Vedení týmu"],
    strategy: true,
    color: "#d9e9e9",
  },
  {
    id: "niderle",
    name: "DŘEVOSTAVBY NIDERLE",
    headline: "Poctivé řemeslo, které má vlastní rukopis.",
    description:
      "Osobní prezentace tesařského řemesla s respektem k materiálu i lidem. Dřevostavby, tiny houses a sauny představuje prostřednictvím skutečných realizací a příběhu člověka, který za nimi stojí.",
    image: niderleImage,
    url: "https://www.drevostavbyniderle.cz/",
    field: "Řemeslo a dřevostavby",
    tags: ["Webová prezentace", "Řemeslo"],
    strategy: false,
    color: "#e7e7de",
  },
  {
    id: "altenergy",
    name: "ALTENERGY",
    headline: "Srozumitelná cesta k úspornějšímu domu.",
    description:
      "Přehledná prezentace energetického poradenství. Nabídku PENB, dotací a renovačních pasů přibližuje podle situací, které majitelé domů skutečně řeší, a usnadňuje jim výběr dalšího kroku.",
    image: altenergyImage,
    url: "https://www.altenergy.cz/",
    field: "Energetické poradenství",
    tags: ["Webová prezentace", "Odborné služby"],
    strategy: false,
    color: "#e3eddf",
  },
  {
    id: "svoboda-pro-stromy",
    name: "SVOBODA PRO STROMY",
    headline: "Odborná péče. Lidský přístup.",
    description:
      "Web arboristů, kteří pečují o stromy od kořenů po korunu. Přehledně představuje odborné služby, zkušenosti a lidi v terénu, aby zákazník snadno našel pomoc pro svou konkrétní situaci.",
    image: svobodaImage,
    url: "https://www.svobodaprostromy.cz/",
    field: "Arboristika a péče o zeleň",
    tags: ["Webová prezentace", "Péče o přírodu"],
    strategy: false,
    color: "#e4e9df",
  },
  {
    id: "hrave-sporty",
    name: "HRAVÉ SPORTY",
    headline: "Radost z pohybu začíná už na webu.",
    description:
      "Barevný svět dětského sportování pro rodiče i školy. Lyžování, inline, atletika a letní tábory na jednom místě — s důrazem na hravost, přehlednou nabídku a snadnou orientaci v kurzech.",
    image: hraveImage,
    url: "https://hravesporty.cz/",
    field: "Sport a vzdělávání",
    tags: ["Webová prezentace", "Dětský sport"],
    strategy: false,
    color: "#eee3fa",
  },
];
