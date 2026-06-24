"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "שיחת היכרות",
    desc: "מבינים את העסק, המטרות, הקהל והאתגרים. שיחה קצרה שמייצרת תמונה שלמה.",
  },
  {
    num: "02",
    title: "פיצוח הצעה ומסר",
    desc: "לפני שמעצבים מילה — מגדירים מי הקהל, מה הכאב, מה ההבטחה ומה יגרום לו לפנות.",
  },
  {
    num: "03",
    title: "בניית אתר או דף נחיתה",
    desc: "מעצבים ומפתחים את הפרויקט עם עיצוב מקצועי, מסר ברור וחוויה שמובילה לפנייה.",
  },
  {
    num: "04",
    title: "יצירת קריאייטיב",
    desc: "מייצרים מודעות, תמונות ווידאו שמדברים לכאב של הקהל ועוצרים את הגלגול.",
  },
  {
    num: "05",
    title: "העלאת קמפיין",
    desc: "מגדירים ומפעילים את הקמפיין בפייסבוק ואינסטגרם עם הקהל הנכון והמסר הנכון.",
  },
  {
    num: "06",
    title: "אופטימיזציה ותוצאות",
    desc: "מנטרים ביצועים, מבצעים שיפורים שוטפים ומורידים את עלות הליד בהדרגה.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative flex items-start gap-0"
    >
      {/* Card */}
      <div className="flex-1 ml-8 mb-12 rounded-2xl p-6 border border-white/10 hover:border-[#d6006e]/30 transition-all duration-300 group"
        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}
      >
        {/* Step number */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold tracking-widest text-[#d6006e] uppercase">
            שלב {step.num}
          </span>
          <div className="flex-1 h-px bg-[#d6006e]/20" />
        </div>
        <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#d6006e] transition-colors">
          {step.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
      </div>

      {/* Dot on the line */}
      <div className="absolute -right-[25px] top-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full border-2 border-[#d6006e] flex items-center justify-center z-10"
          style={{ background: "#162a4a" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#d6006e]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      dir="rtl"
      style={{ background: "#162a4a" }}
      className="py-24 md:py-36 px-5"
    >
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-[#d6006e]/40" />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#d6006e" }}
          >
            איך זה עובד
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white mb-16 leading-tight"
        >
          מהרעיון{" "}
          <span style={{ color: "#d6006e" }}>לאתר חי</span>
        </motion.h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative pr-8">
          {/* Static background line */}
          <div
            className="absolute right-0 top-0 bottom-0 w-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          {/* Animated fill line */}
          <div className="absolute right-0 top-0 w-px overflow-hidden h-full">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, #d6006e, #a0004f)",
              }}
            />
          </div>

          {/* Steps */}
          <div className="relative">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
