"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

/** Navigation arrow button */
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
      className="w-10 h-10 rounded-full border border-text-main/20 flex items-center justify-center text-text-main/60 hover:text-text-main hover:border-text-main/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "left" ? (
          <path
            d="M19 12H5M5 12L12 5M5 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = CASE_STUDIES.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides || !trackRef.current) return;
      setActiveIndex(index);
      gsap.to(trackRef.current, {
        xPercent: -index * (100 / totalSlides),
        duration: 0.7,
        ease: "power3.out",
      });
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
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      className="relative w-full bg-page-bg py-24 lg:py-32 overflow-hidden"
    >
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-center text-3xl lg:text-[44px] font-semibold leading-tight tracking-tight text-text-main mb-16 lg:mb-20 px-6"
      >
        Our Case Studies
      </h2>

      {/* Carousel viewport */}
      <div className="relative w-full">
        {/* Overflow wrapper — allows peeking of adjacent slides */}
        <div className="mx-auto max-w-5xl px-6 lg:px-0 overflow-visible">
          <div className="overflow-hidden">
            {/* Sliding track */}
            <div
              ref={trackRef}
              className="flex"
              style={{ width: `${totalSlides * 100}%` }}
            >
              {CASE_STUDIES.map((study, index) => (
                <div
                  key={index}
                  className="px-3 lg:px-4"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-card-border bg-page-bg overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-square bg-secondary-blue/15">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-5 p-6 lg:p-10 justify-center">
                      <span className="font-mono text-xs font-medium uppercase tracking-widest text-getting-started">
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
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mt-10 lg:mt-14 px-6 lg:px-0">
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
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-8 bg-text-main"
                    : "w-1.5 bg-text-main/30 hover:bg-text-main/50"
                }`}
              />
            ))}
          </div>

          <ArrowButton direction="right" onClick={goNext} disabled={activeIndex === totalSlides - 1} />
        </div>

        {/* View All Link */}
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
    </section>
  );
}
