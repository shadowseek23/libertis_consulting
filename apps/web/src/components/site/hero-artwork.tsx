"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

export function HeroArtwork() {
  function move(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--art-x",
      `${((event.clientX - box.left) / box.width - 0.5) * 10}px`,
    );
    event.currentTarget.style.setProperty(
      "--art-y",
      `${((event.clientY - box.top) / box.height - 0.5) * 8}px`,
    );
  }
  return (
    <div
      className="hero-artwork"
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--art-x", "0px");
        event.currentTarget.style.setProperty("--art-y", "0px");
      }}
    >
      <Image
        src="/brand/libertis-wing.png"
        alt=""
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 65vw, 64vw"
        preload
        className="wing-image"
      />
      <span className="art-caption">
        <span /> PROSTOR PRO VAŠI PODSTATU
      </span>
    </div>
  );
}
