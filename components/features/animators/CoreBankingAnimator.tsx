"use client";

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function CoreBankingAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = containerRef.current?.querySelector('.core-content');
      if (content) {
        gsap.fromTo(content,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
            }
          }
        );
      }

      const laptop = containerRef.current?.querySelector('.core-laptop');
      if (laptop) {
        gsap.fromTo(laptop,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="w-full">{children}</div>;
}
