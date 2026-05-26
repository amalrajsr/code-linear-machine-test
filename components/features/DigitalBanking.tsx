import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { LearnMoreLink } from '../ui/LearnMoreLink';
import { DigitalBankingAnimator } from './animators/DigitalBankingAnimator';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
    <defs>
      <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00B4FD" />
        <stop offset="100%" stopColor="#003ACE" />
      </linearGradient>
    </defs>
    <circle cx="10" cy="10" r="10" fill="url(#checkGradient)"/>
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <CheckIcon />
    <span className="text-[13px] text-page-bg/80 leading-snug font-medium">
      {text}
    </span>
  </div>
);

export function DigitalBanking() {
  return (
    <DigitalBankingAnimator>
      <section className="relative w-full bg-text-main text-page-bg py-16 sm:py-24 lg:py-32 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[0] overflow-hidden">
        <span 
          className="text-[80vw] sm:text-[65vw] lg:text-[55vw] font-bold leading-none tracking-tighter whitespace-nowrap text-transparent"
          style={{ WebkitTextStroke: '2px rgba(0, 180, 253, 0.15)' }}
        >
          N7
        </span>
      </div>
      
      {/* Background Shells/Lines Graphics */}
      <div className="absolute top-1/4 left-[-20%] w-[80%] h-full opacity-[0.04] pointer-events-none select-none z-[0] hidden sm:block">
         <Image src="/assets/shells.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 h-full relative mb-12 lg:mb-0">
          <div className="digital-left-col lg:sticky lg:top-40 flex flex-col items-center text-center lg:items-start lg:text-left gap-5 sm:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.1] tracking-tight">
              Digital banking<br className="hidden lg:block"/> out-of-the-box
            </h2>
            <p className="text-sm sm:text-base lg:text-[15px] text-page-bg/70 leading-relaxed max-w-md mx-auto lg:mx-0 lg:max-w-sm">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4 sm:pt-2 w-full sm:w-auto justify-center lg:justify-start">
              <Button variant="primary" className="uppercase w-full sm:w-auto shadow-lg shadow-primary-blue/20">
                REQUEST DEMO
              </Button>
              <div className="pt-2">
                <LearnMoreLink href="#" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area (Staggered 2-column) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12 lg:gap-y-0">
          
          {/* Middle Column */}
          <div className="flex flex-col gap-10 sm:gap-16 lg:gap-24 lg:mt-12">
            
            {/* Mobile 1 */}
            <div className="stagger-item flex justify-center drop-shadow-2xl">
              <Image src="/assets/mobile-1.png" alt="Mobile Banking Dashboard" width={280} height={580} className="w-full max-w-[260px] lg:max-w-[280px] h-auto object-contain rounded-[40px]" style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* TextBlock 2 */}
            <div className="stagger-item flex flex-col gap-5 px-2">
              <h3 className="text-lg font-semibold">No legacy IT systems</h3>
              <p className="text-[13px] text-page-bg/70 leading-relaxed">
                Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <CheckItem text="Adaptive & Intelligent API monetization" />
                <CheckItem text="Ambient User Experience" />
                <CheckItem text="Cloud-native With lower TCO" />
              </div>
            </div>

            {/* Mobile 3 */}
            <div className="stagger-item flex justify-center drop-shadow-2xl">
              <Image src="/assets/mobile-3.png" alt="Mobile Profile Setting" width={280} height={580} className="w-full max-w-[260px] lg:max-w-[280px] h-auto object-contain rounded-[40px]" style={{ width: '100%', height: 'auto' }} />
            </div>

          </div>

          {/* Rightmost Column */}
          <div className="flex flex-col gap-10 sm:gap-16 lg:gap-24 lg:mt-64">
            
            {/* TextBlock 1 */}
            <div className="stagger-item flex flex-col gap-5 px-2">
              <h3 className="text-lg font-semibold">Fully compliant with regulatory requirement</h3>
              <p className="text-[13px] text-page-bg/70 leading-relaxed">
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational-risk protocols and procedures.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <CheckItem text="Pre-Integrated Security System" />
                <CheckItem text="Fully Compliant With Regulatory Requirement" />
                <CheckItem text="Digitally Connected Core" />
              </div>
            </div>

            {/* Mobile 2 */}
            <div className="stagger-item flex justify-center drop-shadow-2xl">
              <Image src="/assets/mobile-2.png" alt="Mobile Bar Chart" width={280} height={580} className="w-full max-w-[260px] lg:max-w-[280px] h-auto object-contain rounded-[40px]" style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* TextBlock 3 */}
            <div className="stagger-item flex flex-col gap-5 px-2">
              <h3 className="text-lg font-semibold">No traditional branches</h3>
              <p className="text-[13px] text-page-bg/70 leading-relaxed">
                Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <CheckItem text="Branchless & Paperless Banking" />
                <CheckItem text="Digital Transformation Capability" />
                <CheckItem text="Optimized, Adoptable and Scalable" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    </DigitalBankingAnimator>
  );
}
