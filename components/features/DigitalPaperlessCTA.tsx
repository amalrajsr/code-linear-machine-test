import React from 'react';
import { Button } from '../ui/Button';
import { DigitalPaperlessCTAAnimator } from './animators/DigitalPaperlessCTAAnimator';

export function DigitalPaperlessCTA() {
  return (
    <DigitalPaperlessCTAAnimator>
      <section className="w-full relative bg-text-main  lg:py-32 overflow-hidden z-10">

      <div className="w-full sm:w-11/12 lg:w-10/12 mx-auto relative z-10">
        <div className="w-full lg:rounded-2xl relative overflow-visible">

          {/* Left edge gradient glow — thin vertical strip hugging the card's left side */}
          <div
            className="absolute -left-15 -top-10 -bottom-10 w-30 pointer-events-none select-none z-1"
            style={{
              background: 'linear-gradient(180deg, #00CFFD 0%, #0015CE 100%)',
              filter: 'blur(100px)',
              opacity: 0.6,
            }}
          />

          <div className="relative lg:rounded-2xl bg-page-bg overflow-hidden">
            <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24 gap-6 sm:gap-8 lg:gap-10">

              {/* N7 Background Watermark */}
              <div
                className="absolute inset-0 flex items-center justify-end pointer-events-none select-none z-[0] overflow-hidden"
                aria-hidden="true"
              >
                <span
                  className="text-[40vw] lg:text-[30vw] font-bold leading-none tracking-tighter whitespace-nowrap text-transparent translate-x-[10%]"
                  style={{ WebkitTextStroke: '2px rgba(0, 58, 206, 0.35)' }}
                >
                  N7
                </span>
              </div>

              <div className="digital-paperless-content relative z-[1] flex flex-col md:flex-row w-full justify-between items-center md:items-end gap-6 sm:gap-8 lg:gap-10">
                {/* Left Content */}
                <div className="flex flex-col gap-6 max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-[1.15] tracking-tight text-white">
                    Take the full advantage of<br className="hidden lg:block"/> going paper-less now.
                  </h2>
                  <p className="text-sm lg:text-base text-text-main/60 leading-relaxed max-w-xl">
                    N7 helps your financial institution improve the client experience,
                    automate and optimize procedures, simplify banking operations
                  </p>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col  w-full lg:w-fit sm:flex-row items-center gap-4 shrink-0 mt-8 md:mt-0">
                  <Button variant="outline" className="uppercase rounded-xl! w-full sm:w-auto sm:min-w-40 text-xs font-medium tracking-widest border-white/30 text-white hover:bg-white/5 py-4! px-8!">
                    CONTACT US
                  </Button>
                  <Button variant="primary" className="uppercase rounded-lg! w-full sm:w-auto sm:min-w-40 text-xs font-medium tracking-widest shadow-lg shadow-primary-blue/20">
                    REQUEST DEMO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </DigitalPaperlessCTAAnimator>
  );
}
