import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Trophy, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const features = [
  {
    icon: <Zap size={28} />,
    title: "Fast-Paced Action",
    description:
      "Experience the thrill of table tennis on professional-grade tables. Whether you're a beginner or a seasoned player, our facility has everything you need for an exciting match.",
  },
  {
    icon: <Users size={28} />,
    title: "Open Play & Social Events",
    description:
      "Drop in for open play sessions or join our social events. Table tennis is the perfect way to meet new people, stay active, and have fun with friends and family.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Tournaments & Leagues",
    description:
      "Compete in organized tournaments and leagues for all skill levels. From casual round-robins to competitive brackets, there's always a challenge waiting for you.",
  },
  {
    icon: <Clock size={28} />,
    title: "Flexible Scheduling",
    description:
      "Reserve tables at your convenience or enjoy walk-in availability during open play hours. Our flexible scheduling makes it easy to fit a game into your day.",
  },
];

const TableTennis = () => {
  return (
    <Layout>
      <PageHero
        title="Table Tennis"
        subtitle="Fast, fun, and competitive — table tennis for all skill levels"
        image="/images/table-tennis-hero.png"
      />

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-bright mb-6">
              Ping Pong, Elevated
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Match Point brings world-class table tennis to Central Ohio. Our dedicated table tennis area features professional-grade tables and equipment, creating the perfect environment for players of all levels.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're looking for a casual rally, intense competition, or a fun activity for the whole family, table tennis at Match Point delivers an experience that's fast, social, and endlessly entertaining.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-2">See It in Action</h2>
            <p className="text-muted-foreground">Watch table tennis live at Match Point.</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start flex-wrap">
            {[
              { id: "26130127003321137", title: "Table Tennis at Match Point" },
              { id: "1686721516034743", title: "Table Tennis Highlights" },
            ].map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-border mx-auto"
                style={{ width: 360, height: 640, flexShrink: 0 }}
              >
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.id}&show_text=0&width=360&height=640`}
                  title={video.title}
                  width="360"
                  height="640"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: "none", overflow: "hidden", display: "block" }}
                  scrolling="no"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-bright mb-4">
              The Table Tennis Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional tables, great atmosphere, and non-stop action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-display text-2xl text-bright mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async"
            src="/images/facility-aerial.jpg"
            alt="Match Point facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-bright mb-4">
              Ready to Play?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Become a member and enjoy unlimited access to our table tennis area and all Match Point amenities.
            </p>
            <Link
              to="/memberships"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Become a Member <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TableTennis;
