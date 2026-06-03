"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const WA_LINK =
  "https://api.whatsapp.com/send/?phone=972549569088&text&type=phone_number&app_absent=0&wame_ctl=1";

export default function CTASection({
  title = "מוכנים להגביר ווליום לעסק?",
  subtitle = "בואו נבנה יחד אתר, הצעה וקמפיין שמדברים נכון לקהל שלכם ומובילים ליותר פניות.",
  primaryLabel = "דברו איתנו בווצאפ",
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1040]/30 to-transparent" />
      <div className="absolute inset-0 bg-purple-glow opacity-40" />

      {/* Gold lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Gold ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-l from-[#c9a84c] to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
            <div className="h-px w-12 bg-gradient-to-r from-[#c9a84c] to-transparent" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-purple hover:bg-purple-soft text-white font-bold text-base transition-all shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_rgba(124,58,237,0.7)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {primaryLabel}
            </motion.a>

            {secondaryLabel && secondaryHref && (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={secondaryHref}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-semibold text-base transition-all"
                >
                  {secondaryLabel}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
