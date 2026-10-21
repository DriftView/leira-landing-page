import { LeiraMark } from "@/components/ui";

const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#who", label: "Who it’s for" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/88 backdrop-blur-[14px]">
      <div className="mx-auto grid h-[72px] max-w-[1240px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 px-4 sm:px-8">
        <nav className="flex min-w-0 gap-[clamp(12px,2vw,28px)] overflow-hidden text-[clamp(12px,1.3vw,14px)] font-medium whitespace-nowrap max-sm:invisible">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-ink transition-colors hover:text-crimson">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#top" className="flex items-center gap-2 text-ink" aria-label="Leira home">
          <LeiraMark height={34} />
          <span className="text-[26px] leading-none font-semibold tracking-[-.02em]">Leira</span>
        </a>
        <div className="flex justify-end">
          <a
            href="#download"
            className="flex h-[42px] items-center rounded-full bg-ink px-5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-crimson"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
