import LocalLanding from "@/components/LocalLanding";

const IndoorPickleballCourtsColumbus = () => (
  <LocalLanding
    h1="Indoor Pickleball Courts in Columbus, Ohio"
    subtitle="Book one of 38 indoor courts at Columbus's largest pickleball facility — open Mon–Fri 7 AM to 11 PM, Sat–Sun 7 AM to 10 PM."
    intro={[
      "Match Point Pickleball Club has 38 dedicated indoor pickleball courts at 350 McCormick Blvd in Columbus, Ohio — the largest indoor pickleball facility in the region. Reserve a court by the hour, drop in for open play, or bring a group and book several courts side by side.",
      "Every court is indoors and climate-controlled with large ceiling fans and consistent lighting, so your game never depends on the Ohio forecast. Court booking is available online, and drop-in passes are available if you're not a member yet.",
    ]}
    highlightsTitle="Court Booking & Open Play"
    highlights={[
      {
        title: "Reserved Court Time",
        body: "Book a specific court and time online for you and your group — the simplest way to guarantee a spot at peak hours.",
      },
      {
        title: "Open Play",
        body: "Rotating open play sessions by skill level. Show up solo, get matched into games, and meet other Columbus players.",
      },
      {
        title: "Groups & Events",
        body: "Need several courts for a private event, corporate outing, or tournament? We can block courts for your group.",
      },
    ]}
    bullets={[
      "38 indoor, climate-controlled courts",
      "Open Mon–Fri 7 AM – 11 PM, Sat–Sun 7 AM – 10 PM, every day of the year",
      "Online court reservations",
      "Drop-in passes — no membership required",
      "PlaySight SmartCourt cameras and live streaming",
      "Pro shop, café, locker rooms, and free parking",
    ]}
    faqs={[
      {
        q: "How do I book an indoor pickleball court in Columbus?",
        a: "Reserve online through our court booking page, or call 614-569-2556. Courts can be booked by the hour, and peak evening times fill up first.",
      },
      {
        q: "Can I play without a membership?",
        a: "Yes. Drop-in passes give you single-visit access to the courts and open play sessions. Memberships lower your per-visit cost if you play regularly.",
      },
      {
        q: "How many pickleball courts do you have?",
        a: "38 dedicated indoor pickleball courts, plus Trackman golf simulators, badminton, and table tennis under the same roof.",
      },
      {
        q: "What are your hours?",
        a: "Match Point is open Monday–Friday 7 AM to 11 PM and Saturday–Sunday 7 AM to 10 PM at 350 McCormick Blvd, Columbus, OH.",
      },
      {
        q: "Do you rent paddles?",
        a: "Yes — loaner paddles are available, and our pro shop carries paddles, balls, and accessories if you want your own.",
      },
    ]}
    ctaTitle="Reserve a Court Today"
    ctaBody="Pick your time, grab your group, and play indoors — 38 courts, 365 days a year."
    primaryCta={{ label: "Book a Court", to: "/reserve-a-court", conversion: "court_booking" }}
    secondaryCta={{ label: "See Memberships", to: "/memberships", conversion: "cta" }}
    relatedLinks={[
      { label: "Book a Pickleball Court in Columbus", to: "/book-pickleball-court-columbus" },
      { label: "Pickleball Lessons in Columbus", to: "/pickleball-lessons-columbus" },
      { label: "Pickleball Leagues in Columbus", to: "/pickleball-leagues-columbus" },
      { label: "Our Facility", to: "/our-facility" },
      { label: "FAQ", to: "/faq" },
    ]}
  />
);

export default IndoorPickleballCourtsColumbus;
