import { useEffect, useRef, useState } from "react";

interface Slide {
  emoji: string;
  text: string;
}

const SLIDES: Slide[] = [
  { emoji: "🪐", text: "Fun fact: this galaxy has no idea it's on a portfolio site." },
  { emoji: "☕", text: "Powered by coffee, mild chaos, and way too many browser tabs." },
  { emoji: "🐛", text: "I've named more variables \"temp\" than I'd like to admit." },
  { emoji: "🎧", text: "Most of this was built on repeat listening to the same three songs." },
  { emoji: "🧦", text: "Somewhere out there is a matching sock. This isn't relevant. Keep scrolling." },
  { emoji: "🚀", text: "Okay okay — let's go look at some actual stuff I've built." },
];

const COUNT = SLIDES.length;

/**
 * Scroll-linked storytelling, à la apple.com product pages.
 *
 * No buttons, no clicks — this section is tall (COUNT * 100vh), and its
 * inner content stays pinned (position: sticky) while the natural mouse-wheel
 * scroll drives which slide is visible. We deliberately don't hijack the
 * wheel event or lock scrolling; we just read scroll position, which keeps
 * things smooth, accessible, and simple.
 */
export function ScrollStory() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    function computeProgress() {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollableHeight = rect.height - viewportH;
      const scrolled = -rect.top;
      const p = scrollableHeight > 0 ? Math.min(Math.max(scrolled / scrollableHeight, 0), 1) : 0;
      setProgress(p);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(computeProgress);
        ticking = true;
      }
    }

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scaledProgress = progress * COUNT;

  return (
    <div ref={wrapperRef} style={{ height: `${COUNT * 100}vh`, position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {SLIDES.map((slide, i) => {
          const distance = scaledProgress - (i + 0.5);
          const opacity = Math.max(0, 1 - Math.abs(distance) * 1.7);
          const translateY = distance * 40;
          const scale = 1 - Math.min(Math.abs(distance) * 0.15, 0.15);

          return (
            <div
              key={slide.text}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 24px",
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
                pointerEvents: opacity > 0.5 ? "auto" : "none",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 24 }}>{slide.emoji}</div>
              <p
                style={{
                  fontSize: "clamp(22px, 3.4vw, 40px)",
                  maxWidth: 760,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {slide.text}
              </p>
            </div>
          );
        })}

        {/* Scroll cue, fades out once the story gets going */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: Math.max(0, 1 - scaledProgress * 4),
            fontSize: 13,
            color: "var(--text-faint)",
            fontFamily: "var(--font-mono)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span>keep scrolling</span>
          <span style={{ animation: "bob 1.6s ease-in-out infinite" }}>↓</span>
        </div>
      </div>

      <style>
        {`
          @keyframes bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}
      </style>
    </div>
  );
}
