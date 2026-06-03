"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTASection from "@/components/ui/CTASection";

const testimonials = [
  {
    name: "בעל עסק",
    role: "תחום השירות",
    text: "המלצה תתווסף בקרוב. הצטרפו ותהיו הראשונים לשתף את התוצאות שלכם.",
    initials: "ב.ע",
    delay: 0,
  },
  {
    name: "בעל עסק",
    role: "מסחר ומכירות",
    text: "תוצאה תתווסף בקרוב. עובדים על הפרויקט הראשון — נעדכן בהמשך.",
    initials: "ב.ע",
    delay: 0.1,
  },
  {
    name: "בעל עסק",
    role: "שירותים מקצועיים",
    text: "קמפיין לדוגמה יעלה בקרוב. המתינו לתוצאות האמיתיות.",
    initials: "ב.ע",
    delay: 0.2,
  },
  {
    name: "בעל עסק",
    role: "עסק מקומי",
    text: "עבודה מקצועית ומוקפדת. ממתין לאישור להוסיף את הפרטים המלאים.",
    initials: "ב.ע",
    delay: 0.3,
  },
  {
    name: "בעל עסק",
    role: "עסק דיגיטלי",
    text: "ממתין לפרסום ההמלצה. יעלה בקרוב עם פרטי התוצאות.",
    initials: "ב.ע",
    delay: 0.4,
  },
  {
    name: "בעל עסק",
    role: "שירותי B2B",
    text: "המלצה בדרך. נעדכן ברגע שיאשרו את הפרסום.",
    initials: "ב.ע",
    delay: 0.5,
  },
];

export default function TestimonialsPageContent() {
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
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">המלצות</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              מה לקוחות{" "}
              <span className="text-gradient-purple">אומרים</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
              המלצות ותוצאות מעסקים שבנו נוכחות דיגיטלית חזקה עם Expansio Digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "100%", label: "שביעות רצון" },
              { num: "∞", label: "אנרגיה לצמיחה" },
              { num: "0", label: "התחייבות" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/8 text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-gradient-purple mb-1">{s.num}</div>
                <div className="text-white/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-purple rounded-3xl p-10 border border-purple/20 max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">
                רוצים להיות הבאים?
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                עסקים שמצטרפים לתהליך של Expansio Digital מקבלים נוכחות דיגיטלית ברורה שמוביל לפניות אמיתיות.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple text-white font-bold text-sm shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] transition-shadow"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                דברו איתנו בווצאפ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
