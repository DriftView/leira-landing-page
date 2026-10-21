import { Eyebrow, SectionHeading } from "@/components/ui";

const TOUCHPOINTS = [
  {
    when: "Every morning",
    title: "Your daily plan",
    body: "A short, personal plan built from last night’s sleep, resting heart rate and yesterday’s readings.",
  },
  {
    when: "Any time",
    title: "Coach chat",
    body: "Ask about a reading, a symptom or a meal and get answers grounded in your own data and current guidelines.",
  },
  {
    when: "When it matters",
    title: "Timely alerts",
    body: "A gentle nudge when a trend drifts from your normal — and a clear prompt to act when it’s urgent.",
  },
  {
    when: "Before appointments",
    title: "Shared reports",
    body: "7, 30 or 90-day summaries sent to your clinician or family circle, on your terms.",
  },
];

export function Connect() {
  return (
    <section id="connect" className="bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 pt-16 sm:gap-12 sm:px-8 sm:pt-28">
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <Eyebrow>How it connects to you</Eyebrow>
          <SectionHeading>
            Guidance that shows up <em>where you already are.</em>
          </SectionHeading>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-line">
          {TOUCHPOINTS.map((t) => (
            <div key={t.title} className="flex flex-col gap-2 border-b border-line py-5 pr-4 sm:gap-2.5 sm:py-7 sm:pr-7">
              <div className="flex items-center gap-2.5 text-[13px] font-semibold text-crimson">
                <span className="size-2 rounded-full bg-crimson" />
                {t.when}
              </div>
              <h3 className="m-0 text-[19px] font-semibold">{t.title}</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-pretty text-body">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
