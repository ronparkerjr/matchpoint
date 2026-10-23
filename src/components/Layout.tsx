import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Phone } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen min-w-0 flex flex-col overflow-x-clip pb-[calc(4rem+env(safe-area-inset-bottom))] sm:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 pt-16">{children}</main>
      <Footer />
      <a
        href="tel:6145692556"
        aria-label="Call Match Point at 614-569-2556"
        className="fixed inset-x-0 bottom-0 z-[60] flex min-h-16 items-center justify-center gap-3 bg-primary px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] text-primary-foreground font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:hidden"
      >
        <Phone size={22} aria-hidden="true" />
        <span>Call 614-569-2556</span>
      </a>
    </div>
  );
};

export default Layout;
