import { Eyebrow, Photo, SectionHeading } from "@/components/ui";
import members from "@/assets/images/who-members.jpg";

const AUDIENCE = [
  { title: "Adults with high blood pressure", body: "Diagnosed or borderline, on medication or not." },
  { title: "People with AF or other arrhythmias", body: "Who want episodes tracked between appointments." },
  { title: "Patients recovering from a cardiac event", body: "Heart attack, stent, bypass or valve surgery." },
  { title: "People living with heart failure", body: "Who need daily symptom and weight monitoring." },
  {
    title: "Anyone at elevated risk",
    body: "Diabetes, high cholesterol, smoking history or family history of heart disease.",
  },
  { title: "Caregivers and family", body: "Supporting a parent or partner with a heart condition." },
  {
    title: "Clinicians and care teams",
    body: "Cardiologists, GPs, cardiac nurses and rehab specialists monitoring patients remotely.",
  },
];

export function WhoShouldJoin() {
  return (
    <section id="who" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-14 px-4 py-28 sm:px-8">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow className="text-crimson-ink">Who should join</Eyebrow>
          <SectionHeading accent="[&_em]:text-crimson-ink">
            If your heart needs attention, <em>Leira is for you.</em>
          </SectionHeading>
          <p className="m-0 max-w-[460px] text-base leading-[1.55] text-ink-muted">
            Onboarding takes a few minutes: connect a wearable, add your conditions and medication, and invite your
            clinician if you have one.
          </p>
          <a
            href="#download"
            className="mt-2 flex h-[52px] items-center self-start rounded-full bg-crimson px-[26px] text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Start onboarding
          </a>
          <Photo
            src={members}
            alt="A diverse group of Leira members"
            credit="Photo by Eli Ayeke on Unsplash"
            className="mt-6 h-[380px] rounded-[28px] bg-ink-line"
          />
        </div>
        <ol className="m-0 flex list-none flex-col p-0">
          {AUDIENCE.map((a, i) => (
            <li
              key={a.title}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-3.5 border-t border-ink-line py-5 last:border-b"
            >
              <span className="text-[20px] leading-none font-semibold text-crimson-ink">{i + 1}</span>
              <div className="flex flex-col gap-1">
                <span className="text-[17px] font-semibold">{a.title}</span>
                <span className="text-sm leading-normal text-ink-muted">{a.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
