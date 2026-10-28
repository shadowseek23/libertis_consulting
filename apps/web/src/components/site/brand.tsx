import Image from "next/image";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#nahoru"
      className={`brand${footer ? " brand-footer" : ""}`}
      aria-label="Libertis Consulting — úvod"
    >
      <span className="brand-mark" aria-hidden="true">
        <Image src="/brand/libertis-logo.png" alt="" width={116} height={94} />
      </span>
      <span className="brand-wordmark">
        Libertis<span>CONSULTING</span>
      </span>
    </a>
  );
}
