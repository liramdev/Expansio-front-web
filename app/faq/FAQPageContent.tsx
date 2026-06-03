"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

const faqCategories = [
  {
    title: "כלליות",
    items: [
      {
        question: "האם יש התחייבות?",
        answer: "לא. אפשר להתחיל בלי התחייבות ולצאת מתי שרוצים. אנחנו מאמינים שתוצאות טובות הן הסיבה להישאר, לא חוזה.",
      },
      {
        question: "איך מתחילים עבודה איתכם?",
        answer: "שלחו הודעה בווצאפ. נקבע שיחת היכרות קצרה (15-30 דקות), נבין את העסק והצרכים, ונציע הצעת מחיר ברורה.",
      },
      {
        question: "האם אתם עובדים עם כל סוג עסק?",
        answer: "אנחנו עובדים בעיקר עם עסקים בינוניים וקטנים בישראל שרוצים להגדיל פניות ולשפר את הנוכחות הדיגיטלית שלהם.",
      },
      {
        question: "מה ההבדל בינכם לבין סוכנויות אחרות?",
        answer: "אנחנו לא בונים רק אתר או מריצים רק קמפיין. אנחנו בונים מערכת שלמה: הצעה, מסר, אתר, קמפיין וקריאייטיב — כולם עובדים ביחד.",
      },
    ],
  },
  {
    title: "מחירים ותמחור",
    items: [
      {
        question: "כמה עולה לבנות אתר?",
        answer: "בניית אתר או דף נחיתה מתחילה מ־750 ₪, והמחיר משתנה לפי הצורך, המבנה והמורכבות. שלחו פרטים ונוכל לצטט מדויק.",
      },
      {
        question: "כמה עולה שיווק דיגיטלי?",
        answer: "ניהול שיווק מתחיל מ־1,500 ₪ לחודש, ללא התחייבות. המחיר עשוי להשתנות לפי היקף הקמפיין והשירותים הנדרשים.",
      },
      {
        question: "האם תקציב הפרסום כלול במחיר?",
        answer: "לא. דמי ניהול השיווק אינם כוללים את תקציב הפרסום עצמו. התקציב הוא הוצאה נפרדת שעובר ישירות לפייסבוק/אינסטגרם.",
      },
      {
        question: "האם יש עלות לשיחת היכרות?",
        answer: "לא. שיחת ההיכרות הראשונה היא ללא עלות ובלי כל התחייבות.",
      },
    ],
  },
  {
    title: "טכנולוגיה ו-SEO",
    items: [
      {
        question: "האם האתר מתאים ל־SEO?",
        answer: "כן. האתר נבנה עם מבנה SEO נכון: כותרות H1/H2/H3 נכונות, מטא טייטלים, מטא תיאורים, URL נקי, מהירות טעינה גבוהה, ותוכן רלוונטי.",
      },
      {
        question: "על איזה פלטפורמה תיבנה האתר?",
        answer: "בהתאם לצרכים — WordPress, Next.js, Wix, Webflow או פלטפורמות אחרות. ניבחר יחד את הפתרון המתאים לעסק שלכם.",
      },
      {
        question: "כמה זמן לוקח לבנות אתר?",
        answer: "דף נחיתה פשוט — 3-7 ימי עסקים. אתר תדמית מלא — 2-4 שבועות, תלוי בהיקף ובמידת האספקת התוכן מהלקוח.",
      },
    ],
  },
];

export default function FAQPageContent() {
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
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">שאלות נפוצות</span>
              <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              שאלות{" "}
              <span className="text-gradient-purple">שכולם שואלים</span>
            </h1>
            <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed">
              כל מה שרצית לדעת על העבודה עם Expansio Digital — בשקיפות ובלי ז'רגון.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ by category */}
      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 bg-[#c9a84c]/40" />
                <h2 className="text-lg font-bold text-[#c9a84c]">{cat.title}</h2>
              </div>
              <FAQAccordion items={cat.items} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-8 pb-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-purple rounded-3xl p-8 border border-purple/20"
          >
            <h3 className="text-xl font-bold text-white mb-3">
              יש לכם שאלה שלא ענינו עליה?
            </h3>
            <p className="text-white/55 text-sm mb-6">
              שלחו הודעה בווצאפ ונחזור אליכם בהקדם.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple text-white font-bold text-sm shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              שאלו אותנו בווצאפ
            </a>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
