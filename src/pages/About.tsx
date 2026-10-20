import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const About = () => {
  return (
    <Layout>
      <PageHero
        title="We Are Match Point"
        subtitle="Central Ohio's premier destination for pickleball and sports entertainment"
        image="/images/facility-photo.jpg"
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
              <h2 className="font-display text-3xl text-bright">About Match Point Pickleball Club</h2>
              <p className="text-muted-foreground leading-relaxed">
                Match Point Pickleball Club is Central Ohio's indoor destination for pickleball and sports entertainment. Born from a passion for pickleball and a vision for a welcoming, high-energy community hub, Match Point is more than a place to play — it's a place to connect, compete, and celebrate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our facility at 350 McCormick Blvd welcomes players of all ages and skill levels. Seasoned competitors find 38 professional-grade indoor courts and organized play, while newcomers can learn through lessons, clinics, and beginner-friendly programs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of sport to bring people together. Beyond pickleball, Match Point hosts social events, tournaments, leagues, badminton, table tennis, and Trackman golf experiences in a year-round, climate-controlled venue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are grateful to the thousands of players who have made Match Point part of their community. Join us for open play, reserve a court, take a lesson, or find a league that fits your game.
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
                alt="Indoor pickleball courts at Match Point in Columbus"
                className="w-full rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Compare membership options for year-round access to our 38 indoor courts and club programs.
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

export default About;
