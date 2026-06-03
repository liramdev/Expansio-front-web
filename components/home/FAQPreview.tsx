"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
  {
    question: "האם יש התחייבות?",
    answer: "לא. אפשר להתחיל בלי התחייבות ולצאת מתי שרוצים.",
  },
  {
    question: "כמה עולה לבנות אתר?",
    answer: "בניית אתר או דף נחיתה מתחילה מ־750 ₪, והמחיר משתנה לפי הצורך, המבנה והמורכבות.",
  },
  {
    question: "כמה עולה שיווק דיגיטלי?",
    answer: "ניהול שיווק מתחיל מ־1,500 ₪ בלבד, ללא התחייבות.",
  },
  {
    question: "האם אתם בונים גם את ההצעה השיווקית?",
    answer: "כן. לפני קמפיין אנחנו מבינים את העסק, הקהל, הכאב, וההצעה שתגרום לאנשים לפנות.",
  },
  {
    question: "האם האתר מתאים ל־SEO?",
    answer: "כן. האתר נבנה עם מבנה SEO נכון, כותרות H1/H2/H3, מטא טייטלים, מטא תיאורים, טקסטים רלוונטיים, URL נקי, ביצועים טובים והתאמה למובייל.",
  },
];

export default function FAQPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="שאלות נפוצות"
          title="שאלות"
          highlight="שכולם שואלים"
        />

        <FAQAccordion items={faqs} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-purple-light hover:text-white font-semibold text-sm transition-colors"
          >
            לכל השאלות והתשובות
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
