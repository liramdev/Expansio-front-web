"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/ui/CTASection";

const values = [
  {
    title: "אסטרטגיה לפני הכל",
    desc: "אנחנו לא מתחילים לעצב או לפרסם לפני שמבינים לעומק את העסק, הקהל וההצעה. זה מה שמבדיל בין קמפיין שמביא פניות לקמפיין שמבזבז כסף.",
    icon: "🧠",
  },
  {
    title: "בהירות במסר",
    desc: "הלקוח שלך צריך להבין תוך שניות למה אתה, מה אתה מציע, ולמה דווקא עכשיו. אנחנו בונים מסרים שעובדים.",
    icon: "💡",
  },
  {
    title: "תוצאות שנמדדות",
    desc: "שיווק בלי נתונים הוא ניחוש. כל קמפיין שאנחנו מנהלים עובר אופטימיזציה שוטפת על בסיס ביצועים אמיתיים.",
    icon: "📊",
  },
  {
    title: "שקיפות ופשטות",
    desc: "אין כאן ז'רגון מיותר. אתם יודעים מה עשינו, למה ומה השלב הבא. תהליך ברור לגמרי.",
    icon: "🔍",
  },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-purple-glow opacity-25" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">אודות</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              מי אנחנו ולמה{" "}
              <span className="text-gradient-purple">Expansio Digital</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 space-y-6 text-white/60 text-lg leading-relaxed"
            >
              <p>
                <span className="text-white font-semibold">Expansio Digital</span> נולדה מתוך הבנה פשוטה: עסקים בישראל לא חסרים מוצרים טובים. הם חסרים{" "}
                <span className="text-purple-light">מערכת דיגיטלית ברורה</span> שמגדילה את הווליום במקום הנכון.
              </p>
              <p>
                ראינו עסקים מוצלחים שמשקיעים כסף בפרסום — בלי אתר נכון, בלי מסר חד, בלי הצעה שעובדת. הכסף נשרף והלקוחות לא מגיעים. לא כי העסק לא טוב, אלא כי{" "}
                <span className="text-white/80">הווליום שלו היה נמוך מדי</span>.
              </p>
              <p>
                אז הקמנו סוכנות שמתחילה מהסוף — מהלקוח, מהכאב שלו, מהסיבה שתגרום לו לפנות — ומשם בונים לאחור: הצעה, מסר, אתר, קמפיין, קריאייטיב. <span className="text-white/80">מערכת שלמה, לא פאזל חלקי.</span>
              </p>
              <p>
                אנחנו משלבים בניית אתרים, אסטרטגיה, קמפיינים וקריאייטיב כדי ליצור תהליך שיווקי שמרגיש נכון לעסק ונראה מקצועי ללקוח. ה{" "}
                <span className="text-[#c9a84c]">ווליום עולה</span>, הפניות מגיעות, העסק גדל.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-purple rounded-3xl p-8 border border-purple/20 text-center">
                <div className="text-7xl font-black text-gradient-purple mb-4">E</div>
                <div className="text-2xl font-black text-white mb-1">Expansio</div>
                <div className="text-purple-light font-semibold mb-6">Digital</div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent mb-6" />
                <div className="space-y-3 text-sm">
                  {[
                    "אסטרטגיה ברורה",
                    "מסר מדויק",
                    "עיצוב מקצועי",
                    "תוצאות שנמדדות",
                  ].map((v) => (
                    <div key={v} className="flex items-center gap-2 justify-center text-white/60">
                      <div className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              הערכים שמנחים{" "}
              <span className="text-gradient-purple">את העבודה שלנו</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-3xl p-8 border border-white/8 hover:border-purple/20 transition-all"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-purple rounded-3xl p-10 border border-purple/20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
              <div className="h-px w-12 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <p className="text-2xl font-bold text-white leading-relaxed">
              "שיווק שבנוי נכון, לא רעש. מערכת שמגדילה את הווליום של העסק שלך."
            </p>
            <p className="mt-4 text-white/40 text-sm">— Expansio Digital</p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="בואו נבנה ביחד"
        subtitle="שיחת היכרות קצרה, ללא עלות. מבינים את העסק שלכם ומציעים מה שנכון."
      />
    </>
  );
}
