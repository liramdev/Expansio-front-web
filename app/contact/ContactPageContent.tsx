"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1";

const serviceOptions = [
  "אתר",
  "דף נחיתה",
  "שיווק דיגיטלי",
  "קריאייטיב",
  "באנדל אתר + שיווק",
];

export default function ContactPageContent() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const waMessage = selected.length
    ? `https://api.whatsapp.com/send/?phone=972549569088&text=${encodeURIComponent(`שלום, אני מעוניין ב: ${selected.join(", ")}`)}&type=phone_number&app_absent=0`
    : WA_LINK;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-purple-glow opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">צור קשר</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              בואו{" "}
              <span className="text-gradient-purple">נדבר</span>
            </h1>
            <p className="text-white/55 text-xl max-w-xl mx-auto leading-relaxed">
              שיחת היכרות קצרה, ללא עלות. מבינים את העסק שלכם ומציעים מה שנכון.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-black text-white mb-6">
                הדרך הכי מהירה לתשובה
              </h2>

              {/* Service selector */}
              <div className="mb-8">
                <p className="text-white/60 text-sm mb-4">
                  בחרו את השירותים שמעניינים אתכם (אופציונלי):
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => (
                    <motion.button
                      key={s}
                      onClick={() => toggle(s)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selected.includes(s)
                          ? "bg-purple text-white border border-purple shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                          : "glass border border-white/15 text-white/60 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* WhatsApp button */}
              <motion.a
                href={waMessage}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#25d366] hover:bg-[#20b858] text-white font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] mb-6"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                דברו איתנו בווצאפ
              </motion.a>

              <p className="text-white/30 text-xs text-center">
                +972-54-956-9088 · בלי התחייבות · תגובה תוך שעות
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-white/30 text-xs">או</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="glass rounded-2xl p-4 border border-white/8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">טלפון / ווצאפ</p>
                    <p className="text-white font-semibold text-sm">+972-54-956-9088</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-black text-white mb-6">
                שלחו פרטים ונחזור אליכם
              </h2>

              <div className="glass rounded-3xl p-8 border border-white/8 space-y-5">
                <div>
                  <label className="text-white/60 text-sm block mb-2">שם מלא</label>
                  <input
                    type="text"
                    placeholder="השם שלכם"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple/40 transition-colors"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm block mb-2">מספר טלפון</label>
                  <input
                    type="tel"
                    placeholder="050-000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple/40 transition-colors"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm block mb-2">סוג העסק</label>
                  <input
                    type="text"
                    placeholder="מה העסק שלכם?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple/40 transition-colors"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm block mb-2">מה הצורך שלכם?</label>
                  <textarea
                    rows={4}
                    placeholder="ספרו לנו על העסק ומה אתם מחפשים..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple/40 transition-colors resize-none"
                    dir="rtl"
                  />
                </div>

                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-purple text-white font-bold text-sm shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-shadow"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  שלחו בווצאפ
                </motion.a>

                <p className="text-white/25 text-xs text-center">
                  הטופס הזה פותח שיחה בווצאפ עם הפרטים שכתבתם
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
