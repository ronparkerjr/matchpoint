import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import LocalProgramLinks from "@/components/LocalProgramLinks";

const OurFacility = () => {
  return (
    <Layout>
      <PageHero
        title="Our Facility"
        subtitle="A world-class sports entertainment venue in the heart of Central Ohio"
        image="/images/our-facility-hero.png"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-bright">World-Class Courts & Amenities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Match Point Pickleball Club is designed from the ground up to deliver the ultimate playing experience. Our state-of-the-art facility at 350 McCormick Blvd features premium indoor courts, top-tier lighting, and climate-controlled environments so you can play comfortably year-round.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the courts, our venue offers a full-service sports entertainment experience — from comfortable lounge areas and viewing decks to a pro shop stocked with the latest gear. Whether you're here to compete or socialize, every detail has been crafted with our members in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img loading="lazy" decoding="async"
                src="/images/facility-courts.png"
                alt="Match Point indoor pickleball courts"
                className="w-full rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">Facility Highlights</h2>
            <p className="text-muted-foreground">Everything you need for an exceptional experience under one roof.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Indoor Pickleball Courts", description: "Multiple premium courts with professional-grade surfaces and lighting for optimal play." },
              { title: "Climate Controlled", description: "Play comfortably in any season with our fully climate-controlled indoor environment." },
              { title: "Pro Shop", description: "Browse the latest paddles, gear, and apparel from top brands right on-site." },
              { title: "Lounge & Social Areas", description: "Relax before or after your match in our comfortable lounge with viewing areas." },
              { title: "Event Space", description: "Host tournaments, leagues, and private events in our versatile facility." },
              { title: "Convenient Location", description: "Centrally located at 350 McCormick Blvd with ample parking for easy access." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <h3 className="font-display text-xl text-bright mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img loading="lazy" decoding="async"
              src="/images/facility-aerial.jpg"
              alt="Aerial view of Match Point facility"
              className="w-full rounded-lg object-cover max-h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      <LocalProgramLinks
        heading="Play, Learn & Compete in Columbus"
        subheading="Our indoor facility hosts daily open play, coaching, and league nights."
        className="py-20 bg-background border-t border-border"
      />

      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">Come See It for Yourself</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Memberships are available now. Be among the first to experience Central Ohio's premier pickleball destination.
          </p>
          <Link
            to="/memberships"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-block"
          >
            View Memberships
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OurFacility;
