import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { LearnMoreLink } from '../ui/LearnMoreLink';
import { InsightsAnimator } from "./animators/InsightsAnimator";

interface Article {
  tag: string;
  title: string;
  author: string;
  date: string;
}

const ARTICLES: Article[] = [
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24' },
  { tag: 'Getting Started', title: 'The future of open banking and API economy', author: 'Anna Smith', date: '12/09/24' }
];

/** Reusable article card used for the bottom two smaller cards */
function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-card-border bg-page-bg/60 p-6 lg:p-8 h-full">
      <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-primary-blue">
        {article.tag}
      </span>
      <h3 className="text-xl font-medium leading-snug text-text-main">
        {article.title}
      </h3>
      <p className="text-xs text-text-main/50">
        {article.author}&nbsp;&nbsp;&nbsp;{article.date}
      </p>
      <div className="mt-auto pt-2">
        <Button
          variant="outline"
          className="uppercase text-xs font-mono tracking-widest border-text-main/20 text-text-main/70 hover:text-text-main"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <InsightsAnimator>
      <section className="relative w-full bg-page-bg py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10">
            {/* ─── Left Column ─── */}
            <div className="lg:col-span-4 h-full relative">
              <div className="insight-left-col lg:sticky lg:top-40 flex flex-col gap-6 sm:gap-8 lg:gap-10">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-text-main">
                Get yourself up-to-speed on all the things happening in fintech
              </h2>
              <div>
                <Button
                  variant="outline"
                  className="uppercase border-text-main/50! hover:border-text-main!"
                >
                  Insights
                </Button>
              </div>
            </div>
          </div>

          {/* ─── Right Column ─── */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Featured Card */}
            <div className="insight-card grid grid-cols-1 md:grid-cols-2 rounded-xl border border-card-border bg-page-bg/60 overflow-hidden">
              {/* Image */}
              <div className="relative aspect-3/2   flex items-center justify-center p-6">
                <div className="relative w-full h-full bg-[#061428]">
                  <Image
                    src="/assets/fintech.png"
                    alt="Fintech insights"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                    className="w-full uppercase text-xs font-mono tracking-widest border-text-main/20 text-text-main/70 hover:text-text-main"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {ARTICLES.map(article => (
                <div key={article.title} className="insight-card h-full">
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>

            {/* Read All Link */}
            <div className="flex justify-center lg:justify-end pt-4">
              <LearnMoreLink href="#" text="Read All Insights" className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </InsightsAnimator>
  );
}
