import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Briefcase, Heart, Quote, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import katieVideo from "@/assets/katie-ventre-employee-of-the-month.mp4.asset.json";
import katieThumbnail from "@/assets/katie-ventre-employee-of-the-month-thumbnail.jpg.asset.json";
import bridgettVideo from "@/assets/bridgett-employee-of-the-month.mp4.asset.json";

type Employee = {
  name: string;
  month: string; // e.g. "June 2026"
  role: string;
  withClubSince: string;
  funFact: string;
  bio: string;
  whyChosen: string;
  quote: string;
  photoUrl?: string;
  videoUrl?: string;
};

const currentEmployee: Employee = {
  name: "Katy Ventre",
  month: "July 2026",
  role: "Front Desk Lead",
  withClubSince: "Since the start",
  funFact: "She and her husband spend more time at the club than they do at home.",
  bio: "Katie is the friendly face that greets members and guests at the front desk. As Front Desk Lead, she keeps things running smoothly and makes everyone feel welcome from the moment they walk in.",
  whyChosen:
    "She was chosen because she simply does everything she can to help everyone.",
  quote:
    "It's made my community bigger.",
  videoUrl: katieVideo.url,
  photoUrl: katieThumbnail.url,
};

const pastEmployees: { name: string; month: string; role: string; videoUrl?: string }[] = [
  {
    name: "Bridgett Del Pozo",
    month: "June 2026",
    role: "Court Monitor Manager, head of the Ladies league and squirrel expert",
    videoUrl: bridgettVideo.url,
  },
];

const EmployeeOfTheMonth = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
        title="Employee of the Month"
        subtitle="Honoring the Match Point team members who go above and beyond to make our club the best place to play in Columbus."
      />

      {/* Current honoree */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Award size={18} />
            <span className="text-sm uppercase tracking-wide font-semibold">
              Featured Employee
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:items-start">
            {/* Video */}
            <div className="lg:col-span-2">
              <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl flex items-center justify-center max-w-md mx-auto lg:max-w-none">
                {currentEmployee.videoUrl ? (
                  <video
                    ref={videoRef}
                    src={currentEmployee.videoUrl}
                    poster={currentEmployee.photoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : currentEmployee.photoUrl ? (
                  <img loading="lazy" decoding="async"
                    src={currentEmployee.photoUrl}
                    alt={currentEmployee.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-muted-foreground p-8">
                    <Award size={56} className="mx-auto mb-3 text-primary" />
                    <p className="text-sm">No feature video is available for this profile.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Profile */}
            <div className="lg:col-span-3 flex flex-col">
              <h2 className="font-display text-3xl md:text-4xl text-bright mb-1">
                {currentEmployee.name}
              </h2>
              <p className="text-primary font-medium mb-1">{currentEmployee.role}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-6">
                <Calendar size={14} /> {currentEmployee.month}
              </p>

              <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    <Briefcase size={12} /> With the Club Since
                  </dt>
                  <dd className="text-bright font-medium">
                    {currentEmployee.withClubSince}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                    <Heart size={12} /> Fun Fact
                  </dt>
                  <dd className="text-bright font-medium">{currentEmployee.funFact}</dd>
                </div>
              </dl>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {currentEmployee.bio}
              </p>

              <div className="bg-secondary/40 border border-border rounded-lg p-4 mb-6">
                <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">
                  Why We Chose Them
                </p>
                <p className="text-sm text-bright leading-relaxed">
                  {currentEmployee.whyChosen}
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-bright">
                <Quote size={16} className="text-primary mb-1" />
                "{currentEmployee.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Past honorees */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-bright uppercase tracking-wide text-center mb-10">
            Past Honorees
          </h2>
          {pastEmployees.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Past Employee of the Month honorees will appear here as new team members
              are recognized.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEmployees.map((e) => (
                <div
                  key={`${e.name}-${e.month}`}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="font-display text-lg text-bright">{e.name}</h3>
                  <p className="text-xs text-primary mb-1">{e.role}</p>
                  <p className="text-xs text-muted-foreground">{e.month}</p>
                  {e.videoUrl && (
                    <video
                      src={e.videoUrl}
                      controls
                      playsInline
                      preload="metadata"
                      className="mt-4 w-full aspect-[9/16] object-cover rounded-lg border border-border"
                    />
                  )}
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
            Recognize a Team Member
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Had a great experience with a Match Point staff member? Send us a shoutout —
            it might earn them next month's spotlight.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/nominate-an-employee">Nominate an Employee</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/member-of-the-month">
                <Trophy size={16} className="mr-2" /> See Member of the Month
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmployeeOfTheMonth;
