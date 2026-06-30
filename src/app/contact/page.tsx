import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";

const ContactPage = () => (
  <>
    <ContactHero />
    <ContactForm />
    <NewsletterSection />
    <FAQSection />
    <CTA largeText />
    <p className="text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-400 mt-6 text-center">
      ⚡ Always here for questions or collaborations.
    </p>
  </>
);

export default ContactPage;