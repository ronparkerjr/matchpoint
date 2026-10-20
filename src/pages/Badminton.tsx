import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const highlights = [
  {
    title: "Convertible Indoor Courts",
    body: "Several of our 38 indoor courts convert to regulation badminton, with high ceilings, cushioned flooring, and no wind or sun to fight.",
  },
  {
    title: "Open Play & Reserved Time",
    body: "Reserve a badminton court by the hour or join social open play sessions. Non-members are welcome with a drop-in pass.",
  },
  {
    title: "Badminton Membership",
    body: "A dedicated $49/month badminton membership includes 4 hours of court use per week and 7-day advance booking. Pickleball not included.",
  },
  {
    title: "Groups & Events",
    body: "Book multiple courts for club nights, school groups, corporate outings, or family gatherings.",
  },
];

const faqs = [
  {
    q: "Where can I play indoor badminton in Columbus, Ohio?",
    a: "Match Point Pickleball Club at 350 McCormick Blvd, Columbus, OH converts several of its 38 indoor courts to regulation badminton, open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM with free parking.",
  },
  {
    q: "How do I reserve a badminton court?",
    a: "Book online through our CourtReserve portal from the Reserve a Court page, or call 614-569-2556 and the front desk will set up your court time.",
  },
  {
    q: "Do I need a membership to play badminton?",
    a: "No. You can rent a court by the hour or buy a drop-in pass. Our $49/month Badminton Membership adds advance booking and member rates.",
  },
  {
    q: "Do you provide rackets and shuttles?",
    a: "Bring your own racket if you have one. Ask at the front desk about loaner equipment and shuttles available in the pro shop.",
  },
];

const Badminton = () => {
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <PageHero
        title="Badminton"
        subtitle="Indoor, climate-controlled badminton courts in Columbus, Ohio — open play, hourly rentals, and a dedicated membership."
        image="/images/badminton-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-6">Indoor Badminton in Columbus, OH</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Match Point Pickleball Club is one of Central Ohio's largest indoor sports facilities, and badminton is part
              of the lineup. Several courts convert to regulation badminton with high ceilings and cushioned flooring, so
              you get true indoor conditions every day of the year — no wind, no glare, no cancellations.
            </p>
            <p>
              Play socially with friends, book a standing weekly court, or bring a group and reserve several courts side by
              side. We're at 350 McCormick Blvd, just off I-270, with free on-site parking, locker rooms, a pro shop, and a
              café for after your match.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((h) => (
              <article key={h.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-2xl text-bright mb-3">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.body}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/reserve-a-court"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Reserve a Badminton Court
            </Link>
            <Link
              to="/memberships/badminton-member"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Badminton Membership
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-8">Badminton FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Badminton;
