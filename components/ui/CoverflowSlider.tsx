"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CoverflowProject {
  id: string;
  name: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface Props {
  projects: CoverflowProject[];
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function getSlideStyle(
  pos: number,
  isMobile: boolean,
  prefersReducedMotion: boolean
): React.CSSProperties {
  const tx = isMobile ? 160 : 280;
  const transition = prefersReducedMotion ? "none" : "all 0.5s ease";

  if (pos === 0) {
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "perspective(1000px) translateX(-50%) translateY(-50%)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      transition,
    };
  }
  if (pos === 1) {
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: `perspective(1000px) translateX(calc(-50% + ${tx}px)) translateY(-50%) scale(0.75) rotateY(-8deg)`,
      opacity: 0.4,
      zIndex: 5,
      pointerEvents: "auto",
      transition,
    };
  }
  if (pos === -1) {
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: `perspective(1000px) translateX(calc(-50% - ${tx}px)) translateY(-50%) scale(0.75) rotateY(8deg)`,
      opacity: 0.4,
      zIndex: 5,
      pointerEvents: "auto",
      transition,
    };
  }
  // hidden (±2 and beyond)
  return {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "perspective(1000px) translateX(-50%) translateY(-50%) scale(0.5)",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
    transition,
  };
}

export default function CoverflowSlider({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  // timerKey increments to force-reset the interval after manual navigation
  const [timerKey, setTimerKey] = useState(0);
  const dragStartX = useRef(0);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const n = projects.length;

  // Auto-advance: simple setInterval, deps are stable primitives only
  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % n);
    }, 6000);
    return () => clearInterval(id);
  }, [n, isHovered, prefersReducedMotion, timerKey]);

  const resetTimer = () => setTimerKey((k) => k + 1);

  const advance = () => {
    setActiveIndex((prev) => (prev + 1) % n);
    resetTimer();
  };
  const goBack = () => {
    setActiveIndex((prev) => (prev - 1 + n) % n);
    resetTimer();
  };
  const goTo = (i: number) => {
    setActiveIndex(i);
    resetTimer();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") advance();
      else if (e.key === "ArrowRight") goBack();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  // Normalize position to -2..2
  const getPos = (i: number) => {
    let diff = i - activeIndex;
    const half = Math.floor(n / 2);
    if (diff > half) diff -= n;
    if (diff < -half) diff += n;
    return diff;
  };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? advance() : goBack();
    }
  };

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? advance() : goBack();
    }
  };

  const cardWidth = isMobile ? 240 : 420;
  const containerHeight = isMobile ? 260 : 380;

  return (
    <div
      role="region"
      aria-label="פרויקטים לדוגמה"
      dir="ltr"
      className="w-full"
      style={{ marginTop: isMobile ? "4rem" : "5rem" }}
    >
      {/* Slider */}
      <div
        className="relative mx-auto max-w-4xl overflow-hidden select-none"
        style={{
          height: containerHeight,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {projects.map((project, i) => {
          const pos = getPos(i);
          const isActive = pos === 0;
          const slideStyle = getSlideStyle(pos, isMobile, prefersReducedMotion);

          return (
            <div key={project.id} style={{ ...slideStyle, width: cardWidth }} aria-hidden={!isActive}>
              {/* Browser mockup frame */}
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: isActive
                    ? "1px solid rgba(214, 0, 110, 0.30)"
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isActive
                    ? "0 0 40px rgba(214, 0, 110, 0.15)"
                    : "0 25px 50px rgba(0,0,0,0.6)",
                  background: "#0f1929",
                }}
              >
                {/* Browser top bar */}
                <div
                  style={{
                    background: "#1a2540",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#0f1929",
                      borderRadius: 6,
                      padding: "3px 10px",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                      textAlign: "center",
                      fontFamily: "monospace",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.url}
                  </div>
                </div>

                {/* Screenshot */}
                <div style={{ aspectRatio: "16/10", position: "relative", width: "100%" }}>
                  {isActive ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                      style={{ display: "block", width: "100%", height: "100%" }}
                    >
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  )}
                </div>
              </div>

              {/* Project label */}
              <p
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {project.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dot navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          marginTop: 16,
        }}
      >
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => goTo(i)}
            aria-label={`הצג פרויקט ${i + 1}`}
            style={{
              height: 6,
              width: i === activeIndex ? 24 : 6,
              borderRadius: 9999,
              background: i === activeIndex ? "#D6006E" : "rgba(255,255,255,0.20)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
