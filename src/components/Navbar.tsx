import { publicAsset } from "@/lib/publicAsset";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = { label: string; to: string; external?: boolean };
type NavGroup = { label: string; links: NavLink[] };

// Standalone top-level links (no dropdown)
const standaloneLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Reserve a Court", to: "/reserve-a-court" },
];

// Mobile-only quick jumps into the Programs page sections
const programSections: NavLink[] = [
  { label: "Leagues", to: "/programs#leagues" },
  { label: "Open Play", to: "/programs#open-play" },
  { label: "Clinics & Lessons", to: "/programs#clinics" },
  { label: "Tournaments", to: "/programs#tournaments" },
];

// Grouped dropdowns
const navGroups: NavGroup[] = [
  {
    label: "Pickleball",
    links: [
      { label: "Pickleball Overview", to: "/pickleball" },
      { label: "Programs: Leagues, Open Play, Clinics", to: "/programs" },
      { label: "Instruction", to: "/pickleball-instruction" },
      { label: "Leagues", to: "/leagues" },
      { label: "Player Showcase", to: "/player-showcase" },
      { label: "PlaySight SmartCourts", to: "/playsight" },
    ],
  },
  {
    label: "Other Sports",
    links: [
      { label: "Trackman Golf", to: "/trackman-golf" },
      { label: "Table Tennis", to: "/table-tennis" },
      { label: "Badminton", to: "/badminton" },
    ],
  },
  {
    label: "Membership",
    links: [
      { label: "Memberships", to: "/memberships" },
      { label: "Corp Memberships", to: "/corp-memberships" },
      { label: "Private Events", to: "/private-events" },
    ],
  },
  {
    label: "Media",
    links: [
      { label: "MatchPoint Live", to: "/matchpoint-live" },
      { label: "Photos", to: "/photos" },
      { label: "Videos", to: "/videos" },
      { label: "Member of the Month", to: "/member-of-the-month" },
      { label: "Employee of the Month", to: "/employee-of-the-month" },
      { label: "Announcements", to: "/announcements" },
    ],
  },
  {
    label: "About",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Facility", to: "/our-facility" },
      { label: "Preferred Hotels", to: "/preferred-hotels" },
      { label: "OrthoAlliance", to: "/ortho-alliance" },
      { label: "Sponsors", to: "/sponsors" },
      { label: "Employment", to: "/employment" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact-us" },
    ],
  },
];

const allMobileLinks: NavLink[] = [
  ...standaloneLinks,
  ...navGroups.flatMap((g) => g.links),
];

const NavItem = ({
  link,
  className,
  onClick,
}: {
  link: NavLink;
  className: string;
  onClick?: () => void;
}) => {
  if (link.external) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
};

const DesktopDropdown = ({
  group,
  scrollTop,
  pathname,
}: {
  group: NavGroup;
  scrollTop: () => void;
  pathname: string;
}) => {
  const [open, setOpen] = useState(false);
  const isActive = group.links.some((l) => l.to === pathname);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-xs font-medium transition-colors whitespace-nowrap py-2 ${
          isActive ? "text-primary" : "text-muted-foreground hover:text-bright"
        }`}
        aria-expanded={open}
      >
        {group.label}
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-1 z-50">
          <div className="min-w-[220px] bg-background border border-border-subtle rounded-md shadow-lg py-2">
            {group.links.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                onClick={scrollTop}
                className={`block px-4 py-2 text-xs font-medium transition-colors ${
                  !link.external && pathname === link.to
                    ? "text-primary bg-secondary/50"
                    : "text-muted-foreground hover:text-bright hover:bg-secondary/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileGroup = ({
  group,
  pathname,
  onLinkClick,
}: {
  group: NavGroup;
  pathname: string;
  onLinkClick: () => void;
}) => {
  const [open, setOpen] = useState(group.links.some((l) => l.to === pathname));
  return (
    <div className="border-b border-border-subtle pb-2">
      <button
        type="button"
        className="flex items-center justify-between w-full py-2 text-sm font-semibold text-bright"
        onClick={() => setOpen(!open)}
      >
        {group.label}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pl-3 pt-1">
          {group.links.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              onClick={onLinkClick}
              className={`text-sm py-1.5 ${
                !link.external && pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

  const closeMobile = () => {
    setMobileOpen(false);
    scrollTop();
  };

  // For in-page anchors: close the menu and let ScrollToTop smooth-scroll to the hash.
  const closeSection = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-16">
          <Link
            to="/"
            className="flex items-center shrink-0 lg:w-[200px]"
            onClick={scrollTop}
          >
            <img
              src={publicAsset("/images/match-point-logo.png")}
              alt="Match Point"
              className="h-10"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center flex-1">
            <nav className="flex items-center gap-6">
              {standaloneLinks.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  onClick={scrollTop}
                  className={`text-xs font-medium transition-colors whitespace-nowrap py-2 ${
                    !link.external && location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-bright"
                  }`}
                />
              ))}
              {navGroups.map((group) => (
                <DesktopDropdown
                  key={group.label}
                  group={group}
                  scrollTop={scrollTop}
                  pathname={location.pathname}
                />
              ))}
            </nav>
            <div className="flex items-center gap-2 ml-auto">
              <Link
                to="/memberships"
                onClick={scrollTop}
                className="bg-primary text-primary-foreground px-4 py-1.5 rounded-sm text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap min-w-[120px] text-center"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile: Toggle */}
          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <button
              type="button"
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border-subtle max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-2">
            <Link
              to="/memberships"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold text-center"
              onClick={closeMobile}
            >
              Join Now
            </Link>
            {standaloneLinks.map((link) => (
              <div key={link.label}>
                <NavItem
                  link={link}
                  onClick={closeMobile}
                  className={`block text-sm font-semibold py-2 ${
                    !link.external && location.pathname === link.to
                      ? "text-primary"
                      : "text-bright"
                  } ${link.to === "/programs" ? "" : "border-b border-border-subtle"}`}
                />
                {link.to === "/programs" && (
                  <div className="flex flex-col gap-1 pl-3 pb-2 border-b border-border-subtle">
                    {programSections.map((section) => (
                      <Link
                        key={section.label}
                        to={section.to}
                        onClick={closeSection}
                        className="text-sm text-muted-foreground py-1.5"
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {navGroups.map((group) => (
              <MobileGroup
                key={group.label}
                group={group}
                pathname={location.pathname}
                onLinkClick={closeMobile}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
