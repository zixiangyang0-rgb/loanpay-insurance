type Variant = "health" | "flood" | "general";

type SourceLink = {
  href: string;
  label: string;
  blurb: string;
};

const PRESETS: Record<Variant, { gov: SourceLink; authority: SourceLink }> = {
  health: {
    gov: {
      href: "https://www.healthcare.gov/",
      label: "HealthCare.gov — Marketplace coverage & subsidies",
      blurb: "Federal enrollment dates, plan tiers, and premium-tax-credit rules.",
    },
    authority: {
      href: "https://www.iii.org/",
      label: "Insurance Information Institute — Health insurance basics",
      blurb: "Independent explainer on how health coverage and cost-sharing work.",
    },
  },
  flood: {
    gov: {
      href: "https://www.floodsmart.gov/",
      label: "FloodSmart.gov — NFIP rates, zones & waiting periods",
      blurb: "Official NFIP source for flood maps, coverage limits, and costs.",
    },
    authority: {
      href: "https://www.iii.org/",
      label: "Insurance Information Institute — Flood insurance facts",
      blurb: "Independent explainer on flood risk, NFIP vs. private options.",
    },
  },
  general: {
    gov: {
      href: "https://www.usa.gov/insurance",
      label: "USA.gov — Insurance guidance (auto, home, life & health)",
      blurb: "Federal portal linking to state regulators and insurance programs.",
    },
    authority: {
      href: "https://www.iii.org/",
      label: "Insurance Information Institute — Insurance basics",
      blurb: "Independent research and explainers on coverage types and pricing.",
    },
  },
};

export default function OfficialSources({ variant }: { variant: Variant }) {
  const preset = PRESETS[variant];
  const links = [preset.gov, preset.authority];
  return (
    <section className="glass-panel mt-10 rounded-2xl p-6 sm:p-8" aria-label="Official sources">
      <h2 className="text-xl font-semibold text-white">Official sources</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        Verify key facts against these primary sources before you buy.
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-300 sm:text-base">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline hover:text-amber-100"
            >
              {link.label}
            </a>{" "}
            — {link.blurb}
          </li>
        ))}
      </ul>
    </section>
  );
}
