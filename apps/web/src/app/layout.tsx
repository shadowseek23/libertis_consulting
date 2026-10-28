import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "../assets/fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

const instrument = localFont({
  src: "../assets/fonts/InstrumentSerif-Italic.ttf",
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:5600"),
  title: "Libertis Consulting — Vaše podnikání má duši",
  description:
    "Strategie značky, obsahová komunikace a weby, které jsou vám vlastní. Pomůžeme pojmenovat vaši skutečnou hodnotu a srozumitelně ji ukázat světu.",
  openGraph: {
    title: "Vaše podnikání má duši. Pojďme ji společně osvobodit.",
    description: "Libertis Consulting · Strategie. Obsah. Digitální prezentace.",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/brand/libertis-wing.png", width: 1536, height: 1024 }],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${manrope.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
