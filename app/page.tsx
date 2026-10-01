const estimators = [
  {
    title: "Auto Insurance Estimator",
    description:
      "See what shapes a car insurance premium, from driving history and mileage to deductibles and liability limits.",
  },
  {
    title: "Home Insurance Estimator",
    description:
      "Walk through rebuilding cost, location risk, and coverage add-ons that influence a homeowners policy.",
  },
  {
    title: "Life Insurance Needs",
    description:
      "Estimate how much coverage your family may need based on income, debts, and future expenses.",
  },
  {
    title: "Pet Insurance Guide",
    description:
      "Compare accident-only plans versus comprehensive coverage and learn how deductibles affect vet bills.",
  },
  {
    title: "Renters Insurance Basics",
    description:
      "Understand personal-property coverage, liability protection, and why landlords often require a policy.",
  },
  {
    title: "State Insurance Guides",
    description:
      "Browse state-by-state notes on minimum coverage rules and shopping tips for local requirements.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <section className="py-14 text-center sm:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">
          Educational insurance hub
        </p>
        <h1 className="hero-title mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Understand insurance costs before you talk to an agent
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          LoanPay Insurance offers simple estimators and plain-English guides
          for auto, home, life, pet, and renters coverage. Explore realistic
          cost ranges, learn the vocabulary insurers use, and arrive prepared
          for a productive conversation with a licensed professional.
        </p>
      </section>

      <section aria-label="Insurance estimators" className="pb-8">
        <h2 className="text-2xl font-semibold">Start with an estimator</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Each guide below is coming soon as an interactive worksheet. For now,
          use these overviews to learn which inputs matter most.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {estimators.map((item) => (
            <article
              key={item.title}
              className="glass-card rounded-2xl p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-amber-200/70">
                Guide in progress
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-label="Trust and responsibility"
        className="glass-panel mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-xl font-semibold text-white">
          A careful note on insurance decisions
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Insurance is a regulated product, and prices depend on personal risk
          factors, carrier filings, and state rules that change over time. Our
          figures are educational estimates built from publicly described rating
          factors — they are not quotes, and they do not guarantee eligibility
          or pricing from any carrier. Policy language always controls over any
          summary you read here. Before you buy, cancel, or change coverage,
          please consult a licensed insurance agent or broker in your state who
          can review your situation and confirm details with the carrier.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Disclaimer: content on insurance.loanpaylogic.com is for general
          education only and is not professional insurance, legal, or financial
          advice. Coverage availability and rates vary by insurer and location.
        </p>
      </section>

      <div className="py-10" />
    </div>
  );
}
