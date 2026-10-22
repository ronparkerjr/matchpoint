import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { NEARBY_CITIES } from "@/data/nearbyCities";
import { publicAsset } from "@/lib/publicAsset";

const SITE = "https://www.matchpointpickleballclub.com";
const DEFAULT_TITLE = "Indoor Pickleball Courts Columbus OH | Match Point Club";
const DEFAULT_DESC =
  "Match Point Pickleball Club — 38 indoor pickleball courts in Columbus, OH. Memberships, leagues, lessons, and open play at 350 McCormick Blvd.";

const META: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
  },
  "/about": {
    title: "About Match Point Pickleball Club | Columbus, OH",
    description:
      "Learn about Match Point Pickleball Club — 38 indoor courts, our story, mission, and the team behind Columbus's largest pickleball destination.",
  },
  "/our-facility": {
    title: "Pickleball Courts in Columbus, Ohio | Our Facility",
    description:
      "38 indoor pickleball courts in Columbus, Ohio — plus pro shop, café, golf simulators, and locker rooms at 350 McCormick Blvd. Open Mon–Fri 7am–11pm, Sat–Sun 7am–10pm.",
  },
  "/memberships": {
    title: "Match Point Memberships | Indoor Pickleball Columbus OH",
    description:
      "Compare Match Point memberships in Columbus, OH — Drop-In, Tier-1 Serve, Tier-2 Drive, Tier-3 Dink, Family, Silver Sneakers, and more. Indoor pickleball, badminton, and table tennis.",
  },
  "/memberships/tier-1-serve": { title: "Tier-1 Serve Membership | Match Point", description: "Tier-1 Serve individual membership benefits, pricing, and CourtReserve signup at Match Point in Columbus, OH." },
  "/memberships/tier-2-drive": { title: "Tier-2 Drive Membership | Match Point", description: "Tier-2 Drive individual membership benefits, pricing, and CourtReserve signup at Match Point in Columbus, OH." },
  "/memberships/tier-3-dink": { title: "Tier-3 Dink Membership | Match Point", description: "Tier-3 Dink individual membership benefits, pricing, and CourtReserve signup at Match Point in Columbus, OH." },
  "/memberships/tier-1-serve-couple": { title: "Tier-1 Serve Couple Membership | Match Point", description: "Tier-1 Serve couple membership benefits and pricing at Match Point Pickleball Club." },
  "/memberships/tier-2-drive-couple": { title: "Tier-2 Drive Couple Membership | Match Point", description: "Tier-2 Drive couple membership benefits and pricing at Match Point Pickleball Club." },
  "/memberships/tier-3-dink-couple": { title: "Tier-3 Dink Couple Membership | Match Point", description: "Tier-3 Dink couple membership benefits and pricing at Match Point Pickleball Club." },
  "/memberships/drop-in": {
    title: "Drop-In Pass | Match Point Pickleball Club",
    description:
      "Single-visit drop-in access to Match Point's 38 indoor pickleball courts in Columbus, OH. No membership required.",
  },
  "/memberships/elite": {
    title: "Elite Membership | Match Point Pickleball Club",
    description:
      "Elite individual membership at Match Point — full access to 38 indoor courts, programs, and member pricing in Columbus, OH.",
  },
  "/memberships/elite-couple": {
    title: "Elite Couple Membership | Match Point Pickleball Club",
    description:
      "Two-person Elite membership at Match Point Pickleball Club. Shared benefits and full access to all club amenities in Columbus, OH.",
  },
  "/memberships/elite-family": {
    title: "Elite Family Membership | Match Point Pickleball Club",
    description:
      "Family Elite membership at Match Point Pickleball Club. Full club access for the whole household in Columbus, OH.",
  },
  "/memberships/silver-sneakers": {
    title: "Silver Sneakers | Match Point Pickleball Club",
    description:
      "Silver Sneakers members play free at Match Point Pickleball Club. Designated court times and programs in Columbus, OH.",
  },
  "/memberships/badminton-member": {
    title: "Badminton Membership | Match Point Pickleball Club",
    description:
      "Badminton-focused membership at Match Point Pickleball Club. Court access and programs in Columbus, OH.",
  },
  "/memberships/table-tennis-member": {
    title: "Table Tennis Membership | Match Point Pickleball Club",
    description:
      "Table tennis membership at Match Point Pickleball Club. Tables, leagues, and open play in Columbus, OH.",
  },
  "/corp-memberships": {
    title: "Corporate Memberships | Match Point Pickleball Club",
    description:
      "Corporate pickleball memberships and team-building packages at Match Point Pickleball Club in Columbus, OH.",
  },
  "/faq": {
    title: "FAQ | Match Point Pickleball Club",
    description:
      "Answers to common questions about memberships, court reservations, lessons, leagues, and visiting Match Point in Columbus, OH.",
  },
  "/leagues": {
    title: "Pickleball Leagues | Match Point Columbus, OH",
    description:
      "Join a pickleball league at Match Point Columbus — men's, women's, mixed, and skill-based formats year-round.",
  },
  "/pickleball": {
    title: "Pickleball at Match Point | Columbus, OH",
    description:
      "Open play, leagues, lessons, and tournaments on 38 indoor pickleball courts at Match Point in Columbus, OH.",
  },
  "/pickleball-instruction": {
    title: "Pickleball Lessons in Columbus, OH | Match Point",
    description:
      "Private lessons, group clinics, and beginner programs from certified pickleball instructors at Match Point in Columbus, OH.",
  },
  "/reserve-a-court": {
    title: "Book a Pickleball Court in Columbus, OH | Match Point",
    description:
      "Reserve indoor pickleball, badminton, table tennis, or Trackman golf court time in Columbus, Ohio. Open play and court booking Mon–Fri 7am–11pm, Sat–Sun 7am–10pm.",
  },
  "/player-showcase": {
    title: "Player Showcase | Match Point Pickleball Club",
    description:
      "Meet featured Match Point players and see standout moments from our Columbus pickleball community.",
  },
  "/table-tennis": {
    title: "Table Tennis | Match Point Columbus, OH",
    description:
      "Table tennis tables, leagues, and open play at Match Point Pickleball Club in Columbus, OH.",
  },
  "/badminton": {
    title: "Badminton | Match Point Columbus, OH",
    description:
      "Indoor badminton courts, leagues, and open play at Match Point Pickleball Club in Columbus, OH.",
  },
  "/trackman-golf": {
    title: "Trackman Indoor Golf | Match Point Columbus, OH",
    description:
      "Trackman golf simulator bays at Match Point — practice, play famous courses, and book a bay in Columbus, OH.",
  },
  "/playsight": {
    title: "PlaySight SmartCourts | Match Point Pickleball Club",
    description:
      "PlaySight SmartCourt technology at Match Point — record, review, and improve your pickleball game in Columbus, OH.",
  },
  "/photos": {
    title: "Photos | Match Point Pickleball Club Columbus, OH",
    description:
      "Photo gallery of Match Point Pickleball Club's facility, events, and members in Columbus, OH.",
  },
  "/videos": {
    title: "Videos | Match Point Pickleball Club Columbus, OH",
    description:
      "Highlight reels, instructional videos, and event recaps from Match Point Pickleball Club in Columbus, OH.",
  },
  "/member-of-the-month": {
    title: "Member of the Month | Match Point Pickleball Club",
    description:
      "Meet Match Point's Member of the Month — featured players, stories, and highlights from Columbus, OH's pickleball community.",
  },
  "/employee-of-the-month": { title: "Employee of the Month | Match Point", description: "Meet featured Match Point team members and learn how they support the Columbus pickleball community." },
  "/nominate-member": { title: "Nominate a Member | Match Point", description: "Nominate a Match Point community member for Member of the Month recognition." },
  "/nominate-employee": { title: "Nominate an Employee | Match Point", description: "Nominate a Match Point team member for Employee of the Month recognition." },
  "/matchpoint-live": { title: "MatchPoint Live Court Streams | Columbus, OH", description: "Watch available live court and golf bay streams from Match Point Pickleball Club." },
  "/programs": { title: "Pickleball Programs | Match Point Columbus", description: "Explore leagues, open play, clinics, lessons, and tournaments at Match Point in Columbus, Ohio." },
  "/become-a-sponsor": { title: "Become a Sponsor | Match Point", description: "Explore sponsorship opportunities across Match Point courts, tournaments, digital channels, banners, and in-club screens." },
  "/sponsorship-deck": { title: "Sponsorship Deck | Match Point", description: "Review Match Point sponsorship reach, activation opportunities, and partnership options in Columbus, Ohio." },
  "/event-results": {
    title: "Event Results | Match Point Pickleball Club",
    description:
      "Tournament and league results from events held at Match Point Pickleball Club in Columbus, OH.",
  },
  "/private-events": {
    title: "Private Events | Match Point Pickleball Club",
    description:
      "Host birthdays, corporate outings, and private parties at Match Point Pickleball Club in Columbus, OH.",
  },
  "/sponsors": {
    title: "Sponsors & Partners | Match Point Pickleball Club",
    description:
      "Match Point Pickleball Club's sponsors and partners supporting Columbus, Ohio's pickleball community.",
  },
  "/ortho-alliance": {
    title: "OrthoAlliance | Match Point Pickleball Partner",
    description:
      "OrthoAlliance is the official orthopedic partner of Match Point Pickleball Club in Columbus, OH.",
  },
  "/employment": {
    title: "Careers & Employment | Match Point Pickleball Club",
    description:
      "Open positions at Match Point Pickleball Club — join the team at Columbus's largest indoor pickleball facility.",
  },
  "/announcements": {
    title: "Announcements | Match Point Pickleball Club",
    description:
      "Latest news, updates, and announcements from Match Point Pickleball Club in Columbus, OH.",
  },
  "/preferred-hotels": {
    title: "Preferred Hotels | Match Point Pickleball Club Columbus",
    description:
      "Preferred hotels near Match Point Pickleball Club in Columbus, OH. Use code MPpoint at booking for special player and guest rates.",
  },
  "/pickleball-lessons-columbus": {
    title: "Pickleball Lessons Columbus OH | Coaches & Clinics",
    description:
      "Pickleball lessons in Columbus, OH — private coaching, group clinics, and beginner classes on 38 indoor courts at Match Point Pickleball Club.",
  },
  "/pickleball-leagues-columbus": {
    title: "Pickleball Leagues Columbus OH | Men's, Women's & Mixed",
    description:
      "Join a pickleball league in Columbus, OH. Men's, women's, mixed, and 2.5–4.5+ skill divisions year-round on 38 indoor courts at Match Point.",
  },
  "/book-pickleball-court-columbus": {
    title: "Book a Pickleball Court Columbus OH | Hourly Rentals",
    description:
      "Book a pickleball court in Columbus, OH by the hour. 38 indoor climate-controlled courts, instant online booking, no membership required. Open Mon–Fri 7 AM–11 PM, Sat–Sun 7 AM–10 PM.",
  },
  "/indoor-pickleball-courts-columbus": {

    title: "Indoor Pickleball Courts Columbus OH | Book a Court",
    description:
      "Book one of 38 indoor pickleball courts in Columbus, OH. Reserved court time, open play, and drop-in passes Mon–Fri 7 AM–11 PM, Sat–Sun 7 AM–10 PM at Match Point.",
  },
  "/lee-whitwell-clinics": {
    title: "Lee Whitwell Pickleball Clinics Columbus OH | Match Point",
    description:
      "Train with pro pickleball player Lee Whitwell at Match Point in Columbus, OH — Silver Sneakers, women's, coed, and tennis-to-pickleball clinics on 38 indoor courts.",
  },
  "/contact-us": {
    title: "Contact Us | Match Point Pickleball Club Columbus, OH",
    description:
      "Get in touch with Match Point Pickleball Club. Call 614-569-2556 or email support@matchpointpickleballclub.com.",
  },
};

for (const city of NEARBY_CITIES) {
  META[city.path] = {
    title: `Pickleball ${city.cityState} | Courts, Lessons & Leagues`,
    description: `Indoor pickleball near ${city.cityState} — 38 courts ${city.drive}. Book court time, take lessons, or join a league at Match Point, open Mon–Fri 7 AM–11 PM, Sat–Sun 7 AM–10 PM.`,
  };
}

export default function RouteSEO() {
  const { pathname } = useLocation();
  let entry = META[pathname];

  if (!entry) {
    entry = { title: DEFAULT_TITLE, description: DEFAULT_DESC };
  }

  const url = `${SITE}${pathname}`;
  const imageUrl = new URL(publicAsset("/images/facility-aerial.jpg"), window.location.origin).href;
  return (
    <Helmet>
      <title>{entry.title}</title>
      <meta name="description" content={entry.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={entry.title} />
      <meta property="og:description" content={entry.description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Match Point Pickleball Club" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Match Point Pickleball Club facility in Columbus, Ohio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={entry.title} />
      <meta name="twitter:description" content={entry.description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
