"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import gsap from 'gsap';

const LOGOS = [
  { name: 'SHELLS', src: '/assets/shells.svg' },
  { name: 'SmartFinder', src: '/assets/smart-finder.svg' },
  { name: 'Zoomerr', src: '/assets/zoomer.svg' },
  { name: 'ArtVenue', src: '/assets/art-venue.svg' },
  { name: 'kontrastr', src: '/assets/kontrastr.svg' },
  { name: 'WAVESMARATHON', src: '/assets/waves-marathon.svg' },
];

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(contentRef.current?.children ? Array.from(contentRef.current.children) : [], 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

   
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-40 pb-20 flex flex-col justify-center overflow-hidden  mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 grow">
        
        {/* Left Content */}
        <div ref={contentRef} className="flex flex-col gap-8 max-w-xl">
          <h1 className="text-5xl lg:text-[64px] leading-[1.1] font-semibold text-text-main tracking-tight">
            The new foundation of modern banking
          </h1>
          <p className="text-lg lg:text-[20px] text-text-main/70 leading-relaxed max-w-120">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" className="uppercase rounded-lg!">
              REQUEST DEMO
            </Button>
            <Button variant="outline" className="uppercase rounded-lg! border-text-main/50! hover:border-text-main!">
              CONTACT US
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square flex items-center justify-center">
          {/* Blue Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-blue/30 blur-[100px] rounded-full pointer-events-none" />
          
          <div  className="relative w-[110%] h-[110%] z-10 mr-[-10%]">
            <Image 
              src="/assets/hero.png" 
              alt="Modern banking dashboard interface" 
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="mt-24 z-10 w-full flex flex-col gap-6">
        <p className="text-text-main/60 text-sm font-medium">Trusted By:</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3 transition-transform hover:scale-105 hover:opacity-100">
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-logo-text font-bold text-lg tracking-wide">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
