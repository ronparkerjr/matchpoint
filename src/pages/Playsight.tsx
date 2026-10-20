import { motion } from "framer-motion";
import { Video, BarChart2, Share2, Repeat2, Monitor, Tag, Play, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const features = [
  {
    icon: <Video size={24} />,
    title: "AI SmartCourt Technology",
    description: "Custom AI camera solutions with multi-angle capabilities installed on every one of our 38 championship-size CushionX-surfaced courts — giving you broadcast-quality footage of every rally.",
  },
  {
    icon: <Play size={24} />,
    title: "Automated Broadcast",
    description: "Live streaming at 1080p/60fps with a dedicated channel. Watch your match live or review it later from any device, anywhere in the world.",
  },
  {
    icon: <Repeat2 size={24} />,
    title: "App-Based Instant Replay",
    description: "Get instant access to multi-angle video during play. Replay close calls in real time without waiting for your game to end.",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "AI Match Analytics",
    description: "Don't just watch your match — analyze it. PlaySight's AI turns gameplay into powerful data, revealing your strengths and areas to improve.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Scoreboard Integration",
    description: "Digital scoreboard overlays during live streams plus pre-tagged events for easy video breakdown and review.",
  },
  {
    icon: <Tag size={24} />,
    title: "TagMe Highlights",
    description: "Tap a single button to automatically capture and share your best moments. Create highlight reels and coaching clips instantly.",
  },
  {
    icon: <Share2 size={24} />,
    title: "Create, Tag & Share",
    description: "Build highlight videos or individualized coaching clips for players, teams, and leagues. Share directly to social media with ease.",
  },
  {
    icon: <Zap size={24} />,
    title: "VAR Light — Instant Officiating",
    description: "Pro-level instant replay and officiating tools to review disputed calls on the spot — the same technology used by top-tier tournaments.",
  },
];

const Playsight = () => {
  return (
    <Layout>
      <PageHero
        title="PlaySight"
        subtitle="AI SmartCourt technology on all 38 championship-size CushionX-surfaced courts at Match Point Columbus."
        image="/images/playsight-hero.png"
      />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-bright mb-6">
              Every Court. Every Rally. <span className="text-primary">Captured.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Match Point Columbus is proud to offer <strong className="text-foreground">PlaySight AI SmartCourt technology on all 38 of our championship-size pickleball courts featuring CushionX surface</strong> — making us one of the most technologically advanced pickleball facilities in the country.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              PlaySight is the all-in-one multi-angle video platform trusted by the PPA Tour, Major League Pickleball, and top clubs nationwide. Whether you're a recreational player looking to improve, a coach building training clips, or a competitor reviewing strategy — PlaySight gives you the tools to take your game to the next level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "38", label: "Smart Courts" },
              { number: "1080p", label: "60fps Broadcast" },
              { number: "Multi", label: "Angle Coverage" },
              { number: "AI", label: "Powered Analytics" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl text-bright mb-4">What PlaySight Offers</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Available on every court at Match Point — no booking required for basic video access.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Development */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl text-bright mb-6">
                Elevate Your <span className="text-primary">Game</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PlaySight's Player Development Tools offer next-level analysis with easy-to-use app features: biomechanical analysis, audio annotations on clips, slow-motion review, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All of your pickleball videos and data live in one place — the Activities Page. Review your sessions online from any device, anywhere in the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trusted by the <strong className="text-foreground">PPA Tour</strong>, <strong className="text-foreground">Major League Pickleball</strong>, and dozens of top pickleball facilities across the US and beyond.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 space-y-5"
            >
              <h3 className="font-display text-xl text-bright mb-2">At Match Point, PlaySight means:</h3>
              {[
                "📹 Automatic video recording on all 38 championship-size CushionX courts",
                "📱 Access your footage instantly via the PlaySight app",
                "🎯 AI-generated match highlights and analytics",
                "🔁 Multi-angle replay to review close calls",
                "📊 Scoreboard integration with digital overlays",
                "🏅 Same technology used at PPA & MLP tournaments",
                "🌐 Share your best moments to social media in one tap",
              ].map((item) => (
                <p key={item} className="text-muted-foreground text-sm leading-relaxed">{item}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 max-w-2xl"
        >
          <h2 className="font-display text-4xl md:text-5xl text-bright mb-4">Ready to Play Smarter?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Reserve a court at Match Point and experience PlaySight AI SmartCourt technology for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://matchpointcolumbus.com/reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Reserve a Court
            </a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Playsight;
