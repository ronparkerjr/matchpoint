import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Boots GA4 and sends a page_view on every client-side route change.
 * Must be rendered inside the router.
 */
const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    // Let RouteSEO update document.title first.
    const id = window.setTimeout(() => trackPageView(pathname + search), 0);
    return () => window.clearTimeout(id);
  }, [pathname, search]);

  return null;
};

export default AnalyticsTracker;
