import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

const ADDRESSES = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7,\n26 Main Road Sundridge,TN14 6EP,\nEngland, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd –\nCB7,Jumeirah Business, Center 5\nCluster W, Jumeirah Lakes Towers,\nDubai, United Arab Emirates",
  },
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd –\nCB7,Nirmal, Anand Nagar,\nSuncity Road, Pune,\nMaharashtra, 411041, India",
  },
];

const LINK_GROUPS = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

function FooterLink({ text }: { text: string }) {
  return (
    <Link
      href="#"
      className="group flex items-center justify-between py-1.5 text-sm text-text-main/70 hover:text-primary-blue transition-colors"
    >
      <span>{text}</span>
      <Image
        src="/assets/arrow-right.svg"
        alt="arrow right"
        width={14}
        height={14}
        className="opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
      />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-page-bg  border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-24 lg:mb-32">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-white">
              Take the full advantage of
              <br className="hidden lg:block" /> going paper-less now.
            </h2>
            <p className="text-sm lg:text-base text-text-main/60 leading-relaxed max-w-xl">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Button
              variant="outline"
              className="uppercase rounded-xl! w-full sm:w-auto sm:min-w-40 text-xs font-medium tracking-widest border-white/30 text-white hover:bg-white/5 py-4! px-8!"
            >
              CONTACT US
            </Button>
            <Button
              variant="primary"
              className="uppercase rounded-lg! w-full sm:w-auto sm:min-w-40 text-xs font-medium tracking-widest shadow-lg shadow-primary-blue/20 px-8!"
            >
              REQUEST DEMO
            </Button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {/* Left: N7 Logo */}
          <div className="lg:col-span-4 flex items-start">
            <Image
              src="/assets/n7.png"
              alt="N7"
              width={350}
              height={200}
              className="w-full max-w-[300px] lg:max-w-none h-auto object-contain"
            />
          </div>

          {/* Right: Content Grids */}
          <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12 lg:gap-16">
            {/* Addresses Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {ADDRESSES.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h4 className="text-base font-medium text-text-main">
                    {item.city}
                  </h4>
                  <p className="text-sm text-text-main/60 whitespace-pre-line leading-relaxed">
                    {item.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Links Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {LINK_GROUPS.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  <h4 className="text-base font-medium text-white">
                    {group.title}
                  </h4>
                  <div className="flex flex-col gap-1 pr-4 lg:pr-12">
                    {group.links.map((link, linkIdx) => (
                      <FooterLink key={linkIdx} text={link} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Copyright */}
            <div className="">
              <p className="text-[11px] lg:text-xs text-text-main/40 leading-relaxed max-w-5xl">
                Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
                Commercial Brand] — [Registered under the Companies Act 2006 in
                England and Wales | Number of Incorporation 13100992]
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
