"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";

const services = [
  {
    id: "websites",
    num: "01",
    title: "בניית אתרים ודפי נחיתה",
    subtitle: "הבסיס של כל נוכחות דיגיטלית רצינית",
    desc: "אתר מקצועי הוא לא סתם כרטיס ביקור דיגיטלי — הוא כלי מכירה. אנחנו בונים אתרי תדמית ודפי נחיתה שמובנים על אסטרטגיה ברורה: מבנה שמוביל את הגולש, מסר שמסביר למה דווקא אתה, והצעה שגורמת לו לפנות.",
    points: [
      "עיצוב פרמיום המותאם לזהות העסק",
      "מותאם מלאה למובייל ולמסכים שונים",
      "טעינה מהירה וחוויית משתמש חלקה",
      "מבנה SEO נכון מהבסיס",
      "טפסי יצירת קשר, וואטסאפ וחיבורים חיצוניים",
      "תוכן ועיצוב שמוביל להמרה",
    ],
    keywords: "בניית אתרים לעסקים, בניית דפי נחיתה, אתר תדמית לעסק",
    color: "purple",
  },
  {
    id: "marketing",
    num: "02",
    title: "שיווק דיגיטלי וקמפיינים במטא",
    subtitle: "פרסום שמביא פניות, לא סתם חשיפה",
    desc: "קמפיין טוב מתחיל לפני שמגיעים לפייסבוק. אנחנו מבינים את העסק, מגדירים קהל יעד, בונים מסר והצעה מנצחת, ורק אחר כך מעלים קמפיין. אופטימיזציה שוטפת לפי ביצועים אמיתיים — לא ניחושים.",
    points: [
      "הגדרת קהל יעד מדויק",
      "בניית מסר והצעה ייחודית לפני ההרצה",
      "יצירת קריאייטיבים יעודיים לקמפיין",
      "קמפיינים בפייסבוק ואינסטגרם",
      "אופטימיזציה שוטפת לפי נתונים",
      "דוחות ביצועים ושקיפות מלאה",
    ],
    keywords: "שיווק דיגיטלי לעסקים, קמפיינים במטא, פרסום בפייסבוק ובאינסטגרם",
    color: "gold",
  },
  {
    id: "creative",
    num: "03",
    title: "קריאייטיב ועריכת וידאו",
    subtitle: "תוכן שעוצר את הגלגול ומביא לפעולה",
    desc: "בעולם שכולם גוללים מהר — קריאייטיב חלש שווה אפס. אנחנו מייצרים מודעות, באנרים, תמונות, סרטוני וידאו וקופי שמדברים ישר לכאב של הלקוח ומסבירים לו למה הפתרון שלך הוא הנכון ביותר עבורו.",
    points: [
      "מודעות סטטיות ומונפשות",
      "עריכת וידאו לקמפיינים ולרשתות חברתיות",
      "קופי שיווקי בעברית",
      "עיצוב ויזואלי מותאם לקהל ולמסר",
      "גרסאות A/B לבדיקת ביצועים",
      "חדשנות ויצירתיות בכל פרויקט",
    ],
    keywords: "יצירת קריאייטיב לעסקים, עריכת וידאו, מודעות מטא",
    color: "purple",
  },
  {
    id: "strategy",
    num: "04",
    title: "אסטרטגיה ופיצוח הצעה",
    subtitle: "לפני הכל — מבינים למה הלקוח יפנה",
    desc: "הטעות הגדולה ביותר בשיווק היא לפרסם לפני שמבינים מה הלקוח באמת צריך לשמוע. אנחנו מתחילים בשיחת היכרות, מעמיקים בעסק ובקהל, ומפצחים את ההצעה שתגרום לאנשים הנכונים לפנות — ועכשיו.",
    points: [
      "ניתוח מעמיק של העסק והקהל",
      "הגדרת כאב ופתרון ברורים",
      "פיצוח הצעת ערך ייחודית",
      "בניית מסר שיווקי מרכזי",
      "מיפוי תהליך המכירה",
      "בסיס אסטרטגי לכל הפעילות",
    ],
    keywords: "אסטרטגיה שיווקית לעסקים, הצעת ערך, מיתוג עסקי",
    color: "gold",
  },
];

const process = [
  { step: "01", title: "שיחת היכרות", desc: "מבינים את העסק, המטרות והאתגרים הנוכחיים." },
  { step: "02", title: "הבנת העסק והקהל", desc: "חוקרים את הקהל, המתחרים, הכאב והצורך." },
  { step: "03", title: "פיצוח הצעה ומסר", desc: "בונים הצעה חדה ומסר שיווקי שמוביל לפנייה." },
  { step: "04", title: "בניית אתר / דף נחיתה", desc: "מעצבים ומפתחים את המוצר הדיגיטלי." },
  { step: "05", title: "יצירת קריאייטיב", desc: "מייצרים מודעות, תמונות ווידאו לקמפיין." },
  { step: "06", title: "העלאת קמפיין", desc: "מגדירים, מעלים ומפעילים את הקמפיין." },
  { step: "07", title: "בדיקה, שיפור ואופטימיזציה", desc: "מנטרים ביצועים ומשפרים בצורה שוטפת." },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-purple-glow opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">שירותים</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              מה אנחנו{" "}
              <span className="text-gradient-purple">עושים</span>
              {" "}בשבילך
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
              ארבעה שירותים מרכזיים. מערכת אחת שעובדת ביחד. תוצאה אחת: יותר פניות לעסק שלך.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              id={s.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-5xl font-black text-white/5">{s.num}</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-[#c9a84c]/30 to-transparent" />
                </div>
                <h2 className="text-3xl font-black text-white mb-2">{s.title}</h2>
                <p className="text-purple-light font-medium mb-5">{s.subtitle}</p>
                <p className="text-white/55 leading-relaxed mb-8">{s.desc}</p>

                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full flex-shrink-0 bg-gradient-to-br from-[#c9a84c] to-[#c9a84c]/40 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className={`rounded-3xl p-10 h-64 flex items-center justify-center border ${
                  s.color === "purple"
                    ? "bg-gradient-to-br from-purple/15 to-purple-faint border-purple/20"
                    : "bg-gradient-to-br from-[#c9a84c]/10 to-[#0d0d14] border-[#c9a84c]/15"
                }`}>
                  <div className="text-center">
                    <div className="text-6xl font-black text-gradient-purple mb-2">{s.num}</div>
                    <p className="text-white/30 text-sm">{s.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1040]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="התהליך"
            title="איך התהליך"
            highlight="עובד"
            subtitle="שבעה שלבים ברורים מהיכרות ועד תוצאות."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative glass rounded-2xl p-6 border border-white/8 hover:border-purple/20 transition-all duration-300"
              >
                <div className="text-3xl font-black text-white/8 mb-3">{p.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 hidden lg:block">
                    <div className="w-5 h-px bg-purple/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="רוצים להתחיל?"
        subtitle="שלחו הודעה בווצאפ ונקבע שיחת היכרות קצרה — בחינם ובלי התחייבות."
      />
    </>
  );
}
