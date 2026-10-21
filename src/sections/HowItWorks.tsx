import { Eyebrow, SectionHeading } from "@/components/ui";

const STEPS = [
  {
    n: "01",
    title: "Gathered continuously",
    body: "Your phone and wearables quietly capture heart rate, rhythm, blood pressure, sleep and activity — day and night.",
  },
  {
    n: "02",
    title: "Grounded in guidelines",
    body: "Leira AI reads your signals against the latest clinical guidelines and patterns learned across a network of millions of data points.",
  },
  {
    n: "03",
    title: "Guidance for both sides",
    body: "You get clear, personal next steps. Your clinician gets a focused view of what changed and why it matters.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-blush">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 py-16 sm:gap-14 sm:px-8 sm:py-28">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <Eyebrow>How Leira works</Eyebrow>
          <SectionHeading>
            From every heartbeat to <em>guidance you can act on.</em>
          </SectionHeading>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3 sm:gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-3 rounded-[24px] bg-white p-6 sm:gap-4 sm:rounded-[28px] sm:p-8">
              <div className="text-[36px] leading-none font-semibold tracking-[-.03em] text-crimson sm:text-[44px]">{s.n}</div>
              <h3 className="m-0 text-[20px] font-semibold tracking-[-.01em] sm:text-[22px]">{s.title}</h3>
              <p className="m-0 text-base leading-[1.55] text-pretty text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
