"use client";

import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, highlight, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center" : ""} mb-14`}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-gradient-to-l from-[#c9a84c] to-transparent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c]">
            {label}
          </span>
          <div className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
        {highlight ? (
          <>
            {title}{" "}
            <span className="text-gradient-purple">{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-6 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent ${center ? "" : "origin-right"}`}
      />
    </motion.div>
  );
}
