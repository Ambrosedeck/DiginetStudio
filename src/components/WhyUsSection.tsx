"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { Target, Sparkles, TrendingUp, Tag } from "lucide-react";

export function WhyUsSection() {
  const icons = [Target, Sparkles, TrendingUp, Tag];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>The Diginet Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
            Why Businesses Choose Diginet Studio
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            We build modern digital solutions designed around your business goals, speed, and real online growth.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENCY_CONFIG.whyUs.map((pillar, index) => {
            const IconComponent = icons[index] || Target;

            return (
              <div
                key={pillar.title}
                className="bg-[#F7F7F8] rounded-2xl p-8 border border-gray-200/60 hover:border-purple-200 hover:bg-white hover:shadow-subtle transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0A0A0A]">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
