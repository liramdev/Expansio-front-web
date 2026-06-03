"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`rounded-2xl overflow-hidden transition-all duration-300 ${
            open === i
              ? "glass-purple border border-purple/20"
              : "glass border border-white/8 hover:border-white/15"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-right"
          >
            <span className={`font-semibold text-base ${open === i ? "text-white" : "text-white/80"}`}>
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 mr-4 w-6 h-6 rounded-full border flex items-center justify-center ${
                open === i ? "border-purple bg-purple/20 text-purple-light" : "border-white/20 text-white/40"
              }`}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-purple/30 to-transparent mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
