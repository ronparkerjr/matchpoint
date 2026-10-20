import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, MapPin, Clock, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import {
  trackCourtBookingClick,
  trackCtaClick,
  trackLessonInquiryClick,
  trackPhoneClick,
} from "@/lib/analytics";

export type LandingFaq = { q: string; a: string };

export type LandingConversion = "court_booking" | "lesson_inquiry" | "cta";

export type LandingCta = { label: string; to: string; conversion?: LandingConversion };

export interface LocalLandingProps {
  h1: string;
  subtitle: string;
  intro: string[];
  highlightsTitle: string;
  highlights: { title: string; body: string }[];
  bullets: string[];
  faqs: LandingFaq[];
  ctaTitle: string;
  ctaBody: string;
  primaryCta: LandingCta;
  secondaryCta?: LandingCta;
  relatedLinks: { label: string; to: string }[];
}

const fireConversion = (cta: LandingCta) => {
  const payload = { label: cta.label };
  if (cta.conversion === "court_booking") trackCourtBookingClick(payload);
  else if (cta.conversion === "lesson_inquiry") trackLessonInquiryClick(payload);
  else trackCtaClick(payload);
};


const LocalLanding = ({
  h1,
  subtitle,
  intro,
  highlightsTitle,
  highlights,
  bullets,
  faqs,
  ctaTitle,
  ctaBody,
  primaryCta,
  secondaryCta,
  relatedLinks,
}: LocalLandingProps) => {
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

      <PageHero title={h1} subtitle={subtitle} />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {intro.map((p) => (
            <p key={p.slice(0, 24)} className="text-muted-foreground leading-relaxed mb-5 text-lg">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" aria-hidden="true" />
              350 McCormick Blvd, Columbus, OH
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primary" aria-hidden="true" />
              Mon–Fri 7 AM – 11 PM, Sat–Sun 7 AM – 10 PM
            </span>
            <a
              href="tel:6145692556"
              onClick={() => trackPhoneClick()}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone size={16} className="text-primary" aria-hidden="true" />
              614-569-2556
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-10">{highlightsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <article key={h.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl text-bright mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </article>
            ))}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <Check size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-xl text-bright mb-2">{f.q}</dt>
                <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">{ctaTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={primaryCta.to}
              onClick={() => fireConversion(primaryCta)}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                onClick={() => fireConversion(secondaryCta)}
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold text-bright hover:bg-secondary transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          <nav aria-label="Related pages" className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {relatedLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-foreground underline transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default LocalLanding;
