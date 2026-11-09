import { LeiraMark } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 py-8 text-[13px] text-subtle sm:gap-5 sm:px-8 sm:py-9">
        <span className="flex items-center gap-2 text-[22px] font-semibold tracking-[-.02em] text-ink">
          <LeiraMark height={28} />
          Leira
        </span>
        <span className="max-w-[560px] leading-normal">
          Leira provides wellness guidance and does not replace professional medical advice. In an emergency, call your
          local emergency number.
        </span>
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href="/privacy-policy" className="transition-colors hover:text-crimson">
            Privacy Policy
          </a>
          <a href="/delete-account" className="transition-colors hover:text-crimson">
            Delete account
          </a>
          <span>© {new Date().getFullYear()} Leira Health</span>
        </span>
      </div>
    </footer>
  );
}
