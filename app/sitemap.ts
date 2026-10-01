import type { MetadataRoute } from "next";

const BASE = "https://insurance.loanpaylogic.com";

const routes = [
  "",
  "/term-life-insurance-calculator",
  "/whole-life-vs-term-life",
  "/how-much-life-insurance-do-i-need",
  "/life-insurance-cost-by-age-chart",
  "/health-insurance-marketplace-guide-2026",
  "/hsa-vs-fsa-guide",
  "/auto-insurance-cost-calculator",
  "/liability-vs-full-coverage-auto",
  "/homeowners-insurance-cost-guide",
  "/renters-insurance-guide",
  "/flood-insurance-guide",
  "/umbrella-insurance-explained",
  "/disability-insurance-guide",
  "/long-term-care-insurance-guide",
  "/pet-insurance-guide",
  "/travel-insurance-guide",
  "/insurance-deductible-explained",
  "/copay-vs-coinsurance-vs-deductible",
  "/how-insurance-premiums-are-calculated",
  "/bundling-home-auto-insurance",
  "/california-homeowners-insurance-guide",
  "/florida-homeowners-insurance-guide",
  "/texas-auto-insurance-guide",
  "/new-york-health-insurance-guide",
  "/insurance-claims-process-guide",
  "/about",
  "/contact",
  "/disclaimer",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-01");
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/term") || route.startsWith("/health") ? 0.9 : 0.8,
  }));
}
