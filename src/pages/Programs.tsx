import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Users, Repeat, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OPEN_PLAY_GROUPS, UPCOMING_TOURNAMENTS } from "@/data/openPlay";
import AnniversaryTournamentPromo from "@/components/AnniversaryTournamentPromo";

type Program = {
  id: string;
  icon: typeof Users;
  title: string;
  tagline: string;
  who: string;
  items: { label: string; text: string }[];
  cta: { label: string; to: string; external?: boolean };
};

const programs: Program[] = [
  {
    id: "leagues",
    icon: Users,
    title: "Leagues",
    tagline: "Weekly, same night, same team — a season of organized competition.",
    who: "Best for players who want a set schedule and a team.",
    items: [
      { label: "Formats", text: "Men's, women's, and mixed doubles, team-based (MLP-style), and ladder leagues." },
      { label: "Skill divisions", text: "Grouped by DUPR / self-rating from 2.5 beginner through 4.5+ advanced." },
      { label: "When", text: "Morning, evening, and weekend seasons run year-round on our 38 indoor courts." },
      { label: "Season length", text: "Typically 5–8 weeks, one match night per week, plus playoffs." },
      { label: "No partner?", text: "Sign up as a free agent and we'll pair you with a suitable partner." },
      { label: "Cost", text: "Members save on every season; non-members are welcome at the standard rate." },
    ],
    cta: { label: "See league details & register", to: "/leagues" },
  },
  {
    id: "open-play",
    icon: Repeat,
    title: "Open Play",
    tagline: "Show up, get matched in, play rotating games — no partner needed.",
    who: "Best for social play and meeting people. Great for first visits.",
    items: [
      { label: "How it works", text: "Courts are grouped by skill. Paddles go on the rack, winners stay or rotate off — games start fast." },
      { label: "Skill groups", text: "Roughly 2.5, 3.0, 3.5, 4.0, and 4.5+. Unsure? The front desk or court monitor places you." },
      { label: "Hours", text: "Sessions run throughout the day, Mon–Fri 7 AM – 11 PM and Sat–Sun 7 AM – 10 PM." },
      { label: "What to bring", text: "Court shoes and water. Balls are provided and loaner paddles are free at the front desk." },
      { label: "Cost", text: "Included or discounted with membership; non-members buy a drop-in pass." },
    ],
    cta: { label: "See the open play schedule & register", to: "/programs#open-play-schedule" },
  },
  {
    id: "clinics",
    icon: GraduationCap,
    title: "Clinics & Lessons",
    tagline: "Structured coaching from certified pros — beginner to advanced.",
    who: "Best for learning the game or fixing a specific part of it.",
    items: [
      { label: "Beginner clinics", text: "Rules, scoring, serve, dink, and kitchen basics in a low-pressure group setting." },
      { label: "Skill clinics", text: "Focused sessions on drops, resets, transition zone, serve/return, and strategy." },
      { label: "Private lessons", text: "One-on-one or small group with our head pro and coaching staff." },
      { label: "Group size", text: "Clinics are capped so everyone gets reps and direct feedback." },
      { label: "Equipment", text: "Loaner paddles and balls included — bring court shoes and water." },
    ],
    cta: { label: "Meet the pros & book instruction", to: "/pickleball-instruction" },
  },
  {
    id: "tournaments",
    icon: Trophy,
    title: "Tournaments & Events",
    tagline: "Bracket play on championship and stadium courts with live streaming.",
    who: "Best for competitive players who want medals and match data.",
    items: [
      { label: "Event types", text: "Sanctioned and club tournaments, mini-invitationals, charity events, and corporate outings." },
      { label: "Divisions", text: "Age and skill brackets in men's, women's, and mixed doubles; singles at select events." },
      { label: "Courts", text: "Featured stadium and championship courts with PlaySight cameras for streaming and replay." },
      { label: "Spectators", text: "Free spectator seating, café, and pro shop on site with free parking." },
      { label: "Results", text: "Brackets and past results are posted after each event." },
    ],
    cta: { label: "See upcoming tournaments", to: "/programs#upcoming-tournaments" },
  },
];

const Programs = () => {
  return (
    <Layout>
      <Helmet>
        <title>Programs: Leagues, Open Play, Clinics & Tournaments | Match Point</title>
        <meta
          name="description"
          content="A simple breakdown of pickleball programs at Match Point Columbus: leagues, open play, clinics and lessons, and tournaments — with details under each."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: programs.map((p) => ({
              "@type": "Question",
              name: `What is ${p.title} at Match Point Pickleball Club?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${p.tagline} ${p.who} ${p.items.map((i) => `${i.label}: ${i.text}`).join(" ")}`,
              },
            })),
          })}
        </script>
      </Helmet>

      <PageHero
        title="Programs"
        subtitle="Four ways to play at Match Point — pick the one that fits, then tap it for the details."
        image="/images/leagues-hero.png"
      />

      {/* Quick picker */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="flex flex-col items-center text-center gap-2 bg-card border border-border rounded-lg p-4 md:p-6 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
              >
                <p.icon size={28} className="text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm md:text-base">{p.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {programs.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="scroll-mt-24 bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex items-start gap-3 mb-3">
                <p.icon size={26} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-bright">{p.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{p.tagline}</p>
                </div>
              </div>
              <p className="text-foreground text-sm font-medium mb-5">{p.who}</p>

              <Accordion type="single" collapsible className="w-full">
                {p.items.map((item) => (
                  <AccordionItem key={item.label} value={`${p.id}-${item.label}`}>
                    <AccordionTrigger className="text-left text-sm font-semibold">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Link
                to={p.cta.to}
                className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {p.cta.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Open play schedule */}
      <section id="open-play-schedule" className="scroll-mt-24 py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-3">Open Play Schedule</h2>
          <p className="text-muted-foreground mb-10">
            Pick your skill group and time, then register through CourtReserve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_PLAY_GROUPS.map((g) => (
              <article key={g.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-xl text-bright mb-1">{g.title}</h3>
                {g.note && <p className="text-muted-foreground text-sm mb-3">{g.note}</p>}
                <ul className="space-y-2 mt-3">
                  {g.sessions.map((s) => (
                    <li key={s.label + s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary underline underline-offset-4 transition-colors"
                      >
                        {s.label}
                        <ArrowRight size={14} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnniversaryTournamentPromo />

      {/* Upcoming tournaments */}
      <section id="upcoming-tournaments" className="scroll-mt-24 py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-3">Upcoming Tournaments</h2>
          <p className="text-muted-foreground mb-8">
            Call 614-569-2556 or check CourtReserve for registration as each event opens.
          </p>
          <ul className="divide-y divide-border border border-border rounded-xl overflow-hidden bg-card">
            {UPCOMING_TOURNAMENTS.map((t) => (
              <li key={t.name} className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground text-sm whitespace-nowrap">{t.dates}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bright mb-4">Not sure where to start?</h2>
          <p className="text-muted-foreground mb-8">
            New players usually start with a beginner clinic or a 2.5–3.0 open play session. Call us at{" "}
            <a href="tel:+16145692556" className="text-primary underline hover:no-underline">
              614-569-2556
            </a>{" "}
            and we'll point you to the right one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
    </Layout>
  );
};

export default Programs;
