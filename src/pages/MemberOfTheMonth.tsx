import { publicAsset } from "@/lib/publicAsset";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Calendar, MapPin, Sparkles, Quote, Award, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

type Member = {
  name: string;
  monthOf: string; // e.g. "July 2026"
  skillLevel: string;
  memberSince: string;
  hometown: string;
  favoriteShot: string;
  signatureYell?: string;
  favoriteCourt: string;
  bio: string;
  quote: string;
  videoUrl?: string; // mp4 or YouTube embed URL
};

const currentMember: Member = {
  name: "Murali V.",
  monthOf: "July 2026",
  skillLevel: "Match Point Regular",
  memberSince: "Day 1",
  hometown: "—",
  favoriteShot: "Hero angle attack",
  signatureYell: "MURALI!",
  favoriteCourt: "—",
  bio: "Murali V. is our Member of the Month for July 2026. Known around the club for his explosive hero angle attack and his signature battle cry, 'MURALI!', he brings energy, passion, and a competitive spirit to every match he plays.",
  quote: "MURALI!",
  videoUrl: publicAsset("/videos/features/murali-member-of-the-month.mp4"),
};

const pastMembers: { name: string; monthOf: string; highlight: string }[] = [
  {
    name: "Amy",
    monthOf: "June 2026",
    highlight:
      "Our first member spotlight. A 3.6 DUPR player who loves the 'ballet court' (#22) and any drop that lands in the kitchen.",
  },
];

const MemberOfTheMonth = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to autoplay with sound; if the browser blocks it, fall back to muted autoplay.
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        void video.play();
      });
    }
  }, []);

  return (
    <Layout>
      <PageHero
        title="Member of the Month"
        subtitle="Each month we shine a spotlight on a Match Point member who brings energy, sportsmanship, and community to the courts."
      />

      {/* Current featured member */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Sparkles size={18} />
            <span className="text-sm uppercase tracking-wide font-semibold">
              Featured Member
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:items-start">
            {/* Video / Visual */}
            <div className="lg:col-span-2">
              <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden border border-border flex items-center justify-center max-w-md mx-auto lg:max-w-none">
                {currentMember.videoUrl ? (
                  currentMember.videoUrl.includes("youtube.com") ||
                  currentMember.videoUrl.includes("youtu.be") ? (
                    <iframe
                      src={currentMember.videoUrl}
                      title={`${currentMember.name} — Member of the Month`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={currentMember.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="text-center text-muted-foreground p-8">
                    <Trophy size={56} className="mx-auto mb-3 text-primary" />
                    <p className="text-sm">
                      No feature video is available for this profile.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Profile */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground font-display text-xl">
                    {currentMember.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-bright">
                    {currentMember.name}
                  </h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar size={14} /> {currentMember.monthOf}
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Skill Level
                  </dt>
                  <dd className="text-bright font-medium">{currentMember.skillLevel}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Member Since
                  </dt>
                  <dd className="text-bright font-medium">{currentMember.memberSince}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    <MapPin size={12} /> Hometown
                  </dt>
                  <dd className="text-bright font-medium">{currentMember.hometown}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Favorite Shot
                  </dt>
                  <dd className="text-bright font-medium">{currentMember.favoriteShot}</dd>
                </div>
                {currentMember.signatureYell && (
                  <div className="col-span-2">
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                      <Megaphone size={12} /> Signature Yell
                    </dt>
                    <dd className="text-bright font-medium">{currentMember.signatureYell}</dd>
                  </div>
                )}
                <div className="col-span-2">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Favorite Court
                  </dt>
                  <dd className="text-bright font-medium">{currentMember.favoriteCourt}</dd>
                </div>
              </dl>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {currentMember.bio}
              </p>

              <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-bright">
                <Quote size={16} className="text-primary mb-1" />
                "{currentMember.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Past honorees */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-bright uppercase tracking-wide text-center mb-10">
            Past Members of the Month
          </h2>
          {pastMembers.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Past honorees will appear here as new members are featured each month.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastMembers.map((m) => (
                <div
                  key={`${m.name}-${m.monthOf}`}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="font-display text-lg text-bright">{m.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{m.monthOf}</p>
                  <p className="text-sm text-muted-foreground">{m.highlight}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cross-link & nomination CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Know Someone Who Deserves the Spotlight?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nominate a fellow member who brings the energy, lifts up new players, or
            just makes Match Point a better place to be on the court.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/nominate-a-member">Nominate a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/employee-of-the-month">
                <Award size={16} className="mr-2" /> See Employee of the Month
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MemberOfTheMonth;
