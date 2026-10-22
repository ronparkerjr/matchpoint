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

const NominationForm = ({ nomineeLabel }: Props) => {
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

  // Submission stays blocked for both button clicks and implicit/programmatic submits.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p role="status" className="text-sm text-muted-foreground">
        Nomination submissions are temporarily unavailable. This form cannot send or save your information.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
            Your First Name <span className="text-primary">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="John"
          />
          {errors.firstName && <p className="text-primary text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
            Your Last Name <span className="text-primary">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-primary text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Your Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="nomineeName" className="block text-sm font-medium text-foreground mb-1.5">
          {nomineeLabel} You're Nominating <span className="text-primary">*</span>
        </label>
        <input
          id="nomineeName"
          name="nomineeName"
          type="text"
          value={formData.nomineeName}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder={`${nomineeLabel} full name`}
        />
        {errors.nomineeName && <p className="text-primary text-xs mt-1">{errors.nomineeName}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Why do they deserve the spotlight? <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
          placeholder="Tell us a story, a stat, or a moment that stood out..."
        />
        {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Submit Nomination
      </button>
    </form>
  );
};

export default NominationForm;
