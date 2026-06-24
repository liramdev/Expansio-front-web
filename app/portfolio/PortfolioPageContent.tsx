"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PortfolioCard from "@/components/ui/PortfolioCard";
import CTASection from "@/components/ui/CTASection";

const filters = ["אתרים", "דפי נחיתה", "קמפיינים"];

const projects = [
  {
    category: "אתרים",
    title: "Edmond Diamond | אתר תדמית יהלומים",
    description: "אתר תדמית פרמיום לעסק יהלומים — עיצוב יוקרתי, מסר ברור וחוויית משתמש שמשדרת אמינות ומקצועיות.",
    result: "אתר חי ופעיל",
    gradient: "bg-gradient-to-br from-[#c9a84c]/20 via-[#0d0d14] to-[#050508]",
    image: "/web1.png",
    delay: 0,
    filter: "אתרים",
  },
  {
    category: "אתרים",
    title: "Gold Master Remodeling | אתר תדמית",
    description: "אתר תדמית לחברת שיפוצים בדאלאס — עיצוב מקצועי, מותאם מובייל ומוכוון להבאת לידים בשוק האמריקאי.",
    result: "אתר חי ופעיל",
    gradient: "bg-gradient-to-br from-[#c9a84c]/15 via-[#0d0d14] to-[#050508]",
    image: "/web3.png",
    delay: 0.1,
    filter: "אתרים",
  },
  {
    category: "אתרים",
    title: "Maisha Group | אתר תדמית",
    description: "אתר תדמית מקצועי — עיצוב נקי, מסר ברור וחוויית משתמש שמשדרת אמינות ומוביל לפנייה.",
    result: "אתר חי ופעיל",
    gradient: "bg-gradient-to-br from-purple/20 via-[#0d0d14] to-[#050508]",
    image: "/web4.png",
    href: "https://www.maisha-group.com/",
    delay: 0.15,
    filter: "אתרים",
  },
];

// Real campaign result cards with actual screenshots
const campaignResults = [
  {
    id: "israel",
    image: "/campaign-israel.png",
    alt: "תוצאות קמפיין Meta Ads - ימי צילום ישראל",
    badge: "תוצאה אמיתית",
    badgeColor: "gold",
    title: "ימי צילום | קמפיינים במטא",
    description:
      "ניהלנו 5 קמפיינים מקבילים לסדרת ימי צילום — כל קמפיין ממוקד לקהל שונה, הצעה חדה ומסר שדיבר ישר לכאב של ההורה.",
    stats: [
      { label: "עלות לליד", value: "$7.00", highlight: true },
      { label: "לידים", value: "164" },
      { label: "חשיפות", value: "119K+" },
      { label: "קמפיינים", value: "5" },
    ],
    insight: "פחות משליש מהממוצע בשוק. המתחרים משלמים $22+ על אותו ליד.",
  },
  {
    id: "usa",
    image: "/campaign-usa.png",
    alt: "תוצאות קמפיין Meta Ads - שוק האמריקאי",
    badge: "השוואה לשוק",
    badgeColor: "purple",
    title: "שוק הבית אמריקאי | ממוצע תעשייתי",
    description:
      "נתוני ייחוס מהשוק האמריקאי בתחום שיפוצי הבית — מראים את עלות הליד הממוצעת שאנחנו מכים בעקביות.",
    stats: [
      { label: "עלות לליד (ממוצע)", value: "$22.64", highlight: false },
      { label: "לידים", value: "661" },
      { label: "חשיפות", value: "416K+" },
      { label: "קמפיינים", value: "20" },
    ],
    insight: "זה הממוצע שהשוק מקבל. אנחנו מספקים הרבה פחות.",
  },
];

function CampaignResultCard({ card, delay = 0 }: { card: typeof campaignResults[0]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="rounded-3xl overflow-hidden glass border border-white/8 hover:border-purple/20 transition-all duration-300 group"
    >
      {/* Screenshot image */}
      <div className="relative w-full h-64 overflow-hidden bg-[#0d0d14]">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
              card.badgeColor === "gold"
                ? "bg-[#c9a84c]/90 text-black"
                : "bg-purple/90 text-white"
            }`}
          >
            {card.badge}
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-light transition-colors">
          {card.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-6">{card.description}</p>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {card.stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl p-3 text-center ${
                s.highlight
                  ? "bg-gradient-to-b from-[#c9a84c]/20 to-transparent border border-[#c9a84c]/30"
                  : "bg-white/4 border border-white/8"
              }`}
            >
              <div
                className={`text-lg font-black leading-none mb-1 ${
                  s.highlight ? "text-[#c9a84c]" : "text-white"
                }`}
              >
                {s.value}
              </div>
              <div className="text-white/35 text-[10px] leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-white/3 border border-white/6">
          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
          <p className="text-white/60 text-xs leading-relaxed">{card.insight}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPageContent() {
  const [active, setActive] = useState("אתרים");

  const filtered = projects.filter((p) => p.filter === active);
  const showCampaigns = active === "קמפיינים";

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

      {/* Social proof bar */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-purple rounded-2xl border border-purple/15 px-6 py-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {[
              { value: "164", label: "לידים בקמפיין" },
              { value: "$7.00", label: "עלות לליד" },
              { value: "119K+", label: "חשיפות" },
              { value: "5", label: "קמפיינים פעילים" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-[#c9a84c]">{s.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
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

      {/* Campaign results — real screenshots */}
      <AnimatePresence>
        {showCampaigns && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-8"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-l from-[#c9a84c]/20 to-transparent" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] inline-block" />
                  תוצאות קמפיינים אמיתיות
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#c9a84c]/20 to-transparent" />
              </div>

              {/* Comparison banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 rounded-2xl p-5 bg-gradient-to-r from-[#c9a84c]/10 via-purple/10 to-[#c9a84c]/10 border border-[#c9a84c]/20 text-center"
              >
                <p className="text-white font-bold text-lg">
                  <span className="text-[#c9a84c]">$7 לליד</span>
                  {" "}מול{" "}
                  <span className="text-white/50 line-through">$22.64</span>
                  {" "}— זה ההבדל בין קמפיין שבנוי נכון לקמפיין שפשוט "פועל"
                </p>
                <p className="text-white/40 text-sm mt-1">
                  חסכנו ללקוח פי 3 על כל ליד — בלי לפגוע באיכות הפנייה
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {campaignResults.map((card, i) => (
                  <CampaignResultCard key={card.id} card={card} delay={i * 0.15} />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Other projects grid */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {active !== "קמפיינים" && (
            <>
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
            </>
          )}
        </div>
      </section>

      <CTASection
        title="רוצים תוצאות כאלה לעסק שלכם?"
        subtitle="שלחו הודעה בווצאפ — נבנה יחד קמפיין עם הצעה נכונה, קהל מדויק ועלות לליד שמתחרה בשוק."
      />
    </>
  );
}
