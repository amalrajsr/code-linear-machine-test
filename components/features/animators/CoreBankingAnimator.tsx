"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function CoreBankingAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
    }, { scope: containerRef });

  return <div ref={containerRef} className="w-full">{children}</div>;
}
