import React from 'react';
import Link from 'next/link';
import { ArrowIcon } from './ArrowIcon';

interface LearnMoreLinkProps {
  href: string;
  text?: string;
  className?: string;
}

export function LearnMoreLink({ href, text = "LEARN MORE", className = "" }: LearnMoreLinkProps) {
  return (
    <Link 
      href={href} 
      className={`font-mono text-[11px] font-medium tracking-widest uppercase text-primary-blue hover:text-white transition-colors flex items-center gap-2 ${className}`}
    >
      {text}
      <ArrowIcon className="mt-[1px]" />
    </Link>
  );
}
