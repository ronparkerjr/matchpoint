import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import membershipPdf from "@/assets/matchpoint-membership-2026.pdf.asset.json";

const COURTRESERVE_URL = "https://app.courtreserve.com/Online/Memberships/Public/17037";

const memberships = [
  // Individual
  {
    category: "Individual",
    name: "Drop In",
    price: "$0",
    period: "/ month",
    highlight: false,
    description:
      "No dues, no initiation fee. Pay per open play session ($15 peak / $12 off peak) and per hour of court time ($15/hr doubles peak, $10/hr off peak).",
    features: [
      "Advance booking up to 5 days",
      "PlaySight recording $5/hr · ball machine $35/hr",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/drop-in",
  },
  {
    category: "Individual",
    name: "Tier-1 Serve",
    price: "$49",
    period: "/ month",
    highlight: false,
    description:
      "Half-price open play ($7.50 peak / $6 off peak) plus 3 hours per week of doubles court time. Students just $29/month. $99 initiation fee.",
    features: [
      "3 hrs/week doubles court rentals · singles $15/hr",
      "Advance booking up to 7 days",
      "20% off ball machine · PlaySight $4/hr",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/tier-1-serve",
  },
  {
    category: "Individual",
    name: "Tier-2 Drive",
    price: "$99",
    period: "/ month",
    highlight: false,
    description:
      "Unlimited open play at peak and off peak hours, plus 6 hours per week of doubles court time. $99 initiation fee.",
    features: [
      "Unlimited open play — all hours",
      "6 hrs/week doubles court rentals · singles $15/hr",
      "Advance booking up to 10 days · PlaySight $2/hr",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/tier-2-drive",
  },
  {
    category: "Individual",
    name: "Tier-3 Dink",
    price: "$109",
    period: "/ month",
    highlight: true,
    description:
      "Our top tier: unlimited open play and unlimited doubles court rentals at every hour, singles just $10/hr. $99 initiation fee.",
    features: [
      "Unlimited open play and doubles court rentals",
      "Free PlaySight recording · free bring-your-own machine",
      "Advance booking up to 14 days",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/elite",
  },
  {
    category: "Individual",
    name: "Off Peak Unlimited",
    price: "$49",
    period: "/ month",
    highlight: false,
    description:
      "Unlimited off peak open play and unlimited off peak court rentals (Mon–Fri 7:00 AM–4:00 PM). $99 initiation fee.",
    features: [
      "Unlimited off peak open play and court rentals",
      "Free PlaySight recording",
      "Advance booking up to 14 days",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/off-peak-unlimited",
  },
  {
    category: "Individual",
    name: "Silver Sneakers Basics",
    price: "$0",
    period: "/ month",
    highlight: false,
    description:
      "Age restricted. Included with Silver Sneakers / Renew Active: 3 hours per week of off peak court time and $6 off peak open play.",
    features: [
      "3 hrs/week off peak court rentals",
      "Advance booking up to 7 days",
      "PlaySight $2/hr · 20% off ball machine",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/silver-sneakers",
  },
  {
    category: "Individual",
    name: "Silver Sneakers Plus",
    price: "$49",
    period: "/ month",
    highlight: false,
    description:
      "Age restricted. Unlimited open play at all hours, unlimited off peak court rentals, and half-price peak court time ($7.50/hr doubles).",
    features: [
      "Unlimited open play — all hours",
      "Unlimited off peak court rentals",
      "Advance booking up to 14 days",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/silver-sneakers-plus",
  },
  {
    category: "Individual",
    name: "Badminton Member",
    price: "$49",
    period: "/ month",
    highlight: false,
    description: "Use of badminton courts, 7-day advance booking, 4 hours per week. Pickleball not included.",
    features: [
      "4 hours per week of badminton court use",
      "Reserve up to 7 days in advance",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/badminton-member",
  },
  {
    category: "Individual",
    name: "Table Tennis Member",
    price: "$35",
    period: "/ month",
    highlight: false,
    description: "Includes 4 hours a day of Table Tennis and unlimited Table Tennis open plays.",
    features: [
      "Unlimited Table Tennis open plays",
      "Reserve up to 7 days in advance",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],

    cta: COURTRESERVE_URL,
    detailPath: "/memberships/table-tennis-member",
  },
  // Family
  {
    category: "Family",
    name: "Tier-3 Dink — Family (2 Adults)",
    price: "$149",
    period: "/ month",
    highlight: false,
    description:
      "All Tier-3 Dink benefits for two adults in the same household. $99 initiation fee.",
    features: [
      "Unlimited open play and doubles court rentals",
      "Additional adult $49 · additional minor $29",
      "Advance booking up to 14 days",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/elite-couple",
  },
  {
    category: "Family",
    name: "Tier-3 Dink — Family + 2 Minors",
    price: "$199",
    period: "/ month",
    highlight: false,
    description:
      "All Tier-3 Dink benefits for two adults plus two minor children in the same household. $99 initiation fee.",
    features: [
      "Unlimited open play and doubles court rentals",
      "Additional minor child $29 each",
      "Advance booking up to 14 days",
      "Cancellation policy applies unless cancelled at least 24 hours in advance",
    ],
    cta: COURTRESERVE_URL,
    detailPath: "/memberships/elite-family",
  },
];

const categoryOrder = ["Individual", "Family"];

const groupedMemberships = categoryOrder.reduce((acc, cat) => {
  const items = memberships.filter((m) => m.category === cat);
  if (items.length) acc.push({ label: cat, items });
  return acc;
}, [] as { label: string; items: typeof memberships }[]);

const comparisonColumns = [
  "Drop In",
  "Tier-1 Serve",
  "Tier-2 Drive",
  "Tier-3 Dink",
  "Off Peak Unlimited",
  "Silver Sneakers Basics",
  "Silver Sneakers Plus",
];

const comparisonRows: { section: string; rows: [string, ...string[]][] }[] = [
  {
    section: "Pricing & Dues",
    rows: [
      ["Monthly Dues", "$0", "$49", "$99", "$109 indiv. / $149 (family 2) / $199 (family + 2 minors)", "$49", "$0", "$49"],
      ["Initiation Fee", "—", "$99", "$99", "$99", "$99", "—", "—"],
    ],
  },
  {
    section: "Open Play Access",
    rows: [
      ["Peak Hours", "$15", "$7.50", "Unlimited", "Unlimited", "$15", "$15", "Unlimited"],
      ["Off Peak Hours", "$12", "$6", "Unlimited", "Unlimited", "Unlimited", "$6", "Unlimited"],
    ],
  },
  {
    section: "Court Rentals",
    rows: [
      [
        "Peak Hours",
        "Doubles $15/hr · Singles $20/hr",
        "3 hrs/wk doubles · Singles $15/hr",
        "6 hrs/wk doubles · Singles $15/hr",
        "Unlimited doubles · Singles $10/hr",
        "Doubles $15/hr · Singles $20/hr",
        "Doubles $15/hr · Singles $20/hr",
        "Doubles $7.50/hr · Singles $10/hr",
      ],
      [
        "Off Peak Hours",
        "Doubles $10/hr · Singles $15/hr",
        "—",
        "—",
        "Unlimited",
        "Unlimited",
        "3 hrs/wk off peak",
        "Unlimited",
      ],
    ],
  },
  {
    section: "Amenities & Extras",
    rows: [
      ["Ball Machine (/hr)", "$35", "20% off ($28)", "20% off", "20% off", "20% off", "20% off", "20% off"],
      ["Bring Own Machine (off peak only)", "$30", "$20", "$20", "Free", "Free", "$20", "Free"],
      ["PlaySight Recording (/hr)", "$5", "$4", "$2", "Free", "Free", "$2", "$2"],
    ],
  },
  {
    section: "Booking & Policies",
    rows: [
      ["Advance Booking", "5 days", "7 days", "10 days", "14 days", "14 days", "7 days", "14 days"],
      ["No-penalty Cancellation", "24 hours", "24 hours", "24 hours", "24 hours", "24 hours", "24 hours", "24 hours"],
    ],
  },
];

const faqs = [
  {
    q: "What are the monthly dues and initiation fees?",
    a: "Drop In and Silver Sneakers Basics have no monthly dues and no initiation fee. Most other tiers (Tier-1 Serve, Tier-2 Drive, Tier-3 Dink, Off Peak Unlimited, Silver Sneakers Plus, Badminton, and Table Tennis) carry a one-time $99 initiation fee. Tier-1 Serve is $49/month, Tier-2 Drive is $99/month, Tier-3 Dink is $109/month (or $149 for a family couple / $199 for a family plus two minors), and Off Peak Unlimited is $49/month. Students can join Tier-1 Serve for just $29/month.",
  },
  {
    q: "What are peak and off-peak hours?",
    a: "Off peak hours are Monday through Friday, 7:00 AM to 4:00 PM. All other times — including nights, weekends, and holidays — are considered peak hours. Off Peak Unlimited and Silver Sneakers memberships are built around off-peak access, while Tier-2 Drive, Tier-3 Dink, and Silver Sneakers Plus include unlimited peak and off-peak open play.",
  },
  {
    q: "How much court rental time is included with each membership?",
    a: "Drop In pays per hour ($15/hr doubles peak, $10/hr off peak). Tier-1 Serve includes 3 hours of doubles court time per week. Tier-2 Drive includes 6 hours per week. Tier-3 Dink includes unlimited doubles court rentals. Off Peak Unlimited includes unlimited off-peak court rentals. Silver Sneakers Basics includes 3 hours per week off peak. Silver Sneakers Plus includes unlimited off-peak rentals and half-price peak rentals. Singles court rates are separate for most tiers.",
  },
  {
    q: "Can I add family members or minors to my membership?",
    a: "Yes. Tier-3 Dink Family plans include two adults for $149/month or two adults plus two minors for $199/month. You can add an additional adult for $49/month and each additional minor for $29/month. All family members must be in the same household.",
  },
  {
    q: "Are student or senior discounts available?",
    a: "Students receive Tier-1 Serve at a discounted $29/month instead of $49. Silver Sneakers and Renew Active members can use Silver Sneakers Basics at no monthly cost, or upgrade to Silver Sneakers Plus for $49/month with broader access.",
  },
  {
    q: "Do members get discounts on amenities?",
    a: "Yes. Most paid tiers receive 20% off the ball machine, and the PlaySight recording rate drops from $5/hr (Drop In) down to free for Tier-3 Dink and Off Peak Unlimited. Tier-3 Dink also allows you to bring your own machine for free during off-peak hours. All members receive 10% off pro shop purchases.",
  },
  {
    q: "Is there an annual membership discount?",
    a: "Absolutely. Pay for 12 months in advance and receive the 13th month free. This applies to annual membership commitments.",
  },
  {
    q: "How far in advance can I book courts and open play?",
    a: "Booking windows vary by tier: Drop In up to 5 days, Tier-1 Serve and Silver Sneakers Basics up to 7 days, Tier-2 Drive up to 10 days, and Tier-3 Dink, Off Peak Unlimited, and Silver Sneakers Plus up to 14 days.",
  },
  {
    q: "What is the cancellation policy for reservations?",
    a: "The cancellation policy applies when a reservation is not cancelled at least 24 hours before the scheduled start time. Late cancellations may be subject to a fee or loss of that session.",
  },
];

const Memberships = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Memberships
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Options and benefits for every player — from pay-as-you-play Drop In to unlimited Tier-3 Dink.
              Pay for 12 months and get your 13th month free.
            </p>
            <a
              href={membershipPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Membership Options &amp; Benefits (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {groupedMemberships.map(({ label, items }) => (
            <div key={label} className="mb-14">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {label}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`relative rounded-xl border p-6 flex flex-col ${
                      plan.highlight
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    </div>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {plan.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={plan.detailPath}
                      className="block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all mb-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Link>

                    <a
                      href={plan.cta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all bg-primary text-primary-foreground hover:opacity-90"
                    >
                      <span className="block">Join Now</span>
                      <span className="block text-xs font-normal opacity-80 mt-0.5">
                        (Clicking takes you to our Court Reserve)
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="pb-16 border-t border-border pt-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Compare Memberships
          </h2>
          <p className="text-muted-foreground mb-8">
            Full pricing, perks, and facility access — same details as our printed membership flyer.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm min-w-[900px]">
              <caption className="sr-only">Match Point membership options, pricing and benefits by tier</caption>
              <thead>
                <tr className="bg-muted/50">
                  <th scope="col" className="text-left font-bold text-foreground px-4 py-3 border-b border-border">
                    Benefit / Tier
                  </th>
                  {comparisonColumns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="text-left font-bold text-foreground px-4 py-3 border-b border-border whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ section, rows }) => (
                  <Fragment key={section}>
                    <tr className="bg-primary/5">
                      <th
                        scope="colgroup"
                        colSpan={comparisonColumns.length + 1}
                        className="text-left font-bold uppercase tracking-wider text-xs text-primary px-4 py-2 border-b border-border"
                      >
                        {section}
                      </th>
                    </tr>
                    {rows.map((row) => (
                      <tr key={`${section}-${row[0]}`} className="border-b border-border last:border-0">
                        <th scope="row" className="text-left font-medium text-foreground px-4 py-3 align-top">
                          {row[0]}
                        </th>
                        {row.slice(1).map((cell, i) => (
                          <td key={`${row[0]}-${comparisonColumns[i]}`} className="text-muted-foreground px-4 py-3 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>Off peak hours are Monday–Friday 7:00 AM to 4:00 PM. All other times are considered peak hours.</li>
            <li>Tier-3 family add-ons: additional minor child $29 each, additional adult $49 each.</li>
            <li>Students receive Tier-1 Serve at $29 instead of $49.</li>
            <li>All members receive 10% off pro shop purchases.</li>
            <li>Annual memberships: pay for 12 months and receive the 13th month free.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="membership-faq" className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Membership FAQ
          </h2>
          <p className="text-muted-foreground mb-10">
            Answers to the most common questions about dues, access, rentals, and add-ons.
          </p>

          <dl className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="bg-card border border-border rounded-lg p-6">
                <dt className="font-bold text-lg text-foreground mb-2">{f.q}</dt>
                <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Trackman Golf */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Looking for Trackman Golf?
          </h2>
          <p className="text-muted-foreground mb-6">
            Golf memberships and simulator info are managed through our dedicated Trackman page. Click below for rates, availability, and booking details.
          </p>
          <a
            href="/trackman-golf"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Visit Our Trackman Golf Page
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Visit us or reach out — we're happy to help you find the perfect membership for your playing style and schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={COURTRESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Plans on CourtReserve
            </a>
            <a
              href={membershipPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download the PDF
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Memberships;
