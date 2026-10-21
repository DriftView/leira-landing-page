import { Eyebrow, Photo } from "@/components/ui";
import forYou from "@/assets/images/for-you.jpg";
import forClinicians from "@/assets/images/for-clinicians.jpg";
import type { ReactNode } from "react";

function AudienceCard({
  id,
  surface,
  photoBg,
  dot,
  eyebrow,
  eyebrowClass,
  heading,
  points,
  photo,
}: {
  id: string;
  surface: string;
  photoBg: string;
  dot: string;
  eyebrow: string;
  eyebrowClass: string;
  heading: ReactNode;
  points: string[];
  photo: { src: string; alt: string; credit: string };
}) {
  return (
    <div id={id} className={`flex flex-col gap-[22px] rounded-[32px] p-8 text-white sm:p-11 ${surface}`}>
      <Photo
        {...photo}
        className={`-mx-4 -mt-4 mb-1.5 h-[300px] rounded-[22px] sm:-mx-7 sm:-mt-7 ${photoBg}`}
      />
      <Eyebrow className={eyebrowClass}>{eyebrow}</Eyebrow>
      <h2 className="m-0 text-[clamp(30px,3.4vw,44px)] leading-[1.08] font-semibold tracking-[-.025em] text-balance [&_em]:opacity-80">
        {heading}
      </h2>
      <ul className="m-0 flex list-none flex-col gap-3.5 p-0 text-base leading-[1.45]">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className={`mt-2 size-1.5 flex-none rounded-full ${dot}`} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Audiences() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5 px-4 py-28 sm:px-8">
        <AudienceCard
          id="you"
          surface="bg-crimson"
          photoBg="bg-crimson-deep"
          dot="bg-white"
          eyebrow="For you"
          eyebrowClass="text-white/90"
          heading={
            <>
              A coach that learns <em>your</em> heart.
            </>
          }
          points={[
            "Daily guidance tuned to your readings, not averages",
            "Early nudges when something drifts from your normal",
            "Share reports with family or your care team in a tap",
          ]}
          photo={{
            src: forYou,
            alt: "A person smiling while reading guidance on their phone",
            credit: "Photo by Elizeu Dias on Unsplash",
          }}
        />
        <AudienceCard
          id="clinicians"
          surface="bg-ink"
          photoBg="bg-ink-line"
          dot="bg-crimson-ink"
          eyebrow="For clinicians"
          eyebrowClass="text-crimson-ink"
          heading={
            <>
              Continuous context, <em>between visits.</em>
            </>
          }
          points={[
            "Guideline-referenced summaries of each patient’s trends",
            "Prioritised flags so attention goes where it’s needed",
            "Patient-consented data, shared on their terms",
          ]}
          photo={{
            src: forClinicians,
            alt: "A clinician talking warmly with a patient",
            credit: "Photo by National Cancer Institute on Unsplash",
          }}
        />
      </div>
    </section>
  );
}
