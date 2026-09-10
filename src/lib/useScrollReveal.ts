import { useEffect, useRef } from "react";
import { gsap, setupGsap } from "./gsapSetup";

interface Options {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  childSelector?: string;
  ease?: string;
  once?: boolean;
}

/**
 * Progressive enhancement reveal.
 * Elements stay visible by default so content can never disappear if
 * ScrollTrigger is delayed, blocked or unavailable on a device.
 */
export function useScrollReveal<T extends HTMLElement>(opts: Options = {}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    setupGsap();
    if (!ref.current) return;
    const targets = opts.childSelector
      ? Array.from(ref.current.querySelectorAll<HTMLElement>(opts.childSelector))
      : [ref.current];
    if (!targets.length) return;

    gsap.set(targets, { opacity: 1, y: 0, clearProps: "visibility" });
    const tween = gsap.fromTo(
      targets,
      { y: Math.min(opts.y ?? 24, 28), opacity: 0.96 },
      {
        y: 0,
        opacity: 1,
        duration: Math.min(opts.duration ?? 0.65, 0.75),
        stagger: Math.min(opts.stagger ?? 0.06, 0.08),
        delay: opts.delay ?? 0,
        ease: opts.ease ?? "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: opts.start ?? "top 92%",
          once: opts.once ?? true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(targets, { opacity: 1, y: 0 });
    };
  }, []);
  return ref;
}
