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
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-4 py-28 sm:px-8">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <Eyebrow>How Leira works</Eyebrow>
          <SectionHeading>
            From every heartbeat to <em>guidance you can act on.</em>
          </SectionHeading>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-4 rounded-[28px] bg-white p-8">
              <div className="text-[44px] leading-none font-semibold tracking-[-.03em] text-crimson">{s.n}</div>
              <h3 className="m-0 text-[22px] font-semibold tracking-[-.01em]">{s.title}</h3>
              <p className="m-0 text-base leading-[1.55] text-pretty text-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
