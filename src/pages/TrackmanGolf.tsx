import { publicAsset } from "@/lib/publicAsset";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Trophy, MonitorPlay } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const features = [
  {
    icon: <Target size={28} />,
    title: "Precision Tracking",
    description:
      "Trackman's dual radar technology captures every detail of your swing — ball speed, launch angle, spin rate, and more — giving you tour-level data to elevate your game.",
  },
  {
    icon: <MonitorPlay size={28} />,
    title: "World-Famous Courses",
    description:
      "Play virtual rounds on iconic courses from around the globe, including Pebble Beach, St Andrews, and many more — all from the comfort of our indoor bays.",
  },
  {
    icon: <Users size={28} />,
    title: "Social & Corporate Events",
    description:
      "Host unforgettable group outings, corporate team-building events, or birthday parties. Our simulator bays are perfect for competitive fun in any setting.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Leagues & Competitions",
    description:
      "Join our Trackman golf leagues for weekly competition. Compete against friends and fellow members in stroke play, match play, and closest-to-the-pin challenges.",
  },
];

const TrackmanGolf = () => {
  return (
    <Layout>
      <PageHero
        title="Trackman Golf"
        subtitle="State-of-the-art golf simulators powered by Trackman technology"
        image={publicAsset("/images/trackman-hero.png")}
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
              Golf, Reimagined
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Match Point brings the world's most advanced golf simulator experience to Central Ohio. Powered by Trackman — the same technology trusted by PGA Tour professionals — our indoor golf bays deliver an immersive, data-driven experience unlike anything else in the region.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're fine-tuning your swing, playing a round with friends, or hosting a corporate event, Trackman Golf at Match Point is your year-round destination for world-class golf.
            </p>
          </motion.div>
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
              The Trackman Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tour-level technology meets an unbeatable social atmosphere.
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
            src={publicAsset("/images/facility-aerial.jpg")}
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
              Ready to Tee Off?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
              Become a member to reserve your Trackman bay and experience golf like never before.
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

export default TrackmanGolf;
