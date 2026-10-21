import { Eyebrow, Photo, SectionHeading } from "@/components/ui";
import hypertension from "@/assets/images/uc-hypertension.jpg";
import rhythm from "@/assets/images/uc-rhythm.jpg";
import recovery from "@/assets/images/uc-recovery.jpg";
import heartFailure from "@/assets/images/uc-heart-failure.jpg";
import prevention from "@/assets/images/uc-prevention.jpg";
import caregiving from "@/assets/images/uc-caregiving.jpg";

const CASES = [
  {
    tag: "Hypertension",
    title: "Bring blood pressure into range",
    body: "Home readings, medication reminders and lifestyle steps matched to guideline targets — with trends your doctor can act on.",
    src: hypertension,
    alt: "A person taking a blood pressure reading at home",
    credit: "Photo by Mockup Graphics on Unsplash",
  },
  {
    tag: "Irregular rhythm",
    title: "Catch and log AF episodes",
    body: "Wearable ECG and pulse checks flag possible irregular rhythm, so episodes are recorded, not forgotten.",
    src: rhythm,
    alt: "Someone pausing to check a pulse on a smartwatch",
    credit: "Photo by Luke Chesser on Unsplash",
  },
  {
    tag: "Recovery",
    title: "Cardiac rehab, at home",
    body: "After a heart attack, stent or surgery: safe heart-rate zones, paced activity goals and check-ins with your rehab team.",
    src: recovery,
    alt: "A patient walking with a rehab nurse",
    credit: "Photo by Centre for Ageing Better on Unsplash",
  },
  {
    tag: "Heart failure",
    title: "Spot early warning signs",
    body: "Daily weight, breathlessness and activity trends surface changes early — before they become a hospital visit.",
    src: heartFailure,
    alt: "An older woman smiling at home",
    credit: "Photo by Pete Walls on Unsplash",
  },
  {
    tag: "Prevention",
    title: "Lower your risk early",
    body: "For high cholesterol, diabetes or a family history: coaching on sleep, movement, stress and diet that adapts as you improve.",
    src: prevention,
    alt: "Friends jogging together outdoors",
    credit: "Photo by Khanh Do on Unsplash",
  },
  {
    tag: "Caregiving",
    title: "Peace of mind for family",
    body: "Invite loved ones to a family circle with summary, full or alerts-only access to someone’s heart health.",
    src: caregiving,
    alt: "Adult child sitting with an elderly parent",
    credit: "Photo by Iwaria Inc. on Unsplash",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 pt-24 pb-28 sm:px-8">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <Eyebrow>Best use cases</Eyebrow>
          <SectionHeading>
            Built for the moments <em>hearts need watching.</em>
          </SectionHeading>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {CASES.map((c) => (
            <article key={c.tag} className="flex flex-col gap-3.5 rounded-[28px] bg-blush p-8">
              <Photo
                src={c.src}
                alt={c.alt}
                credit={c.credit}
                className="-mx-5 -mt-5 mb-1.5 h-[220px] rounded-[20px] bg-blush-strong"
              />
              <div className="text-xs font-semibold tracking-[.12em] text-crimson-deep uppercase">{c.tag}</div>
              <h3 className="m-0 text-[24px] leading-[1.15] font-semibold tracking-[-.015em]">{c.title}</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-pretty text-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
