import type { ReactNode } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Eyebrow } from "@/components/ui";

export const PRIVACY_EMAIL = "privacy@leirahealth.com";

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="m-0 text-[22px] font-semibold tracking-[-.01em] text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-ink/80 [&_a]:text-crimson [&_a]:underline [&_li]:ml-5 [&_li]:list-decimal [&_li]:pl-1 [&_ul_li]:list-disc [&_ol_li]:list-decimal">
        {children}
      </div>
    </section>
  );
}

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-[760px] flex-1 px-4 py-12 sm:px-8 sm:py-16">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-3 mb-0 text-[clamp(34px,5vw,52px)] leading-[1.06] font-semibold tracking-[-.025em] text-ink">
          {title}
        </h1>
        <p className="mt-3 text-[14px] text-subtle">Last updated: {updated}</p>
        <p className="mt-6 text-[16px] leading-relaxed text-ink/80">{intro}</p>
        {children}
      </main>
      <Footer />
    </div>
  );
}
