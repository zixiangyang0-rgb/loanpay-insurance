import Script from "next/script";

const SITE_URL = "https://insurance.loanpaylogic.com";
const ORG_NAME = "LoanPay Insurance";

export type FaqItem = {
  question: string;
  answer: string;
};

function stripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

interface Faq {
  q: string;
  a: string;
}

const BASE = "https://insurance.loanpaylogic.com";

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#org`,
        name: "LoanPay Insurance",
        url: BASE,
        email: "support@loanpaylogic.com",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "LoanPay Insurance",
        publisher: { "@id": `${BASE}/#org` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleFaqJsonLd({
  path,
  headline,
  description,
  faqs,
  dateModified = "2026-10-01",
}: {
  path: string;
  headline: string;
  description: string;
  faqs: Faq[];
  dateModified?: string;
}) {
  const url = `${BASE}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        description,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "LoanPay Insurance", url: BASE },
        publisher: { "@id": `${BASE}/#org` },
        datePublished: "2026-01-15",
        dateModified,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type GuideSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: FaqItem[];
};

/**
 * Per-article Article + FAQPage + BreadcrumbList JSON-LD.
 * Isomorphic port of guides' GuideSchema, adapted to insurance branding.
 * FAQ answers are plain text (HTML stripped) to keep validation clean.
 */
export function GuideSchema({
  title,
  description,
  slug,
  datePublished = "2026-10-01",
  dateModified = "2026-10-01",
  faqs = [],
}: GuideSchemaProps) {
  const pageUrl = `${SITE_URL}/${slug}`;
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished,
      dateModified,
      author: {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
      },
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: pageUrl,
        },
      ],
    },
  ];

  const cleanFaqs = faqs
    .map((f) => ({
      question: stripHtml(f.question).slice(0, 300),
      answer: stripHtml(f.answer).slice(0, 1000),
    }))
    .filter((f) => f.question.length > 0 && f.answer.length > 0);

  if (cleanFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: cleanFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  const json = { "@context": "https://schema.org", "@graph": graph };
  return (
    <Script
      id={`insurance-ld-${slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/** Editorial byline shown under each insurance guide hero. */
export function Byline({ updated = "October 2026" }: { updated?: string }) {
  return (
    <p className="mt-4 text-sm leading-relaxed opacity-80">
      By <span className="font-medium">LoanPay Insurance Editorial Team</span> · Updated: {updated} ·
      Educational guide, not financial advice.
    </p>
  );
}
