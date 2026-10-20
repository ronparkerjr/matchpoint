import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { trackFormSubmit } from "@/lib/analytics";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState<NominationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    nomineeName: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof NominationFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof NominationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = nominationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof NominationFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof NominationFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const composedMessage = `${subject}\n\nNominee: ${formData.nomineeName}\n\nWhy they deserve recognition:\n${formData.message}`;
      const recaptchaToken = await getRecaptchaToken("nomination_submit");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: composedMessage,
          subject,
          newsletter: false,
          recaptchaToken,
        },
      });
      if (error) throw error;

      setSubmitted(true);
      trackFormSubmit("nomination");
      toast({
        title: "Nomination Sent!",
        description: "Thanks for the shoutout — we've received your nomination.",
      });
    } catch (err) {
      console.error("Failed to send nomination:", err);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your nomination. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-bright mb-2">Nomination Received!</h3>
        <p className="text-muted-foreground">Thanks for taking the time — we read every nomination.</p>
        <button type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ firstName: "", lastName: "", email: "", nomineeName: "", message: "" });
          }}
          className="text-primary text-sm font-semibold hover:underline mt-4"
        >
          Submit another nomination
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        disabled={loading}
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit Nomination"}
      </button>
    </form>
  );
};

export default NominationForm;
