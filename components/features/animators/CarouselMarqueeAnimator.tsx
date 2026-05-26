"use client";

import React, { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

export function CarouselMarqueeAnimator({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = containerRef.current?.querySelector('.marquee-track') as HTMLElement;
    if (!track) return;
    
    let animation: gsap.core.Tween;
    let trackWidth = 0;

    const setupAnimation = () => {
      // Get the width of half the track (since content is duplicated)
      trackWidth = track.scrollWidth / 2;
      
      if (animation) animation.kill();

      // Calculate a constant speed: e.g. 50 pixels per second
      const pixelsPerSecond = 50;
      const duration = trackWidth / pixelsPerSecond;

      gsap.set(track, { x: 0 });

      animation = gsap.to(track, {
        x: -trackWidth,
        ease: "none",
        duration: duration,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x as string) % trackWidth)
        }
      });
    };

    setupAnimation();

    const resizeObserver = new ResizeObserver(() => {
      // Only rebuild if the track width actually changed
      const newWidth = track.scrollWidth / 2;
      if (Math.abs(newWidth - trackWidth) > 5) {
        setupAnimation();
      }
    });
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
      if (animation) animation.kill();
    };
  }, { scope: containerRef });

  return <div ref={containerRef} className="w-full overflow-hidden">{children}</div>;
}
