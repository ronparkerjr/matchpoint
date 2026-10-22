import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactForm from "@/components/ContactForm";
import NominationForm from "@/components/NominationForm";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("temporarily unavailable forms", () => {
  it.each(["contact", "member", "employee"])("keeps %s fields visible and blocks submission", (kind) => {
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
    const { container } = render(kind === "contact" ? <ContactForm /> : (
      <NominationForm nomineeLabel={kind === "member" ? "Member" : "Employee"} subject="Nomination" />
    ));

    expect(screen.getByRole("status")).toHaveTextContent("temporarily unavailable");
    expect(screen.getByRole("status")).toHaveTextContent("cannot send or save");
    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
    const email = screen.getByRole("textbox", { name: /email/i });
    fireEvent.change(email, { target: { value: "visitor@example.com" } });
    expect(email).toHaveValue("visitor@example.com");
    expect(screen.getByRole("textbox", { name: /message|spotlight/i })).toBeVisible();
    if (kind === "contact") {
      expect(screen.getByRole("checkbox", { name: /news and updates/i })).toBeVisible();
    } else {
      expect(screen.getByRole("textbox", { name: /nominating/i })).toBeVisible();
    }

    // Bypass the disabled button to cover Enter/requestSubmit-style form events.
    expect(fireEvent.submit(container.querySelector("form")!)).toBe(false);
    expect(email).toHaveValue("visitor@example.com");
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(screen.queryByText(/thank you|nomination received/i)).not.toBeInTheDocument();
  });
});
