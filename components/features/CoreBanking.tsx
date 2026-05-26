import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { LearnMoreLink } from '../ui/LearnMoreLink';
import { CoreBankingAnimator } from './animators/CoreBankingAnimator';

export function CoreBanking() {
  return (
    <CoreBankingAnimator>
      <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">

        {/* CB7 Background Watermark — giant ghost text behind all content */}
        <div
          className=" hidden absolute inset-0 lg:flex items-center justify-center pointer-events-none select-none z-[0] overflow-hidden"
          aria-hidden="true"
        >
          <span className="text-stroke-subtle text-[50vw] lg:text-[45vw] font-bold leading-none tracking-tighter whitespace-nowrap">
            CB7
          </span>
        </div>

        <div className="relative z-[1] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Main Grid */}
          <div className="relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="core-content flex flex-col gap-6 max-w-lg">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-[1.15] tracking-tight">
              A complete cloud-based core banking.
            </h2>
            <p className="text-base lg:text-lg text-text-main/60 leading-relaxed max-w-sm">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="flex flex-col gap-5 pt-4">
              <Button variant="primary" className="uppercase w-fit">
                REQUEST DEMO
              </Button>
              <div className="pt-2">
                <LearnMoreLink href="#" />
              </div>
            </div>
          </div>

          {/* Right Laptop UI */}
          <div className="core-laptop flex flex-col items-center lg:items-end">
            {/* Laptop Screen — gradient border wrapper */}
            <div className="w-full lg:max-w-none lg:w-[110%] lg:-mr-[10%]">
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
              <div className="bg-gradient-to-r from-primary-blue to-secondary-blue p-px rounded-b-2xl lg:-ml-10 relative z-10 shadow-2xl">
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
    </CoreBankingAnimator>
  );
}
