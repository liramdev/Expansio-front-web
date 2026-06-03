"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "בניית אתרים ודפי נחיתה",
    desc: "אתרים ודפי נחיתה בעברית, מותאמים למובייל, מהירים, מעוצבים ומוכווני המרה.",
    tag: "Web",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "שיווק דיגיטלי וקמפיינים במטא",
    desc: "ניהול קמפיינים בפייסבוק ובאינסטגרם לפי צרכי העסק, קהל יעד, מסר והצעה ברורה.",
    tag: "Meta",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "קריאייטיב ועריכת וידאו",
    desc: "יצירת מודעות, באנרים, תמונות, וידאו וקופי שמדברים לכאב של הלקוח ומובילים לפעולה.",
    tag: "Creative",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "אסטרטגיה ופיצוח הצעה",
    desc: "לפני שמעלים קמפיין, מבינים מי הקהל, מה הכאב, מה ההבטחה ומה יגרום לו לפנות עכשיו.",
    tag: "Strategy",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="מה אנחנו עושים"
          title="השירותים"
          highlight="שלנו"
          subtitle="מחברים בין אתר, שיווק, קריאייטיב ואסטרטגיה לתוצאה אחת: יותר פניות."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl p-8 glass border border-white/8 hover:border-purple/25 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple/15 border border-purple/20 flex items-center justify-center text-purple-light group-hover:bg-purple/25 transition-colors">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-light transition-colors">
                      {s.title}
                    </h3>
                    <span className="text-xs text-[#c9a84c]/60 font-mono">{s.tag}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 hover:border-purple/40 text-white/70 hover:text-white font-semibold text-sm transition-all hover:bg-purple/5"
          >
            לכל השירותים
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
