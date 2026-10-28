"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";

const links = [
  { href: "#prace", label: "Naše práce" },
  { href: "#sluzby", label: "Co děláme" },
  { href: "#pristup", label: "Jak přemýšlíme" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header container"
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          setOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
        }
      }}
      onBlur={(event) => {
        if (
          open &&
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setOpen(false);
        }
      }}
    >
      <Brand />
      <nav className="desktop-nav" aria-label="Hlavní navigace">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="#kontakt" className="header-contact">
        Pojďme se poznat <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((previous) => !previous)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobilní navigace" hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        ))}
        <a href="#kontakt" onClick={() => setOpen(false)}>
          Pojďme se poznat
          <ArrowUpRight size={22} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
