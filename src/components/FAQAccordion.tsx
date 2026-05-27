import React, { useState } from "react";
import { FAQItem } from "../types";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-white/5 bg-[#0e0e1a] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left py-6 px-6 md:px-8 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-blue-accent/30"
            >
              <span className="font-display font-bold text-lg md:text-xl text-white">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${
                  isOpen ? "bg-gradient-to-r from-[#FF67FF] to-[#2C48D4] text-white" : "bg-white/5 text-white/60"
                }`}
              >
                <Plus size={18} />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 md:px-8 pb-6 text-body-text font-body leading-relaxed max-w-3xl border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
