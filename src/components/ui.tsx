import type { ReactNode } from "react";
import leiraMark from "@/assets/leira-mark.png";

/** Small uppercase label that sits above every section heading. */
export function Eyebrow({ children, className = "text-crimson-deep" }: { children: ReactNode; className?: string }) {
  return <div className={`text-[13px] font-semibold uppercase tracking-[.14em] ${className}`}>{children}</div>;
}

/** Section heading. Wrap the emphasised phrase in <em>; it renders in crimson. */
export function SectionHeading({
  children,
  accent = "[&_em]:text-crimson",
}: {
  children: ReactNode;
  /** Colour class for the <em> phrase; dark sections pass a lighter one. */
  accent?: string;
}) {
  return (
    <h2
      className={`m-0 text-[clamp(32px,4.2vw,52px)] leading-[1.06] font-semibold tracking-[-.025em] text-balance ${accent}`}
    >
      {children}
    </h2>
  );
}

/** Rounded photo that fills its frame. Credits ride along as a tooltip. */
export function Photo({ src, alt, credit, className = "" }: { src: string; alt: string; credit: string; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} title={credit} loading="lazy" decoding="async" className="block size-full object-cover" />
    </div>
  );
}

/** The Leira AI flame-and-heart mark, same artwork as the mobile app icon. */
export function LeiraMark({ height = 32, className = "" }: { height?: number; className?: string }) {
  // Artwork is 162×256; keep the ratio so it never stretches.
  return (
    <img
      src={leiraMark}
      alt=""
      width={Math.round((height * 162) / 256)}
      height={height}
      className={`block flex-none ${className}`}
    />
  );
}
