import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Videos = () => {
  return (
    <Layout>
      <PageHero title="Videos" subtitle="Watch highlights, recaps, and more from Match Point." image="/images/videos-hero.png" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">Table Tennis at Match Point</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              {["26130127003321137", "1686721516034743", "2043369076613826"].map((id, i) => (
                <div key={id} className="rounded-lg overflow-hidden border border-border mx-auto" style={{ width: 320, height: 476, flexShrink: 0 }}>
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}&show_text=0&width=320&height=476`}
                    title={`Table Tennis at Match Point ${i + 1}`}
                    width="320"
                    height="476"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: "none", overflow: "hidden", display: "block" }}
                    scrolling="no"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">Match Point's First 90 Days Review</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/P2pcwZtnd8s?rel=0&modestbranding=1"
                title="Match Point's First 90 Days Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">Match Point Wins Best Midwest Pickleball Facility</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/6zUK8-DOTS4?start=2140&end=2200&rel=0&modestbranding=1"
                title="Match Point Wins Best Midwest Pickleball Facility"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">Match Point Grand Opening</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/qqbtlU6wDAM?rel=0&modestbranding=1"
                title="Match Point Grand Opening"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
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
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
