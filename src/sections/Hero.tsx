import { HeroNetwork } from "@/components/HeroNetwork";
import { Eyebrow } from "@/components/ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <HeroNetwork />
      <div className="mx-auto flex max-w-[860px] flex-col items-center gap-6 px-4 pt-2 pb-24 text-center sm:px-8">
        <Eyebrow>Personalised cardiovascular guidance</Eyebrow>
        <h1 className="m-0 text-[clamp(40px,6vw,78px)] leading-[1.02] font-semibold tracking-[-.035em] text-balance">
          Millions of signals. <em className="text-crimson sm:whitespace-nowrap">One clear next step</em> for your heart.
        </h1>
        <p className="m-0 max-w-[680px] text-[19px] leading-[1.55] text-pretty text-body">
          Using the latest clinical guidelines, Leira AI gives personalised guidance to users and clinicians — drawn from a
          network of millions of data points gathered continuously from the Leira app and wearables.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#download"
            className="flex h-[52px] items-center rounded-full bg-crimson px-[26px] text-[15px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(217,30,41,.8)] transition-colors hover:bg-crimson-deep"
          >
            Download Leira
          </a>
          <a
            href="#clinicians"
            className="flex h-[52px] items-center rounded-full border border-line-strong bg-white px-[26px] text-[15px] font-semibold text-ink transition-colors hover:border-crimson hover:text-crimson"
          >
            I’m a clinician
          </a>
        </div>
      </div>
    </section>
  );
}
