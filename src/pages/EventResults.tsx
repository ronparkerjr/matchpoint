import { publicAsset } from "@/lib/publicAsset";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const EventResults = () => {
  return (
    <Layout>
      <PageHero title="Event Results" subtitle="Scores, standings, and results from Match Point events." image={publicAsset("/images/event-results-hero.jpg")} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Trophy className="text-primary mb-6" size={48} />
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
              Event Results Archive
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              No verified results are currently available to publish. For information about a past Match Point event, contact our team.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EventResults;
