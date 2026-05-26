"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function HeroAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = containerRef.current?.querySelector('.hero-content');
      if (content) {
        gsap.fromTo(content.children ? Array.from(content.children) : [], 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="w-full">{children}</div>;
}
