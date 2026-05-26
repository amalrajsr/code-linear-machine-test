"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function CaseStudiesAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const title = containerRef.current?.querySelector('.casestudies-title');
    if (title) {
      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
