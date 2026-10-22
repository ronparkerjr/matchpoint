import FormSubmitFields from "@/components/FormSubmitFields";
import { FORM_SUBMIT_ACTION } from "@/lib/formSubmit";
import { useState } from "react";
import { z } from "zod";

const nominationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  nomineeName: z.string().trim().min(1, "Nominee name is required").max(200),
  message: z.string().trim().min(1, "Please tell us why").max(2000),
});

type NominationFormData = z.infer<typeof nominationSchema>;

type Props = {
  /** Label shown on nominee field (e.g. "Member" or "Employee"). */
  nomineeLabel: string;
  /** Subject prefix used in the email body. */
  subject: string;
};

const NominationForm = ({ nomineeLabel, subject }: Props) => {
  const [formData, setFormData] = useState<NominationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    nomineeName: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof NominationFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof NominationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = nominationSchema.safeParse(formData);
    if (!result.success) {
      e.preventDefault();
      const fieldErrors: Partial<Record<keyof NominationFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof NominationFormData;
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
      <FormSubmitFields subject={subject} formType={`${nomineeLabel} nomination`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
            Your First Name <span className="text-primary">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
          aria-invalid={Boolean(errors.firstName)}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="John"
          />
          {errors.firstName && <p id="firstName-error" role="alert" className="text-primary text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
            Your Last Name <span className="text-primary">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
          aria-invalid={Boolean(errors.lastName)}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Doe"
          />
          {errors.lastName && <p id="lastName-error" role="alert" className="text-primary text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Your Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="john@example.com"
        />
        {errors.email && <p id="email-error" role="alert" className="text-primary text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="nomineeName" className="block text-sm font-medium text-foreground mb-1.5">
          {nomineeLabel} You're Nominating <span className="text-primary">*</span>
        </label>
        <input
          id="nomineeName"
          name="nomineeName"
          aria-invalid={Boolean(errors.nomineeName)}
          aria-describedby={errors.nomineeName ? "nomineeName-error" : undefined}
          type="text"
          value={formData.nomineeName}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder={`${nomineeLabel} full name`}
        />
        {errors.nomineeName && <p id="nomineeName-error" role="alert" className="text-primary text-xs mt-1">{errors.nomineeName}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Why do they deserve the spotlight? <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
          placeholder="Tell us a story, a stat, or a moment that stood out..."
        />
        {errors.message && <p id="message-error" role="alert" className="text-primary text-xs mt-1">{errors.message}</p>}
      </div>

      <p className="text-sm text-muted-foreground">
        Submissions are processed by FormSubmit. Complete any verification on the next page.
      </p>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Submit Nomination
      </button>
    </form>
  );
};

export default NominationForm;
