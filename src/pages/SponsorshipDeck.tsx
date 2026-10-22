import { publicAsset } from "@/lib/publicAsset";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Download,
  Mail,
  Monitor,
  Flag,
  Globe,
  Share2,
  Trophy,
  Package,
  Users,
  CheckCircle2,
  BarChart3,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const DECK_PDF = publicAsset("/downloads/match-point-sponsorship-deck.pdf");
const CONTACT = "support@matchpointpickleballclub.com";

const numbers = [
  { value: "38", label: "Indoor Pickleball Courts" },
  { value: "#7", label: "CourtSource Top 100 Clubs (No. 1 in Ohio)" },
  { value: "5.0", label: "CourtSource Facility Rating" },
  { value: "100K+", label: "Annual Player Visits" },
  { value: "16/15", label: "Hours Open (Mon–Fri 7 AM – 11 PM, Sat–Sun 7 AM – 10 PM)" },
  { value: "5", label: "Trackman Golf Simulator Bays" },
  { value: "Midwest", label: "Dink Award — Best Facility in the Midwest" },
];

const awards = [
  "CourtSource: Best Indoor Facility",
  "CourtSource: Most Courts",
  "CourtSource: Best Value",
  "CourtSource: Best Lit for Night Play",
  "CourtSource: Best Amenities",
  "The Dink: Best Facility in the Midwest",
];

type Channel = {
  icon: typeof Monitor;
  title: string;
  intro: string;
  items: string[];
};

const channels: Channel[] = [
  {
    icon: Flag,
    title: "In-Facility Branding",
    intro: "Always-on impressions, up to 16 hours on weekdays and 15 hours on weekends, 365 days a year.",
    items: [
      "Court naming rights — your brand on one of our 38 courts (e.g. \"OrthoAlliance Court 36\", \"G&J Pepsi Championship Court 38\")",
      "Court windscreen banners and perimeter fence signage",
      "Wall graphics and large-format murals in high-traffic sightlines",
      "Entry, lobby, and front-desk branding",
      "Branded hydration stations, coolers, and water refill points",
      "Net posts, ball carts, benches, and court-side seating decals",
      "Restroom, locker room, and hallway poster frames",
      "Branded pro shop end-caps and product displays",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Monitors & Screens",
    intro: "Rotating brand slides on the screens players watch between games.",
    items: [
      "Rotating full-screen ads on facility monitors and lobby TVs",
      "Court-status and schedule screens with a sponsor frame",
      "PlaySight SmartCourt scoreboard and replay-screen branding",
      "Motion or video creative on lobby displays",
      "Event-day takeovers of every screen in the building",
    ],
  },
  {
    icon: Globe,
    title: "Online & Booking",
    intro: "Reach players while they plan, book, and pay.",
    items: [
      "Logo and profile on matchpointpickleballclub.com partner pages",
      "Dedicated partner page telling your brand story (like our OrthoAlliance page)",
      "Placement on high-traffic Reserve a Court and Programs pages",
      "Match Point Live livestream sponsorship — pre-roll, lower-thirds, and overlays on all streamed courts",
      "Court-booking confirmation and league email placements",
      "Member newsletter features, offers, and promo codes",
      "Sponsored content in our announcements feed",
    ],
  },
  {
    icon: Share2,
    title: "Social Media",
    intro: "Facebook, Instagram, TikTok, and YouTube content our community actually watches.",
    items: [
      "Facebook and Instagram partner announcement posts and stories",
      "Instagram Reels / TikTok activation and highlight features",
      "Sponsored Member of the Month and Employee of the Month features",
      "Tagged tournament recap reels and match highlight clips",
      "Facebook event co-hosting for sponsored leagues and events",
      "Giveaway and contest collaborations with your brand as prize partner",
      "Sponsor-branded YouTube match replays from Match Point Live",
    ],
  },
  {
    icon: Trophy,
    title: "Tournaments, Leagues & Events",
    intro: "Own the moments that draw the biggest crowds.",
    items: [
      "Title or presenting sponsor of a tournament (\"Your Brand Open\")",
      "League title sponsorship — Monday DUPR, Tuesday Ladies, Thursday Partner, Saturday DUPR, Sunday Mixed",
      "Clinic and instruction series sponsorship",
      "Junior programs, SilverSneakers, and charity event sponsorship",
      "Presenting sponsor of the featured Stadium and Championship courts",
      "Awards, medals, prize money, and trophy presentation branding",
      "Player gift bag inclusion and registration-page logo placement",
      "Court-side hospitality area or VIP tent for your guests",
    ],
  },
  {
    icon: Package,
    title: "Product & Sampling",
    intro: "Get your product into players' hands, not just in front of their eyes.",
    items: [
      "Demo days and on-court product trials",
      "Sampling tables at tournaments, leagues, and member events",
      "Official ball, paddle, apparel, or beverage designation",
      "Category exclusivity and preferred pour/serve rights",
      "Pro shop retail placement and co-branded member promotions",
      "Member-only discounts, referral programs, and QR-code offers",
    ],
  },
  {
    icon: Users,
    title: "Corporate & B2B",
    intro: "Sponsorship that doubles as client entertainment and recruiting.",
    items: [
      "Corporate membership block bundled with brand activation",
      "Private events, client outings, and team-building buyouts",
      "Company league entries and internal tournaments",
      "On-site wellness activations — screenings, massage, consultations",
      "Networking events hosted with Match Point's business community",
    ],
  },
];

const packages = [
  {
    name: "Court Naming Partner",
    highlight: true,
    tagline: "Our most visible, longest-running placement.",
    perks: [
      "Named court with permanent windscreen and wall branding",
      "Logo on Reserve a Court, Match Point Live, and partner pages",
      "Announcement campaign across social and member email",
      "Event and league recognition all season",
      "Category exclusivity available",
    ],
  },
  {
    name: "Presenting / Title Partner",
    tagline: "Title a tournament, league, or clinic series.",
    perks: [
      "Your name in the event or league title",
      "Logo on all event marketing, brackets, and awards",
      "Booth or activation space on event days",
      "Livestream and social recap integration",
      "Player gift bag inclusion",
    ],
  },
  {
    name: "Digital & Media Partner",
    tagline: "Screens, streams, and inboxes.",
    perks: [
      "Rotating monitor ads throughout the facility",
      "Match Point Live pre-roll and overlay placement",
      "Member newsletter and announcement features",
      "Social content series with your brand",
    ],
  },
  {
    name: "Community Partner",
    tagline: "A scalable entry point for local businesses.",
    perks: [
      "Logo on the partners page and in select event materials",
      "Recognition in member communications",
      "One activation day per year",
      "Upgrade path to court or event sponsorship",
    ],
  },
];

const announcements = [
  {
    title: "Top 100 Clubs: Match Point Debuts at No. 7",
    body:
      "CourtSource ranked Match Point No. 7 nationally and No. 1 in Ohio with a perfect 5.0 rating, plus category awards for Best Indoor Facility, Most Courts, Best Value, Best Lit for Night Play, and Best Amenities.",
  },
  {
    title: "The Dink: Best Facility in the Midwest",
    body:
      "Recognized by The Dink as the top pickleball facility in the Midwest — a third-party editorial award that signals credibility to players, fans, and prospective partners across the region.",
  },
  {
    title: "Ultimate Pickleball League Strategic Alliance",
    body:
      "An alliance bringing pro-level pathways, events, and national visibility to Columbus — with sponsor inventory attached to every stage of it.",
  },
  {
    title: "Apex Bali & The Global Expansion",
    body:
      "Construction underway on the next Match Point-affiliated destination, extending the brand story beyond Ohio.",
  },
  {
    title: "New Programming: Clinics Series & Pickleball Cardio",
    body:
      "Two new clinic tracks and a cardio program added to the weekly schedule — fresh, sponsorable programming with built-in audiences.",
  },
  {
    title: "$3 Early Morning Open Play",
    body:
      "A flat $3 early-morning drop-in that fills courts at 7 AM and creates a high-frequency daily audience for in-facility branding.",
  },
];


const market = [
  {
    stat: "24.3M",
    label: "U.S. pickleball participants",
    note: "Fastest-growing sport in America five years running (SFIA Single Sport Report, 2026).",
  },
  {
    stat: "$120K+",
    label: "Average fan household income",
    note: "Pro-tour audience data (PPA Tour sponsor materials).",
  },
  {
    stat: "34.8",
    label: "Median player age (2024)",
    note: "Down from 40.9 in 2020 — the audience is getting younger (industry-aggregated SFIA data).",
  },
  {
    stat: "15K+",
    label: "Spectators at USA Pickleball Nationals 2024",
    note: "Alongside 3,000+ players and $3.6M in reported economic impact.",
  },
];

const reporting = [
  "Foot-traffic and court-utilization reporting for your placements",
  "Match Point Live view counts for streamed courts you sponsor",
  "Social post reach, engagement, and saves on sponsored content",
  "Email open and click-through rates on newsletter placements",
  "Promo-code and QR-scan redemption tracking for offers",
  "Photo and video proof-of-performance recap after every event",
];

const SectionHeading = ({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    {eyebrow && (
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>
    )}
    <h2 className="font-display text-3xl md:text-4xl text-bright uppercase tracking-wide mb-4">
      {title}
    </h2>
    {intro && <p className="text-muted-foreground leading-relaxed">{intro}</p>}
  </div>
);

const DownloadButton = ({ variant }: { variant?: "outline" }) => (
  <Button asChild size="lg" variant={variant}>
    <a href={DECK_PDF} download>
      <Download size={16} className="mr-2" /> Download the Deck (PDF)
    </a>
  </Button>
);

const SponsorshipDeck = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sponsorship Deck | Match Point Pickleball Club Columbus</title>
        <meta
          name="description"
          content="Match Point Pickleball Club's sponsorship marketing deck: activation options across 38 indoor courts, monitors, banners, tournaments, livestreams, and social — plus a downloadable PDF."
        />
        <link
          rel="canonical"
          href="https://www.matchpointpickleballclub.com/sponsorship-deck"
        />
      </Helmet>

      <PageHero
        title="Sponsorship Deck"
        subtitle="Every way your brand can activate at Match Point Pickleball Club — in the building, online, on the monitors, on social, and on tournament day."
      />

      {/* Download bar */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Read the full deck below, or download the printable PDF to share with your
            team. Questions or a custom package? We usually turn around a proposal in a
            few business days.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <DownloadButton />
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${CONTACT}?subject=Match%20Point%20Sponsorship%20Inquiry`}>
                <Mail size={16} className="mr-2" /> Talk to Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="Slide 01"
            title="Match Point by the Numbers"
            intro="Central Ohio's largest indoor pickleball facility — and one of the highest-rated clubs in the country."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {numbers.map((n) => (
              <div key={n.label} className="border border-border rounded-xl p-6">
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                  {n.value}
                </div>
                <div className="text-sm text-muted-foreground">{n.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {awards.map((a) => (
              <span
                key={a}
                className="text-xs uppercase tracking-wide bg-primary/10 text-primary px-4 py-2 rounded-full"
              >
                🏆 {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Momentum / announcements */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="Slide 02"
            title="Recent Announcements & Momentum"
            intro="What sponsors are buying into right now."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((a) => (
              <article
                key={a.title}
                className="bg-background border border-border rounded-xl p-6"
              >
                <h3 className="font-display text-lg text-bright mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/announcements">Read All Announcements</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Market context */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="Slide 02b"
            title="Why Pickleball, Why Now"
            intro="Independent industry data on the sport your brand would be buying into."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {market.map((m) => (
              <div key={m.label} className="border border-border rounded-xl p-6">
                <div className="font-display text-3xl text-primary mb-2">{m.stat}</div>
                <div className="text-sm font-semibold text-bright mb-2">{m.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            Sources: SFIA, PPA Tour, USA Pickleball, APP/Intersport. Industry-reported
            figures, not Match Point-specific.
          </p>
        </div>
      </section>

      {/* Activation menu */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="Slide 03"
            title="Ways to Activate"
            intro="Mix and match across seven channels. Every program is built to fit your goals and budget."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {channels.map((c) => (
              <article
                key={c.title}
                className="border border-border rounded-xl p-6 md:p-8 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <c.icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-bright">{c.title}</h3>
                    <p className="text-sm text-primary">{c.intro}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading
            eyebrow="Slide 04"
            title="Partnership Packages"
            intro="Four starting points, all customizable. Investment levels and available inventory are shared on request."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`bg-background rounded-xl p-6 flex flex-col border ${
                  p.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                {p.highlight && (
                  <div className="self-start mb-3 text-xs uppercase tracking-wide bg-primary text-primary-foreground px-2 py-1 rounded">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-lg text-bright mb-1">{p.name}</h3>
                <p className="text-sm text-primary mb-4">{p.tagline}</p>
                <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading
            eyebrow="Slide 05"
            title="How We Measure It"
            intro="Sponsorship should be accountable. Here's what we report back."
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reporting.map((r) => (
              <li
                key={r}
                className="flex gap-3 border border-border rounded-lg p-4 text-sm text-muted-foreground"
              >
                <BarChart3 size={18} className="text-primary shrink-0" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Let's Build Your Program
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Tell us your goals, your audience, and your budget. We'll come back with a
            package — court, event, digital, or all three.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <DownloadButton />
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${CONTACT}?subject=Match%20Point%20Sponsorship%20Inquiry`}>
                <Mail size={16} className="mr-2" /> {CONTACT}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/become-a-sponsor">
                <Sparkles size={16} className="mr-2" /> Why Sponsor Match Point
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            350 McCormick Blvd, Columbus, OH · 614-569-2556
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SponsorshipDeck;
