import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { HeroAnimator } from './animators/HeroAnimator';

const LOGOS = [
  { name: 'SHELLS', src: '/assets/shells.svg' },
  { name: 'SmartFinder', src: '/assets/smart-finder.svg' },
  { name: 'Zoomerr', src: '/assets/zoomer.svg' },
  { name: 'ArtVenue', src: '/assets/art-venue.svg' },
  { name: 'kontrastr', src: '/assets/kontrastr.svg' },
  { name: 'WAVESMARATHON', src: '/assets/waves-marathon.svg' },
];

export function Hero() {
  return (
    <HeroAnimator>
      <section className="relative w-full min-h-screen pt-28 lg:pt-40 pb-12 lg:pb-20 flex flex-col justify-center overflow-hidden mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10 grow">
          
          {/* Left Content */}
          <div className="hero-content flex flex-col gap-5 lg:gap-8 max-w-xl mx-auto items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <h1 className="text-3xl lg:text-[64px] leading-[1.1] font-semibold text-text-main tracking-tight">
            The new foundation of modern banking
          </h1>
          <p className="text-base lg:text-[20px] text-text-main/70 leading-relaxed max-w-120">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
            <Button variant="primary" className="uppercase text-sm lg:text-base">
              REQUEST DEMO
            </Button>
            <Button variant="outline" className="uppercase border-text-main/50! hover:border-text-main! text-sm lg:text-base">
              CONTACT US
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
          {/* Blue Glow Effect */}
          <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-blue/30 blur-[80px] lg:blur-[100px] rounded-full pointer-events-none" />
          
          <div className="hero-image relative w-full h-full lg:w-[110%] lg:h-[110%] z-10 lg:mr-[-10%]">
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
      <div className="mt-12 lg:mt-24 z-10 w-full flex flex-col gap-4 lg:gap-6 md:items-center lg:items-start">
        <p className="text-text-main/60 text-xs lg:text-sm font-medium text-center lg:text-left">Trusted By:</p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 lg:gap-x-10 gap-y-4 lg:gap-y-6">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="group flex items-center gap-2 lg:gap-3 transition-all duration-500 hover:scale-105 opacity-70 grayscale hover:grayscale-0 hover:opacity-100">
              <div className="relative h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0">
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-logo-text font-bold text-sm lg:text-lg tracking-wide">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </HeroAnimator>
  );
}
