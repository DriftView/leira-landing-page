import { Photo } from "@/components/ui";
import morningWalk from "@/assets/images/people-morning-walk.jpg";
import doctor from "@/assets/images/people-doctor.jpg";
import family from "@/assets/images/people-family.jpg";

const PEOPLE = [
  {
    src: morningWalk,
    alt: "A woman checking her watch on a morning walk",
    credit: "Photo by Fenghua on Unsplash",
    caption: "Morning walks, measured gently.",
  },
  {
    src: doctor,
    alt: "A man and his doctor reviewing a phone together",
    credit: "Photo by National Cancer Institute on Unsplash",
    caption: "Shared with the people who care for you.",
    offset: true,
  },
  {
    src: family,
    alt: "Grandparent laughing with family at home",
    credit: "Photo by National Cancer Institute on Unsplash",
    caption: "More good years with family.",
  },
];

export function People() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 px-4 pb-28 sm:px-8">
        {PEOPLE.map((p) => (
          <figure key={p.caption} className={`m-0 flex flex-col gap-3.5 ${p.offset ? "md:pt-12" : ""}`}>
            <Photo src={p.src} alt={p.alt} credit={p.credit} className="h-[440px] rounded-[28px] bg-blush" />
            <figcaption className="text-[20px] leading-[1.3] font-medium tracking-[-.01em]">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
