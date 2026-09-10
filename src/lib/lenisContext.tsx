import Lenis from "@studio-freight/lenis";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ScrollTrigger,
  setupGsap,
} from "./gsapSetup";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setupGsap();

    /*
     * Native scrolling is more reliable on mobile devices.
     * Lenis will only be activated on desktop devices.
     */
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    /*
     * Lenis needs ResizeObserver.
     * If it is unavailable, use normal browser scrolling.
     */
    if (
      isTouchDevice ||
      typeof window.ResizeObserver === "undefined"
    ) {
      return;
    }

    let instance: Lenis;

    try {
      instance = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        autoResize: true,

        easing: (value: number) =>
          Math.min(
            1,
            1.001 - Math.pow(2, -10 * value)
          ),
      });
    } catch (error) {
      console.warn(
        "Smooth scrolling is unavailable; using native scrolling.",
        error
      );

      return;
    }

    /*
     * Start immediately.
     * We are not waiting for PageTransition or loader events.
     */
    instance.start();

    const raf = (time: number) => {
      instance.raf(time);

      rafRef.current =
        window.requestAnimationFrame(raf);
    };

    rafRef.current =
      window.requestAnimationFrame(raf);

    instance.on(
      "scroll",
      ScrollTrigger.update
    );

    setLenis(instance);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(
          rafRef.current
        );
      }

      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}