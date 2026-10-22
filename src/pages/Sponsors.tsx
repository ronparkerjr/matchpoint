import { publicAsset } from "@/lib/publicAsset";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type Sponsor = {
  name: string;
  logo?: string;
  logoClassName?: string;
  video?: string;
  website?: string;
  about?: string; // internal route for "About Partnership"
  blurb?: string;
};

const presentingSponsors: Sponsor[] = [
  {
    name: "Fronteras",
    video: publicAsset("/videos/sponsors/fronteras-ad.mp4"),
    blurb: "Proud presenting partner of Match Point Pickleball Club.",
  },
];

const premierSponsors: Sponsor[] = [
  {
    name: "Dewz Crew",
    blurb:
      "A spirited Columbus pickleball crew bringing fun, community, and a competitive edge to the courts at Match Point — proud sponsors of Dewz Crew Court 6.",
    website: "https://www.instagram.com/dewzcrew/",
  },
  {
    name: "Cellaxs",
    logo: "/__l5e/assets-v1/ef6a8d28-e315-4642-8c83-a39efddec5bc/cellaxs-logo-white.png",
    blurb:
      "Proud sponsor of the Cellaxs Stadium Court at Match Point Pickleball Club. Cellaxs offers expert cell phone, tablet, and electronics repair, keeping our community connected on and off the court.",
    website: "https://cellaxs.com",
  },
  {
    name: "OrthoAlliance",
    logo: publicAsset("/images/oa-logo.png"),
    logoClassName: "bg-white p-4",
    blurb:
      "Official Sports Medicine and Wellness Partner of Match Point Pickleball Club — proud sponsor of OrthoAlliance Court 36, providing orthopedic care, sports medicine, and on-site athletic training support.",
    website: "https://orthoalliance.com/",
    about: "/ortho-alliance",
  },
  {
    name: "G&J Pepsi",
    logo: publicAsset("/images/sponsors/gj-pepsi-primary.svg"),
    logoClassName: "bg-white p-4",
    blurb:
      "Official Beverage Partner of Match Point Pickleball Club — proud sponsor of the G&J Pepsi Championship Court 38. A family-owned, independent Pepsi bottler serving Columbus and Ohio since 1925.",
    website: "https://www.gjpepsi.com",
  },
];
const supportingSponsors: Sponsor[] = [];

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
  const mediaInner = (
    <>
      {sponsor.video ? (
        <video
          src={sponsor.video}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : sponsor.logo ? (
        <img loading="lazy" decoding="async"
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="max-h-32 max-w-[80%] object-contain"
        />
      ) : (
        <span className="font-display text-2xl text-white">{sponsor.name}</span>
      )}
    </>
  );

  const mediaClass = `aspect-[16/9] flex items-center justify-center overflow-hidden ${
    sponsor.logoClassName ?? "bg-black"
  }`;

  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm flex flex-col">
      {sponsor.website && !sponsor.video ? (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className={mediaClass}
        >
          {mediaInner}
        </a>
      ) : (
        <div className={mediaClass}>{mediaInner}</div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl text-bright mb-2">
          {sponsor.website ? (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {sponsor.name}
            </a>
          ) : (
            sponsor.name
          )}
        </h3>
        {sponsor.blurb && (
          <p className="text-sm text-muted-foreground mb-4 flex-1">{sponsor.blurb}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-auto">
          {sponsor.about && (
            <Button asChild variant="outline" size="sm">
              <Link to={sponsor.about} target="_blank" rel="noopener noreferrer">
                About Partnership
              </Link>
            </Button>
          )}
          {sponsor.website && (
            <Button asChild size="sm">
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                Visit Website <ExternalLink size={14} className="ml-1.5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Tier = ({
  title,
  sponsors,
  columns = "md:grid-cols-2 lg:grid-cols-3",
  centered = false,
}: {
  title: string;
  sponsors: Sponsor[];
  columns?: string;
  centered?: boolean;
}) => {
  if (sponsors.length === 0) return null;
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl text-bright uppercase tracking-wide text-center mb-10">
          {title}
        </h2>
        <div className={`grid grid-cols-1 ${columns} gap-6 ${centered ? "max-w-4xl mx-auto" : ""}`}>
          {sponsors.map((s) => (
            <SponsorCard key={s.name} sponsor={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Sponsors = () => {
  return (
    <Layout>
      <PageHero
        title="Our Partners"
        subtitle="Thank you to the partners who help make Match Point the best place to play in Columbus."
      />

      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through on-site activations, events, and custom brand integrations, our
            partnership programs connect your brand with an active, engaged community
            and put your products in front of a premium audience across 38 indoor courts
            and 5 golf simulator bays.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/become-a-sponsor">
                <Sparkles size={16} className="mr-2" /> Become a Sponsor
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/sponsorship-deck">View Sponsorship Deck</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={publicAsset("/downloads/match-point-sponsorship-deck.pdf")} download>
                <Download size={16} className="mr-2" /> Download Deck (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Tier title="Sponsor of the Month" sponsors={presentingSponsors} columns="md:grid-cols-1" centered />
      <Tier title="Premier Partners" sponsors={premierSponsors} />
      <Tier title="Supporting Partners" sponsors={supportingSponsors} columns="md:grid-cols-3 lg:grid-cols-4" />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Become a Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Interested in partnering with Match Point Pickleball Club? Explore our
            sponsorship opportunities or reach out and we'll build a custom program
            that connects your brand with our community.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/become-a-sponsor">
                <Sparkles size={16} className="mr-2" /> View Sponsorship Opportunities
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/sponsorship-deck">
                <Download size={16} className="mr-2" /> Sponsorship Deck
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:support@matchpointpickleballclub.com">
                <Mail size={16} className="mr-2" /> support@matchpointpickleballclub.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
