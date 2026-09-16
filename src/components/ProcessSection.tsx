import React from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Search, MapPin, Code2, Rocket } from "lucide-react";

export function ProcessSection() {
  const stepIcons = [Search, MapPin, Code2, Rocket];

  return (
    <section className="py-20 md:py-28 bg-white cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Clear Execution Strategy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
            How We Work
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            A simple 4-step process to take your website from concept to launch.
          </p>
        </div>

        {/* 4 Process Steps Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {AGENCY_CONFIG.process.map((item, index) => {
            const IconComponent = stepIcons[index] || Search;

            return (
              <div
                key={item.step}
                className="bg-[#F7F7F8] rounded-2xl p-8 border border-gray-200/60 hover:border-purple-200 hover:bg-white hover:shadow-subtle transition-all duration-300 space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400">
                    Step 0{item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0A0A0A]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
