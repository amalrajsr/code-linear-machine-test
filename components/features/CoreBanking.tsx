"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CoreBanking() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content slides in
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            }
          }
        );
      }

      // Laptop slides in from the right
      if (laptopRef.current) {
        gsap.fromTo(laptopRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 overflow-hidden">

      {/* CB7 Background Watermark — giant ghost text behind all content */}
      <div
        className=" hidden absolute inset-0 lg:flex items-center justify-center pointer-events-none select-none z-[0] overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-stroke-subtle text-[50vw] lg:text-[45vw] font-bold leading-none tracking-tighter whitespace-nowrap">
          CB7
        </span>
      </div>

      <div className="relative z-[1] max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main Grid */}
        <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left Content */}
          <div ref={contentRef} className="flex flex-col gap-6 max-w-lg">
            <h2 className="text-4xl lg:text-[52px] font-semibold leading-[1.15] tracking-tight">
              A complete cloud-based core banking.
            </h2>
            <p className="text-base lg:text-lg text-text-main/60 leading-relaxed max-w-sm">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="flex flex-col gap-5 pt-4">
              <Button variant="primary" className="uppercase rounded-lg! w-fit">
                REQUEST DEMO
              </Button>
              <Link
                href="#"
                className="font-mono text-[11px] font-medium tracking-widest uppercase text-primary-blue hover:text-text-main transition-colors flex items-center gap-2"
              >
                LEARN MORE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-px">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Laptop UI */}
          <div ref={laptopRef} className="flex flex-col items-center lg:items-end">
            {/* Laptop Screen — gradient border wrapper */}
            <div className="w-full max-w-xl lg:max-w-none lg:w-[110%] lg:-mr-[10%]">
              {/* Screen — gradient border with inner gap */}
              <div className="bg-gradient-to-b from-primary-blue to-secondary-blue p-px rounded-t-xl">
                <div className="bg-page-bg rounded-t-xl overflow-hidden p-3">
                  <Image
                    src="/assets/image-1.png"
                    alt="AML Dashboard - Core Banking CB7 interface"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>

              {/* Laptop Base — gradient border wrapper */}
              <div className="bg-gradient-to-r from-primary-blue to-secondary-blue p-px rounded-b-2xl -ml-4 lg:-ml-10 relative z-10 shadow-2xl">
                <div className="bg-page-bg rounded-b-2xl h-6 lg:h-8 flex items-center justify-center">
                  {/* Optional trackpad notch */}
                  <div className="w-16 lg:w-24 h-1 rounded-full bg-text-main/10" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
