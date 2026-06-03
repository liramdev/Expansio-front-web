"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1";

const floatingSymbols = ["₪", "$", "פניות", "לקוחות", "עסקאות", "צמיחה", "לידים"];

function SpeakerBox({ side }: { side: "right" | "left" }) {
  const isRight = side === "right";

  return (
    <div className={`relative flex items-center justify-center ${isRight ? "" : ""}`}>
      {/* Outer glow ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-purple/20"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
      />

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: i * 0.9,
            ease: "easeOut",
          }}
          className="absolute rounded-full border border-purple/30"
          style={{ width: 120, height: 120 }}
        />
      ))}

      {/* Main speaker body */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 40px rgba(124,58,237,0.3), inset 0 0 40px rgba(124,58,237,0.08)",
            "0 0 80px rgba(124,58,237,0.5), inset 0 0 60px rgba(124,58,237,0.15)",
            "0 0 40px rgba(124,58,237,0.3), inset 0 0 40px rgba(124,58,237,0.08)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-purple/30 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(124,58,237,0.25) 0%, rgba(76,29,149,0.15) 50%, rgba(5,5,8,0.9) 100%)",
        }}
      >
        {/* Inner ring 1 */}
        <div
          className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-purple/20"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Inner ring 2 */}
        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-purple/25" />

        {/* Center core */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.8) 0%, rgba(124,58,237,0.6) 60%, rgba(76,29,149,0.4) 100%)",
            boxShadow: "0 0 30px rgba(167,139,250,0.5)",
          }}
        >
          <motion.div
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/90"
            style={{ boxShadow: "0 0 15px rgba(255,255,255,0.8)" }}
          />
        </motion.div>

        {/* Gold accent rim */}
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#c9a84c]"
          style={{ boxShadow: "0 0 8px rgba(201,168,76,0.8)" }}
        />
      </motion.div>

      {/* Sound wave bars — vertical on sides */}
      <div className={`absolute ${isRight ? "-right-8 sm:-right-10" : "-left-8 sm:-left-10"} flex ${isRight ? "flex-row" : "flex-row-reverse"} items-center gap-1`}>
        {[14, 24, 18, 32, 20, 28, 16].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [h * 0.5, h, h * 0.5] }}
            transition={{
              duration: 0.8 + i * 0.1,
              repeat: Infinity,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
            className="w-1 rounded-full bg-gradient-to-t from-purple to-purple-light/60"
            style={{ height: h }}
          />
        ))}
      </div>

      {/* Horizontal wave lines */}
      <div className={`absolute ${isRight ? "right-full mr-16 sm:mr-20" : "left-full ml-16 sm:ml-20"} flex flex-col gap-2`}>
        {[40, 60, 45, 30].map((w, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 0.5, 0.2], width: [w, w * 1.3, w] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="h-px bg-gradient-to-r from-purple/40 to-transparent rounded-full"
            style={{ width: w }}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingSymbol({ symbol, delay, x, duration }: { symbol: string; delay: number; x: number; duration: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 0, x }}
      animate={{
        opacity: [0, 1, 0.8, 0],
        y: [-10, -60, -110, -150],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 3 + Math.random() * 4,
        ease: "easeOut",
      }}
      className="absolute text-sm sm:text-base font-semibold text-purple-light/80 pointer-events-none select-none"
      style={{ left: "50%", bottom: "20%", marginLeft: x }}
    >
      {symbol}
    </motion.span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const symbols = [
    { symbol: "₪", delay: 0, x: -180, duration: 4 },
    { symbol: "$", delay: 1.5, x: 160, duration: 3.5 },
    { symbol: "פניות", delay: 0.8, x: -100, duration: 5 },
    { symbol: "לקוחות", delay: 2.5, x: 80, duration: 4.5 },
    { symbol: "צמיחה", delay: 1.2, x: -60, duration: 4 },
    { symbol: "לידים", delay: 3, x: 140, duration: 3.8 },
    { symbol: "עסקאות", delay: 2, x: -140, duration: 5.2 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(76,29,149,0.12) 0%, rgba(5,5,8,1) 65%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold particle dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-0.5 h-0.5 rounded-full bg-[#c9a84c]"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-4 sm:gap-8">
          {/* Right Speaker */}
          <div className="hidden md:flex flex-col items-center justify-center relative">
            <SpeakerBox side="right" />
            {/* Floating symbols from right */}
            {symbols.filter((_, i) => i % 2 === 0).map((s, i) => (
              <FloatingSymbol key={i} {...s} x={s.x * 0.5} />
            ))}
          </div>

          {/* Center Content */}
          <div className="flex-1 text-center relative py-20 md:py-0">
            {/* Gold ornament top */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-l from-[#c9a84c] to-transparent" />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
              />
              <div className="h-px w-12 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              מגבירים{" "}
              <span className="text-gradient-purple">ווליום</span>
              <br />
              לעסק שלך עם אתר
              <br />
              ושיווק שעובדים ביחד
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/55 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10"
            >
              Expansio Digital בונה לעסק שלך נוכחות דיגיטלית חכמה: אתר מקצועי, דפי נחיתה, קמפיינים במטא וקריאייטיב שמוביל לפניות אמיתיות.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-purple hover:bg-purple-soft text-white font-bold text-base transition-all shadow-[0_0_50px_rgba(124,58,237,0.5)] hover:shadow-[0_0_70px_rgba(124,58,237,0.7)] w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                דברו איתנו בווצאפ
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-purple/40 text-white/80 hover:text-white font-semibold text-base transition-all w-full sm:w-auto justify-center hover:bg-purple/5"
                >
                  צפו בשירותים שלנו
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-white/30 text-sm"
            >
              בלי התחייבות. בלי רעש מיותר. רק אסטרטגיה ברורה שמטרתה להביא צמיחה.
            </motion.p>

            {/* Floating symbols center (mobile + desktop) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {symbols.map((s, i) => (
                <FloatingSymbol key={i} {...s} />
              ))}
            </div>
          </div>

          {/* Left Speaker */}
          <div className="hidden md:flex flex-col items-center justify-center relative">
            <SpeakerBox side="left" />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/25 text-xs"
          >
            <span>גללו למטה</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
