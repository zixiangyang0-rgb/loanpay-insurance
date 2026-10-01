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
