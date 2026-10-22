import { Trophy, CalendarDays, DollarSign, Clock, ArrowRight } from "lucide-react";
import { publicAsset } from "@/lib/publicAsset";

export const ANNIVERSARY_REGISTER_URL =
  "https://pickleballtournaments.com/tournaments/match-point-championships-1-year-anniversary-tournament";

const days = [
  { date: "Fri, Nov 6", event: "Money Ball", detail: "6 PM – 10 PM" },
  { date: "Sat, Nov 7", event: "Gender & Singles", detail: "Brackets all day" },
  { date: "Sun, Nov 8", event: "Mixed Doubles", detail: "Brackets all day" },
];

const payouts = [
  { division: "Under 7.5", places: ["1st $500 split", "2nd $300 split", "3rd $200 split"] },
  { division: "7.5 to 9.0", places: ["1st $500 split", "2nd $300 split", "3rd $200 split"] },
  { division: "9.0 and above", places: ["1st $500 split", "2nd $300 split", "3rd $200 split"] },
];

type Props = { variant?: "full" | "compact"; className?: string };

const AnniversaryTournamentPromo = ({ variant = "full", className = "" }: Props) => {
  return (
    <section
      id="anniversary-championship"
      aria-labelledby="anniversary-heading"
      className={`scroll-mt-24 py-16 md:py-20 bg-background border-t border-border ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6 md:p-10 shadow-lg shadow-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <a
              href={ANNIVERSARY_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={publicAsset("/images/anniversary-championship-flyer.jpg")}
                alt="Match Point Championship One Year Anniversary Tournament — Nov 6, 7 and 8, three Money Balls, $55 entry fee"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
            </a>

            <div>
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                <Trophy size={14} aria-hidden="true" /> One Year Strong
              </span>

              <h2 id="anniversary-heading" className="font-display text-3xl md:text-5xl text-bright mb-3">
                Championship <span className="text-primary">Anniversary Tournament</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Three days of champions, three Money Balls, and cash on the line in every combined DUPR division.
                We're turning one — come play to win, play to be the champion on the biggest weekend in Match Point history.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {days.map((d) => (
                  <div key={d.date} className="bg-card border border-border rounded-lg p-4">
                    <p className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <CalendarDays size={14} aria-hidden="true" /> {d.date}
                    </p>
                    <p className="text-foreground font-semibold text-sm mt-1">{d.event}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{d.detail}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-7 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <DollarSign size={16} className="text-primary shrink-0" aria-hidden="true" />
                  <span><strong className="text-foreground">$55 entry fee</strong> — just $15 for each additional event</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trophy size={16} className="text-primary shrink-0" aria-hidden="true" />
                  <span><strong className="text-foreground">3 Money Balls</strong> — all three events pay to top three finishers!</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-primary shrink-0" aria-hidden="true" />
                  <span>Money Ball night runs <strong className="text-foreground">6 PM – 10 PM</strong>. Spots are limited.</span>
                </li>
              </ul>

              <a
                href={ANNIVERSARY_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View Tournament &amp; Register <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {variant === "full" && (
            <div className="mt-10">
              <p className="text-center text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Prize Money — All Three Money Ball Events Pay to Top Three Finishers
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {payouts.map((p) => (
                  <div key={p.division} className="bg-card border border-border rounded-lg p-5 text-center">
                    <p className="font-display text-xl text-bright mb-3">{p.division}</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {p.places.map((pl) => (
                        <li key={pl}>{pl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnniversaryTournamentPromo;
