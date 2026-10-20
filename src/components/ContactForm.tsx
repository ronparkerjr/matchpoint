import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { trackFormSubmit } from "@/lib/analytics";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
  newsletter: z.boolean(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const recaptchaToken = await getRecaptchaToken("contact_submit");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...formData, recaptchaToken },
      });

      if (error) throw error;

      setSubmitted(true);
      trackFormSubmit(
        /lesson|instruction/i.test(formData.message) ? "lesson_inquiry" : "contact",
        { newsletter_opt_in: formData.newsletter }
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll be in touch shortly.",
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again or email us directly.",
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
        <h3 className="font-display text-2xl text-bright mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll be in touch shortly. We can't wait to hear from you!</p>
        <button type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ firstName: "", lastName: "", email: "", message: "", newsletter: false });
          }}
          className="text-primary text-sm font-semibold hover:underline mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          checked={formData.newsletter}
          onChange={handleChange}
          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
        />
        <span className="text-sm text-muted-foreground">Sign up for news and updates</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
