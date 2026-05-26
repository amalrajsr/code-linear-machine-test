"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export function HeroAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const content = containerRef.current?.querySelector('.hero-content');
    const image = containerRef.current?.querySelector('.hero-image');
    const glow = containerRef.current?.querySelector('.hero-glow');

    const tl = gsap.timeline();

    if (content) {
      tl.fromTo(content.children ? Array.from(content.children) : [], 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
        0.2
      );
    }

    if (image) {
      tl.fromTo(image,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.6"
      );
    }

    if (glow) {
      gsap.fromTo(glow,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.8, duration: 2, ease: "power2.out" }
      );
    }
  }, { scope: containerRef });

  return <div ref={containerRef} className="w-full">{children}</div>;
}
