import FormSubmitFields from "@/components/FormSubmitFields";
import { FORM_SUBMIT_ACTION } from "@/lib/formSubmit";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
  newsletter: z.boolean(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      e.preventDefault();
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] ??= error.message;
      });
      setErrors(fieldErrors);
      const firstField = e.currentTarget.elements.namedItem(result.error.errors[0].path[0] as string);
      if (firstField instanceof HTMLElement) firstField.focus();
    }
    // Valid input uses native POST. FormSubmit handles verification and its response;
    // this page must never claim delivery before the provider accepts the submission.
  };

  return (
    <form action={FORM_SUBMIT_ACTION} method="POST" onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormSubmitFields subject="Match Point website contact" formType="Contact" />
      <input type="hidden" name="newsletterConsent" value={formData.newsletter ? "Yes" : "No"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
            First Name <span className="text-primary">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="John"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && <p id="firstName-error" role="alert" className="text-primary text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
            Last Name <span className="text-primary">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Doe"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && <p id="lastName-error" role="alert" className="text-primary text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="john@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" role="alert" className="text-primary text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
          placeholder="Tell us what you'd like to know..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" role="alert" className="text-primary text-xs mt-1">{errors.message}</p>}
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="newsletter"
          value="Yes"
          checked={formData.newsletter}
          onChange={handleChange}
          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-muted-foreground">Sign up for news and updates</span>
      </label>

      <p className="text-sm text-muted-foreground">
        Submissions are processed by FormSubmit. Complete any verification on the next page.
      </p>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
