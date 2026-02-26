import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, FAQ_ITEMS } from "./constants";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Dayaan OnChain",
      jobTitle: "Crypto Trading Mentor",
      description:
        "Self-taught crypto trader with 6+ years experience across 3 market cycles. Founder of Tall Poppy University.",
    },
  };
}

export function generateProductSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Trade with Dayaan — Monthly Membership",
      description:
        "Real-time crypto trading signals, community access, market analysis, and trading education.",
      offers: {
        "@type": "Offer",
        price: "100",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "100",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "1-1 Mentorship with Dayaan",
      description:
        "Personal mentorship including 1-1 calls, custom strategy development, portfolio review, and priority support.",
      offers: {
        "@type": "Offer",
        price: "1699",
        priceCurrency: "USD",
        availability: "https://schema.org/LimitedAvailability",
      },
    },
  ];
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dayaan OnChain",
    jobTitle: "Crypto Trading Mentor & Founder",
    description:
      "Self-taught crypto trader with 6+ years experience across 3 market cycles. Founder of Tall Poppy University, the ANZ crypto trading community.",
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}
