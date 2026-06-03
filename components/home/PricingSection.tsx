"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/ui/PricingCard";

const plans = [
  {
    title: "אתר או דף נחיתה",
    price: "החל מ־750 ₪",
    bullets: [
      "עיצוב מקצועי",
      "התאמה למובייל",
      "טופס יצירת קשר או וואטסאפ",
      "מבנה SEO בסיסי",
    ],
    ctaLabel: "אני רוצה אתר",
    featured: false,
    delay: 0,
  },
  {
    title: "שיווק דיגיטלי",
    price: "1,500 ₪ בלבד",
    badge: "ללא התחייבות",
    bullets: [
      "קמפיינים במטא",
      "אסטרטגיית קהל והצעה",
      "קריאייטיבים למודעות",
      "אופטימיזציה לפי ביצועים",
    ],
    ctaLabel: "אני רוצה להגביר ווליום",
    featured: true,
    delay: 0.15,
  },
  {
    title: "באנדל אתר + שיווק",
    price: "צרו קשר",
    priceNote: "המחיר מותאם לצרכי העסק — שלחו הודעה ונבנה הצעה יחד",
    bullets: [
      "אתר או דף נחיתה",
      "קמפיין שיווקי",
      "קריאייטיב",
      "תהליך מלא לצמיחה",
    ],
    ctaLabel: "בואו נבנה הצעה יחד",
    featured: false,
    delay: 0.3,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1040]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="תמחור"
          title="חבילות שמתחילות פשוט"
          highlight="ונבנות לפי הצורך שלך"
          subtitle="בלי חוזים מורכבים. בלי הפתעות. בלי התחייבות."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          כל המחירים כוללים ייעוץ ראשוני ללא עלות. שלחו הודעה בווצאפ ונמצא את הפתרון המתאים לעסק שלכם.
        </p>
      </div>
    </section>
  );
}
