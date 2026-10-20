import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const OrthoAlliance = () => {
  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <img
          src="/images/oa-header.png"
          alt="OrthoAlliance x Match Point"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Partnership Video */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">OrthoAlliance (OA) and Match Point's Partnership Benefits</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/8bNNUVVD4UY?rel=0&modestbranding=1"
              title="OrthoAlliance (OA) and Match Point's Partnership Benefits"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-6 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-3xl md:text-4xl text-primary mb-6">
              Official Sports Medicine and Wellness Partner of Match Point Pickleball Club
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Match Point, our mission is to help you play better, feel stronger, and stay in the game longer. That's why we're proud to partner with OrthoAlliance (OA), one of the nation's leading networks of orthopedic and sports medicine specialists, as our exclusive Sports Medicine and Wellness Provider.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Through this partnership, Match Point members gain access to a comprehensive range of injury prevention, rehabilitation, and performance services delivered by trusted local experts.
            </p>
          </motion.div>

          {/* Local Experts */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-bright mb-4">Your Local Orthopedic Experts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              OrthoAlliance's Central Ohio partner practices provide world-class orthopedic care — conveniently located within 20 miles of Match Point.
            </p>
            <img loading="lazy" decoding="async"
              src="/images/oa-locations-map.png"
              alt="OrthoAlliance locations near Match Point"
              className="w-full rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Central Ohio Partner Practices</h3>
                <ul className="text-muted-foreground text-sm space-y-1.5">
                  <li>GenMed</li>
                  <li>JIS Orthopedics</li>
                  <li>OrthoNeuro</li>
                  <li>Orthopedic Specialists & Sports Medicine</li>
                  <li>Orthopedic Foot & Ankle Center</li>
                  <li>Orthopedic Associates of Zanesville</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Our Locations</h3>
                <div className="grid grid-cols-2 gap-1.5 text-muted-foreground text-sm">
                  <span>Gahanna</span>
                  <span>New Albany</span>
                  <span>Pickerington</span>
                  <span>Westerville</span>
                  <span>Granville</span>
                  <span>Dublin</span>
                  <span>Grove City</span>
                  <span>Zanesville</span>
                  <span>Coshocton</span>
                  <span>St. Clairsville</span>
                  <span>Nelsonville</span>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Access */}
          <div className="bg-card border border-border rounded-lg p-8 mb-16">
            <h2 className="font-display text-2xl text-bright mb-4">VIP Access for Match Point Members</h2>
            <p className="text-muted-foreground leading-relaxed">
              As part of this partnership, Match Point members receive exclusive VIP access to OrthoAlliance care. Members can use the dedicated VIP scheduling line at <strong className="text-foreground">1-877-WE-ARE-OA</strong> for fast-tracked appointments with an OA provider. Whether it's a new injury or something that needs attention quickly, Match Point members are prioritized for same-day or next-day scheduling, ensuring you get expert orthopedic or sports medicine care right when you need it.
            </p>
          </div>

          {/* On-Site Coverage */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-bright mb-4">On-Site Sports Medicine Coverage</h2>
            <p className="text-muted-foreground leading-relaxed">
              OrthoAlliance provides on-site medical coverage for major tournaments, events, and wellness expos hosted at Match Point. Members benefit from immediate access to certified athletic trainers and expedited physician referrals when needed.
            </p>
          </div>

          {/* Medical Team */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-bright mb-6">Meet the Match Point Medical Team</h2>
            <img loading="lazy" decoding="async"
              src="/images/oa-medical-team.png"
              alt="Match Point Medical Team"
              className="w-full rounded-lg mb-8"
            />

            <div className="space-y-10">
              <div>
                <h3 className="font-display text-xl text-bright mb-1">Dr. Scott Smith, MD</h3>
                <p className="text-primary text-sm font-medium mb-3">Medical Director, Match Point Pickleball Club</p>
                <p className="text-muted-foreground text-sm italic mb-3">Orthopedic Surgeon & Sports Medicine Specialist, OrthoNeuro</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Dr. Scott Smith is a board-certified, fellowship-trained orthopedic surgeon specializing in sports medicine, knee and shoulder conditions, and general orthopedics. He earned his Bachelor of Arts in Biochemistry from DePauw University, followed by his Doctor of Medicine from Indiana University School of Medicine. He then completed his orthopedic surgery residency at the Medical College of Wisconsin and a sports medicine fellowship at The Ohio State University Department of Orthopedics.
                </p>
                <a href="https://orthoneuro.com/scott-smith-md/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline mt-2 inline-block">
                  Learn more about Dr. Smith →
                </a>
              </div>

              <div>
                <h3 className="font-display text-xl text-bright mb-1">Gennar Feucht, ATC</h3>
                <p className="text-primary text-sm font-medium mb-3">Head Athletic Trainer, OrthoAlliance at Match Point Pickleball Club</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Gennar serves as the dedicated on-site athletic trainer for Match Point Pickleball Club through OrthoAlliance, providing injury evaluation, prevention, and performance support to members and guests. At Match Point, Gennar collaborates with OrthoAlliance physicians, physical therapists, and staff to provide on-site triage, movement screenings, and personalized performance guidance — helping every player move better, recover faster, and stay in the game longer.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Banner */}
          <img loading="lazy" decoding="async"
            src="/images/oa-footer-banner.png"
            alt="OrthoAlliance partnership banner"
            className="w-full rounded-lg mb-12"
          />

          <div className="text-center">
            <h2 className="font-display text-2xl text-bright mb-4">Stronger Together</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Through our partnership with OrthoAlliance, Match Point members benefit from a truly integrated approach to wellness, combining expert medical insight, personalized athletic training, and proactive injury prevention. Whether you're playing for fun, fitness, or competition, Match Point and OrthoAlliance are here to help you move better, recover faster, and keep doing what you love — longer.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrthoAlliance;
