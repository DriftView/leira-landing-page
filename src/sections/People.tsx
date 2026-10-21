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
      <div className="swipe-row mx-auto max-w-[1240px] sm:grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3 px-4 pb-16 sm:gap-5 sm:px-8 sm:pb-28">
        {PEOPLE.map((p) => (
          <figure key={p.caption} className={`swipe-item m-0 flex flex-col gap-3.5 ${p.offset ? "md:pt-12" : ""}`}>
            <Photo src={p.src} alt={p.alt} credit={p.credit} className="h-[360px] rounded-[24px] bg-blush sm:h-[440px] sm:rounded-[28px]" />
            <figcaption className="text-[17px] leading-[1.3] font-medium tracking-[-.01em] sm:text-[20px]">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
