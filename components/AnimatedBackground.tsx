"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The page's signature visual element: a single continuous gradient
 * "neural thread" that winds down the spine of the page, with small
 * pulsing nodes at intervals — a quiet nod to the AI/ML subject matter
 * without resorting to generic floating blobs everywhere.
 *
 * Sits fixed behind all content at low opacity. The thread itself uses a
 * lightweight scroll listener for its translateY drift; the ambient glow
 * above it is scrubbed by GSAP ScrollTrigger for a true scroll-linked
 * scale/fade — the kind of frame-accurate scrubbing effect GSAP handles
 * better than discrete "whileInView" triggers.
 */
export default function AnimatedBackground() {
  const threadRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = threadRef.current;
    if (!path) return;

    const handleScroll = () => {
      const scrollFraction =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const offset = -scrollFraction * 80;
      path.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !glowRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
      glowRef.current,
      { scale: 1, opacity: 0.5 },
      {
        scale: 1.6,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* ambient violet glow, top of viewport — scrubbed by GSAP ScrollTrigger */}
      <div
        ref={glowRef}
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-violet-glow blur-3xl"
      />

      {/* the neural thread */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full opacity-40"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="threadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4361EE" stopOpacity="0" />
            <stop offset="15%" stopColor="#4361EE" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6C5CE7" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#A78BFA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={threadRef}
          d="M 50 0 
             C 20 80, 80 160, 50 240
             C 20 320, 80 400, 50 480
             C 20 560, 80 640, 50 720
             C 20 800, 80 880, 50 1000"
          fill="none"
          stroke="url(#threadGrad)"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
        {[120, 280, 440, 600, 760, 920].map((y, i) => (
          <circle
            key={y}
            cx={i % 2 === 0 ? 35 : 65}
            cy={y}
            r="1.2"
            fill="#A78BFA"
            opacity="0.7"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.9;0.3"
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
