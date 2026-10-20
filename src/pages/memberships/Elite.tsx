import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const COURTRESERVE_URL = "https://app.courtreserve.com/Online/Memberships/Public/17037";

const Elite = () => (
  <Layout>
    <PageHero title="Tier-3 Dink" subtitle="Individual Membership · Our Top Tier" />
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="bg-card border border-primary/40 rounded-2xl p-8 md:p-12 shadow-lg shadow-primary/10">
            <div className="mb-2">
              <span className="text-4xl font-bold text-foreground">$109</span>
              <span className="text-muted-foreground text-base ml-2">/ month</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">$99 one-time initiation fee. Family options: $149 (2 adults) or $199 (family + 2 minors).</p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Everything unlimited: unlimited open play at all hours and unlimited doubles court rentals,
              plus free PlaySight recording and the longest advance booking window.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-4">What's Included</h3>
            <ul className="space-y-3 mb-10">
              {[
                "Unlimited open play — peak and off peak",
                "Unlimited doubles court rentals — peak and off peak",
                "Singles court rentals just $10/hr",
                "20% off ball machine — bring your own machine free (off peak only)",
                "Free PlaySight recording",
                "Advance booking up to 14 days",
                "Cancellation policy applies unless the reservation is cancelled at least 24 hours in advance",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mb-8">
              Family add-ons: additional minor child $29 each, additional adult $49 each.
              Annual option: pay for 12 months and get the 13th month free.
            </p>
            <a
              href={COURTRESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 px-8 rounded-xl font-semibold text-base bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <span className="block">Join Now</span>
              <span className="block text-xs font-normal opacity-80 mt-0.5">(clicking this will take you to CourtReserve where you will sign-up)</span>
            </a>
            <div className="mt-4 text-center">
              <Link to="/memberships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to all memberships
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Elite;
