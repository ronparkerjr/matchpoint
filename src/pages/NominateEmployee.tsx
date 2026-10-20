import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import NominationForm from "@/components/NominationForm";
import { Award } from "lucide-react";

const NominateEmployee = () => {
  return (
    <Layout>
      <PageHero
        title="Nominate an Employee"
        subtitle="Had a great experience with a Match Point team member? Send them a shoutout — they could be our next Employee of the Month."
      />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <Award size={18} />
                <span className="text-sm uppercase tracking-wide font-semibold">Employee of the Month</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
                Recognize a Team Member
              </h2>
              <p className="text-muted-foreground mb-4">
                Our staff works hard to make Match Point the best place to play in Columbus.
                When someone goes above and beyond, we want to know about it. Nominations are
                shared with leadership and considered for our monthly recognition.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Went out of their way to help you or another member</li>
                <li>Made your visit memorable in a meaningful way</li>
                <li>Demonstrates consistent professionalism and friendliness</li>
                <li>Helped a new player feel welcome at the club</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <NominationForm
                nomineeLabel="Employee"
                subject="Employee of the Month Nomination"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NominateEmployee;
