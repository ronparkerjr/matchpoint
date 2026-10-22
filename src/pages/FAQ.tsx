import { publicAsset } from "@/lib/publicAsset";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSections = [
  {
    title: "About the Club",
    items: [
      {
        q: "What is Match Point Pickleball Club?",
        a: "Match Point Pickleball Club is a world-class indoor pickleball facility in Columbus, Ohio. Our mission is to provide a top-tier playing experience for everyone, from beginners to seasoned professionals, and to foster a vibrant and welcoming pickleball community. Several of our courts also convert to badminton, championship Table Tennis provided by Joola!",
      },
      {
        q: "Where are you located?",
        a: "Our facility is located at 350 McCormick Blvd., Columbus, OH 43213.",
      },
      {
        q: "Are you open, and what are your hours?",
        a: "Yes — Match Point Pickleball Club is open every day of the year, Monday–Friday 7 AM to 11 PM and Saturday–Sunday 7 AM to 10 PM, at 350 McCormick Blvd., Columbus, OH 43213. Open play, court reservations, lessons, and leagues all run daily.",
      },
    ],
  },
  {
    title: "Membership",
    items: [
      {
        q: "Do you offer memberships?",
        a: "Yes, we offer a variety of tiered membership options to suit different needs and playing frequencies. Memberships are available now.",
      },
      {
        q: "What are the benefits of a membership?",
        a: "Membership benefits include discounted court time, priority booking, access to exclusive events and leagues, and discounts at our pro shop and other amenities.",
      },
      {
        q: "How can I sign up for a membership?",
        a: "You can find more information and sign up for a membership through our online portal, powered by CourtReserve.",
      },
    ],
  },
  {
    title: "Facilities & Amenities",
    items: [
      {
        q: "How many courts do you have?",
        a: "Match Point Pickleball Club features 38 professional-grade indoor cushioned pickleball courts, ensuring ample space for open play, lessons, and tournaments.",
      },
      {
        q: "What other amenities do you offer?",
        a: "Beyond the courts, we offer a full-service restaurant and healthy drink choices, a well-stocked pro shop, state-of-the-art golf simulators, spacious locker rooms, a comfortable players' lounge, badminton, table tennis, banquet and team-building facilities, and many more surprises.",
      },
    ],
  },
  {
    title: "Playing at Match Point",
    items: [
      {
        q: "Do I need to be a member to play?",
        a: "Memberships offer the best value and access, and we also offer hourly court rentals and drop-in passes for non-members.",
      },
      {
        q: "Can I reserve a court in advance?",
        a: "Yes. Court reservations are available through CourtReserve, and members receive advance booking benefits based on their plan.",
      },
      {
        q: "Do you offer lessons and clinics?",
        a: "Yes. Our instructors offer private lessons, group clinics, and beginner classes for a range of skill levels.",
      },
      {
        q: "Will you have leagues and tournaments?",
        a: "Yes. Match Point hosts leagues across several formats and skill levels, along with scheduled tournaments and special events.",
      },
      {
        q: "Is there a place to buy equipment?",
        a: "Yes. Our on-site pro shop carries paddles, balls, apparel, and accessories.",
      },
    ],
  },
];

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Match Point Pickleball Club"
        image={publicAsset("/images/faq-hero.jpg")}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-12">
            Match Point Pickleball Club is open at 350 McCormick Blvd. in Columbus, Ohio, with 38 indoor championship-size courts featuring CushionX surfaces.
          </p>

          {faqSections.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="font-display text-2xl text-bright mb-4">{section.title}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${section.title}-${i}`}
                    className="border border-border rounded-lg px-4 bg-card"
                  >
                    <AccordionTrigger className="text-foreground font-medium text-left py-4 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              We look forward to welcoming you to Match Point Pickleball Club!
            </p>
            <Link
              to="/memberships"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Sign Up for Membership
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
