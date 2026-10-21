import { useState } from "react";
import { LeiraMark } from "@/components/ui";

const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#who", label: "Who it’s for" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/88 backdrop-blur-[14px]">
      {/* Desktop: nav · logo · CTA. Mobile: the nav drops out, leaving logo · CTA + menu. */}
      <div className="mx-auto grid h-16 max-w-[1240px] grid-cols-[auto_minmax(0,1fr)] items-center gap-4 px-4 sm:h-[72px] sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-6 sm:px-8">
        <nav className="hidden min-w-0 gap-[clamp(12px,2vw,28px)] overflow-hidden text-[clamp(12px,1.3vw,14px)] font-medium whitespace-nowrap sm:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-ink transition-colors hover:text-crimson">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#top" onClick={close} className="flex items-center gap-2 text-ink" aria-label="Leira home">
          <LeiraMark height={30} className="sm:h-[34px] sm:w-[22px]" />
          <span className="text-[22px] leading-none font-semibold tracking-[-.02em] sm:text-[26px]">Leira</span>
        </a>
        <div className="flex items-center justify-end gap-2">
          <a
            href="#download"
            onClick={close}
            className="flex h-10 items-center rounded-full bg-ink px-4 text-[13px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-crimson sm:h-[42px] sm:px-5 sm:text-sm"
          >
            Get the app
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full border border-line-strong text-ink sm:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-white px-4 pb-4 sm:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={close}
              className="flex h-14 items-center border-b border-line text-[17px] font-medium text-ink last:border-b-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
