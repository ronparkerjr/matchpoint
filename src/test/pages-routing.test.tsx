import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { afterAll, afterEach, beforeAll, expect, it, vi } from "vitest";
import App from "@/App";

beforeAll(() => {
  vi.stubEnv("BASE_URL", "/matchpoint/");
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  vi.stubGlobal("IntersectionObserver", class {
    observe() {}
    unobserve() {}
    disconnect() {}
  });
});
afterEach(cleanup);
afterAll(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

it("renders a direct Pages contact URL and keeps navigation within the project", async () => {
  window.history.replaceState({}, "", "/matchpoint/contact-us");
  render(<HelmetProvider><App /></HelmetProvider>);
  await waitFor(() => expect(screen.getByRole("heading", { name: "Contact Us", level: 1 })).toBeVisible());
  expect(screen.getByRole("button", { name: "Submit" })).toBeEnabled();
  const logo = screen.getAllByAltText("Match Point")[0];
  expect(logo).toHaveAttribute("src", "/matchpoint/images/match-point-logo.png");
  const about = screen.getAllByRole("link", { name: "About" })[0];
  expect(about).toHaveAttribute("href", "/matchpoint/about");
  fireEvent.click(about);
  await waitFor(() => expect(screen.getByRole("heading", { name: "We Are Match Point", level: 1 })).toBeVisible());
  expect(window.location.pathname).toBe("/matchpoint/about");
});
