import React from 'react';
import { Button } from '../ui/Button';
import { PaperlessCTAAnimator } from './animators/PaperlessCTAAnimator';

export function PaperlessCTA() {
  return (
    <PaperlessCTAAnimator>
      <section className="w-full sm:w-11/12 lg:w-10/12 mx-auto relative bg-page-bg">
      <div className="w-full sm:rounded-2xl bg-linear-to-r from-[#031E2A] to-page-bg">
        <div className="relative sm:rounded-2xl w-full max-w-7xl mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 gap-6 sm:gap-8 lg:gap-10">
          
          {/* CB7 Background Watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[0] overflow-hidden"
            aria-hidden="true"
          >
            <span className="text-stroke-subtle text-[70vw] sm:text-[50vw] lg:text-[45vw] font-bold leading-none tracking-tighter whitespace-nowrap opacity-60">
              CB7
            </span>
          </div>

          <div className="paperless-content relative z-[1] flex flex-col md:flex-row w-full justify-between items-center md:items-end gap-6 sm:gap-8 lg:gap-10">
            {/* Left Content */}
            <div className="flex flex-col gap-6 max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-[1.15] tracking-tight text-white">
                Take the full advantage of<br className="hidden lg:block"/> going paper-less now.
              </h2>
              <p className="text-sm lg:text-base text-text-main/70 leading-relaxed max-w-lg">
                CB7 helps your financial institution improve the client experience,
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col w-full lg:w-fit sm:flex-row items-center gap-4 shrink-0">
              <Button variant="outline" className="uppercase rounded-lg! w-full sm:w-auto sm:min-w-[160px] text-xs font-mono tracking-widest border-white/20 hover:bg-white/5 py-4! px-8!">
                CONTACT US
              </Button>
              <Button variant="primary" className="uppercase rounded-lg! w-full sm:w-auto sm:min-w-[160px] text-xs font-mono tracking-widest shadow-lg shadow-primary-blue/20">
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </PaperlessCTAAnimator>
  );
}
