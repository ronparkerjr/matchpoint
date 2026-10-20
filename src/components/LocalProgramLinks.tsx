import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Trophy, CalendarCheck } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

const links = [
  {
    to: "/pickleball-lessons-columbus",
    icon: GraduationCap,
    title: "Pickleball Lessons in Columbus",
    description:
      "Private coaching, beginner clinics, and skill-building sessions with our certified pros — indoors, year-round.",
    cta: "Explore Lessons",
  },
  {
    to: "/pickleball-leagues-columbus",
    icon: Trophy,
    title: "Pickleball Leagues in Columbus",
    description:
      "Competitive and social leagues for every DUPR level, with organized play nights across our 38 indoor courts.",
    cta: "See Leagues",
  },
  {
    to: "/indoor-pickleball-courts-columbus",
    icon: CalendarCheck,
    title: "Indoor Court Booking in Columbus",
    description:
      "Reserve climate-controlled indoor courts Mon–Fri 7 AM–11 PM and Sat–Sun 7 AM–10 PM with member pricing and priority booking windows.",
    cta: "Book a Court",
  },
];

interface LocalProgramLinksProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

const LocalProgramLinks = ({
  heading = "Lessons, Leagues & Court Booking in Columbus",
  subheading = "Jump straight to the program that fits your game.",
  className = "py-20 bg-secondary",
}: LocalProgramLinksProps) => {
  return (
    <section className={className} aria-labelledby="local-program-links-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="local-program-links-heading"
            className="font-display text-3xl md:text-4xl text-bright mb-3"
          >
            {heading}
          </h2>
          <p className="text-muted-foreground">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={item.to}
                onClick={() => trackCtaClick({ label: item.title, source: "local_program_links" })}
                className="group h-full flex flex-col bg-card border border-border rounded-xl p-6 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
              >
                <span className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl text-bright mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  {item.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalProgramLinks;
