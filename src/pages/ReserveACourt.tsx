import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, UserPlus, CreditCard, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import LocalProgramLinks from "@/components/LocalProgramLinks";
import { trackCourtBookingClick } from "@/lib/analytics";

const faqs = [
  {
    q: "How do I book an indoor pickleball court in Columbus?",
    a: "Reserve online through our CourtReserve portal or call 614-569-2556. Court time at Match Point is booked by the hour on any of our 38 indoor courts at 350 McCormick Blvd in Columbus, Ohio. Peak weekday evenings and weekend mornings fill first, so book those a few days ahead.",
  },
  {
    q: "How far in advance can I reserve a court?",
    a: "Members get the longest booking window and priority access to prime times, while non-members can reserve within a shorter window. Log in to CourtReserve to see the exact dates open to your account.",
  },
  {
    q: "How much does it cost to rent a pickleball court?",
    a: "Court rates vary by time of day and membership level, and members reserve at discounted rates. Current pricing shows on the reservation screen in CourtReserve before you confirm, and our membership page breaks down what each plan includes.",
  },
  {
    q: "Can I book a court without a membership?",
    a: "Yes. Non-members can reserve court time or buy a drop-in pass for open play — no membership required. If you play more than a couple of times a month, a membership usually costs less than paying per visit.",
  },
  {
    q: "Can I reserve several courts for a group or event?",
    a: "Yes. We regularly block multiple adjacent courts for group play, corporate outings, leagues, and tournaments. Call 614-569-2556 or use our private events page and we'll set up the courts and timing for your group.",
  },
  {
    q: "What are your court booking hours?",
    a: "Match Point is open Monday–Friday 7 AM to 11 PM and Saturday–Sunday 7 AM to 10 PM every day of the year, so you can book indoor court time from early morning through late evening regardless of Ohio weather.",
  },
  {
    q: "Do you have paddles and balls if I don't own them?",
    a: "Yes — loaner paddles are available at the front desk, and our pro shop carries paddles, balls, shoes, and accessories if you want your own gear.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancel or change a reservation directly in CourtReserve at least 24 hours before its scheduled start time. The cancellation policy applies to reservations not cancelled within that window; for same-day changes, call the front desk at 614-569-2556.",
  },
];

const SITE = "https://www.matchpointpickleballclub.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Reserve a Court", item: `${SITE}/reserve-a-court` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Indoor Pickleball Court Booking in Columbus, Ohio",
  serviceType: "Pickleball court rental",
  description:
    "Hourly indoor pickleball court reservations on 38 climate-controlled courts at Match Point Pickleball Club in Columbus, Ohio. Open play, drop-in passes, and group bookings available Mon–Fri 7 AM to 11 PM, Sat–Sun 7 AM to 10 PM.",
  areaServed: [
    "Columbus, OH",
    "Gahanna, OH",
    "Reynoldsburg, OH",
    "New Albany, OH",
    "Westerville, OH",
    "Pickerington, OH",
    "Dublin, OH",
  ],
  provider: {
    "@type": "SportsActivityLocation",
    name: "Match Point Pickleball Club",
    telephone: "+1-614-569-2556",
    url: SITE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "350 McCormick Blvd",
      addressLocality: "Columbus",
      addressRegion: "OH",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 07:00-23:00; Sa-Su 07:00-22:00",
  },
};


const steps = [
  {
    icon: UserPlus,
    title: "1. Create Your Account",
    description:
      "Visit the CourtReserve portal and create a free account. You'll need your name, email, and a password to get started.",
  },
  {
    icon: CalendarCheck,
    title: "2. Browse Available Courts",
    description:
      "Use the calendar to find open court times. Filter by date, time, and court type to find the perfect slot for your game.",
  },
  {
    icon: CreditCard,
    title: "3. Book & Pay",
    description:
      "Select your court and time, then complete your reservation. Members enjoy discounted rates and priority booking windows.",
  },
  {
    icon: Clock,
    title: "4. Show Up & Play",
    description:
      "Arrive a few minutes early, check in at the front desk, and enjoy your court time. Equipment rentals are available on-site.",
  },
];

const ReserveACourt = () => {
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}

      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Reserve a Court
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Booking a court at Match Point is quick and easy through our CourtReserve online portal. Follow the steps below to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 bg-card border border-border rounded-xl p-6"
              >
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Booking Indoor Pickleball Courts in Columbus, Ohio
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Match Point Pickleball Club has 38 dedicated indoor pickleball courts at 350 McCormick
              Blvd in Columbus, Ohio — the largest indoor pickleball facility in central Ohio. Court
              time is reserved by the hour through CourtReserve, so you can lock in a specific court
              for you, a doubles group, or a full league night any day of the year from 7 AM to 11 PM on weekdays and 7 AM to 10 PM on weekends.
            </p>
            <p>
              Every court is indoors and climate-controlled with consistent lighting and ceiling
              fans, which means rain, heat, and Ohio winters never cancel your game. Members book
              earlier and at discounted rates, while non-members can reserve court time or grab a
              drop-in pass for rotating open play by skill level — a good first step if you're new
              to pickleball in Columbus and want to be matched into games.
            </p>
            <p>
              Need more than one court? We block adjacent courts for corporate outings, birthday
              parties, tournaments, and league play, and several courts feature PlaySight SmartCourt
              cameras so you can record and review your matches. On site you'll also find a pro shop
              with paddles and balls, a café, locker rooms, and free parking just minutes from
              Gahanna, Reynoldsburg, New Albany, Westerville, Pickerington, and Dublin.
            </p>
            <p>
              Ready to play? Reserve online below, call{" "}
              <a href="tel:6145692556" className="text-primary underline hover:no-underline">
                614-569-2556
              </a>
              , or compare{" "}
              <Link to="/memberships" className="text-primary underline hover:no-underline">
                membership options
              </Link>{" "}
              if you plan to play regularly. You can also browse{" "}
              <Link
                to="/indoor-pickleball-courts-columbus"
                className="text-primary underline hover:no-underline"
              >
                indoor pickleball courts in Columbus
              </Link>{" "}
              for more on the facility.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Court Booking FAQs
          </h2>
          <dl className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="text-lg font-bold text-foreground mb-2">{f.q}</dt>
                <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      <LocalProgramLinks
        heading="More Ways to Play in Columbus"
        subheading="Beyond open court time — lessons with our pros and league play all year."
        className="py-20 bg-background border-t border-border"
      />

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Play?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Head over to our CourtReserve portal to browse availability and book your court now.
          </p>
          <a
            href="https://mobileapp.courtreserve.com/online/publicbookings/17037"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCourtBookingClick({ label: "Book on CourtReserve" })}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book on CourtReserve <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ReserveACourt;
