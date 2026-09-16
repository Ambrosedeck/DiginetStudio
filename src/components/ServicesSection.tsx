"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { Laptop, Search, Bot, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesSectionProps {
  onOpenAppointment: () => void;
}

export function ServicesSection({ onOpenAppointment }: ServicesSectionProps) {
  const serviceIcons = [Laptop, Search, Bot];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7F7F8] border-y border-gray-200/60 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>Core Agency Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] tracking-tight">
            What We Do
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Everything you need to build, improve and grow your digital presence.
          </p>
        </div>

        {/* 3 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENCY_CONFIG.services.map((service, index) => {
            const IconComponent = serviceIcons[index] || Laptop;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-subtle hover:border-purple-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0A0A0A]">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2 border-t border-gray-100">
                    {service.features.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-8">
                  <button
                    onClick={onOpenAppointment}
                    className="w-full py-3 rounded-xl bg-[#F7F7F8] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
