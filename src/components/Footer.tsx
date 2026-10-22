import { publicAsset } from "@/lib/publicAsset";
import { Link } from "react-router-dom";
import { NEARBY_CITIES } from "@/data/nearbyCities";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={publicAsset("/images/match-point-logo.png")} alt="Match Point" className="h-10 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Central Ohio's premier destination for pickleball enthusiasts. 38 indoor championship-size courts with CushionX surface, world-class amenities, and a vibrant community.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/matchpointcolumbus/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574524004625" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@MatchPointColumbus" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://x.com/MatchPointcbus" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-display text-xl text-bright mb-4">Location</h3>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              350 McCormick Blvd<br />
              Columbus, Ohio 43213
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl text-bright mb-4">Contact</h3>
            <div className="text-muted-foreground text-sm space-y-2">
              <p>
                <a href="tel:614-569-2556" className="hover:text-primary transition-colors">614-569-2556</a>
              </p>
              <p>
                <a href="mailto:support@matchpointpickleballclub.com" className="hover:text-primary transition-colors">support@matchpointpickleballclub.com</a>
              </p>
            </div>
          </div>
        </div>

        <nav aria-label="Popular searches" className="border-t border-border mt-12 pt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <Link to="/indoor-pickleball-courts-columbus" className="text-muted-foreground hover:text-foreground transition-colors">Indoor Pickleball Courts Columbus OH</Link>
          <Link to="/book-pickleball-court-columbus" className="text-muted-foreground hover:text-foreground transition-colors">Book a Pickleball Court Columbus OH</Link>

          <Link to="/pickleball-lessons-columbus" className="text-muted-foreground hover:text-foreground transition-colors">Pickleball Lessons Columbus OH</Link>
          <Link to="/pickleball-leagues-columbus" className="text-muted-foreground hover:text-foreground transition-colors">Pickleball Leagues Columbus OH</Link>
          {NEARBY_CITIES.map((city) => (
            <Link key={city.path} to={city.path} className="text-muted-foreground hover:text-foreground transition-colors">
              Pickleball {city.cityState}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Match Point Pickleball LLC. All rights reserved.
          </p>
          <nav className="flex gap-6 text-xs">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/leagues" className="text-muted-foreground hover:text-foreground transition-colors">Leagues</Link>
            <Link to="/ortho-alliance" className="text-muted-foreground hover:text-foreground transition-colors">OrthoAlliance</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
