import { publicAsset } from "@/lib/publicAsset";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Instructor = {
  name: string;
  video: string;
};

const headPro: Instructor = {
  name: "Rachel McCreery",
  video: publicAsset("/videos/instructors/rachel-mccreery.mp4"),
};

const instructors: Instructor[] = [
  { name: "Jen Foley", video: publicAsset("/videos/instructors/jen-foley.mp4") },
  { name: "Betty Dorsey", video: publicAsset("/videos/instructors/betty-dorsey.mp4") },
  { name: "Calder Lee", video: publicAsset("/videos/instructors/calder-lee.mp4") },
  { name: "Colleen D'Angelo", video: publicAsset("/videos/instructors/colleen-dangelo.mp4") },
  { name: "David Hartman", video: publicAsset("/videos/instructors/david-hartman.mp4") },
  { name: "David Hayman", video: publicAsset("/videos/instructors/david-hayman.mp4") },
  { name: "Evan DuBro", video: publicAsset("/videos/instructors/evan-dubro.mp4") },
  { name: "Gennar Feucht", video: publicAsset("/videos/instructors/gennar-feucht.mp4") },
  { name: "Marilee", video: publicAsset("/videos/instructors/marilee.mp4") },
  { name: "Nick Tidwell", video: publicAsset("/videos/instructors/nick-tidwell.mp4") },
  { name: "Robin Dobler", video: publicAsset("/videos/instructors/robin-dobler.mp4") },
  { name: "Simone Johnson", video: publicAsset("/videos/instructors/simone-johnson.mp4") },
  { name: "Susan Bernard", video: publicAsset("/videos/instructors/susan-bernard.mp4") },
];

const PickleballInstruction = () => {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.action === "setHeight") {
        const iframe = document.getElementById("form-iframe") as HTMLIFrameElement;
        if (iframe && e.data.height) {
          iframe.style.height = e.data.height + "px";
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Layout>
      <PageHero
        title="Pickleball Instruction"
        subtitle="Meet our certified instructors at Match Point — ready to help you elevate every part of your game."
        image={publicAsset("/images/pickleball-hero.png")}
      />

      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Certified Instructors
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're brand new to pickleball or sharpening your tournament edge, our
            professional coaches deliver personalized instruction across all skill levels. Watch
            each instructor introduce themselves below, then book a lesson to get started.
          </p>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Head Pro
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-bright mb-2">
              {headPro.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lead instructor and the driving force behind Match Point's pickleball programming.
            </p>
          </div>
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-primary shadow-xl bg-black aspect-[9/16]">
            <video
              src={headPro.video}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
              >
                <div className="relative bg-black aspect-[9/16] overflow-hidden">
                  <video
                    src={instructor.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-xl text-bright">{instructor.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mt-1">
                    Certified Instructor
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Book Instruction Online
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            Schedule private, semi-private, or group instruction directly through CourtReserve.
          </p>
          <Button asChild variant="outline" size="lg" className="min-w-[200px]">
            <a
              href="https://widgets.courtreserve.com/Online/Public/EmbedCode/17037/79315"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Booking Form
            </a>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <iframe
            id="form-iframe"
            className="form-iframe-79315"
            src="https://widgets.courtreserve.com/Online/Public/EmbedCode/17037/79315"
            style={{ margin: 0, width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
          />
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
            Ready to Book a Lesson?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Reach out to our team to schedule private, semi-private, or group instruction with any
            of our certified pros.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <a
                href="https://mobileapp.courtreserve.com/online/publicbookings/17037"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve a Court
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PickleballInstruction;
