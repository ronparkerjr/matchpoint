import { publicAsset } from "@/lib/publicAsset";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, X, Award, Users, GraduationCap, BookOpen, CalendarCheck, Quote, Trophy, Star, Repeat } from "lucide-react";
import Layout from "@/components/Layout";
import VideoBackground from "@/components/VideoBackground";
import ContactForm from "@/components/ContactForm";
import LocalProgramLinks from "@/components/LocalProgramLinks";
import AnniversaryTournamentPromo from "@/components/AnniversaryTournamentPromo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- Static homepage data ---
const galleryImages = [
  { src: publicAsset("/images/facility-aerial.jpg"), alt: "Aerial view of Match Point's 38 indoor pickleball courts" },
  { src: publicAsset("/images/facility-courts.png"), alt: "Championship pickleball courts at Match Point Columbus" },
  { src: publicAsset("/images/community-photo.jpg"), alt: "Players in the Match Point community" },
  { src: publicAsset("/images/facility-photo.jpg"), alt: "Inside the Match Point Pickleball Club facility" },
];

const testimonials = [
  {
    quote: "I wasn't going to join a league and Bridgett asked me and I'm glad I did. I've met new ladies and she always plans something new each week and it's been a great experience at Match Point thanks to Bridgett.",
    name: "Nancy Ringhiser",
    role: "Google Review",
  },
  {
    quote: "Played a tournament at this facility on June 6th, 2026. The facility is amazing, it was very clean, the people that worked there were great. The young lady named Lilly that ran the tournament did a fantastic job. She was amazing. Hope to go back and play here again. Great place to play.",
    name: "Cale Maybin",
    role: "Google Review",
  },
  {
    quote: "Vibrant community of people who are passionate about playing. Dedicated staff, excellent programming, bright and appealing courts. Enjoyed the Ladies League and Summer Travel League and the Squirrel clinic last week. Excellent clinic. I also run a private league here on Monday nights and a monthly invitational mini tournament — the staff has been very accommodating and helpful. Large ceiling fans are a wonderful addition. Love playing here.",
    name: "Amy Raubenolt",
    role: "Google Review",
  },
  {
    quote: "I've been a member since the beginning, and I can honestly say this club keeps getting better every day. From the ongoing physical updates to the opportunity to meet new people almost every visit, the experience has been outstanding. The community is amazing, welcoming, and inclusive, while still offering great competition. Bridgett has been my rock at the club. David does a fantastic job with the leagues. Calder is my coach, and I highly recommend him. And if you haven't tried the golf simulators, you need to. Bill and the other owners are always welcoming and constantly working to improve the club. Yeah, I like this place! Join us!",
    name: "Randy Martinez",
    role: "Google Review",
  },
  {
    quote: "I've had a great experience at Match Point Pickleball Club. The facility is clean, well organized, and welcoming, with quality courts and a friendly atmosphere that makes it easy to jump in whether you're new to the game or have been playing for years. Open play runs smoothly, and the staff does a great job keeping things moving and making everyone feel included. A special shout-out to Bridgett for spearheading the women's league — she's built a fun, supportive community and the league has been a fantastic way to meet people, improve, and stay motivated. Highly recommend Match Point for anyone looking for great pickleball and an even better community.",
    name: "Annie Keuthmany",
    role: "Google Review",
  },
];

const beginnerResources = [
  {
    icon: GraduationCap,
    title: "Beginner Lessons",
    description: "Private instruction and group clinics with certified pros — no paddle? No problem. Loaners included.",
    cta: "Find a Class",
    to: "/pickleball-instruction",
  },
  {
    icon: BookOpen,
    title: "First-Visit Guide",
    description: "What to wear, what to bring, parking, court reservations — everything new players need to know before they walk in.",
    cta: "Read the FAQ",
    to: "/faq",
  },
  {
    icon: CalendarCheck,
    title: "Reserve Your First Court",
    description: "Book online in under a minute. Drop-in passes available — memberships unlock priority booking.",
    cta: "Book a Court",
    to: "/reserve-a-court",
  },
];

const newsTeasers = [
  {
    tag: "Programs",
    title: "Early Morning Open Play",
    excerpt: "Beat the rush — open play sessions now start at 7 AM daily for Elite members.",
  },
  {
    tag: "Events",
    title: "No Dinks Long Drive Contest",
    excerpt: "Trackman bay challenge — $10 for 8 monster drives and a shot at the weekly Club Champ title.",
  },
];

const partnerLogos = [
  { src: publicAsset("/images/oa-logo.png"), alt: "OrthoAlliance — Sports Medicine Partner" },
  { src: publicAsset("/images/sponsors/gj-pepsi-primary.svg"), alt: "G&J Pepsi — Official Beverage Partner" },
  { src: publicAsset("/images/trackman-hero.png"), alt: "Trackman Golf" },
  { src: publicAsset("/images/playsight-hero.png"), alt: "PlaySight SmartCourts" },
];

const waysToPlay = [
  { icon: Users, title: "Leagues", blurb: "Weekly team play, 2.5 to 4.5+", to: "/programs#leagues" },
  { icon: Repeat, title: "Open Play", blurb: "Drop in, rotate, no partner needed", to: "/programs#open-play" },
  { icon: GraduationCap, title: "Clinics & Lessons", blurb: "Coaching for every level", to: "/programs#clinics" },
  { icon: Trophy, title: "Tournaments", blurb: "Bracket play on stadium courts", to: "/programs#tournaments" },
];




const Index = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden pt-24 md:pt-36">
        <div className="absolute inset-0">
          <VideoBackground />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="sr-only">Match Point Pickleball Club in Columbus, Ohio</h1>
            <img src={publicAsset("/images/match-point-logo-white.png")} alt="Match Point" width={896} height={448} fetchPriority="high" decoding="async" className="h-32 md:h-48 lg:h-56 w-auto mx-auto mb-6" />
            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-8">
              Central Ohio's premier indoor pickleball destination.<br />38 championship-size courts with CushionX surface. World-class amenities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/memberships"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Become a Member <ArrowRight size={16} />
              </Link>
              <Link
                to="/faq"
                className="border border-white/40 text-white px-8 py-3.5 rounded-sm font-semibold text-sm hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AnniversaryTournamentPromo />

      {/* CourtSource Top 100 Ranking */}
      <section
        className="py-16 md:py-20 bg-background border-b border-border"
        aria-labelledby="courtsource-heading"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl border-2 border-primary bg-primary/5 p-8 md:p-12 text-center shadow-lg shadow-primary/10"
          >
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Trophy size={14} aria-hidden="true" /> Big News
            </span>

            <h2 id="courtsource-heading" className="font-display text-3xl md:text-5xl text-bright mb-5">
              Ranked <span className="text-primary">#7</span> Pickleball Club in America
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-6">
              <div>
                <p className="font-display text-4xl md:text-5xl text-primary leading-none">#7</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">In the Nation</p>
              </div>
              <div className="hidden sm:block w-px h-14 bg-border" aria-hidden="true" />
              <div>
                <p className="font-display text-4xl md:text-5xl text-primary leading-none">#1</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">In Ohio</p>
              </div>
              <div className="hidden sm:block w-px h-14 bg-border" aria-hidden="true" />
              <div>
                <p className="font-display text-4xl md:text-5xl text-primary leading-none">5.0</p>
                <div className="flex justify-center gap-0.5 mt-1" aria-label="5 out of 5 CourtSource rating">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">CourtSource Rating</p>
              </div>
              <div className="hidden sm:block w-px h-14 bg-border" aria-hidden="true" />
              <div>
                <p className="font-display text-4xl md:text-5xl text-primary leading-none">38</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Indoor Courts</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              Match Point Pickleball Club has broken into CourtSource's first annual{" "}
              <strong className="text-foreground">Top 100 Pickleball Clubs in the US</strong> at{" "}
              <strong className="text-foreground">number 7</strong> — the highest-ranked club in Ohio, a{" "}
              <strong className="text-foreground">perfect 5.0 out of 5 CourtSource rating</strong>, and one of the
              largest all-indoor facilities on the entire list. CourtSource evaluated more than 18,500 verified US
              venues on facility scale, all-weather playability, access, amenities, and programming.
            </p>

            <div className="max-w-3xl mx-auto mb-6 text-left">
              <p className="text-center text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Sweeping Every Category Award
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Best Indoor Facility", detail: "38 indoor courts" },
                  { title: "Most Courts", detail: "38 courts" },
                  { title: "Best Lit for Night Play", detail: "Lighted courts for evening play" },
                  { title: "Best Amenities", detail: "Pro shop, restrooms, wheelchair access, and lighting" },
                ].map((a) => (
                  <li key={a.title} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                    <Award size={18} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <span className="block text-foreground font-semibold text-sm">{a.title}</span>
                      <span className="block text-muted-foreground text-xs mt-0.5">{a.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground text-sm max-w-3xl mx-auto mb-8">
              Thank you to every member, coach, and player who made this happen — see you on the courts.
            </p>


            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.courtsource.us/blog/top-100-pickleball-clubs-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Read the CourtSource Ranking <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link
                to="/reserve-a-court"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center justify-center"
              >
                Come Play — Book a Court
              </Link>
            </div>

            <p className="text-muted-foreground text-xs mt-6">
              Source: CourtSource, "Top 100 Pickleball Clubs in the US," published June 10, 2026, updated August 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Play — simple homepage picker */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-bright mb-3">Ways to Play</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pick what you're looking for — every program's details live on one simple page.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {waysToPlay.map((w) => (
              <Link
                key={w.title}
                to={w.to}
                className="flex flex-col items-center text-center gap-2 bg-card border border-border rounded-lg p-5 md:p-6 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
              >
                <w.icon size={30} className="text-primary" aria-hidden="true" />
                <span className="font-semibold text-foreground text-sm md:text-base">{w.title}</span>
                <span className="text-muted-foreground text-xs md:text-sm leading-snug">{w.blurb}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              See all program details <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>


      {/* Featured Video */}
      <section className="py-16 bg-secondary">

        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={publicAsset("/images/match-point-logo.png")}
              alt="Match Point Logo"
              className="h-20 md:h-28 mx-auto mb-6"
            />
            <h2 className="font-display text-3xl md:text-5xl text-bright mb-8">
              Match Point <span className="text-primary">Wins</span> Best Midwest Pickleball Facility
            </h2>
          </motion.div>
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/6zUK8-DOTS4?start=2140&end=2200&rel=0&modestbranding=1"
              title="Match Point Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Memberships CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async"
            src={publicAsset("/images/facility-photo.jpg")}
            alt="Match Point facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Memberships Are Now Available
            </h2>
            <p className="text-white/90 text-lg max-w-lg mx-auto mb-8 drop-shadow-md">
              Choose the plan that fits how you play at our 38-court indoor facility. Memberships are available now.
            </p>
            <Link
              to="/memberships"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View Memberships <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <LocalProgramLinks />



      {/* OrthoAlliance Partner Banner */}
      <section className="bg-background py-10 md:py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
              Sports Medicine &<br />Wellness Partner
            </h2>
            <Link
              to="/ortho-alliance"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm font-display text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              Read More
            </Link>
          </div>
          <img loading="lazy" decoding="async"
            src={publicAsset("/images/oa-logo.png")}
            alt="OrthoAlliance Logo"
            className="h-40 md:h-56 object-contain"
          />
        </div>
      </section>

      <div className="container mx-auto px-4">
        <hr className="border-border" />
      </div>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img loading="lazy" decoding="async"
                src={publicAsset("/images/community-photo.jpg")}
                alt="Match Point community"
                className="w-full rounded-lg object-cover aspect-[4/3]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-bright mb-6">
                More Than Just Courts
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Match Point Pickleball Club is Central Ohio's indoor destination for pickleball, instruction, leagues, tournaments, and community events.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Born from a passion for the rapidly growing sport of pickleball and a vision to create a welcoming and high-energy community hub, Match Point is more than just a place to play – it's a place to connect, compete, and celebrate.
              </p>
              <Link
                to="/about"
                className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "38", label: "Indoor Courts" },
              { number: "6,000+", label: "Players & Members" },
              { number: "125K+", label: "Sq. Ft. Facility" },
              { number: "Voted #1", label: "The Dink Awards" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo & Video Gallery Teaser */}
      <section className="py-24 bg-background" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Inside the Club</p>
              <h2 id="gallery-heading" className="font-display text-4xl md:text-5xl text-bright">Photo & Video Gallery</h2>
            </div>
            <div className="flex gap-3">
              <Link to="/photos" className="border border-border text-foreground px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-secondary transition-colors">All Photos</Link>
              <Link to="/videos" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity">Watch Videos</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open image: ${img.alt}`}
                className="group relative overflow-hidden rounded-lg aspect-square focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/90 hover:text-white p-2"
          >
            <X size={28} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[90vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Testimonials Carousel */}
      <section className="py-24 bg-secondary" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">From Our Members</p>
            <h2 id="testimonials-heading" className="font-display text-4xl md:text-5xl text-bright">Player Testimonials</h2>
          </div>
          <Carousel opts={{ loop: true, align: "start" }} className="px-10">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2">
                  <figure className="bg-card border border-border rounded-lg p-8 h-full flex flex-col">
                    <Quote className="text-primary mb-4" size={28} aria-hidden="true" />
                    <blockquote className="text-foreground text-lg leading-relaxed mb-4">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="text-sm">
                      <div className="font-semibold text-bright">{t.name}</div>
                      <div className="text-muted-foreground">{t.role}</div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Previous testimonial" />
            <CarouselNext aria-label="Next testimonial" />
          </Carousel>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Match+Point+Pickleball+Club+Columbus+OH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2"
            >
              Read all our Google reviews <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Beginner Resources */}
      <section className="py-24 bg-background" aria-labelledby="resources-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">New to Pickleball?</p>
            <h2 id="resources-heading" className="font-display text-4xl md:text-5xl text-bright mb-4">Beginner Resources</h2>
            <p className="text-muted-foreground">Everything you need to pick up a paddle and walk on a court with confidence — even if you've never played before.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beginnerResources.map((r) => (
              <article key={r.title} className="bg-card border border-border rounded-lg p-8 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <r.icon className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-bright mb-3">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{r.description}</p>
                <Link
                  to={r.to}
                  className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2"
                >
                  {r.cta} <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News / Announcements Teaser */}
      <section className="py-24 bg-secondary" aria-labelledby="news-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Latest from the Club</p>
              <h2 id="news-heading" className="font-display text-4xl md:text-5xl text-bright">News & Announcements</h2>
            </div>
            <Link to="/announcements" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2 self-start md:self-auto">
              See All Announcements <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsTeasers.map((n) => (
              <article key={n.title} className="bg-card border border-border rounded-lg p-6 flex flex-col hover:border-primary transition-colors">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">{n.tag}</span>
                <h3 className="font-display text-xl text-bright mb-3 leading-tight">{n.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{n.excerpt}</p>
                <Link to="/announcements" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2">
                  Read More <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Partners Strip */}
      <section className="py-16 bg-background border-y border-border" aria-labelledby="partners-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 text-muted-foreground text-sm">
            <span className="inline-flex items-center gap-2"><Award size={16} className="text-primary" aria-hidden="true" /> Voted #1 by The Dink Awards</span>
            <span className="hidden md:inline">•</span>
            <span className="inline-flex items-center gap-2"><Users size={16} className="text-primary" aria-hidden="true" /> 6,000+ Players & Members</span>
            <span className="hidden md:inline">•</span>
            <span>Trusted Partnerships Across Columbus</span>
          </div>
          <h2 id="partners-heading" className="sr-only">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partnerLogos.map((p) => (
              <div key={p.src} className="flex items-center justify-center h-20 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="max-h-16 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-bright mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Interested in working together? Want more info? Fill out some info and we will be in touch shortly. We can't wait to hear from you!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <p className="text-sm text-muted-foreground">350 McCormick Blvd, Columbus, OH 43213</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <a href="tel:614-569-2556" className="text-sm text-muted-foreground hover:text-primary transition-colors">614-569-2556</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <a href="mailto:support@matchpointpickleballclub.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">support@matchpointpickleballclub.com</a>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-secondary text-center">
        <h2 className="font-display text-3xl text-bright mb-6">Follow Us On Social</h2>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/matchpointcolumbus/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-elevated transition-all" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574524004625" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-elevated transition-all" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.youtube.com/@MatchPointColumbus" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-elevated transition-all" aria-label="YouTube">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://x.com/MatchPointcbus" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-elevated transition-all" aria-label="X">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
