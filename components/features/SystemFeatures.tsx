import React from "react";
import Image from "next/image";
import { SystemFeaturesAnimator } from "./animators/SystemFeaturesAnimator";

const LEFT_FEATURES = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const RIGHT_FEATURES = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-0.5"
  >
    <path
      d="M7 12L10.5 15.5L17 8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function SystemFeatures() {

  return (
    <SystemFeaturesAnimator>
      <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Laptop UI */}
            <div className="sys-laptop flex flex-col items-center lg:items-start order-2 lg:order-1">
              <div className="w-full lg:max-w-none lg:w-[110%] lg:-ml-[10%]">
              {/* Screen */}
              <div className="bg-gradient-to-b from-primary-blue to-secondary-blue p-px rounded-t-xl">
                <div className="bg-page-bg rounded-t-xl overflow-hidden p-2.5 lg:p-3">
                  <Image
                    src="/assets/image-2.png"
                    alt="KYC Dashboard - System Features"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Laptop Base */}
              <div className="bg-linear-to-r from-primary-blue to-secondary-blue p-px rounded-b-2xl lg:-mr-10 relative z-10 shadow-2xl">
                <div className="bg-page-bg rounded-b-2xl h-6 lg:h-8 flex items-center justify-center">
                  {/* Optional trackpad notch */}
                  <div className="w-16 lg:w-24 h-1 rounded-full bg-text-main/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="sys-content flex flex-col gap-8 max-w-xl order-1 lg:order-2 lg:ml-auto">
            <h2 className="text-3xl lg:text-[40px] font-medium leading-[1.2] tracking-tight">
              Run a more efficient, flexible,and digitally connected corebanking
              system
            </h2>

            <div className="flex flex-col gap-6">
              <h3 className="text-base font-semibold text-text-main">
                What you will get:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                  {LEFT_FEATURES.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="p-1 bg-linear-to-b from-primary-blue to-secondary-blue  rounded-full">
                        <CheckIcon />
                      </div>
                      <span className="text-sm text-text-main/80 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                  {RIGHT_FEATURES.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="p-1 bg-linear-to-b from-primary-blue to-secondary-blue  rounded-full">
                        <CheckIcon />
                      </div>
                      <span className="text-sm text-text-main/80 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SystemFeaturesAnimator>
  );
}
