"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArrowDown = ({ size = 18, color = "#8e51ff" }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <path
      d="M9 3v10M9 13l-4-4M9 13l4-4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function JourneyGsapAnimations({ data }: { data: { title: string; content: string }[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const floatArrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const svgConnectorRefs = useRef<(SVGPathElement | null)[]>([]);
  const svgWrapRefs = useRef<(SVGSVGElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const lineFill = lineFillRef.current;
      if (!section || !lineFill) return;

      gsap.set(lineFill, { scaleY: 0, transformOrigin: "top center" });

      floatArrowRefs.current.forEach((a) => {
        if (a) gsap.set(a, { opacity: 0, y: -8 });
      });

      dotRefs.current.forEach((dot) => {
        if (dot)
          gsap.set(dot, {
            scale: 0.6,
            opacity: 0,
            backgroundColor: "#0a1f30",
            borderColor: "#1a3a55",
            boxShadow: "none",
          });
      });

      svgWrapRefs.current.forEach((svg) => {
        if (svg) gsap.set(svg, { opacity: 0 });
      });

      svgConnectorRefs.current.forEach((path) => {
        if (!path) return;
        try {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        } catch {}
      });

      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, {
          opacity: 0,
          x: card.dataset.side === "left" ? -60 : 60,
          y: 12,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 100%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      const totalDur = 8;

      tl.to(lineFill, { scaleY: 1, ease: "none", duration: totalDur }, 0);

      floatArrowRefs.current.forEach((arrow, i) => {
        if (!arrow) return;
        const t = (i / data.length) * totalDur * 0.9;
        tl.to(arrow, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, t);
        tl.to(arrow, { opacity: 0, y: 12, duration: 0.3, ease: "power2.in" }, t + 0.4);
      });

      data.forEach((_, i) => {
        const t = ((i + 0.5) / data.length) * totalDur * 0.95;

        const dot = dotRefs.current[i];
        if (dot) {
          tl.to(
            dot,
            {
              scale: 1,
              opacity: 1,
              backgroundColor: "#0c2035",
              borderColor: "#8e51ff",
              boxShadow: "0 0 0 6px #8e51ff18, 0 0 24px #8e51ff55",
              duration: 0.4,
              ease: "back.out(2.5)",
            },
            t
          );
        }

        const svgWrap = svgWrapRefs.current[i];
        const path = svgConnectorRefs.current[i];
        if (svgWrap && path) {
          tl.to(svgWrap, { opacity: 1, duration: 0.1 }, t + 0.05);
          tl.to(path, { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }, t + 0.1);
        }

        const card = cardRefs.current[i];
        if (card) {
          tl.to(card, { opacity: 1, x: 0, y: 0, duration: 0.55, ease: "power3.out" }, t + 0.3);
        }

        const titleEl = titleRefs.current[i];
        if (titleEl) {
          tl.to(titleEl, { color: "#8e51ff", duration: 0.4, ease: "power2.out" }, t + 0.35);
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [data]);

  const ROW_HEIGHT = 200;
  const CONN_WIDTH = 200;
  const CONN_HEIGHT = 10;

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 overflow-visible">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 50% 0%, #8e51ff0a 0%, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: `radial-gradient(#8e51ff12 1px, transparent 1px)`, backgroundSize: "44px 44px" }}
      />

      {/* Section Header */}
      <div className="container mb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-4">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          MY JOURNEY
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl lg:text-4xl">
          The Road I&apos;ve <span className="text-primary">Traveled</span>
        </h2>
        <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="mt-4 max-w-xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          From writing my first line of C code to shipping full-stack production apps — here&apos;s the road I&apos;ve traveled.
        </p>
      </div>

      <div className="container relative">
        {/* Static track */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #8e51ff10, #8e51ff18, #8e51ff10)" }}
        />
        {/* Animated fill */}
        <div
          ref={lineFillRef}
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(180deg, #8e51ff 0%, #6d3cbf 50%, #a76dff 100%)",
            boxShadow: "0 0 8px #8e51ff88",
          }}
        />

        {/* Floating arrows */}
        {data.map((_, i) => (
          <div
            key={`arrow-${i}`}
            ref={(el) => { floatArrowRefs.current[i] = el; }}
            className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2"
            style={{ top: `${(i / data.length) * 100 + 100 / data.length / 2}%` }}
          >
            <ArrowDown size={20} color="#8e51ff" />
          </div>
        ))}

        {/* MOBILE */}
        <div className="flex flex-col sm:hidden">
          {data.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center py-12">
              <div
                ref={(el) => { dotRefs.current[i] = el; }}
                className="z-20 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-[#09151e] text-lg font-bold text-primary-light"
              >
                {item.title}
              </div>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                data-side="center"
                className="w-full rounded-2xl border border-primary/20 bg-white p-5 shadow-lg dark:bg-[#1a112a]"
              >
                <h3
                  ref={(el) => { titleRefs.current[i] = el; }}
                  className="text-lg font-bold text-primary"
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:flex sm:flex-col">
          {data.map((item, i) => {
            const isRight = i % 2 === 0;
            return (
              <div key={i} className="relative flex items-center" style={{ minHeight: `${ROW_HEIGHT}px` }}>
                {/* CENTER DOT */}
                <div
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="absolute left-1/2 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-[#1a3a55] text-lg font-bold text-primary"
                >
                  {item.title}
                </div>

                {/* LEFT SIDE */}
                <div className="flex w-full justify-end pr-[10px] md:w-1/2 md:pr-[60px]">
                  {!isRight && (
                    <div className="relative flex w-full items-center justify-end">
                      <svg
                        ref={(el) => { svgWrapRefs.current[i] = el; }}
                        className="pointer-events-none absolute -scale-x-100"
                        style={{ right: "-30px", width: `${CONN_WIDTH}px`, height: `${CONN_HEIGHT + 30}px`, top: "50%", overflow: "visible" }}
                      >
                        <path
                          ref={(el) => { svgConnectorRefs.current[i] = el; }}
                          d={`M 0 0 H ${CONN_WIDTH - 32} Q ${CONN_WIDTH - 12} 0 ${CONN_WIDTH - 12} 20 V ${CONN_HEIGHT + 30}`}
                          fill="none"
                          stroke="#8e51ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          style={{ filter: "drop-shadow(0 0 4px #8e51ff88)" }}
                        />
                      </svg>
                      <div
                        ref={(el) => { cardRefs.current[i] = el; }}
                        data-side="left"
                        className="top-[115px] relative w-[90%] rounded-2xl border border-primary/20 bg-white p-5 shadow-lg dark:bg-[#1a112a] lg:p-6"
                      >
                        <h3 ref={(el) => { titleRefs.current[i] = el; }} className="text-lg font-bold text-zinc-800 dark:text-white lg:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 lg:text-base">{item.content}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="flex w-full justify-start pl-[10px] md:w-1/2 md:pl-[60px]">
                  {isRight && (
                    <div className="relative flex w-full items-center justify-start">
                      <svg
                        ref={(el) => { svgWrapRefs.current[i] = el; }}
                        className="pointer-events-none absolute"
                        style={{ left: "-30px", width: `${CONN_WIDTH}px`, height: `${CONN_HEIGHT + 30}px`, top: "50%", overflow: "visible" }}
                      >
                        <path
                          ref={(el) => { svgConnectorRefs.current[i] = el; }}
                          d={`M 0 0 H ${CONN_WIDTH - 32} Q ${CONN_WIDTH - 12} 0 ${CONN_WIDTH - 12} 20 V ${CONN_HEIGHT + 30}`}
                          fill="none"
                          stroke="#8e51ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          style={{ filter: "drop-shadow(0 0 4px #8e51ff88)" }}
                        />
                      </svg>
                      <div
                        ref={(el) => { cardRefs.current[i] = el; }}
                        data-side="right"
                        className="top-[115px] relative w-[90%] rounded-2xl border border-primary/20 bg-white p-5 shadow-lg dark:bg-[#1a112a] lg:p-6"
                      >
                        <h3 ref={(el) => { titleRefs.current[i] = el; }} className="text-lg font-bold text-zinc-800 dark:text-white lg:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 lg:text-base">{item.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}