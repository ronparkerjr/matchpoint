import { publicAsset } from "@/lib/publicAsset";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CalendarDays, Check, Clock, MapPin, Phone, Trophy, Users } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { trackCtaClick, trackLessonInquiryClick, trackPhoneClick } from "@/lib/analytics";

type Clinic = {
  name: string;
  day: string;
  time: string;
  price: string;
  description: string;
};

type ClinicGroup = {
  groupTitle: string;
  registerUrl: string;
  clinics: Clinic[];
};

const clinicGroups: ClinicGroup[] = [
  {
    groupTitle: "Silver Sneakers Clinic",
    registerUrl: "https://app.courtreserve.com/Online/Events/Public/17037/2288741",
    clinics: [
      {
        name: "Silver Sneakers Clinic",
        day: "Tuesday",
        time: "9:00 – 10:30 AM",
        price: "$150",
        description:
          "A fun, low-pressure clinic designed for our Silver Sneakers players. Great technique, smart shot selection, and plenty of rallying — at a pace that works for you.",
      },
    ],
  },
  {
    groupTitle: "Women's Clinics",
    registerUrl: "https://app.courtreserve.com/Online/Events/Public/17037/2287029",
    clinics: [
      {
        name: "Tuesday Women's Clinic",
        day: "Tuesday",
        time: "11:00 AM – 1:00 PM",
        price: "$175",
        description:
          "Two hours of focused women's training — drills, strategy, and supervised match play with one of the game's best teachers.",
      },
      {
        name: "Wednesday Women's Clinic",
        day: "Wednesday",
        time: "9:30 – 11:30 AM",
        price: "$175",
        description:
          "The same great women's session on a second day — pick the morning that fits your week, or train twice for faster improvement.",
      },
    ],
  },
  {
    groupTitle: "Coed Clinics",
    registerUrl: "https://app.courtreserve.com/Online/Events/Public/17037/2287030",
    clinics: [
      {
        name: "Tuesday Coed Clinic",
        day: "Tuesday",
        time: "1:30 – 3:30 PM",
        price: "$175",
        description:
          "An afternoon coed session covering dinking, drops, drives, and doubles tactics — open to all players who want to level up.",
      },
      {
        name: "Wednesday Coed Clinic",
        day: "Wednesday",
        time: "12:00 – 2:00 PM",
        price: "$175",
        description:
          "Midday coed training on our indoor courts — technique work, live-ball drills, and coached play in every session.",
      },
    ],
  },
  {
    groupTitle: "Tennis to Pickleball",
    registerUrl: "https://app.courtreserve.com/Online/Events/Public/17037/2287025",
    clinics: [
      {
        name: "Tennis to Pickleball Transition",
        day: "Tuesday",
        time: "4:00 – 6:00 PM",
        price: "$175",
        description:
          "A former NCAA tennis champion's specialty: translate your tennis game to pickleball fast. Spin, volleys, serves, and footwork that carry over — and the habits that don't.",
      },
    ],
  },
];

const careerHighlights = [
  "#1 world-ranked senior pro (women's division)",
  "Two-time Major League Pickleball MVP (2021 & 2022)",
  "NCAA Division II national champion in tennis (1993 & 1994 doubles)",
  "APP Next National Team Coach, developing the tour's rising stars",
  "Co-founder of Game ChangeHER Events, empowering women in pickleball",
];

const faqs = [
  {
    q: "Who is Lee Whitwell?",
    a: "Lee Whitwell is a professional pickleball player and one of the sport's most decorated coaches — the #1 world-ranked senior pro and a two-time Major League Pickleball MVP. A Gibraltar-born former NCAA national champion tennis player, she now coaches players of every level.",
  },
  {
    q: "Do I need to be a member to join a clinic?",
    a: "No. Lee's clinics at Match Point are open to members and non-members alike. Registration is handled through CourtReserve using the links on this page.",
  },
  {
    q: "How much do the clinics cost?",
    a: "The Tuesday Silver Sneakers clinic is $150. All women's, coed, and tennis-to-pickleball clinics are $175 per player.",
  },
  {
    q: "What should I bring?",
    a: "Wear court shoes and comfortable athletic clothing, and bring your paddle if you have one. Loaner paddles and balls are available if you're just getting started.",
  },
  {
    q: "Where are the clinics held?",
    a: "All clinics take place indoors at Match Point Pickleball Club, 350 McCormick Blvd, Columbus, OH — open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM.",
  },
  {
    q: "How do I register?",
    a: "Click the Register button next to the clinic you want — it opens our secure CourtReserve registration page in a new window. Spaces are limited, so early sign-up is recommended.",
  },
];

const fireRegister = (label: string) => trackLessonInquiryClick({ label, source: "lee_whitwell_clinics" });

const LeeWhitwellClinics = () => {
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

      <PageHero
        title="Lee Whitwell Clinics"
        subtitle="Train with the #1 world-ranked senior pro — live at Match Point Pickleball Club in Columbus, Ohio."
        image={publicAsset("/images/pickleball-hero.png")}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" aria-hidden="true" />
              350 McCormick Blvd, Columbus, OH
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-primary" aria-hidden="true" />
              Tuesdays & Wednesdays
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

          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">Meet Lee Whitwell</h2>
          <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
            Lee Whitwell is a professional pickleball player and one of the most accomplished
            teachers in the game. Born in Gibraltar and a two-time NCAA Division II national
            champion in tennis, Lee made the jump to pickleball and quickly rose to the top —
            earning two Major League Pickleball MVP awards and the #1 world ranking in the senior
            pro women's division.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
            Known as much for her energy and humor as for her trophies, Lee coaches players of
            every age and level — from first-timers to tour professionals — and serves as an APP
            Next National Team Coach and co-founder of Game ChangeHER Events, a grassroots
            organization empowering women in pickleball.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {careerHighlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-muted-foreground">
                <Trophy size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-3">
              Clinic Schedule & Registration
            </h2>
            <p className="text-muted-foreground">
              Five clinics, one legendary coach. Pick your session and register securely through
              CourtReserve — spots are limited.
            </p>
          </div>

          <div className="space-y-10">
            {clinicGroups.map((group) => (
              <div key={group.groupTitle}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="font-display text-2xl text-bright flex items-center gap-3">
                    <Users size={22} className="text-primary" aria-hidden="true" />
                    {group.groupTitle}
                  </h3>
                  <a
                    href={group.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => fireRegister(group.groupTitle)}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Register Now
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.clinics.map((clinic) => (
                    <article
                      key={clinic.name}
                      className="bg-card border border-border rounded-xl p-6 flex flex-col"
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h4 className="font-display text-xl text-bright">{clinic.name}</h4>
                        <span className="text-primary font-bold text-lg whitespace-nowrap">
                          {clinic.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mb-1">
                        <CalendarDays size={15} className="text-primary" aria-hidden="true" />
                        {clinic.day}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mb-3">
                        <Clock size={15} className="text-primary" aria-hidden="true" />
                        {clinic.time}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {clinic.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12">
            {[
              "All clinics played on 38 climate-controlled indoor courts",
              "Open to members and non-members",
              "Small-group attention from a world-class pro",
              "Loaner paddles available for beginners",
            ].map((b) => (
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
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Reserve Your Spot with Lee
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Clinics fill quickly — register today through CourtReserve, or contact us with
            questions about which session fits your game.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.courtreserve.com/Online/Events/Public/17037/2287030"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => fireRegister("cta_register")}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Register for a Clinic
            </a>
            <Link
              to="/contact-us"
              onClick={() => trackCtaClick({ label: "Contact Us", source: "lee_whitwell_clinics" })}
              className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold text-bright hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <nav aria-label="Related pages" className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/pickleball-instruction" className="text-muted-foreground hover:text-foreground underline transition-colors">
              Meet All Our Instructors
            </Link>
            <Link to="/pickleball-lessons-columbus" className="text-muted-foreground hover:text-foreground underline transition-colors">
              Pickleball Lessons in Columbus
            </Link>
            <Link to="/leagues" className="text-muted-foreground hover:text-foreground underline transition-colors">
              Leagues
            </Link>
            <Link to="/memberships" className="text-muted-foreground hover:text-foreground underline transition-colors">
              Memberships
            </Link>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default LeeWhitwellClinics;
