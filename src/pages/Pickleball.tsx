import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import LocalProgramLinks from "@/components/LocalProgramLinks";

const playFormats = [
  {
    title: "Open Play",
    body: "Rotating, skill-leveled open play runs throughout the day, from 2.5 beginners to 4.5+ advanced. Come alone or with friends — paddles are matched in and games start fast.",
  },
  {
    title: "Reserved Court Time",
    body: "Book a specific court by the hour for singles, doubles, or private practice. Members reserve further in advance and at lower rates.",
  },
  {
    title: "Leagues",
    body: "Men's, women's, and mixed leagues plus ladder and travel formats run year-round on our 38 indoor courts.",
  },
  {
    title: "Lessons & Clinics",
    body: "Private lessons, group clinics, and beginner classes with certified pros — including loaner paddles for first-timers.",
  },
  {
    title: "Tournaments & Events",
    body: "Sanctioned and club tournaments, charity events, and corporate outings on championship and stadium courts with PlaySight streaming.",
  },
  {
    title: "Junior & Family Play",
    body: "Family-friendly court times and junior programming so the whole household can play indoors, any season.",
  },
];

const faqs = [
  {
    q: "Where can I play indoor pickleball in Columbus, Ohio?",
    a: "Match Point Pickleball Club at 350 McCormick Blvd, Columbus, OH has 38 indoor, climate-controlled championship-size courts with CushionX surfacing, open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM every day of the year.",
  },
  {
    q: "Do I need a membership to play pickleball here?",
    a: "No. Non-members can buy a drop-in pass for open play or rent a court by the hour. Memberships lower your cost per visit and extend how far ahead you can book.",
  },
  {
    q: "I'm brand new to pickleball — where do I start?",
    a: "Start with a beginner clinic or a private lesson, then join a 2.5–3.0 open play session. Loaner paddles are free at the front desk and balls are provided.",
  },
  {
    q: "How do I know which open play session fits my level?",
    a: "Sessions are grouped by skill (roughly 2.5, 3.0, 3.5, 4.0, and 4.5+). If you're unsure, the front desk or a court monitor will place you in the right rotation.",
  },
  {
    q: "Are the courts really indoors year-round?",
    a: "Yes — all 38 courts are indoors and climate-controlled, so play never gets rained out, snowed out, or moved for heat.",
  },
];

const Pickleball = () => {
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
        title="Pickleball"
        subtitle="Central Ohio's premier indoor pickleball destination — 38 championship-size courts with CushionX surface, open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM."
        image="/images/pickleball-hero.png"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-6">
            Indoor Pickleball in Columbus, Ohio
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Match Point Pickleball Club is a 125,000+ sq. ft. indoor pickleball facility at 350 McCormick Blvd on the
              east side of Columbus, minutes from I-270 and easy to reach from Gahanna, Reynoldsburg, New Albany,
              Westerville, Pickerington, and Dublin. All 38 courts are indoors, climate-controlled, and built to
              championship dimensions on a cushioned CushionX surface that's easier on knees and hips than concrete.
            </p>
            <p>
              Whether you picked up a paddle last week or you're chasing a 4.5+ rating, there's a place to play here every
              day of the year: skill-leveled open play, hourly court rentals, leagues, clinics, and tournaments — plus a
              pro shop, café, locker rooms, and free on-site parking.
            </p>
            <p>
              Prefer to just show up? Buy a drop-in pass and jump into open play. Playing several times a week? A
              membership lowers your rate and opens a longer booking window.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-10 text-center">Ways to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {playFormats.map((f) => (
              <article key={f.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-2xl text-bright mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/reserve-a-court"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Court
            </Link>
            <Link
              to="/memberships"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Compare Memberships
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-8">Pickleball FAQ</h2>
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

      <LocalProgramLinks />
    </Layout>
  );
};

export default Pickleball;
