"use client";

import { motion } from "framer-motion";

interface Props {
  category: string;
  title: string;
  description: string;
  result: string;
  gradient: string;
  delay?: number;
}

export default function PortfolioCard({ category, title, description, result, gradient, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl overflow-hidden glass border border-white/8 hover:border-purple/20 transition-all duration-300"
    >
      {/* Placeholder image */}
      <div className={`relative h-52 ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-3 border border-white/20">
            <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-white/40 text-xs">תמונה תתווסף בקרוב</p>
        </div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 backdrop-blur text-white/80 border border-white/10">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-light transition-colors">
          {title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          <span className="text-[#c9a84c]/80 text-xs">{result}</span>
        </div>
      </div>
    </motion.div>
  );
}
