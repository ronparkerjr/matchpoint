import { motion } from "framer-motion";
import { useEffect } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  useEffect(() => {
    if (!image) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = image;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, [image]);

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      )}
      {!image && <div className="absolute inset-0 bg-secondary" />}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-display text-5xl md:text-7xl leading-tight ${image ? 'text-white' : 'text-bright'}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto mt-4 ${image ? 'text-white/80' : 'text-muted-foreground'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
