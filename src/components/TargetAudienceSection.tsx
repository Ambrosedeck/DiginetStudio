import React from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import {
  Building2,
  Stethoscope,
  Hotel,
  Utensils,
  Sparkles,
  Rocket,
  Briefcase,
  ShoppingBag,
} from "lucide-react";

export function TargetAudienceSection() {
  const audienceIcons = [
    Building2,
    Stethoscope,
    Hotel,
    Utensils,
    Sparkles,
    Rocket,
    Briefcase,
    ShoppingBag,
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F7F8] border-t border-gray-200/60 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Tailored Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
            Built For Businesses That Want To Grow
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            We partner with businesses across industries to build clear, reliable digital systems.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {AGENCY_CONFIG.targetAudience.map((audienceName, index) => {
            const IconComponent = audienceIcons[index] || Building2;

            return (
              <div
                key={audienceName}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-purple-200 hover:shadow-subtle transition-all duration-300 space-y-3 group text-center flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-[#0A0A0A]">
                  {audienceName}
                </h3>

                <p className="text-xs text-[#666666] leading-relaxed">
                  Tailored web & digital solutions built for {audienceName.toLowerCase()}.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
