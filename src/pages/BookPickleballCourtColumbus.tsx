import LocalLanding from "@/components/LocalLanding";

const BookPickleballCourtColumbus = () => (
  <LocalLanding
    h1="Book a Pickleball Court in Columbus, OH"
    subtitle="Hourly indoor court rentals on 38 climate-controlled courts — reserve online, Mon–Fri 7 AM to 11 PM and Sat–Sun 7 AM to 10 PM."
    intro={[
      "Looking to book a pickleball court in Columbus, Ohio? Match Point Pickleball Club rents indoor court time by the hour on 38 dedicated courts at 350 McCormick Blvd, just off I-270 on the east side. Pick your date and time, choose a court, and pay online — your reservation is confirmed instantly, no phone tag required.",
      "Court rentals work for everyone: a singles match before work, a standing doubles game with friends, a coached practice session, or a block of courts for a league or corporate outing. Because every court is indoors and climate-controlled, your reserved time never gets rained out, snowed out, or moved for heat.",
      "You do not need a membership to rent a court. Non-members can reserve court time or buy a drop-in pass, while members get a longer booking window and lower hourly rates — which usually pays off if you play more than a couple of times a month.",
    ]}
    highlightsTitle="Ways to Rent Court Time"
    highlights={[
      {
        title: "Hourly Court Rental",
        body: "Reserve a specific court for a set hour. The most reliable way to guarantee a spot at busy weekday evenings and weekend mornings.",
      },
      {
        title: "Drop-In Play",
        body: "Buy a single-visit pass and join rotating open play by skill level. No partner needed — you'll be matched into games.",
      },
      {
        title: "Multi-Court Blocks",
        body: "Rent several adjacent courts for leagues, tournaments, birthdays, and company events. Call and we'll block the courts and times.",
      },
    ]}
    bullets={[
      "38 indoor, climate-controlled courts — never weather-dependent",
      "Instant online booking and payment",
      "Open Mon–Fri 7 AM – 11 PM, Sat–Sun 7 AM – 10 PM, 365 days a year",
      "No membership required to reserve",
      "Member rates and earlier booking windows",
      "Loaner paddles, pro shop, café, locker rooms, free parking",
    ]}
    faqs={[
      {
        q: "How do I book a pickleball court in Columbus, OH?",
        a: "Reserve online through our CourtReserve portal from the button below, or call 614-569-2556. Choose your date, time, and court, then pay to confirm — you'll get an email confirmation immediately.",
      },
      {
        q: "How much does it cost to rent a pickleball court?",
        a: "Hourly rates depend on the time of day and whether you're a member, and members rent at a discount. Live pricing appears in CourtReserve before you confirm your reservation.",
      },
      {
        q: "Can I rent a court without being a member?",
        a: "Yes. Non-members can rent court time by the hour or buy a drop-in pass for open play. Memberships simply lower your cost per visit and open a longer booking window.",
      },
      {
        q: "How far in advance should I reserve?",
        a: "Weekday evenings after 5 PM and weekend mornings are the busiest, so book those a few days out. Mid-morning and early-afternoon slots are usually available same day.",
      },
      {
        q: "Can I rent multiple courts for a group or tournament?",
        a: "Yes — we regularly block adjacent courts for leagues, tournaments, corporate outings, and parties. Call 614-569-2556 and we'll reserve the right number of courts and hours.",
      },
      {
        q: "What if I need to cancel my court reservation?",
        a: "Cancel or reschedule in CourtReserve within the window shown on your confirmation to avoid a charge. For same-day changes, call the front desk at 614-569-2556.",
      },
      {
        q: "Do I need my own paddle to play?",
        a: "No. Loaner paddles are available at the front desk, and our pro shop sells paddles, balls, and shoes if you'd like your own gear.",
      },
      {
        q: "Where are you located and is parking free?",
        a: "We're at 350 McCormick Blvd, Columbus, OH, with free on-site parking and easy access from Gahanna, Reynoldsburg, New Albany, Westerville, Pickerington, and Dublin.",
      },
    ]}
    ctaTitle="Reserve Your Court Time"
    ctaBody="Pick an hour that works, grab your group, and play indoors — 38 courts, open every day of the year."
    primaryCta={{ label: "Book a Court", to: "/reserve-a-court", conversion: "court_booking" }}
    secondaryCta={{ label: "Compare Memberships", to: "/memberships", conversion: "cta" }}
    relatedLinks={[
      { label: "Indoor Pickleball Courts Columbus OH", to: "/indoor-pickleball-courts-columbus" },
      { label: "Pickleball Lessons in Columbus", to: "/pickleball-lessons-columbus" },
      { label: "Pickleball Leagues in Columbus", to: "/pickleball-leagues-columbus" },
      { label: "Our Facility", to: "/our-facility" },
    ]}
  />
);

export default BookPickleballCourtColumbus;
