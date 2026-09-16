"use client";

import { AGENCY_CONFIG, PricingPlan } from "@/config/agency";
import { Check, Star, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPlan) => void;
  onOpenAppointment: () => void;
}

export function PricingSection({ onSelectPackage, onOpenAppointment }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F7F7F8] border-t border-gray-200/60 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
            Simple Pricing. No Complicated Packages.
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Choose a website package based on what your business needs today.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {AGENCY_CONFIG.pricing.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? "border-2 border-purple-600 shadow-md scale-[1.02]"
                    : "border border-gray-200/90 shadow-xs"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider shadow-xs">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="border-b border-gray-100 pb-6 space-y-2 text-center">
                    <h3 className="text-xl font-bold text-[#0A0A0A]">{plan.name}</h3>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A]">
                      {plan.price}
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed pt-1">
                      <strong className="text-gray-900">Best for:</strong> {plan.bestFor}
                    </p>
                  </div>

                  {/* Included Items List */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Included in Package:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPackage(plan)}
                    className={`w-full py-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                      isPopular
                        ? "bg-[#0A0A0A] hover:bg-gray-800 text-white shadow-xs"
                        : "bg-[#F7F7F8] hover:bg-gray-200/70 border border-gray-200 text-[#111111]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package Callout Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A]">
              Need a Custom Project or Enterprise Build?
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              We offer bespoke development, advanced AI workflows, and ongoing SEO retainer plans tailored specifically to your scope.
            </p>
          </div>
          <button
            onClick={onOpenAppointment}
            className="px-6 py-3 rounded-xl bg-[#0A0A0A] hover:bg-gray-800 text-white text-xs font-semibold shrink-0 active:scale-95 transition-transform"
          >
            Get Custom Quote
          </button>
        </div>

        <div className="text-center pt-6">
          <p className="text-xs font-mono text-gray-400">
            {AGENCY_CONFIG.pricingDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
