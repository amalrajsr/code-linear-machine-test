"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import gsap from 'gsap';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  /** Handle body scroll lock */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[92%] md:w-10/12 lg:w-8/12 max-w-360 z-50 bg-nav-bg backdrop-blur-[15px] rounded-xl px-4 sm:px-6 md:px-8 py-3 flex flex-wrap items-center justify-between border border-white/5 shadow-2xl"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-text-main text-xl md:text-2xl font-bold tracking-wider">
          N7
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-10 font-mono font-medium text-[12px] uppercase text-text-main/80">
        <Link href="#" className="flex items-center gap-1 hover:text-text-main transition-colors">
          SOLUTIONS
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:text-text-main transition-colors">
          RESOURCES
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <Link href="#" className="hover:text-text-main transition-colors">
          ABOUT US
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:block flex-shrink-0">
        <Button variant="outline" className="px-6 py-2.5 rounded-xl! text-xs">
          REQUEST DEMO
        </Button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-lg transition-colors hover:bg-white/10"
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`block w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out grid ${
          isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-6 pt-6 pb-4 border-t border-white/10 mt-3">
          <Link href="#" className="flex items-center justify-between font-mono font-medium text-sm uppercase text-text-main/80 hover:text-text-main transition-colors" onClick={toggleMenu}>
            SOLUTIONS
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="#" className="flex items-center justify-between font-mono font-medium text-sm uppercase text-text-main/80 hover:text-text-main transition-colors" onClick={toggleMenu}>
            RESOURCES
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="#" className="font-mono font-medium text-sm uppercase text-text-main/80 hover:text-text-main transition-colors" onClick={toggleMenu}>
            ABOUT US
          </Link>
          <Button variant="outline" className="w-full px-6 py-2.5 rounded-xl! text-xs mt-2">
            REQUEST DEMO
          </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
