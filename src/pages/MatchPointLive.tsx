import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import cellaxsLogoAsset from "@/assets/cellaxs-logo.png.asset.json";
import fronterasLogoAsset from "@/assets/fronteras-logo.png.asset.json";

type Stream = {
  id: string;
  name: string;
  type: "court" | "golf";
  streamUrl?: string;
  thumbnail: string;
  thumbnailContain?: boolean;
  thumbnailBgClass?: string;
};


const courtThumbnails = [
  "/images/pickleball-hero.png",
  "/images/player-showcase-hero.png",
  "/images/facility-courts.png",
  "/images/facility-aerial.jpg",
  "/images/facility-photo.jpg",
  "/images/courts-rendering.jpg",
  "/images/community-photo.jpg",
  "/images/leagues-photo.png",
  "/images/leagues-hero.png",
  "/images/ladies-tuesday-league.png",
  "/images/our-facility-hero.png",
  "/images/zane-navratil-clinic.png",
  "/images/photos/photo-1.jpg",
  "/images/photos/photo-2.jpg",
  "/images/photos/photo-3.jpg",
  "/images/photos/photo-4.jpg",
  "/images/photos/photo-5.jpg",
  "/images/photos/photo-6.jpg",
  "/images/photos/photo-7.jpg",
  "/images/photos/photo-8.jpg",
];

const golfThumbnails = [
  "/images/golf-sim-1.jpg",
  "/images/golf-sim-2.jpg",
  "/images/golf-sim-3.jpg",
  "/images/golf-sim-4.jpg",
  "/images/golf-sim-5.jpg",
];

// Stream URLs to be provided. Add `streamUrl` to any item below to enable LIVE playback.
const courtStreamUrls = [
  "https://web.playsight.com/livestreaming/02180ddc9dcb4278a286e44d38482036",
  "https://web.playsight.com/livestreaming/e7c4a953284a43ccb97f887423d774f9",
  "https://web.playsight.com/livestreaming/ed242badc6ba4cd1a7b634885865803e",
  "https://web.playsight.com/livestreaming/cdf4ef3624a64515a83a3bc65b6faf5e",
  "https://web.playsight.com/livestreaming/232e95367552470da5d4a6119c15b179",
  "https://web.playsight.com/livestreaming/1e1d8f0cfeb3451f9799e27612369306",
  "https://web.playsight.com/livestreaming/b27f0ab949514fd987ae938d48d3a01b", // Court 7
  "https://web.playsight.com/livestreaming/909247333f01411d8ff4c845614d7cdb",
  "https://web.playsight.com/livestreaming/7bf072fdd1834adfb0faf81bd145a57c",
  "https://web.playsight.com/livestreaming/781456b165d343c2b3414ce34d98d1ef",
  "https://web.playsight.com/livestreaming/c5c423ccbaa141ac8f82aae4d2306cf4", // Court 11
  "https://web.playsight.com/livestreaming/9aefd8cbb61f49d2b08cb5af291775fc",
  "https://web.playsight.com/livestreaming/3b51d80cbd53447da6caec36e3a0b8a5",
  "https://web.playsight.com/livestreaming/1e1d8f0cfeb3451f9799e27612369306", // Court 14
  "https://web.playsight.com/livestreaming/8d8fff118561466782588f22f2757408",
  "https://web.playsight.com/livestreaming/e027dbe785c74977bf51cd568dfdb012",
  "https://web.playsight.com/livestreaming/654e6c5e9cf04a6b96517a9ca5bea3eb", // Court 17
  "https://web.playsight.com/livestreaming/f158fa4bfbef474bbe10a69c09f160b3",
  "https://web.playsight.com/livestreaming/70604e3fc3b24292a59dd7bdfe4124a7",
  "https://web.playsight.com/livestreaming/4bb277833d394d28824efb4223f99622",
  "https://web.playsight.com/livestreaming/15cd807a935047cb9a0dbbc0348ebf79",
  "https://web.playsight.com/livestreaming/b5a241db48a840aebdbb4cde213354c1",
  "https://web.playsight.com/livestreaming/984799b71cad43e7aedec497088c186d",
  "https://web.playsight.com/livestreaming/f01f5c20762f476fbf420b4ff9649eb1",
  "https://web.playsight.com/livestreaming/b1a967a197f64d008d903131087a6b6c",
  "https://web.playsight.com/livestreaming/e2e554a2c04c447a88aa9efbe133b0f5",
  "https://web.playsight.com/livestreaming/f230be6d6f2b4246a9a7002db4f2832c",
  "https://web.playsight.com/livestreaming/555b2497fd64492699fbd2801b71531f",
  "https://web.playsight.com/livestreaming/b95bdf61246941c1b3bccfda58a4c6b9",
  "https://web.playsight.com/livestreaming/9311e909f8604494a2dc767e9bff1f58", // Court 30
  "https://web.playsight.com/livestreaming/6d3dd00ccfaf4f7ba50560c89fdfb724",
  "https://web.playsight.com/livestreaming/8bd1e16fdcbc455893b05653c8f07871",
  "https://web.playsight.com/livestreaming/d11968ff011c49159fb67a3fb68ca986",
  "https://web.playsight.com/livestreaming/a2b52dcec42b481bbafe19661ce05cac", // Court 34
  "https://web.playsight.com/livestreaming/a183d7776db84507a4191a819c69a076",
  "https://web.playsight.com/livestreaming/29f66b69cc4a4e14be42d81312692ed2",
  "https://web.playsight.com/livestreaming/0323dd9cd5b64eaaabdfe5443d3bf7b2",
  "https://web.playsight.com/livestreaming/48f8f8e6322d476fb683fefa4a058b7a",
];

const courtNameOverrides: Record<number, string> = {
  6: "Dewz Crew Court 6",
  7: "Fronteras Court 7",
  36: "OrthoAlliance Court 36",
  37: "Cellaxs Stadium Court 37",
  38: "G&J Pepsi Championship Court",
};

const courtThumbnailOverrides: Record<number, { src: string; contain?: boolean; bgClass?: string }> = {
  7: { src: fronterasLogoAsset.url, contain: true, bgClass: "bg-white" },
  37: { src: cellaxsLogoAsset.url, contain: true, bgClass: "bg-white" },
  38: { src: "/images/sponsors/gj-pepsi-primary.svg", contain: true, bgClass: "bg-white" },
};

const featuredCourtNumbers = [37, 38];


const courts: Stream[] = Array.from({ length: 38 }, (_, i) => {
  const override = courtThumbnailOverrides[i + 1];
  return {
    id: `court-${i + 1}`,
    name: courtNameOverrides[i + 1] ?? `Court ${i + 1}`,
    type: "court",
    thumbnail: override?.src ?? (i === 0 ? "/images/player-showcase-hero.png" : courtThumbnails[i % courtThumbnails.length]),
    thumbnailContain: override?.contain,
    thumbnailBgClass: override?.bgClass,
    ...(courtStreamUrls[i] ? { streamUrl: courtStreamUrls[i] } : {}),
  };
});


const golfBays: Stream[] = Array.from({ length: 5 }, (_, i) => ({
  id: `golf-bay-${i + 1}`,
  name: `Golf Sim Bay ${i + 1}`,
  type: "golf",
  thumbnail: golfThumbnails[i % golfThumbnails.length],
}));

const Tile = ({ stream, featured = false }: { stream: Stream; featured?: boolean }) => {
  const isLive = Boolean(stream.streamUrl);
  const Wrapper = isLive ? "a" : "button";
  const wrapperProps = isLive
    ? { href: stream.streamUrl, target: "_blank", rel: "noopener noreferrer" }
    : { type: "button" as const, disabled: true };

  const isContain = stream.thumbnailContain || stream.thumbnail?.endsWith(".svg");
  const thumbBgClass = stream.thumbnailBgClass || (isContain ? "bg-white" : "bg-secondary");

  return (
    <Wrapper
      {...wrapperProps}
      className="group text-left block"
      aria-label={`${stream.name} ${isLive ? "live stream" : "offline"}`}
    >
      <Card className={`overflow-hidden transition-colors h-full ${featured ? "border-2 border-primary hover:border-primary shadow-lg" : "border-border hover:border-primary"}`}>
        <div className={`relative aspect-video flex items-center justify-center overflow-hidden ${thumbBgClass} ${isContain ? "p-6" : ""}`}>
          <img loading="lazy" decoding="async"
            src={stream.thumbnail}
            alt={`${stream.name} thumbnail`}
            className={`absolute inset-0 w-full h-full ${isContain ? "object-contain p-6" : "object-cover"} ${isLive ? "" : "opacity-70"}`}
          />

          {isLive ? (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Live
            </div>
          ) : (
            <div className="absolute top-3 left-3 z-10 bg-foreground/70 text-background px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
              Offline
            </div>
          )}
          {isLive && (
            <div className="absolute inset-0 z-10 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <Play className="w-14 h-14 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg text-foreground">{stream.name}</h3>
            {isLive && <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {isLive ? "Tap to watch live" : "Currently offline"}
          </p>
        </div>
      </Card>
    </Wrapper>
  );
};

const MatchPointLive = () => {
  return (
    <Layout>
      <PageHero
        title="MatchPoint Live"
        subtitle="Live streams from all 38 indoor pickleball courts and 5 golf simulator bays."
      />

      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Welcome to MatchPoint Live
            </h2>
            <p className="text-muted-foreground">
              Curious about the energy and competition happening at Match Point? Or want to scout the
              skill-rated matches before you book? Tune in any time to watch the action live from
              available court and golf bay streams.
            </p>
            <p className="mt-4 text-foreground">
              Want to sponsor a court?{" "}
              <Link to="/sponsors" className="text-primary hover:underline font-medium">
                Become a sponsor
              </Link>
            </p>
          </div>

          {(() => {
            const featured = courts.filter((c) => featuredCourtNumbers.includes(Number(c.id.split("-")[1])));
            const rest = courts.filter((c) => !featuredCourtNumbers.includes(Number(c.id.split("-")[1])));
            return (
              <>
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Featured</span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground">Stadium & Championship Courts</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featured.map((c) => (
                      <Tile key={c.id} stream={c} featured />
                    ))}
                  </div>
                </div>

                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground">Pickleball Courts</h3>
                    <span className="text-sm text-muted-foreground">38 courts</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {rest.map((c) => (
                      <Tile key={c.id} stream={c} />
                    ))}
                  </div>
                </div>
              </>
            );
          })()}


          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-display text-2xl md:text-3xl text-foreground">Golf Simulator Bays</h3>
              <span className="text-sm text-muted-foreground">5 bays</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {golfBays.map((g) => (
                <Tile key={g.id} stream={g} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MatchPointLive;
