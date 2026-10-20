import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BedDouble, ExternalLink, Tag } from "lucide-react";

type Hotel = {
  name: string;
  description: string;
  url: string;
  display: string;
};

const hotels: Hotel[] = [
  {
    name: "Hilton Garden Inn Columbus Airport",
    description:
      "Full-service comfort with on-site dining, a fitness center, and easy access to Match Point Pickleball Club.",
    url: "https://www.columbusairport.stayhgi.com",
    display: "columbusairport.stayhgi.com",
  },
  {
    name: "Hampton Inn Columbus Airport",
    description:
      "Free hot breakfast, free Wi-Fi, and comfortable rooms — a reliable choice for tournament weekends.",
    url: "https://www.columbusairport.hamptoninn.com",
    display: "columbusairport.hamptoninn.com",
  },
  {
    name: "Tru by Hilton Columbus Airport",
    description:
      "Modern, budget-friendly rooms with an open lobby, free breakfast, and a lively social space.",
    url: "https://www.hilton.com/en/hotels/cmhruru-tru-columbus-airport/",
    display: "hilton.com — Tru Columbus Airport",
  },
];

const PreferredHotels = () => {
  return (
    <Layout>
      <PageHero
        title="Preferred Hotels"
        subtitle="Special rates for Match Point players, guests, and visiting teams."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="border border-primary/40 bg-primary/5 rounded-lg p-6 md:p-8 mb-12 flex items-start gap-4">
            <Tag className="text-primary shrink-0 mt-1" size={22} aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-bright mb-2">
                Use Code <span className="text-primary">MPpoint</span> When Booking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To receive special Match Point rates, you must reference code{" "}
                <strong className="text-bright">MPpoint</strong> at the time of booking — online
                or when calling the hotel directly. Rates are subject to availability.
              </p>
            </div>
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-bright mb-8">
            Where to Stay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <article
                key={hotel.name}
                className="bg-card border border-border rounded-lg p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <BedDouble className="text-primary" size={18} aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-bright mb-2">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {hotel.description}
                </p>
                <a
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  aria-label={`Book ${hotel.name} (opens in a new tab)`}
                >
                  Book Now
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                <span className="text-xs text-muted-foreground mt-1 break-all">
                  {hotel.display}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Questions about group bookings or tournament blocks? Email{" "}
              <a
                href="mailto:support@matchpointpickleballclub.com"
                className="text-primary hover:underline"
              >
                support@matchpointpickleballclub.com
              </a>{" "}
              or call{" "}
              <a href="tel:614-569-2556" className="text-primary hover:underline">
                614-569-2556
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreferredHotels;
