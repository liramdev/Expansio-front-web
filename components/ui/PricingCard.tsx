"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  price: string;
  priceNote?: string;
  badge?: string;
  bullets: string[];
  ctaLabel: string;
  featured?: boolean;
  delay?: number;
}

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1";

export default function PricingCard({
  title,
  price,
  priceNote,
  badge,
  bullets,
  ctaLabel,
  featured = false,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className={`relative rounded-3xl p-8 flex flex-col ${
        featured
          ? "bg-gradient-to-b from-purple/20 to-purple-faint border border-purple/30 shadow-[0_0_60px_rgba(124,58,237,0.2)]"
          : "glass border border-white/8"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 right-6">
          <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#c9a84c] to-[#e2c97e] text-black">
            {badge}
          </span>
        </div>
      )}

      {featured && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-light/60 to-transparent" />
        </div>
      )}

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

      <div className="mb-6">
        <span className="text-4xl font-black text-gradient-purple">{price}</span>
        {priceNote && (
          <p className="mt-1.5 text-xs text-white/35">{priceNote}</p>
        )}
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <div className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 bg-gradient-to-br from-[#c9a84c] to-[#c9a84c]/40 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white/70 text-sm">{b}</span>
          </li>
        ))}
      </ul>

      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-3.5 rounded-2xl text-center font-bold text-sm transition-all ${
          featured
            ? "bg-purple hover:bg-purple-soft text-white shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            : "border border-white/15 hover:border-purple/40 text-white hover:bg-purple/10"
        }`}
      >
        {ctaLabel}
      </motion.a>
    </motion.div>
  );
}
