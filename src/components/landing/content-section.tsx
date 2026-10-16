import Link from "next/link";
import { WhyAmped } from "./why-amped";

export function ContentSection() {
  const contactDelay = 440;
  const footerDelay = contactDelay + 80;

  return (
    <section className="bg-[#070707] px-4 pb-[30px] pt-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-1.5 lg:mx-0 lg:max-w-none">
          <h2
            className="animate-amp-reveal w-full max-w-[40rem] font-[family-name:var(--font-ranade)] text-[1.5rem] font-normal leading-[1.22] tracking-[-0.03em] text-white sm:max-w-[44rem]"
            style={{ ["--amp-reveal-delay" as string]: "280ms" }}
          >
            We are commercial operators, investors, and strategists building
            the political and cultural power of the clean energy industry.
          </h2>

          <WhyAmped className="mt-16 sm:mt-20 lg:mt-24" />

          <div
            className="animate-amp-reveal mt-14 lg:mt-16"
            style={{ ["--amp-reveal-delay" as string]: `${contactDelay}ms` }}
          >
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
              ["--amp-reveal-delay" as string]: `${footerDelay}ms`,
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
