import LocalLanding from "@/components/LocalLanding";
import type { NearbyCity } from "@/data/nearbyCities";

interface NearbyCityLandingProps {
  city: NearbyCity;
}

const NearbyCityLanding = ({ city }: NearbyCityLandingProps) => (
  <LocalLanding
    h1={`Pickleball in ${city.cityState} — Courts, Lessons & Leagues`}
    subtitle={`38 indoor courts ${city.drive}. Book court time, take a lesson, or join a league year-round.`}
    intro={[
      city.lede,
      `${city.localAngle} Match Point Pickleball Club is open Monday–Friday 7 AM to 11 PM and Saturday–Sunday 7 AM to 10 PM at 350 McCormick Blvd, Columbus, OH — an easy drive from ${city.landmarks.slice(0, 3).join(", ")} and the rest of ${city.city}.`,
    ]}
    highlightsTitle={`What ${city.city} Players Get at Match Point`}
    highlights={[
      {
        title: "Indoor Court Booking",
        body: `Reserve one of 38 climate-controlled courts by the hour, seven days a week. No rain-outs, no waiting for an open ${city.city} park court.`,
      },
      {
        title: "Lessons & Clinics",
        body: `Private coaching, group clinics, and beginner classes led by Head Pro Rachel McCreery and our certified staff — open to ${city.city} residents whether or not you're a member.`,
      },
      {
        title: "Leagues & Open Play",
        body: `Men's, women's, and mixed leagues from 2.5 through 4.5+, plus daily open play so you always have a game.`,
      },
    ]}
    bullets={[
      `${city.drive.charAt(0).toUpperCase()}${city.drive.slice(1)}`,
      "38 indoor courts — play in any weather, all year",
      "Certified coaching staff and junior programs",
      "Skill-based leagues and daily drop-in open play",
      "PlaySight SmartCourt video review on select courts",
      "Pro shop, café, golf simulators, badminton, and table tennis",
      "Free on-site parking, open Mon–Fri 7 AM–11 PM, Sat–Sun 7 AM–10 PM",
    ]}
    faqs={[
      {
        q: `Where can I play indoor pickleball near ${city.city}, Ohio?`,
        a: `Match Point Pickleball Club, 350 McCormick Blvd, Columbus, OH 43213, is the largest indoor pickleball facility near ${city.city} with 38 courts. It's ${city.drive} and open Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM.`,
      },
      {
        q: `How do I book a pickleball court from ${city.city}?`,
        a: "Reserve online through our CourtReserve booking portal, or call 614-569-2556. Courts can be booked by the hour, and drop-in open play passes are available for single visits.",
      },
      {
        q: `Do you offer pickleball lessons for ${city.city} players?`,
        a: `Yes. Private lessons, semi-private sessions, group clinics, and Intro to Pickleball classes are open to everyone in the ${city.city} area — members and non-members alike. Loaner paddles are available for beginners.`,
      },
      {
        q: `Can I join a league if I don't live in Columbus?`,
        a: `Absolutely. Our leagues draw players from ${city.city} and across central Ohio, including ${city.zips}. Divisions run from 2.5 through 4.5+ so you're matched with similar players.`,
      },
      {
        q: "Do I need a membership?",
        a: "No. Non-members can book court time, take lessons, and buy drop-in passes. Members get discounted court rates, priority booking, and included programming — Elite, Family, and Silver Sneakers options are available.",
      },
    ]}
    ctaTitle={`Ready to Play? ${city.city} Is Minutes Away`}
    ctaBody={`Book an indoor court, sign up for a lesson, or join a league at Columbus's largest pickleball club — ${city.drive}.`}
    primaryCta={{ label: "Book a Court", to: "/reserve-a-court", conversion: "court_booking" }}
    secondaryCta={{ label: "Explore Memberships", to: "/memberships", conversion: "cta" }}
    relatedLinks={[
      { label: "Indoor Pickleball Courts Columbus OH", to: "/indoor-pickleball-courts-columbus" },
      { label: "Pickleball Lessons Columbus OH", to: "/pickleball-lessons-columbus" },
      { label: "Pickleball Leagues Columbus OH", to: "/pickleball-leagues-columbus" },
      { label: "Our Facility", to: "/our-facility" },
    ]}
  />
);

export default NearbyCityLanding;
