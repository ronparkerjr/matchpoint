import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Users,
  Trophy,
  Target,
  Megaphone,
  Calendar,
  Building2,
  Heart,
  TrendingUp,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "38", label: "Indoor Pickleball Courts" },
  { value: "5", label: "Golf Simulator Bays" },
  { value: "100K+", label: "Annual Player Visits" },
  { value: "365", label: "Days a Year Open" },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Reach the Fastest-Growing Sport in America",
    body: "Pickleball has been the fastest-growing sport in the U.S. for four years running. Match Point sits at the center of Columbus's pickleball boom — putting your brand in front of an audience that's hungry for products, services, and experiences tied to an active lifestyle.",
  },
  {
    icon: Users,
    title: "Premium, Engaged Audience",
    body: "Our members and guests skew toward active adults and families with disposable income — homeowners, business owners, healthcare professionals, retirees, and corporate teams. They visit often, stay for hours, and pay attention to who supports their club.",
  },
  {
    icon: MapPin,
    title: "Always-On Brand Visibility",
    body: "Unlike one-off ad buys, court sponsorships and in-facility branding live in the building 7 days a week, 365 days a year. Every match, lesson, league night, and tournament is a repeat impression for your brand.",
  },
  {
    icon: Trophy,
    title: "Tournament & Event Exposure",
    body: "Our tournaments, leagues, and special events draw players and spectators from across Central Ohio. Sponsor signage, announcements, and digital placements travel with the event — including livestreams on Match Point Live.",
  },
  {
    icon: Heart,
    title: "Community Goodwill",
    body: "Sponsoring Match Point supports adult leagues, junior development, charity events, and accessible programs like SilverSneakers. Customers reward brands that invest in the communities they live and play in.",
  },
  {
    icon: Building2,
    title: "B2B & Corporate Networking",
    body: "Our community is full of local decision-makers. Sponsorship opens doors to corporate memberships, private events, hosted leagues, and direct relationships with the businesses already in the building.",
  },
];

type Tier = {
  name: string;
  tagline: string;
  highlight?: boolean;
  perks: string[];
};

const tiers: Tier[] = [
  {
    name: "Court Sponsor",
    tagline: "Own a court. Own the conversation.",
    highlight: true,
    perks: [
      "Court named after your brand (e.g. \"Your Brand Court 12\")",
      "Permanent signage on court windscreens and wall graphics",
      "Logo on Reserve-a-Court and Match Point Live pages",
      "Inclusion in our partner roster on the website",
      "Recognition in member newsletters and social posts",
      "Discounted court rentals for corporate events",
    ],
  },
  {
    name: "Tournament & Event Sponsor",
    tagline: "Show up where the action is.",
    perks: [
      "Title or presenting sponsor of a tournament, league, or special event",
      "Logo on event marketing, signage, brackets, and prize awards",
      "Booth or product activation space at the event",
      "Player gift bag inclusion",
      "Social media features and event recap coverage",
      "Optional livestream sponsor placement on Match Point Live",
    ],
  },
  {
    name: "Pro Shop & Retail Partner",
    tagline: "Put your product in players' hands.",
    perks: [
      "Featured product placement in our pro shop and online store",
      "Demo days and on-court product trials",
      "Co-branded promotions for members",
      "Inclusion in 'Gear We Love' content and member emails",
      "First right of refusal on category exclusivity",
    ],
  },
  {
    name: "Wellness & Services Partner",
    tagline: "Connect with health-conscious players.",
    perks: [
      "On-site activation days (massage, screenings, consultations)",
      "Signage in relevant areas of the facility",
      "Referral program for members",
      "Cross-promotion through Match Point's wellness content",
      "Premier example: OrthoAlliance Court 36",
    ],
  },
  {
    name: "Food & Beverage Partner",
    tagline: "Be the brand players reach for between games.",
    perks: [
      "Exclusive or preferred pour/serve rights",
      "Branded coolers, menus, and signage throughout the facility",
      "Sampling at tournaments and member events",
      "Premier example: G&J Pepsi Championship Court 38",
    ],
  },
  {
    name: "Community & Supporting Partner",
    tagline: "A scalable way to get involved.",
    perks: [
      "Logo on our partners page and in select event materials",
      "Recognition in member communications",
      "A great entry point for local small businesses",
      "Upgrade path to court or event sponsorship as you grow with us",
    ],
  },
];

const ways = [
  {
    icon: Target,
    title: "Name a Court",
    body: "Our most visible sponsorship. Your brand lives on a court inside Central Ohio's largest indoor pickleball facility.",
  },
  {
    icon: Trophy,
    title: "Title a Tournament or League",
    body: "Lend your name to a season-long league or marquee tournament with full marketing and on-court presence.",
  },
  {
    icon: Megaphone,
    title: "Sponsor Match Point Live",
    body: "Place your brand on our court livestreams — pre-roll, lower-thirds, and stream overlays — reaching players watching from home.",
  },
  {
    icon: Calendar,
    title: "Host a Private or Corporate Event",
    body: "Bundle a private event or corporate league with brand activation. Great for product launches, client entertainment, or team building.",
  },
  {
    icon: Sparkles,
    title: "On-Site Activation Days",
    body: "Demo days, sampling, screenings, giveaways — get face-to-face with our most engaged members.",
  },
  {
    icon: Building2,
    title: "Custom Partnership",
    body: "Don't see the right fit? We'll build a custom program around your goals, budget, and timeline.",
  },
];

const BecomeASponsor = () => {
  return (
    <Layout>
      <PageHero
        title="Become a Sponsor"
        subtitle="Partner with Central Ohio's premier indoor pickleball destination and put your brand in front of thousands of active, engaged players every month."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                  {s.value}
                </div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-bright uppercase tracking-wide mb-4">
              Why Partner With Match Point
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pickleball is more than a sport — it's a daily habit for our community.
              Sponsoring Match Point is one of the highest-frequency, lowest-noise ways
              to reach an active, local audience in Columbus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="border border-border rounded-xl p-6 bg-background"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <r.icon size={22} />
                </div>
                <h3 className="font-display text-lg text-bright mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-bright uppercase tracking-wide mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pick the package that fits your goals — or mix and match. Every program
              is customizable, and we'll work with you to put together something that
              actually moves the needle for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-xl p-6 flex flex-col bg-background border ${
                  t.highlight
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {t.highlight && (
                  <div className="inline-block self-start mb-3 text-xs uppercase tracking-wide bg-primary text-primary-foreground px-2 py-1 rounded">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl text-bright mb-1">{t.name}</h3>
                <p className="text-sm text-primary mb-4">{t.tagline}</p>
                <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Sponsor */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-bright uppercase tracking-wide mb-4">
              Ways to Sponsor
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From a single tournament to a multi-year court naming deal, here are the
              most popular ways our partners activate at Match Point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ways.map((w) => (
              <div
                key={w.title}
                className="border border-border rounded-xl p-6 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <w.icon size={22} />
                </div>
                <h3 className="font-display text-lg text-bright mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Tell us about your brand and your goals. We'll put together a custom
            proposal — usually within a few business days.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:support@matchpointpickleballclub.com?subject=Match%20Point%20Sponsorship%20Inquiry">
                <Mail size={16} className="mr-2" /> support@matchpointpickleballclub.com
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/sponsorship-deck">View & Download the Deck</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/sponsors">View Current Partners</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Or call us at{" "}
            <a href="tel:6145692556" className="text-primary hover:underline">
              614-569-2556
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeASponsor;
