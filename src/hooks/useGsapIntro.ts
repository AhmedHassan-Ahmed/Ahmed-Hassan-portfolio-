import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useGsapIntro(selector: string) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 }
      );
    });

    return () => ctx.revert();
  }, [selector]);
}