/**
 * Google reCAPTCHA v3 helper.
 *
 * To enable:
 *  1. Get keys at https://www.google.com/recaptcha/admin/create (reCAPTCHA v3).
 *  2. Add VITE_RECAPTCHA_SITE_KEY=<your-site-key> to your env.
 *  3. Store RECAPTCHA_SECRET_KEY as a Lovable Cloud secret and verify the token
 *     server-side inside the send-contact-email edge function:
 *       const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
 *         method: "POST",
 *         body: new URLSearchParams({ secret: Deno.env.get("RECAPTCHA_SECRET_KEY")!, response: token }),
 *       });
 *       const { success, score } = await r.json();
 *       if (!success || score < 0.5) return new Response("forbidden", { status: 403 });
 *
 * Until the site key is set, getRecaptchaToken() resolves to null and forms
 * continue to submit normally — no UX impact.
 */

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let loaderPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (!SITE_KEY) return Promise.resolve();
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(s);
  });
  return loaderPromise;
}

export async function getRecaptchaToken(action: string): Promise<string | null> {
  if (!SITE_KEY) return null;
  try {
    await loadScript();
    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha!.ready(async () => {
        try {
          const token = await window.grecaptcha!.execute(SITE_KEY, { action });
          resolve(token);
        } catch (err) {
          reject(err);
        }
      });
    });
  } catch (err) {
    console.warn("reCAPTCHA unavailable:", err);
    return null;
  }
}

export const recaptchaEnabled = Boolean(SITE_KEY);
