"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  category: string;
  title: string;
  description: string;
  result: string;
  gradient: string;
  image?: string;
  href?: string;
  delay?: number;
}

export default function PortfolioCard({ category, title, description, result, gradient, image, href, delay = 0 }: Props) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
    >
      <Wrapper
        {...wrapperProps}
        className="block group rounded-3xl overflow-hidden glass border border-white/8 hover:border-purple/20 transition-all duration-300"
      >
        {/* Image area */}
        <div className={`relative h-52 ${!image ? gradient : ""} flex items-center justify-center overflow-hidden`}>
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-3 border border-white/20">
                  <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/40 text-xs">תמונה תתווסף בקרוב</p>
              </div>
            </>
          )}

          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur text-white/80 border border-white/10">
              {category}
            </span>
            {href && (
              <span className="px-2 py-1 rounded-full text-xs bg-purple/60 backdrop-blur text-white border border-purple/30">
                ↗ צפה באתר
              </span>
            )}
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
      </Wrapper>
    </motion.div>
  );
}
