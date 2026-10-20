import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

type LeagueSession = {
  label: string;
  url?: string;
  dateRange?: string;
};

type UpcomingLeague = {
  title: string;
  time: string;
  description: string;
  session1: LeagueSession;
  sessions: LeagueSession[];
};

const upcomingLeagues: UpcomingLeague[] = [
  {
    title: "Monday Night DUPR League",
    time: "6 – 8 PM",
    description: "Competitive ladder play — move up or down the ladder each week based on results.",
    session1: {
      label: "Register",
      url: "https://app.courtreserve.com/Online/Leagues/Details/17037/30187?isEmbedCode=true",
      dateRange: "9/14 – 11/2",
    },
    sessions: [],
  },
  {
    title: "Monday Night DUPR League",
    time: "8 – 10 PM",
    description: "Competitive ladder play — move up or down the ladder each week based on results.",
    session1: {
      label: "Register",
      url: "https://app.courtreserve.com/Online/Leagues/Details/17037/30261?isEmbedCode=true",
      dateRange: "9/14 – 11/2",
    },
    sessions: [],
  },
  {
    title: "Tuesday Ladies League (Non-DUPR)",
    time: "6:30 – 8:30 PM",
    description: "Women's competitive league — one of the most popular women's leagues in central Ohio.",
    session1: {
      label: "Register",
      url: "https://mobileapp.courtreserve.com/Online/Leagues/Details/17037/30625?isEmbedCode=true",
      dateRange: "10/6 – 11/24",
    },
    sessions: [],
  },
  {
    title: "Wednesday 50+ League",
    time: "9 – 11 AM",
    description: "Age-based competitive play in a welcoming, social format.",
    session1: {
      label: "Register",
      url: "https://app.courtreserve.com/Online/Leagues/Details/17037/30272?isEmbedCode=true",
      dateRange: "9/16 – 11/4",
    },
    sessions: [],
  },
  {
    title: "Thursday Partner League (DUPR)",
    time: "7 – 9 PM",
    description: "Bring your partner for DUPR-rated doubles league play.",
    session1: {
      label: "Register",
      url: "https://app.courtreserve.com/Online/Leagues/Details/17037/30216?isEmbedCode=true",
      dateRange: "9/3 – 10/22",
    },
    sessions: [],
  },
  {
    title: "Saturday Morning DUPR League",
    time: "8 – 10 AM",
    description: "Morning ladder play — start your weekend with competitive, DUPR-rated matches.",
    session1: {
      label: "Register",
      url: "https://app.courtreserve.com/Online/Leagues/Details/17037/30263?isEmbedCode=true",
      dateRange: "9/19 – 11/7",
    },
    sessions: [],
  },
  {
    title: "Sunday Mixed League (Non-DUPR)",
    time: "1 – 3 PM",
    description: "Mixed competitive play with weekly matches and standings.",
    session1: {
      label: "Register",
      url: "https://app.courtreserve.com/Online/Leagues/Details/17037/30246?isEmbedCode=true",
      dateRange: "9/20 – 11/8",
    },
    sessions: [],
  },
];

const leagueCategories = [
  {
    title: "Pickleball Leagues",
    description:
      "As the largest indoor pickleball facility in the country, our league offerings will be second to none. With 38 championship-size cushioned courts featuring CushionX surface and a team of PPR-certified pros overseeing the action, you're guaranteed a world-class experience.",
    details: [
      {
        label: "League Types",
        text: "Diverse range of formats including traditional gender and mixed doubles, team-based leagues (similar to MLP-style), and ladder leagues.",
      },
      {
        label: "Skill Divisions",
        text: "Structured by skill level using DUPR ratings, from beginners (2.5) all the way up to advanced players (4.5+).",
      },
      {
        label: "Variety",
        text: "Morning, evening, and weekend league options. Leagues for men, women, mixed pairs, and co-ed teams.",
      },
    ],
  },
  {
    title: "Golf Simulator Leagues",
    description:
      "Tee off on world-famous courses all year round! Our state-of-the-art golf simulators provide the perfect setting for fun and competitive league play.",
    details: [
      {
        label: "Flexible Play",
        text: "Set window of time each week to come in and play your designated 9- or 18-hole round at your convenience.",
      },
      {
        label: "Formats for Everyone",
        text: "Join as a two-person team and compete in Best Ball, Scramble, or individual stroke play leagues.",
      },
      {
        label: "Live Leaderboards",
        text: "Real-time leaderboards, detailed stat tracking, and weekly updates so you always know where you stand.",
      },
    ],
  },
  {
    title: "Badminton & Table Tennis Leagues",
    description:
      "The action doesn't stop with pickleball and golf. We are excited to offer organized league play for badminton and table tennis enthusiasts.",
    details: [
      {
        label: "Badminton Leagues",
        text: "Versatile combo courts hosting singles and doubles play, structured by skill level for exciting and evenly matched games.",
      },
      {
        label: "Table Tennis Leagues",
        text: "In our dedicated JOOLA-presented table tennis area, weekly round-robin and ladder leagues for fast-paced fun.",
      },
    ],
  },
];

const Leagues = () => {
  return (
    <Layout>
      <PageHero
        title="Leagues"
        subtitle="Consistent competition, great social atmosphere, and a structured way to improve your game"
        image="/images/leagues-hero.png"
      />

      {/* Current Leagues & Registration */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
              Current Leagues & Registration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              New sessions are open now. Click a session link to register through CourtReserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingLeagues.map((league, i) => (
              <motion.div
                key={`${league.title}-${league.time}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="font-display text-xl text-bright mb-1">{league.title}</h3>
                  <p className="text-primary font-semibold text-sm">{league.time}</p>
                  <p className="text-muted-foreground text-sm mt-2">{league.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {league.session1.url ? (
                      <a
                        href={league.session1.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        {league.session1.label}{" "}
                        {league.session1.dateRange && (
                          <span className="ml-1 opacity-90">({league.session1.dateRange})</span>
                        )}
                      </a>
                    ) : null}
                    {league.sessions.map((session) => (
                      <span
                        key={session.label}
                        className="inline-flex items-center px-3 py-2 rounded-lg text-sm border border-border text-muted-foreground bg-background"
                      >
                        {session.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-16 text-center max-w-2xl mx-auto">
            Get ready for consistent competition, a great social atmosphere, and a structured way to improve your game! Match Point Pickleball Club is the premier destination for league play in Columbus.
          </p>

          <div className="space-y-20">
            {leagueCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">{cat.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{cat.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="bg-card border border-border rounded-lg p-6"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{detail.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{detail.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-6">How to Join</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All league registrations are managed through our online portal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Skill Levels</h3>
              <p className="text-muted-foreground text-sm">Not sure of your skill level? We will host rating clinics and open play sessions to help you find the perfect league.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Don't Have a Partner?</h3>
              <p className="text-muted-foreground text-sm">No problem! We offer "free agent" sign-ups for many of our doubles leagues and will do our best to pair you with a suitable partner.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Stay Informed</h3>
              <p className="text-muted-foreground text-sm">Be the first to know when league schedules are posted! Follow us on social media for the latest updates.</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-10">
          Get ready for a new season of competition and community. We can't wait to see you in a league at Match Point!
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default Leagues;
