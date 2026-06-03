"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    num: "01",
    title: "אתר תדמית ודפי נחיתה",
    desc: "הבסיס של כל מערכת שיווקית. אתר שמכיל מסר נכון, עיצוב מקצועי, מבנה ברור ומוביל לפנייה.",
    gradient: "from-purple/20 to-transparent",
  },
  {
    num: "02",
    title: "קמפיינים במטא",
    desc: "פרסום מדויק בפייסבוק ואינסטגרם. קהל נכון, מסר נכון, הצעה נכונה. לא סתם חשיפה — פניות.",
    gradient: "from-[#c9a84c]/10 to-transparent",
  },
  {
    num: "03",
    title: "קריאייטיב ותוכן שיווקי",
    desc: "מודעות, באנרים, וידאו וקופי שמדבר לכאב של הלקוח. קריאייטיב שעוצר את הגלגול ומוביל לפעולה.",
    gradient: "from-purple/20 to-transparent",
  },
  {
    num: "04",
    title: "אסטרטגיה והצעה מנצחת",
    desc: "לפני הכל — מבינים את העסק, הקהל, הכאב וההבטחה. בונים הצעה שגורמת לאנשים לפנות עכשיו.",
    gradient: "from-[#c9a84c]/10 to-transparent",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-purple-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">הפתרון</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            אנחנו בונים{" "}
            <span className="text-gradient-purple">מערכת דיגיטלית</span>{" "}
            שמחברת בין אתר, הצעה, קמפיין וקריאייטיב.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-3xl p-8 glass border border-white/8 hover:border-purple/25 transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} pointer-events-none`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-black text-white/5">{s.num}</span>
                  <div className="w-8 h-0.5 bg-gradient-to-l from-[#c9a84c]/40 to-transparent mt-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
