import Link from "next/link";

export function ContentSection() {
  return (
    <section className="bg-[#070707] px-4 pb-[30px] pt-20 sm:px-6 sm:pt-24 lg:px-10 lg:pt-28">
      <div className="mx-auto max-w-[90rem]">
        <div className="mx-auto flex w-full max-w-[58.75rem] flex-col items-start gap-1.5 text-left">
          <h2 className="w-full max-w-[52rem] font-[family-name:var(--font-libre)] text-[1.5rem] font-medium leading-[1.02] tracking-[-0.04em] text-white sm:max-w-[56rem] sm:text-[clamp(1.65rem,3.6vw,2.35rem)]">
            We are commercial operators, investors, &amp; strategists.
          </h2>
          <p className="max-w-[40rem] font-[family-name:var(--font-ranade)] text-lg font-normal leading-snug tracking-[-0.03em] text-white sm:max-w-[44rem] sm:text-xl sm:leading-[1.3]">
            Focused on strengthening the political, cultural, and market infrastructure
            required for the energy transition to scale.
          </p>

          <div className="mt-5 w-full lg:mt-6">
            <Link
              href="mailto:contact@amped.org"
              className="amp-button-cycle inline-flex h-[3.3rem] min-w-[9.7rem] items-center justify-center border border-white bg-black px-7 font-[family-name:var(--font-ranade)] text-base font-bold leading-tight tracking-[-0.04em] text-white transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          <p
            className="animate-amp-reveal mt-[120px] flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-xs leading-relaxed text-white/30"
            style={{
              ["--amp-reveal-delay" as string]: "520ms",
            }}
          >
            <span
              aria-hidden="true"
              className="amp-mark-spin flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-current pt-px text-[13px] font-normal leading-none"
            >
              A
            </span>
            <span>Copyright 2026 – All Rights Reserved</span>
          </p>
        </div>
      </div>
    </section>
  );
}
