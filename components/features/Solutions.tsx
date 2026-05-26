"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    title: 'Core Banking CB7',
    icon: '/assets/core-banking.svg',
    description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    badge: null
  },
  {
    title: 'Digital Banking N7',
    icon: '/assets/digital-banking.svg',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: null
  },
  {
    title: 'Open Banking',
    icon: '/assets/open-banking.svg',
    description: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    badge: null
  },
  {
    title: 'Loan Origination System',
    icon: '/assets/Loan Origination System.svg',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC'
  },
  {
    title: 'Loan Management System',
    icon: '/assets/Loan Management System.svg',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC'
  }
];

export function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left column when it enters viewport
      if (leftColRef.current) {
        gsap.fromTo(leftColRef.current,
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

      // Stagger fade up feature cards
      const cards = gsap.utils.toArray('.feature-card');
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 relative">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 h-full relative">
          <div ref={leftColRef} className="lg:sticky lg:top-40 flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.2] tracking-tight">
              All of our solutions are tailor-made to your needs
            </h2>
            <div>
              <Button variant="outline" className="uppercase !rounded-[8px] !border-text-main/50 hover:!border-text-main">
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </div>

        {/* Right Scrollable Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12 lg:gap-y-16">
          {SOLUTIONS.map((solution, idx) => (
            <div key={idx} className="feature-card flex flex-col gap-5">
              
              {/* Icon & Badge Row */}
              <div className="flex items-start justify-between">
                <div className="relative h-12 w-12 text-text-main/70">
                  <Image 
                    src={solution.icon} 
                    alt={solution.title} 
                    fill
                    className="object-contain object-left opacity-80"
                  />
                </div>
                {solution.badge && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-main/50 mt-1">
                    {solution.badge}
                  </span>
                )}
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-text-main">
                  {solution.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-text-main/60 h-auto lg:min-h-[140px]">
                  {solution.description}
                </p>
              </div>

              {/* Link */}
              <div className="mt-auto pt-2">
                <Link 
                  href="#" 
                  className="font-mono text-[11px] font-medium tracking-widest uppercase text-primary-blue hover:text-white transition-colors flex items-center gap-2"
                >
                  LEARN MORE
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1px]">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
