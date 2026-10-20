import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const roleAreas = [
  {
    title: "Front Desk & Member Services",
    body: "Greet members, check in players, manage reservations in CourtReserve, and keep the club running smoothly.",
  },
  {
    title: "Court Monitors",
    body: "Run open play rotations, balance games by skill level, and make first-time players feel welcome.",
  },
  {
    title: "Coaches & Instructors",
    body: "Teach private lessons, beginner clinics, and junior programs. Certification and playing experience welcome.",
  },
  {
    title: "Café & Hospitality",
    body: "Food and beverage service, banquets, private events, and tournament hospitality.",
  },
  {
    title: "Events & Leagues",
    body: "Help plan and run leagues, tournaments, corporate outings, and private events.",
  },
  {
    title: "Facility & Maintenance",
    body: "Keep 125,000+ sq. ft. and 38 courts clean, safe, and tournament-ready.",
  },
];

const Employment = () => {
  return (
    <Layout>
      <PageHero
        title="Careers at Match Point"
        subtitle="Join the team at Columbus's largest indoor pickleball club — 38 courts, 6,000+ players, and a community that keeps growing."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-6">Work Where People Come to Play</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Match Point Pickleball Club is open Monday–Friday 7 AM to 11 PM and Saturday–Sunday 7 AM to 10 PM at 350 McCormick Blvd in Columbus, Ohio. We hire
              full-time, part-time, and seasonal team members across member services, coaching, hospitality, events, and
              facility operations — with flexible shifts that work around school, second jobs, and playing schedules.
            </p>
            <p>
              Team members get court access perks, a role in one of the fastest-growing sports in the country, and a
              workplace built around community. Pickleball experience is a plus, not a requirement — we'll teach you the
              game.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-10 text-center">Where We Hire</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roleAreas.map((r) => (
              <article key={r.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl text-bright mb-3">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">How to Apply</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Email your résumé and the role you're interested in to{" "}
            <a
              href="mailto:support@matchpointpickleballclub.com?subject=Employment%20Application"
              className="text-primary font-semibold hover:underline"
            >
              support@matchpointpickleballclub.com
            </a>{" "}
            or send us a message through our contact form. You can also stop by the front desk during open hours — we're
            happy to talk in person.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <a
              href="tel:6145692556"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call 614-569-2556
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Employment;
