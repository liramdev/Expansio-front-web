"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "בעל עסק",
    role: "תחום השירות",
    text: "המלצה תתווסף בקרוב. הצטרפו ותהיו הראשונים לשתף את התוצאות שלכם.",
    initials: "ב.ע",
    delay: 0,
  },
  {
    name: "בעל עסק",
    role: "מסחר ומכירות",
    text: "תוצאה תתווסף בקרוב. עובדים על הפרויקט הראשון — נעדכן בהמשך.",
    initials: "ב.ע",
    delay: 0.15,
  },
  {
    name: "בעל עסק",
    role: "שירותים מקצועיים",
    text: "קמפיין לדוגמה יעלה בקרוב. המתינו לתוצאות האמיתיות.",
    initials: "ב.ע",
    delay: 0.3,
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="לקוחות"
          title="מה לקוחות"
          highlight="אומרים"
          subtitle="המלצות ותוצאות מעסקים שעברו תהליך עם Expansio Digital."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 hover:border-purple/40 text-white/70 hover:text-white font-semibold text-sm transition-all hover:bg-purple/5"
          >
            לכל ההמלצות
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
