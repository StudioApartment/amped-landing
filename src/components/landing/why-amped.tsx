const bodyClass =
  "font-[family-name:var(--font-ranade)] text-[1.5rem] font-normal leading-[1.22] tracking-[-0.03em] text-white";

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
    <div className={`w-full max-w-[58.75rem] ${className}`}>
      <h2 className="mb-4 text-left font-[family-name:var(--font-libre)] text-[0.6875rem] font-medium uppercase leading-tight tracking-[0.22em] text-white/85 sm:text-xs">
        Why AMPED Exists
      </h2>
      <div className="max-w-[44rem] space-y-6">
        {PARAGRAPHS.map((p) => (
          <p key={p} className={bodyClass}>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
