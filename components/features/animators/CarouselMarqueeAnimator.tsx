"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function CarouselMarqueeAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = containerRef.current?.querySelector('.marquee-track');
    if (!track) return;
    
    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="w-full">{children}</div>;
}
