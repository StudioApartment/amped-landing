import { HeroVideo } from "./hero-video";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#070707] md:min-h-[min(100svh,56rem)]">
      <HeroVideo />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-[90rem] flex-col px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-6 md:min-h-[min(100svh,56rem)] lg:px-10 lg:pb-14">
        <header
          className="animate-amp-reveal relative -mt-[calc(0.25rem+5px)] w-fit origin-top-left pl-0 sm:pl-5 sm:mt-[-5px]"
          style={{ ["--amp-reveal-delay" as string]: "40ms" }}
          aria-label="Amped — New American Energy"
        >
          <div className="w-fit max-w-none origin-top-left scale-[0.8] bg-white pt-1 pb-2 pl-3 pr-4 text-[#070707] sm:pb-2.5 -mb-5 sm:-mb-6">
            <p className="block w-full font-[family-name:var(--font-ranade)] text-[clamp(2.125rem,min(12vw,11dvh),4.125rem)] font-bold uppercase leading-none tracking-[-0.06em]">
              amped
            </p>
            <p className="-mt-1 w-full font-[family-name:var(--font-libre)] text-[calc(0.6875rem*1.35*1.1*0.5)] font-normal uppercase leading-tight tracking-[0.14em] sm:-mt-1.5 sm:text-[calc(0.75rem*1.35*1.1*0.5)] sm:tracking-[0.18em]">
              New American Energy
            </p>
          </div>
        </header>

        <div className="mt-auto flex w-full flex-col items-stretch gap-5 pl-0 pt-10 sm:pl-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10 xl:gap-16">
          <div className="flex min-w-0 max-w-[36rem] flex-col gap-2 text-left sm:gap-2.5 lg:max-w-[min(38rem,52%)]">
            <h1
              className="animate-amp-reveal w-full max-w-[22ch] font-[family-name:var(--font-libre)] text-[1.65rem] font-medium leading-[1.12] tracking-[-0.04em] text-white sm:max-w-none sm:text-[clamp(1.75rem,3.6vw,2.65rem)]"
              style={{ ["--amp-reveal-delay" as string]: "120ms" }}
            >
              Organizing the clean energy revolution
            </h1>
            <p
              className="animate-amp-reveal max-w-md font-[family-name:var(--font-ranade)] text-sm font-medium leading-snug tracking-[-0.04em] text-white sm:text-base"
              style={{ ["--amp-reveal-delay" as string]: "200ms" }}
            >
              <span className="bg-black px-1 py-0.5 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                We build the systems needed to power the clean energy economy.
              </span>
            </p>
          </div>

          <p
            className="animate-amp-reveal max-w-[20rem] text-left font-[family-name:var(--font-libre)] text-base font-medium leading-snug tracking-[-0.03em] text-white sm:max-w-[22rem] sm:text-lg lg:ml-auto lg:max-w-[24rem] lg:pb-0.5 lg:text-right"
            style={{ ["--amp-reveal-delay" as string]: "260ms" }}
          >
            We are commercial operators, investors, and strategists building the
            political and cultural power of the clean energy industry.
          </p>
        </div>
      </div>
    </section>
  );
}
