import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Saveiy?",
    a: "Saveiy is a smart subscription manager and bill tracker built for India. It automatically identifies your recurring payments across UPI, cards, and bank accounts, predicts upcoming renewals, and recommends cheaper alternatives so you stop losing money to forgotten subscriptions.",
  },
  {
    q: "How does Saveiy protect my data?",
    a: "Saveiy is privacy-first by design. We use bank-grade encryption (AES-256 at rest, TLS in transit), never store card numbers or banking credentials, and only access the data you explicitly consent to. We do not sell, rent, or share your financial information.",
  },
  {
    q: "Is Saveiy available in India?",
    a: "Yes. Saveiy is built in India, for India. It supports rupee-denominated tracking, UPI-aware subscription detection, and recommends local Indian alternatives to popular global services. Saveiy is live on Android; iOS is coming soon.",
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
    <section id="faq" className="bg-cream text-cream-ink py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 mb-6">
            + questions
          </p>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95]">
            answered <em className="italic">openly.</em>
          </h2>
          <p className="mt-6 text-base opacity-65 max-w-xs">
            Everything you need to know about how Saveiy works and protects you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-black/15 first:border-t"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <h3 className="font-serif-display text-2xl md:text-3xl m-0">{f.q}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-base opacity-75 leading-relaxed pb-6">
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
