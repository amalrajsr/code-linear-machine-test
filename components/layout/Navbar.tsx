"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import gsap from 'gsap';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Subtle entrance animation for navbar
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 bg-nav-bg backdrop-blur-[15px] rounded-xl px-8 py-3 flex items-center justify-between border border-white/5 shadow-2xl"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-white text-2xl font-bold tracking-wider">
          N7
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10 font-mono font-medium text-[12px] uppercase text-white/80">
        <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
          SOLUTIONS
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
          RESOURCES
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          ABOUT US
        </Link>
      </div>

      {/* CTA Button */}
      <div className="flex-shrink-0">
        <Button variant="outline" className="px-6 py-2.5 rounded-xl! text-xs">
          REQUEST DEMO
        </Button>
      </div>
    </nav>
  );
}
