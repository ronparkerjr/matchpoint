import { publicAsset } from "@/lib/publicAsset";
import { motion } from "framer-motion";
import { Building2, Heart, Users, Trophy, Dumbbell, Target, Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const benefits = [
  {
    icon: Heart,
    title: "Employee Wellness",
    description:
      "Promote physical and mental well-being with access to pickleball, golf simulators, table tennis, and badminton — all under one roof.",
  },
  {
    icon: Users,
    title: "Team Building",
    description:
      "Nothing strengthens workplace bonds like friendly competition. Our facility is the perfect setting for team outings that employees actually look forward to.",
  },
  {
    icon: Trophy,
    title: "League Participation",
    description:
      "Enroll your team in our corporate leagues for weekly structured play. Great for morale, networking, and healthy competition among colleagues.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Stress Relief",
    description:
      "Give your employees a fun, active outlet to decompress. Studies show active employees are more productive, engaged, and take fewer sick days.",
  },
  {
    icon: Target,
    title: "Customizable Programs",
    description:
      "From beginner clinics to advanced coaching, we tailor programs to your team's interests and skill levels. Our certified coaches make everyone feel welcome.",
  },
  {
    icon: Building2,
    title: "Exclusive Corporate Rates",
    description:
      "Unlock preferred pricing on memberships, court reservations, and private events. The more employees you enroll, the more your company saves.",
  },
];

const whyMatchPoint = [
  "16 indoor pickleball courts",
  "Trackman Golf simulators",
  "Table tennis & badminton",
  "Pro shop with premium equipment",
  "Lounge & social areas",
  "PlaySight smart court technology",
  "RPO/PPR/DUPR certified coaching staff",
  "Flexible scheduling for corporate groups",
];

const CorpMemberships = () => {
  return (
    <Layout>
      <PageHero
        title="Corporate Memberships"
        subtitle="Elevate your employee benefits with Central Ohio's premier multi-sport facility"
        image={publicAsset("/images/corp-hero.jpg")}
      />

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl md:text-5xl text-bright"
              >
                Invest in Your Team's Well-Being
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Today's top employers know that wellness benefits go far beyond
                a gym membership. Match Point Pickleball Club offers a unique,
                multi-sport experience that employees actually use — and love.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                A corporate membership at Match Point is more than a perk — it's
                a strategic investment in retention, productivity, and company
                culture.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden border border-border-subtle"
            >
              <img loading="lazy" decoding="async"
                src={publicAsset("/images/corp-team1.jpg")}
                alt="Corporate team celebrating at Match Point"
                className="w-full h-80 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-bright text-center mb-16"
          >
            Why Corporate Memberships?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-lg p-8 border border-border-subtle"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-bright mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + Why Match Point */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden border border-border-subtle"
            >
              <img loading="lazy" decoding="async"
                src={publicAsset("/images/corp-team2.jpg")}
                alt="Employees enjoying table tennis at Match Point"
                className="w-full h-80 md:h-96 object-cover"
              />
            </motion.div>
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl text-bright"
              >
                What Your Team Gets Access To
              </motion.h2>
              <ul className="space-y-3">
                {whyMatchPoint.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 text-muted-foreground text-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              { stat: "38", label: "Indoor Pickleball Courts" },
              { stat: "5", label: "Sports Under One Roof" },
              { stat: "100%", label: "Indoor & Climate Controlled" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="font-display text-5xl md:text-6xl text-primary-foreground mb-2">
                  {item.stat}
                </div>
                <div className="text-primary-foreground/80 text-lg">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Jen Foley */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Contact our Director of Corporate Relations to learn about
              custom packages tailored to your organization's needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-secondary rounded-lg border border-border-subtle p-10 md:p-12"
          >
            <div className="text-center space-y-4">
              <div className="mb-6">
                <img loading="lazy" decoding="async"
                  src={publicAsset("/images/jen-foley.png")}
                  alt="Jen Foley - Director of Corporate Relations"
                  className="w-56 md:w-64 mx-auto rounded-lg object-cover"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-bright">
                Jen Foley
              </h3>
              <p className="text-primary font-semibold text-lg">
                Director of Corporate Relations
              </p>
              <p className="text-muted-foreground text-sm">
                RPO / PPR / DUPR Certified Coach
              </p>

              <div className="w-16 h-px bg-border-subtle mx-auto my-6" />

              <div className="space-y-3 text-muted-foreground">
                <a
                  href="tel:2247359191"
                  className="flex items-center justify-center gap-3 hover:text-primary transition-colors text-lg"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (224) 735-9191
                </a>
                <a
                  href="mailto:j.foley@matchpointpickleballclub.com"
                  className="flex items-center justify-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  j.foley@matchpointpickleballclub.com
                </a>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>350 McCormick Blvd, Columbus, OH 43213</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:j.foley@matchpointpickleballclub.com?subject=Corporate%20Membership%20Inquiry"
                  className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-block"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CorpMemberships;
