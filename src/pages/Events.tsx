import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PartyPopper, Users, Building2, Trophy, Heart, Music, Phone, Mail, MapPin, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const marqueeItems = [
  "CORPORATE OUTINGS",
  "FUNDRAISERS",
  "HOLIDAY PARTIES",
  "HAPPY HOURS",
  "BIRTHDAY PARTIES",
  "TEAM BUILDING",
  "PRIVATE TOURNAMENTS",
];

const eventTypes = [
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Bring your team together for a unique outing that combines competition, camaraderie, and fun. Pickleball is the perfect icebreaker for teams of all sizes.",
  },
  {
    icon: PartyPopper,
    title: "Holiday & Birthday Parties",
    description:
      "Celebrate milestones and holidays with a private party at Match Point. We'll handle the courts — you bring the fun.",
  },
  {
    icon: Heart,
    title: "Fundraisers",
    description:
      "Host a charity tournament or fundraising event at our world-class facility. We'll help you make it a smash hit.",
  },
  {
    icon: Users,
    title: "Team Building",
    description:
      "Nothing builds bonds like friendly competition. Our staff can organize drills, mini-tournaments, and coaching for groups of any skill level.",
  },
  {
    icon: Trophy,
    title: "Private Tournaments",
    description:
      "Reserve courts for your own bracket-style tournament. We provide the venue, equipment, and support — you bring the competitors.",
  },
  {
    icon: Music,
    title: "Social Mixers & Happy Hours",
    description:
      "Combine court time with socializing. Perfect for networking events, alumni gatherings, or just a great night out with friends.",
  },
];

const testimonials = [
  {
    quote:
      "Match Point was the perfect venue for our corporate team-building event. The staff was incredibly accommodating and our team had a blast!",
    author: "Corporate Event Organizer",
  },
  {
    quote:
      "We hosted a charity tournament and raised more than we ever expected. The facility is first-class and the team made everything seamless.",
    author: "Fundraiser Coordinator",
  },
  {
    quote:
      "My daughter's birthday party at Match Point was unforgettable. The kids loved every minute on the courts and the parents had a great time too.",
    author: "Birthday Party Host",
  },
];

const Events = () => {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.action === "setHeight" && e.data.height) {
        const embedCodeId = e.data.embedCodeId;
        if (embedCodeId) {
          const elements = document.getElementsByClassName(`form-iframe-${embedCodeId}`);
          for (let i = 0; i < elements.length; i++) {
            (elements[i] as HTMLElement).style.height = `${e.data.height}px`;
          }
        } else {
          const iframe = document.getElementById("form-iframe") as HTMLIFrameElement | null;
          if (iframe) iframe.style.height = `${e.data.height}px`;
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Layout>
      <PageHero
        title="Private Events"
        subtitle="Host your next unforgettable event at Central Ohio's premier sports entertainment venue"
        image="/images/events-hero.jpg"
      />

      {/* Scrolling Marquee */}
      <div className="relative bg-primary py-5 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-90" />
        <div className="absolute inset-0 border-y-2 border-primary-foreground/20" />
        <div className="relative flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="text-primary-foreground font-display text-xl md:text-2xl tracking-widest uppercase mx-8 flex items-center gap-8 drop-shadow-md"
              >
                {item}
                <span className="text-primary-foreground/60 text-2xl">✦</span>
              </span>
            )
          )}
        </div>
      </div>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl md:text-5xl text-bright"
              >
                Come Party at the Club!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                With 38 indoor championship-size pickleball courts featuring CushionX surface, Trackman Golf simulators, table
                tennis, badminton, a lounge area, and a pro shop, the event
                possibilities are endless at Match Point Pickleball Club!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our venue offers unique settings for both private and semi-private
                gatherings of all sizes. Whether you want to raise money for a
                charity, host a team outing, corporate event, holiday party, or
                celebrate a milestone — Match Point has it all.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden border border-border-subtle"
            >
              <img loading="lazy" decoding="async"
                src="/images/events-party.jpg"
                alt="Kids birthday party event at Match Point"
                className="w-full h-80 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-bright text-center mb-16"
          >
            Event Options
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-lg p-8 border border-border-subtle"
              >
                <type.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-bright mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-bright text-center mb-16"
          >
            What People Are Saying
          </motion.h2>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative bg-gradient-to-br from-primary/15 via-primary/5 to-background rounded-2xl p-8 md:p-12 border-2 border-primary/40 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]">
              <Quote className="absolute -top-6 left-8 w-14 h-14 text-primary bg-background rounded-full p-2 border-2 border-primary/40 z-10" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <img loading="lazy" decoding="async"
                    src="/images/events-fundraiser-check.jpg"
                    alt="Me-chelle Burkhalter holding donation check from Match Point fundraiser benefiting Directions for Youth and Families"
                    className="w-full rounded-xl object-cover aspect-[4/5] border border-primary/20 pointer-events-none select-none"
                    draggable={false}
                  />
                </div>
                <blockquote className="md:col-span-3 space-y-6">
                  <p className="text-base md:text-lg text-bright leading-relaxed italic">
                    "Match Point was the perfect partner for our fundraiser. As a community board member for Directions for Youth, this was the first event I've planned, and I truly appreciated the incredible facilities, welcoming staff, and fun environment. The event was a huge success—we were even able to decorate the courts and host a raffle to enhance the experience. It was such a wonderful evening, and our players are already asking if we'll be doing it again next year."
                  </p>
                  <footer className="flex items-center gap-4 pt-4 border-t border-primary/20">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-xl">
                      MB
                    </div>
                    <div>
                      <div className="font-display text-xl text-bright">Me-chelle Burkhalter</div>
                      <div className="text-primary font-semibold text-sm">Directions for Youth and Families</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Featured Testimonial - Roland Mangahas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative bg-gradient-to-br from-primary/15 via-primary/5 to-background rounded-2xl p-8 md:p-12 border-2 border-primary/40 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]">
              <Quote className="absolute -top-6 left-8 w-14 h-14 text-primary bg-background rounded-full p-2 border-2 border-primary/40 z-10" />
              <blockquote className="space-y-6">
                <p className="text-base md:text-lg text-bright leading-relaxed italic">
                  "My healthcare organization had a great experience with Jen Foley! She was professional, engaging and made participants of various skill levels feel comfortable right away. Her clear instruction, patience and positive energy kept everyone involved while still building pickleball skills. It was a fun, well-run event that doubled as both team-building and a fantastic wellness activity. We plan to utilize Jen for future events as we continue to grow our group. Thanks Jen!"
                </p>
                <footer className="flex items-center gap-4 pt-4 border-t border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-xl shrink-0">
                    RM
                  </div>
                  <div>
                    <div className="font-display text-xl text-bright">Roland Mangahas</div>
                    <div className="text-primary font-semibold text-sm">Coordinator, Surgery Inventory SC Logistics</div>
                    <div className="text-muted-foreground text-sm">Pickerington Methodist Hospital, OhioHealth</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-secondary rounded-lg p-8 border border-border-subtle"
              >
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <footer className="text-bright font-semibold text-sm">
                  — {t.author}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-bright text-center mb-16"
          >
            Past Events at Match Point
          </motion.h2>

          {/* Featured Past Event - OhioHealth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="relative bg-gradient-to-br from-primary/15 via-primary/5 to-background rounded-2xl p-6 md:p-8 border-2 border-primary/40 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-sm font-display tracking-widest text-xs uppercase mb-4">
                Featured Event · OhioHealth
              </div>
              <img loading="lazy" decoding="async"
                src="/images/events-ohiohealth.jpg"
                alt="OhioHealth team event group photo at Match Point Pickleball Club"
                className="w-full rounded-xl object-cover max-h-[600px] border border-primary/20 pointer-events-none select-none"
                draggable={false}
              />
              <p className="text-muted-foreground text-center text-sm mt-4 italic">
                The OhioHealth team enjoying a private event at Match Point.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {[
              { src: "/images/events-birthday1.jpg", alt: "Birthday party setup at Match Point" },
              { src: "/images/events-birthday2.jpg", alt: "Kids birthday party event at Match Point" },
              { src: "/images/events-birthday3.jpg", alt: "Themed birthday party at Match Point" },
              { src: "/images/events-past1.jpg", alt: "Large group event at Match Point" },
              { src: "/images/events-past2.jpg", alt: "Catered food spread at Match Point event" },
              { src: "/images/events-past3.jpg", alt: "Staff members on the pickleball courts" },
              { src: "/images/events-past4.jpg", alt: "Shamrock tournament at Match Point" },
              { src: "/images/events-past5.jpg", alt: "Group pickleball event at Match Point" },
              { src: "/images/events-past6.jpg", alt: "Two players with paddles at Match Point" },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden border border-border-subtle"
              >
                <img loading="lazy" decoding="async"
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Inquiry Prompt */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-bright text-center mb-4"
          >
            Plan Your Next Event with Match Point!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-center mb-8 max-w-lg mx-auto text-lg"
          >
            Please contact{" "}
            <a
              href="mailto:j.foley@matchpointpickleballclub.com?subject=Private%20Event%20Inquiry"
              className="text-primary hover:underline font-semibold"
            >
              j.foley@matchpointpickleballclub.com
            </a>{" "}
            to discuss your event. Our team will get back to you within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <a
              href="#event-request-form"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Request Your Event Online
            </a>
            <a
              href="mailto:j.foley@matchpointpickleballclub.com?subject=Private%20Event%20Inquiry"
              className="ml-0 sm:ml-4 mt-4 sm:mt-0 border-2 border-primary text-primary px-8 py-3 rounded-sm font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-block"
            >
              Email Jen Foley
            </a>
          </motion.div>
        </div>
      </section>

      {/* Event Request Form (CourtReserve) */}
      <section id="event-request-form" className="scroll-mt-24 py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-bright text-center mb-4">
            Event Request Form
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Submit your event details below and our events team will follow up with availability,
            pricing, and next steps.
          </p>
          <iframe
            id="form-iframe"
            title="Match Point private event request form"
            className="form-iframe-101116"
            src="https://widgets.courtreserve.com/Online/Public/EmbedCode/17037/101116"
            style={{ margin: 0, width: "100%", minHeight: 900, border: "none", overflow: "hidden" }}
            scrolling="no"
          />
          <p className="text-center text-sm text-muted-foreground mt-6">
            Trouble with the form?{" "}
            <a
              href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17037/101116"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Open it in a new window
            </a>
            .
          </p>
        </div>
      </section>




      {/* Contact - Jen Foley */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-bright text-center mb-12"
          >
            Plan Your Next Event
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-background rounded-lg border border-border-subtle p-10 md:p-12"
          >
            <div className="text-center space-y-4">
              <div className="mb-6">
                <img loading="lazy" decoding="async"
                  src="/images/jen-foley.png"
                  alt="Jen Foley - Director of Corporate Relations"
                  className="w-56 md:w-64 mx-auto rounded-lg object-cover"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-bright">
                Jen Foley
              </h3>
              <p className="text-primary font-semibold text-lg">
                Director of Corporate Relations
              </p>
              <p className="text-muted-foreground text-sm">
                RPO / PPR / DUPR Certified Coach
              </p>

              <div className="w-16 h-px bg-border-subtle mx-auto my-6" />

              <div className="space-y-3 text-muted-foreground">
                <a
                  href="tel:2247359191"
                  className="flex items-center justify-center gap-3 hover:text-primary transition-colors text-lg"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (224) 735-9191
                </a>
                <a
                  href="mailto:j.foley@matchpointpickleballclub.com"
                  className="flex items-center justify-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  j.foley@matchpointpickleballclub.com
                </a>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>350 McCormick Blvd, Columbus, OH 43213</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:j.foley@matchpointpickleballclub.com?subject=Private%20Event%20Inquiry"
                  className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-block"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
