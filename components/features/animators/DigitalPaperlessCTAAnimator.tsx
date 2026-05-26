"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function DigitalPaperlessCTAAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      const content = containerRef.current?.querySelector('.digital-paperless-content');
      if (content) {
        gsap.fromTo(content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            }
          }
        );
      }
    }, { scope: containerRef });

  return <div ref={containerRef} className="w-full">{children}</div>;
}
