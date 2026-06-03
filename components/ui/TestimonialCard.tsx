"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  role: string;
  text: string;
  initials: string;
  delay?: number;
}

export default function TestimonialCard({ name, role, text, initials, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-purple rounded-3xl p-8 flex flex-col relative overflow-hidden"
    >
      {/* Gold quote mark */}
      <div className="absolute top-4 left-6 text-6xl font-black text-[#c9a84c]/10 leading-none select-none">
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-white/70 text-base leading-relaxed flex-1 mb-6 relative z-10">
        {text}
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple/60 to-purple-faint flex items-center justify-center border border-purple/30 text-sm font-bold text-white flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-white/40 text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
