import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins centrally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    gsap.defaults({ duration: 0, delay: 0 });
  }
}

export { gsap, ScrollTrigger };
