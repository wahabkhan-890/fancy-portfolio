"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "Do you take freelance projects?", answer: "Yes! I'm open to freelance, collaborations and long-term projects." },
  { question: "Can you work on collaborative or remote projects?", answer: "Absolutely! I have experience working in teams, using Git/GitHub workflows, and collaborating on paid projects and hackathons." },
  { question: "Are you open for internships or job opportunities?", answer: "Yes! I'm open to internships, freelance projects, collaborations, and full-time opportunities where I can contribute and continue growing as a developer." },
  { question: "What technologies do you use?", answer: "I mainly work with HTML, CSS, JavaScript, React.js, Next.js and Tailwind CSS." },
  { question: "How long does it take for you to respond?", answer: "Usually within 24 hours. I value quick and clear communication." },
  { question: "How do you approach building scalable applications?", answer: "I focus on clean code, reusable components, proper folder structure, and best practices with modern tools like React.js, Tailwind CSS, and Supabase for scalable applications." },
  { question: "How do you handle learning new technologies?", answer: "I take a project-based approach: learn the fundamentals, apply them in small projects, then scale up. This method helped me master React.js, Next.js, Tailwind, and Supabase quickly." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 container">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-primary font-semibold text-lg 2xl:text-2xl inline-block border-s-2 border-primary ps-2 mb-2 leading-6">FAQ</h2>
        <p className="text-primary-light dark:text-primary-light text-sm 2xl:text-lg">Frequently Asked Questions about my work and process.</p>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-primary/30 rounded-xl bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm p-4 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm md:text-base 2xl:text-xl font-medium text-zinc-800 dark:text-zinc-200">{faq.question}</h3>
                  <span className="text-primary">
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="inline-block">
                      <FiPlus size={18} />
                    </motion.span>
                  </span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="mt-2 text-sm 2xl:text-lg text-zinc-600 dark:text-zinc-400 overflow-hidden">
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;