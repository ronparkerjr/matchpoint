import { motion } from "framer-motion";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Announcements = () => {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);
  return (
    <Layout>
      <section className="pt-4 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="sticky top-[88px] z-40 bg-background/95 backdrop-blur-sm -mx-4 px-4 lg:-mx-8 lg:px-8 mb-6">
            <nav className="flex flex-wrap items-center justify-center gap-3 py-5">
              <button type="button"
                onClick={() => scrollTo("whats-new")}
                className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                🍂 What's New
              </button>
              <button type="button"
                onClick={() => scrollTo("dink-awards")}
                className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                🏆 Dink Awards
              </button>
              <button type="button"
                onClick={() => scrollTo("latest-video")}
                className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                🎥 90 Day Update
              </button>
            </nav>
            <hr className="border-border" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Announcements
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay up to date with the latest news, events, and updates from Match Point.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">

            {/* Current Highlights */}
            <motion.article
              id="whats-new"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-5"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Fall 2026 · What's New</p>
              <h2 className="text-foreground font-bold text-xl md:text-2xl">Fall at Match Point</h2>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">One Year Anniversary Championship Tournament — Nov 6–8.</strong>{" "}
                  Money Ball, gender, singles, and mixed doubles events.{" "}
                  <Link to="/programs" className="text-primary font-semibold hover:underline">Tournament details →</Link>
                </li>
                <li>
                  <strong className="text-foreground">League schedules and registration.</strong>{" "}
                  Review current and recently listed sessions before registering through CourtReserve.{" "}
                  <Link to="/leagues" className="text-primary font-semibold hover:underline">See leagues &amp; sign up →</Link>
                </li>
                <li>
                  <strong className="text-foreground">Lee Whitwell Clinics.</strong>{" "}
                  Train with two-time MLP MVP Lee Whitwell in Silver Sneakers, women's, coed, and tennis-to-pickleball clinics.{" "}
                  <Link to="/lee-whitwell-clinics" className="text-primary font-semibold hover:underline">View clinics →</Link>
                </li>
              </ul>
            </motion.article>

            <motion.article
              id="dink-awards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  AWARD
                </span>
                <span className="text-muted-foreground text-sm">The Dink Pickleball</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                🏆 The People Have Spoken…
              </h2>

              <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                <p>
                  Our final set of <strong className="text-foreground">120/Life Dink Award winners</strong> are finally here! Here are the winners for <strong className="text-foreground">Best Pickleball Facility (by region)</strong> and <strong className="text-foreground">Best International Tournament</strong>.
                </p>

                <p>
                  A huge thank you to everyone who voted in this year's <strong className="text-foreground">120/Life Dink Awards</strong>—the original and largest fan-choice pickleball awards. We appreciate you taking the time to weigh in, debate, and support the people and teams that make this sport what it is.
                </p>

                <p>
                  Check out the rest of the winners on this week's <strong className="text-foreground">PicklePod</strong> episode! 🎙️
                </p>
              </div>

              <div className="relative w-full rounded-lg overflow-hidden border border-border" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src="https://www.youtube.com/embed/6zUK8-DOTS4?start=2140&end=2200&rel=0&modestbranding=1"
                  title="Match Point Wins Best Midwest Pickleball Facility"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.article>

            <motion.article
              id="latest-video"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  VIDEO
                </span>
                <span className="text-muted-foreground text-sm">Match Point's 90 Day Progress Report</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                🎥 Match Point's First 90 Days Review
              </h2>

              <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 mb-6">
                <p>
                  See what's happening at Match Point! Watch our latest video straight from our Facebook page.
                </p>
              </div>

              <div className="relative w-full rounded-lg overflow-hidden border border-border" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src="https://www.youtube.com/embed/P2pcwZtnd8s?rel=0&modestbranding=1"
                  title="Match Point 90 Day Update"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Announcements;
