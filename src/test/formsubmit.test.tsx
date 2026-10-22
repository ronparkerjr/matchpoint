import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactForm from "@/components/ContactForm";
import NominationForm from "@/components/NominationForm";

afterEach(cleanup);

function renderForm(kind: string) {
  const subject = `Match Point ${kind} nomination`;
  return render(kind === "contact" ? <ContactForm /> : (
    <NominationForm nomineeLabel={kind === "member" ? "Member" : "Employee"} subject={subject} />
  ));
}

describe("FormSubmit delivery", () => {
  it.each(["contact", "member", "employee"])("validates %s input before allowing a provider POST", (kind) => {
    const { container } = renderForm(kind);
    const form = container.querySelector("form")!;
    expect(form).toHaveAttribute("action", "https://formsubmit.co/rjparkerjr@gmail.com");
    expect(form).toHaveAttribute("method", "POST");
    expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
    expect(fireEvent.submit(form)).toBe(false);
    expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);

    fireEvent.change(screen.getByRole("textbox", { name: /first name/i }), { target: { value: "Test" } });
    fireEvent.change(screen.getByRole("textbox", { name: /last name/i }), { target: { value: "Visitor" } });
    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: "visitor@example.com" } });
    fireEvent.change(screen.getByRole("textbox", { name: /message|spotlight/i }), { target: { value: "A website inquiry or nomination." } });
    if (kind !== "contact") {
      fireEvent.change(screen.getByRole("textbox", { name: /nominating/i }), { target: { value: "Nominee Name" } });
    }
    expect(fireEvent.submit(form)).toBe(true);

    const data = new FormData(form);
    expect(data.get("email")).toBe("visitor@example.com");
    expect(data.get("message")).toBe("A website inquiry or nomination.");
    expect(data.get("_subject")).toBe(kind === "contact" ? "Match Point website contact" : `Match Point ${kind} nomination`);
    expect(data.get("formType")).toBe(kind === "contact" ? "Contact" : `${kind === "member" ? "Member" : "Employee"} nomination`);
    expect(data.get("_template")).toBe("table");
    expect(data.get("_honey")).toBe("");
    expect(data.has("_captcha")).toBe(false); // Keep provider-default spam verification.
    if (kind !== "contact") expect(data.get("nomineeName")).toBe("Nominee Name");
    expect(screen.queryByText(/message sent|nomination received|thank you/i)).not.toBeInTheDocument();
  });

  it("includes explicit newsletter consent for either checkbox state", () => {
    const { container } = renderForm("contact");
    const form = container.querySelector("form")!;
    expect(new FormData(form).get("newsletterConsent")).toBe("No");
    fireEvent.click(screen.getByRole("checkbox", { name: /news and updates/i }));
    expect(new FormData(form).get("newsletterConsent")).toBe("Yes");
    expect(new FormData(form).get("newsletter")).toBe("Yes");
  });

  it("blocks invalid email without transmitting data", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const { container } = renderForm("contact");
    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), { target: { value: "not-an-email" } });
    expect(fireEvent.submit(container.querySelector("form")!)).toBe(false);
    expect(screen.getByText("Please enter a valid email")).toHaveAttribute("role", "alert");
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
