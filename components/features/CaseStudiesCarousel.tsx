"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const CASE_STUDIES = [
  {
    tag: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    logo: "/assets/zoomer.svg",
    image: "/assets/fintech.png",
  },
  {
    tag: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "ArtVenue",
    logo: "/assets/art-venue.svg",
    image: "/assets/fintech.png",
  },
  {
    tag: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "SmartFinder",
    logo: "/assets/smart-finder.svg",
    image: "/assets/fintech.png",
  },
  {
    tag: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "Shells",
    logo: "/assets/shells.svg",
    image: "/assets/fintech.png",
  },
];

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <Image
        src={direction === "left" ? "/assets/prev.svg" : "/assets/next.svg"}
        alt={direction === "left" ? "Previous" : "Next"}
        width={42}
        height={42}
      />
    </button>
  );
}

export function CaseStudiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = CASE_STUDIES.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return;
      setActiveIndex(index);
    },
    [totalSlides]
  );

  const goNext = useCallback(
    () => goTo(activeIndex + 1),
    [activeIndex, goTo]
  );
  const goPrev = useCallback(
    () => goTo(activeIndex - 1),
    [activeIndex, goTo]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = containerRef.current?.querySelector('.casestudies-title');
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Title */}
      <h2 className="casestudies-title text-center text-2xl sm:text-3xl lg:text-[44px] font-semibold leading-tight tracking-tight text-text-main mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-6">
        Our Case Studies
      </h2>

      {/* Overflow wrapper */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0 overflow-visible">
        <div className="overflow-visible">
          {/* Sliding track */}
          <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[550px] md:min-h-[450px] lg:min-h-[350px]">
            {CASE_STUDIES.map((study, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 1;

              return (
                <div
                  key={index}
                  className="absolute w-full px-4 transition-all duration-700 ease-out"
                  style={{ 
                    transform: `translateX(${offset * 12}%) scale(${1 - absOffset * 0.1})`,
                    opacity: absOffset === 0 ? 1 : (absOffset === 1 ? 0.3 : 0),
                    zIndex: 10 - absOffset,
                    pointerEvents: absOffset === 0 ? 'auto' : 'none',
                    visibility: isVisible ? 'visible' : 'hidden'
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] rounded-xl border border-card-border bg-page-bg overflow-hidden shadow-2xl p-3 sm:p-4 lg:p-6 gap-4 sm:gap-6 lg:gap-10">
                    {/* Image */}
                    <div className="relative w-full h-full min-h-48 sm:min-h-62.5 lg:min-h-75 rounded-xl overflow-hidden bg-[#061428] flex items-center justify-center">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-contain p-6"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 lg:gap-5 justify-center py-4 lg:py-6 pr-4 lg:pr-8">
                      <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-primary-blue">
                        {study.tag}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-medium leading-snug text-text-main">
                        {study.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Image
                          src={study.logo}
                          alt={study.company}
                          width={18}
                          height={18}
                          className="opacity-70"
                        />
                        <span className="text-sm text-text-main/60">
                          {study.company}
                        </span>
                      </div>
                      <div className="pt-4">
                        <Button
                          variant="outline"
                          className="w-full uppercase rounded-lg! text-xs font-mono tracking-widest border-text-main/20! text-text-main/60 hover:text-text-main py-3!"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-0 gap-4 sm:gap-6 md:gap-0">
        {/* Arrows + Dots */}
        <div className="flex items-center gap-4">
          <ArrowButton direction="left" onClick={goPrev} disabled={activeIndex === 0} />

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {CASE_STUDIES.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-500 rounded-full border border-primary-blue ${
                  index === activeIndex
                    ? "w-8 h-2 bg-primary-blue"
                    : "w-2 h-2 bg-transparent hover:bg-primary-blue/30"
                }`}
              />
            ))}
          </div>

          <ArrowButton direction="right" onClick={goNext} disabled={activeIndex === totalSlides - 1} />
        </div>

        {/* View All Link */}
        <div className="md:absolute md:right-6 lg:right-0">
          <Link
            href="#"
            className="font-mono text-xs font-medium uppercase tracking-widest text-primary-blue hover:text-text-main transition-colors flex items-center gap-2"
          >
          View All
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
  );
}
