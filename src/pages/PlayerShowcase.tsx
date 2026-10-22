import { publicAsset } from "@/lib/publicAsset";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const nepaliPhotos = [
  { src: publicAsset("/images/nepali-arnold-podium-1.jpg"), alt: "Podium – Men's Singles 3.0 Age 50+" },
  { src: publicAsset("/images/nepali-arnold-podium-2.jpg"), alt: "Gopal Timsina – Men's Singles 3.5+" },
  { src: publicAsset("/images/nepali-arnold-podium-3.jpg"), alt: "Mixed Doubles podium" },
  { src: publicAsset("/images/nepali-arnold-podium-4.jpg"), alt: "Men's Doubles 3.0 Age 50+" },
  { src: publicAsset("/images/nepali-arnold-podium-5.jpg"), alt: "Narayan & Laxmi – Men's Doubles" },
  { src: publicAsset("/images/nepali-arnold-podium-6.jpg"), alt: "Singles podium celebration" },
  { src: publicAsset("/images/nepali-arnold-podium-7.jpg"), alt: "Men's Singles podium" },
];

const medals = [
  { medal: "🥇", color: "text-yellow-500", label: "Gold", player: "Narayan Sharma", event: "Men's Singles 3.0, Age 50+" },
  { medal: "🥈", color: "text-slate-400", label: "Silver", player: "Laxmi Upreti", event: "Men's Singles 3.0, Age 50+" },
  { medal: "🥈", color: "text-slate-400", label: "Silver", player: "Gopal Timsina", event: "Men's Singles 3.5 & Above, Age 12+" },
  { medal: "🥈", color: "text-slate-400", label: "Silver", player: "Ramesh Chhetri", event: "Mixed Doubles 4.5, Age 35+" },
  { medal: "🥉", color: "text-amber-600", label: "Bronze", player: "Narayan Sharma & Laxmi Upreti", event: "Men's Doubles 3.0, Age 50+" },
  { medal: "🥉", color: "text-amber-600", label: "Bronze", player: "Narayan Sharma", event: "Mixed Doubles 3.0, Age 35+" },
];

const PlayerShowcase = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + nepaliPhotos.length) % nepaliPhotos.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % nepaliPhotos.length));

  return (
    <Layout>
      <PageHero
        title="Player Showcase"
        subtitle="Highlighting the talented players in our Match Point community."
        image={publicAsset("/images/player-showcase-hero.png")}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Header banner */}
            <div className="bg-primary px-6 py-5 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <h2 className="text-primary-foreground font-bold text-xl md:text-2xl leading-tight">
                  Nepali Pickleballers Shine at the Arnold Championships
                </h2>
                <p className="text-primary-foreground/80 text-sm mt-0.5">
                  Bringing Pride to the Community
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">

              {/* Intro */}
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our team won multiple medals at the <strong className="text-foreground">Arnold Tournament – Match Point</strong>, one of the major pickleball tournaments in the USA. A proud moment for the Nepali pickleball community!
                </p>
                <p>
                  Congratulations to all the participants and a special shoutout to our medalists — we are extremely proud of you. 🙌
                </p>
              </div>

              {/* Medal list */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-4">🏅 Our Medalists</h3>
                <div className="grid gap-3">
                  {medals.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-muted/40 border border-border rounded-xl px-4 py-3"
                    >
                      <span className="text-2xl leading-none mt-0.5">{m.medal}</span>
                      <div>
                        <span className={`font-bold text-sm ${m.color}`}>{m.label}</span>
                        <p className="font-semibold text-foreground text-sm">{m.player}</p>
                        <p className="text-muted-foreground text-xs">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo grid */}
              <div>
                <h3 className="font-bold text-foreground text-lg mb-4">📸 Tournament Photos</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {nepaliPhotos.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="aspect-square overflow-hidden rounded-lg border border-border hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img loading="lazy" decoding="async"
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer tag */}
              <p className="text-muted-foreground text-sm italic border-t border-border pt-4">
                Proud moment for Nepali Pickleball. The journey continues! 🇳🇵<br />
                <span className="text-primary/70">#NepaliPickleball #ArnoldChampionships #PickleballUSA #ProudMoment</span>
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={nepaliPhotos[lightboxIndex].src}
              alt={nepaliPhotos[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white/80 hover:text-white"
            >
              <ChevronRight size={36} />
            </button>
            <p className="absolute bottom-4 text-white/60 text-sm">
              {lightboxIndex + 1} / {nepaliPhotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PlayerShowcase;
