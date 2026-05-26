import React from 'react';
import Image from 'next/image';
import { CarouselMarqueeAnimator } from './animators/CarouselMarqueeAnimator';

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 shrink-0 px-2 sm:px-3 lg:px-4">
    <span className="text-primary-blue font-semibold text-3xl sm:text-4xl lg:text-[44px] tracking-tight whitespace-nowrap">
      {text}
    </span>
    <Image src="/assets/asterisk.svg" alt="asterisk" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 opacity-40 shrink-0" />
    <div className="flex items-center gap-2 sm:gap-3 text-page-bg font-semibold text-2xl sm:text-3xl lg:text-[40px] tracking-tight whitespace-nowrap">
      <span>Say</span>
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px] shrink-0 flex items-center justify-center mx-1">
        <Image 
          src="/assets/hand-wave.gif" 
          alt="wave" 
          width={72} 
          height={72} 
          className="object-contain scale-110 lg:scale-125 w-auto h-auto" 
          unoptimized 
        />
      </div>
      <span>to the new way of banking</span>
    </div>
    <Image src="/assets/asterisk.svg" alt="asterisk" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 opacity-40 shrink-0" />
  </div>
);

export function CarouselMarquee() {
  return (
    <CarouselMarqueeAnimator>
      <section className="w-full bg-white py-4 sm:py-5 overflow-hidden flex items-center mt-6 sm:mt-8 lg:mt-10 ">
      <div className="marquee-track flex items-center w-max">
        {/* First Half */}
        <div className="flex items-center shrink-0">
          <MarqueeItem text="N7" />
          <MarqueeItem text="CB7" />
          <MarqueeItem text="N7" />
          <MarqueeItem text="CB7" />
        </div>
        {/* Second Half (duplicate for seamless loop) */}
        <div className="flex items-center shrink-0">
          <MarqueeItem text="N7" />
          <MarqueeItem text="CB7" />
          <MarqueeItem text="N7" />
          <MarqueeItem text="CB7" />
        </div>
      </div>
    </section>
    </CarouselMarqueeAnimator>
  );
}
