import LocalLanding from "@/components/LocalLanding";

const PickleballLeaguesColumbus = () => (
  <LocalLanding
    h1="Pickleball Leagues in Columbus, Ohio"
    subtitle="Men's, women's, and mixed leagues by skill level — all indoors, all year."
    intro={[
      "Match Point Pickleball Club runs some of the most active pickleball leagues in Columbus, Ohio. With 38 indoor courts at 350 McCormick Blvd, we can host multiple divisions at once, so you play with people at your level instead of waiting for a court.",
      "Leagues run in seasons throughout the year and include men's, women's, mixed doubles, and skill-based divisions from 2.5 beginner play up through 4.5+ competitive. Our Ladies League — organized by Bridgett Del Poza — has become one of the most popular women's pickleball leagues in central Ohio.",
    ]}
    highlightsTitle="League Formats"
    highlights={[
      {
        title: "Skill-Based Divisions",
        body: "DUPR-friendly divisions from 2.5 to 4.5+, so matches stay competitive and fun no matter where you're starting.",
      },
      {
        title: "Ladies League",
        body: "A welcoming women's league with fresh formats each week — one of the best ways to meet other Columbus players.",
      },
      {
        title: "Mixed & Men's Doubles",
        body: "Weeknight mixed and men's doubles leagues with weekly standings, subs lists, and end-of-season playoffs.",
      },
    ]}
    bullets={[
      "Year-round indoor play — no weather cancellations",
      "Weeknight and weekend league slots",
      "Sub lists so you never forfeit a match",
      "Organized standings and season playoffs",
      "Travel league and invitational options",
      "Open to members and non-members",
    ]}
    faqs={[
      {
        q: "How do I join a pickleball league in Columbus?",
        a: "Registration opens before each season. Reach out at 614-569-2556 or support@matchpointpickleballclub.com and we'll place you in the division that matches your level and availability.",
      },
      {
        q: "What skill level do I need for league play?",
        a: "Leagues run from 2.5 beginner divisions through 4.5+ competitive. If you know the rules and can rally, there's a division for you.",
      },
      {
        q: "Do I need a partner to sign up?",
        a: "Not always. Some leagues are individual sign-up with rotating partners, and we maintain a list for players looking to be paired.",
      },
      {
        q: "Do I need a membership to play in a league?",
        a: "No — leagues are open to non-members, though Match Point members receive member pricing on league fees and court time.",
      },
      {
        q: "When do leagues play?",
        a: "Most leagues play weeknight evenings, with additional weekend divisions. The club is open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM.",
      },
    ]}
    ctaTitle="Get Into a League This Season"
    ctaBody="See current league schedules and divisions, or contact us and we'll help you find the right fit."
    primaryCta={{ label: "View Leagues", to: "/leagues", conversion: "cta" }}
    secondaryCta={{ label: "Contact Us", to: "/contact-us", conversion: "cta" }}
    relatedLinks={[
      { label: "Pickleball Lessons in Columbus", to: "/pickleball-lessons-columbus" },
      { label: "Indoor Pickleball Court Booking", to: "/indoor-pickleball-courts-columbus" },
      { label: "Memberships", to: "/memberships" },
      { label: "Event Results", to: "/event-results" },
    ]}
  />
);

export default PickleballLeaguesColumbus;
