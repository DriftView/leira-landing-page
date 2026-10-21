// TODO: swap in the real store listing URLs once the app is published.
const STORES = [
  { href: "#", pre: "Download on the", name: "App Store" },
  { href: "#", pre: "Get it on", name: "Google Play" },
];

export function Download() {
  return (
    <section id="download" className="bg-blush">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-4 py-28 text-center sm:px-8">
        <h2 className="m-0 text-[clamp(38px,5.2vw,66px)] leading-[1.02] font-semibold tracking-[-.035em] text-balance">
          Start learning <em className="text-crimson">your heart.</em>
        </h2>
        <p className="m-0 max-w-[540px] text-lg leading-[1.55] text-body">
          Connect your wearable in minutes. Leira works with the devices you already own.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {STORES.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="flex h-14 flex-col justify-center rounded-2xl bg-ink px-6 text-left text-white transition-colors hover:bg-crimson"
            >
              <span className="text-[11px] opacity-75">{s.pre}</span>
              <span className="text-[17px] leading-[1.1] font-semibold">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
