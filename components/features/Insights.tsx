"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Reusable article card used for the bottom two smaller cards */
function ArticleCard() {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-card-border bg-page-bg/60 p-6 lg:p-8">
      <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-primary-blue">
        Getting Started
      </span>
      <h3 className="text-xl font-medium leading-snug text-text-main">
        How to transition from a traditional to a digital bank
      </h3>
      <p className="text-xs text-text-main/50">
        David Grohl&nbsp;&nbsp;&nbsp;17/08/24
      </p>
      <div className="mt-auto pt-2">
        <Button
          variant="outline"
          className="uppercase rounded-lg! text-xs font-mono tracking-widest border-text-main/20! text-text-main/70 hover:text-text-main py-3!"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

export function Insights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
            },
          }
        );
      }

      const cards = gsap.utils.toArray(".insight-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 55%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-page-bg py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10">
          {/* ─── Left Column ─── */}
          <div className="lg:col-span-4 h-full relative">
            <div
              ref={leftColRef}
              className="lg:sticky lg:top-40 flex flex-col gap-6 sm:gap-8 lg:gap-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-text-main">
                Get yourself up-to-speed on all the things happening in fintech
              </h2>
              <div>
                <Button
                  variant="outline"
                  className="uppercase rounded-lg! border-text-main/50! hover:border-text-main!"
                >
                  Insights
                </Button>
              </div>
            </div>
          </div>

          {/* ─── Right Column ─── */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Featured Card */}
            <div className="insight-card grid grid-cols-1 md:grid-cols-[5fr_6fr] rounded-xl border border-card-border bg-page-bg/60 overflow-hidden">
              {/* Image */}
              <div className="relative aspect-square bg-[#061428] flex items-center justify-center p-4 sm:p-8 lg:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/fintech.png"
                    alt="Fintech insights"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-5 p-6 lg:p-8 justify-center">
                <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-primary-blue">
                  Getting Started
                </span>
                <h3 className="text-xl lg:text-2xl font-medium leading-snug text-text-main">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="text-xs text-text-main/50">
                  David Grohl&nbsp;&nbsp;&nbsp;17/08/24
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    className="w-full uppercase rounded-lg! text-xs font-mono tracking-widest border-text-main/20! text-text-main/70 hover:text-text-main py-3!"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="insight-card">
                <ArticleCard />
              </div>
              <div className="insight-card">
                <ArticleCard />
              </div>
            </div>

            {/* Read All Link */}
            <div className="flex justify-end pt-4">
              <Link
                href="#"
                className="font-mono text-xs font-medium uppercase tracking-widest text-primary-blue hover:text-text-main transition-colors flex items-center gap-2"
              >
                Read All Insights
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-px"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
