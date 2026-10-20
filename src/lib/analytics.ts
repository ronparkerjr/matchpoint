/**
 * Google Analytics 4 + conversion tracking.
 *
 * The measurement ID comes from the Google Analytics connector
 * (VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY) or, as a fallback,
 * VITE_GA4_MEASUREMENT_ID. When neither is set, tracking is a no-op so
 * local/dev builds stay clean.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const env = import.meta.env as Record<string, string | undefined>;

export const GA_MEASUREMENT_ID =
  env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY ||
  env.VITE_GA4_MEASUREMENT_ID ||
  "";

export const analyticsEnabled = () => Boolean(GA_MEASUREMENT_ID);

let initialized = false;

const gtag = (...args: unknown[]) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

/** Loads gtag.js once and configures GA4. Safe to call multiple times. */
export const initAnalytics = () => {
  if (initialized || !analyticsEnabled() || typeof document === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag = gtag;
  gtag("js", new Date());
  // SPA: we send page_view manually on every route change.
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });
};

/** Sends a GA4 page_view for client-side route changes. */
export const trackPageView = (path: string, title?: string) => {
  if (!analyticsEnabled()) return;
  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
};

/** Sends any GA4 event. */
export const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (!analyticsEnabled()) {
    if (import.meta.env.DEV) console.debug("[analytics] (disabled)", name, params);
    return;
  }
  gtag("event", name, params);
};

/* ---------------- Conversion helpers ---------------- */

type Source = { source?: string; label?: string };

/** Click on a CTA that leads to court booking (CourtReserve / reserve-a-court). */
export const trackCourtBookingClick = ({ source, label }: Source = {}) =>
  trackEvent("court_booking_click", {
    event_category: "conversion",
    conversion_type: "court_booking",
    source: source ?? window.location.pathname,
    label,
  });

/** Click on a CTA related to lessons / instruction inquiries. */
export const trackLessonInquiryClick = ({ source, label }: Source = {}) =>
  trackEvent("lesson_inquiry_click", {
    event_category: "conversion",
    conversion_type: "lesson_inquiry",
    source: source ?? window.location.pathname,
    label,
  });

/** Generic landing-page CTA click. */
export const trackCtaClick = ({ source, label }: Source = {}) =>
  trackEvent("cta_click", {
    event_category: "engagement",
    source: source ?? window.location.pathname,
    label,
  });

/** Phone number click (a strong local-SEO conversion signal). */
export const trackPhoneClick = ({ source }: Source = {}) =>
  trackEvent("phone_click", {
    event_category: "conversion",
    conversion_type: "phone_call",
    source: source ?? window.location.pathname,
  });

/**
 * Successful form submission. `formName` examples:
 * "contact", "lesson_inquiry", "nominate_member".
 */
export const trackFormSubmit = (formName: string, params: Record<string, unknown> = {}) => {
  trackEvent("form_submit", {
    event_category: "conversion",
    form_name: formName,
    source: window.location.pathname,
    ...params,
  });
  // GA4 recommended lead event so it can be marked as a key event/conversion.
  trackEvent("generate_lead", {
    form_name: formName,
    source: window.location.pathname,
    ...params,
  });
};
