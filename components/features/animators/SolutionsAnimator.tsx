"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function SolutionsAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      const leftCol = containerRef.current?.querySelector('.solutions-left-col');
      if (leftCol) {
        gsap.fromTo(leftCol,
          { opacity: 0, x: -30 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            }
          }
        );
      }

      const cards = gsap.utils.toArray('.feature-card', containerRef.current);
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
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
