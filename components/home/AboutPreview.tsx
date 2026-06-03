"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1040]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">אודות</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              מי אנחנו?
            </h2>
            <div className="space-y-4 text-white/55 text-base leading-relaxed">
              <p>
                Expansio Digital נולדה מתוך הבנה פשוטה: עסק לא צריך עוד רעש דיגיטלי, הוא צריך{" "}
                <span className="text-white/80">מערכת ברורה שמגדילה את הווליום</span> במקום הנכון.
              </p>
              <p>
                אנחנו משלבים בניית אתרים, אסטרטגיה, קמפיינים וקריאייטיב כדי ליצור תהליך שיווקי שמרגיש נכון לעסק ונראה מקצועי ללקוח.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "אסטרטגיה", desc: "לפני כל דבר אחר" },
                { label: "בהירות", desc: "מסר שמבינים מיד" },
                { label: "ביצועים", desc: "תוצאות שנמדדות" },
                { label: "שקיפות", desc: "תהליך ברור לגמרי" },
              ].map((v, i) => (
                <div key={i} className="glass rounded-2xl p-4 border border-white/8">
                  <p className="text-white font-bold text-sm mb-1">{v.label}</p>
                  <p className="text-white/40 text-xs">{v.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-purple-light hover:text-white font-semibold text-sm transition-colors"
            >
              קראו עוד עלינו
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-purple/15"
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-[#c9a84c]/10"
              />

              {/* Center content */}
              <div className="absolute inset-12 rounded-full glass-purple border border-purple/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl font-black text-gradient-purple mb-2">E</div>
                  <div className="text-white font-bold text-lg">Expansio</div>
                  <div className="text-purple-light text-sm">Digital</div>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-3 w-4 h-0.5 bg-[#c9a84c] mx-auto"
                  />
                </div>
              </div>

              {/* Orbiting dots */}
              {["אתרים", "שיווק", "קריאייטיב", "אסטרטגיה"].map((label, i) => {
                const angle = (i * 360) / 4 * (Math.PI / 180);
                const r = 48;
                return (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 0 }}
                    className="absolute inset-0"
                    style={{ transformOrigin: "center" }}
                  >
                    <div
                      className="absolute glass-purple rounded-xl px-3 py-1.5 border border-purple/20 text-xs text-purple-light font-medium"
                      style={{
                        top: `${50 + r * Math.sin(angle + Math.PI / 4)}%`,
                        right: `${50 + r * Math.cos(angle + Math.PI / 4)}%`,
                        transform: "translate(50%, -50%)",
                      }}
                    >
                      {label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
