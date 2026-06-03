"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/ui/PortfolioCard";
import CTASection from "@/components/ui/CTASection";

const filters = ["הכל", "אתרים", "דפי נחיתה", "קמפיינים", "קריאייטיבים"];

const projects = [
  {
    category: "אתרים",
    title: "אתר תדמית לעסק שירות",
    description: "אתר מקצועי לעסק בתחום השירות. מבנה ברור, עיצוב פרמיום, מותאם מובייל ומוביל לפנייה.",
    result: "תוצאה תתווסף בקרוב",
    gradient: "bg-gradient-to-br from-purple/30 via-[#1e1040] to-[#0d0d14]",
    delay: 0,
    filter: "אתרים",
  },
  {
    category: "דפי נחיתה",
    title: "דף נחיתה לקמפיין לידים",
    description: "דף נחיתה ממוקד עם הצעה ברורה, טופס לידים וקופי שמוביל לפנייה מיידית.",
    result: "צילום קמפיין יעלה בהמשך",
    gradient: "bg-gradient-to-br from-[#c9a84c]/20 via-[#0d0d14] to-[#050508]",
    delay: 0.05,
    filter: "דפי נחיתה",
  },
  {
    category: "דפי נחיתה",
    title: "דף נחיתה לשירות מקצועי",
    description: "עיצוב ממוקד המרה עם הצעת ערך חדה ומסר שיווקי ברור.",
    result: "עבודה תתווסף בהמשך",
    gradient: "bg-gradient-to-br from-purple/20 via-[#0d0d14] to-[#050508]",
    delay: 0.1,
    filter: "דפי נחיתה",
  },
  {
    category: "Meta Ads",
    title: "קמפיין Meta Ads – לידים",
    description: "ניהול קמפיין ממוקד בפייסבוק ואינסטגרם עם אסטרטגיה, קהל והצעה מוכחת.",
    result: "תוצאה תתווסף בקרוב",
    gradient: "bg-gradient-to-br from-purple/20 via-[#0d0d14] to-[#050508]",
    delay: 0.15,
    filter: "קמפיינים",
  },
  {
    category: "Meta Ads",
    title: "קמפיין מכירות – מסחר",
    description: "קמפיין מכירות עם קריאייטיב חזק, פילוח קהל מדויק ואופטימיזציה לביצועים.",
    result: "צילום קמפיין יעלה בהמשך",
    gradient: "bg-gradient-to-br from-[#c9a84c]/15 via-[#0d0d14] to-[#050508]",
    delay: 0.2,
    filter: "קמפיינים",
  },
  {
    category: "קריאייטיב",
    title: "מודעות סטטיות לעסק",
    description: "עיצוב מודעות סטטיות שעוצרות את הגלגול עם קופי חד ועיצוב ויזואלי מושך.",
    result: "עבודות יעלו בהמשך",
    gradient: "bg-gradient-to-br from-[#c9a84c]/15 via-[#0d0d14] to-[#050508]",
    delay: 0.25,
    filter: "קריאייטיבים",
  },
  {
    category: "קריאייטיב",
    title: "וידאו מודעה – שירות",
    description: "סרטון קצר לקמפיין מטא עם עריכה מקצועית, קופי ועיצוב מותאם לרשתות חברתיות.",
    result: "וידאו יעלה בהמשך",
    gradient: "bg-gradient-to-br from-purple/25 via-[#0d0d14] to-[#050508]",
    delay: 0.3,
    filter: "קריאייטיבים",
  },
  {
    category: "אתרים",
    title: "אתר תדמית – עסק מקצועי",
    description: "אתר מרשים לעסק מקצועי עם עיצוב premium, תוכן ממוקד ומסר ברור.",
    result: "תוצאה תתווסף בקרוב",
    gradient: "bg-gradient-to-br from-[#c9a84c]/10 via-[#0d0d14] to-[#050508]",
    delay: 0.35,
    filter: "אתרים",
  },
];

export default function PortfolioPageContent() {
  const [active, setActive] = useState("הכל");

  const filtered = active === "הכל" ? projects : projects.filter((p) => p.filter === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-purple-glow opacity-25" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">עבודות</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              עבודות{" "}
              <span className="text-gradient-purple">ותוצאות</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
              פרויקטים שבנינו — אתרים, דפי נחיתה, קמפיינים וקריאייטיב. כל עבודה בנויה על אסטרטגיה ומטרה ברורה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === f
                    ? "bg-purple text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                    : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/25"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <PortfolioCard key={p.title} {...p} delay={i * 0.06} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30">
              <p className="text-lg">עבודות בקטגוריה זו יתווספו בקרוב</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="רוצים לראות מה נבנה עבורכם?"
        subtitle="שלחו הודעה בווצאפ ונדבר על הפרויקט שלכם — בחינם ובלי התחייבות."
      />
    </>
  );
}
