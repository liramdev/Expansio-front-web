"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";

const projects = [
  {
    category: "אתר תדמית",
    title: "אתר תדמית לעסק שירות",
    description: "אתר מקצועי לעסק בתחום השירות. מבנה ברור, עיצוב פרמיום ומוביל לפנייה.",
    result: "תוצאה תתווסף בקרוב",
    gradient: "bg-gradient-to-br from-purple/30 via-[#1e1040] to-black",
    delay: 0,
  },
  {
    category: "דף נחיתה",
    title: "דף נחיתה לקמפיין לידים",
    description: "דף נחיתה ממוקד עם הצעה ברורה, טופס לידים וקופי שמוביל לפנייה מיידית.",
    result: "צילום קמפיין יעלה בהמשך",
    gradient: "bg-gradient-to-br from-[#c9a84c]/20 via-[#182845] to-black",
    delay: 0.1,
  },
  {
    category: "Meta Ads",
    title: "קמפיין Meta Ads",
    description: "ניהול קמפיין ממוקד בפייסבוק ואינסטגרם עם אסטרטגיה, קהל והצעה מוכחת.",
    result: "תוצאה תתווסף בקרוב",
    gradient: "bg-gradient-to-br from-purple/20 via-[#182845] to-black",
    delay: 0.2,
  },
  {
    category: "קריאייטיב",
    title: "קריאייטיב למודעה",
    description: "עיצוב מודעות, באנרים ווידאו שעוצרים את הגלגול ומובילים לפעולה.",
    result: "עבודות יעלו בהמשך",
    gradient: "bg-gradient-to-br from-[#c9a84c]/15 via-[#182845] to-black",
    delay: 0.3,
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="עבודות"
          title="עבודות"
          highlight="ותוצאות"
          subtitle="פרויקטים שבנינו עם לקוחות — אתרים, קמפיינים וקריאייטיב."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {projects.map((p, i) => (
            <PortfolioCard key={i} {...p} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 hover:border-purple/40 text-white/70 hover:text-white font-semibold text-sm transition-all hover:bg-purple/5"
          >
            לכל העבודות
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
