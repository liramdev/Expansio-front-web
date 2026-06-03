"use client";

import { motion } from "framer-motion";

const pains = [
  {
    icon: "📉",
    title: "האתר לא מייצר מספיק פניות",
    desc: "אתר יפה זה לא מספיק. אם הוא לא בנוי עם מסר נכון, מבנה ברור והצעה חדה — הוא פשוט לא עובד.",
  },
  {
    icon: "🔥",
    title: "הקמפיינים שורפים תקציב בלי כיוון",
    desc: "פרסום בלי אסטרטגיה זה כסף שנשרף. כל שקל בפרסום צריך מסר, קהל, הצעה וקריאייטיב שמוביל לפעולה.",
  },
  {
    icon: "🎯",
    title: "המסר העסקי לא מספיק חד ללקוח",
    desc: "אם הלקוח לא מבין תוך שניות למה דווקא אתה — הוא הולך. המסר צריך לדבר לכאב שלו ולהציע פתרון ברור.",
  },
];

export default function PainSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0008]/40 to-transparent pointer-events-none" />

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
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">הבעיה</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            הבעיה היא לא שאין לך{" "}
            <span className="text-gradient-purple">עסק טוב</span>.<br />
            הבעיה היא שהווליום שלו{" "}
            <span className="text-white/50">נמוך מדי.</span>
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            הרבה בעלי עסקים משקיעים בפרסום בלי אתר נכון, בלי מסר חד, בלי הצעה ברורה ובלי קריאייטיב שמסביר ללקוח למה דווקא עכשיו כדאי לפנות.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl p-8 glass border border-white/8 hover:border-purple/20 transition-all duration-300 group"
            >
              {/* Corner gold accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-3xl">
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c9a84c]/20" />
              </div>

              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
