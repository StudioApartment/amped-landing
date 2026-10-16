const bodyClass =
  "font-[family-name:var(--font-libre)] text-lg font-normal leading-[1.65] tracking-[-0.01em] text-white sm:text-xl sm:leading-[1.7]";

const PARAGRAPHS = [
  "Clean energy has largely won the commercial argument. It’s increasingly the cheapest and fastest energy to build. And it’s a linchpin of our national security and economic interests.",
  "Capital is flowing. Innovation is accelerating. Companies are scaling.",
  "But commercial success has not translated into political or cultural power.",
  "We’re losing arguments we should be winning. We make it too easy for our opponents to define us. And we’ve failed to build the institutions every mature industry eventually needs to protect and advance its success.",
  "That’s where we step in.",
  "AMPED is organizing the political power of clean energy and engaging the public with a unified industry vision: an American energy future powered entirely by our products, delivered cheaper, faster, and more reliably.",
  "We have billions in deployed capital, thousands of exciting companies, and over 3.5 million workers across all 50 states. Our collective potential is limitless.",
  "AMPED is building the systems to unlock it.",
  "If you’re an investor, operator, policy maker, communications ninja, or philanthropist working to build the clean energy economy, please reach out.",
  "We want everyone in.",
];

export function WhyAmped({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto flex w-full max-w-[40rem] flex-col gap-8 sm:max-w-[44rem] sm:gap-10">
        {PARAGRAPHS.map((p, i) => {
          const alignRight = i % 2 === 1;
          return (
            <p
              key={p}
              className={[
                bodyClass,
                "max-w-[28rem] sm:max-w-[32rem]",
                alignRight ? "ml-auto text-right" : "mr-auto text-left",
              ].join(" ")}
            >
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}
