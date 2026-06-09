import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does Saveiy detect my subscriptions?",
    a: "Saveiy identifies recurring payments by analyzing patterns across your linked accounts — same merchant, similar amounts, repeating intervals. Detection is fully consent-based: nothing is scanned until you connect an account, and you can disconnect at any time.",
  },
  {
    q: "What data does Saveiy store?",
    a: "Only what is required to surface your subscriptions and insights — merchant names, transaction amounts, dates, and categories. We do not store card numbers, passwords, or full account credentials. Your personal data is encrypted in transit and at rest.",
  },
  {
    q: "How does privacy-first consent actually work?",
    a: "Every data connection requires your explicit permission. You decide what to link, what to share, and for how long. Saveiy never sells, rents, or shares your financial data with third parties — and you can revoke access or delete your account at any time.",
  },
  {
    q: "Is my financial information secure?",
    a: "Yes. Saveiy uses bank-grade encryption (AES-256 at rest, TLS in transit), strict access controls, and audited infrastructure. We follow privacy-by-design principles so the minimum data possible is ever stored or processed.",
  },
  {
    q: "Can I delete my account and data?",
    a: "Absolutely. You can request full account deletion from the /delete page or by emailing support@saveiy.com. All personal data, subscription records, and contact info are removed, with only compliance logs retained where legally required.",
  },
];

const FAQSection = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            Questions, <span className="text-gradient">answered openly.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Everything you need to know about how Saveiy works, what we store, and how we protect your privacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background border border-border rounded-2xl p-2 md:p-4 text-left shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border last:border-0 px-4"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
