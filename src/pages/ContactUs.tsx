import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Have a question, suggestion, or just want to say hello? We'd love to hear from you." image="/images/contact-hero.png" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-bright mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about memberships, events, programs, or anything else — fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <p className="text-sm text-muted-foreground">350 McCormick Blvd, Columbus, OH 43213</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <a href="tel:614-569-2556" className="text-sm text-muted-foreground hover:text-primary transition-colors">614-569-2556</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <a href="mailto:support@matchpointpickleballclub.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">support@matchpointpickleballclub.com</a>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
