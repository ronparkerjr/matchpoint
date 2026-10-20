import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import NominationForm from "@/components/NominationForm";
import { Sparkles } from "lucide-react";

const NominateMember = () => {
  return (
    <Layout>
      <PageHero
        title="Nominate a Member"
        subtitle="Know a Match Point member who deserves a spotlight? Send us their story and they could be our next Member of the Month."
      />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Sparkles size={18} />
                <span className="text-sm uppercase tracking-wide font-semibold">Member of the Month</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
                Shine a Light on a Fellow Player
              </h2>
              <p className="text-muted-foreground mb-4">
                Each month we feature a Match Point member who brings energy, sportsmanship,
                and community to our courts. Nominations are read by our staff and the
                honoree gets featured on our website and social channels.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Welcomes new players and makes them feel at home</li>
                <li>Shows up consistently for open play, leagues, or events</li>
                <li>Embodies great sportsmanship on and off the court</li>
                <li>Has a story worth sharing with the community</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <NominationForm
                nomineeLabel="Member"
                subject="Member of the Month Nomination"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NominateMember;
