"use client";

import { AGENCY_CONFIG } from "@/config/agency";
import { ShieldCheck, Search, Clock, Eye, TrendingUp, ArrowRight } from "lucide-react";

interface OnlinePresenceSectionProps {
  onOpenAppointment: () => void;
}

export function OnlinePresenceSection({ onOpenAppointment }: OnlinePresenceSectionProps) {
  const icons = [ShieldCheck, Search, Clock, Eye, TrendingUp];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold">
            <span>Customer Discovery Insight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">
            Why Your Online Presence Matters
          </h2>
          <p className="text-base sm:text-lg text-[#666666]">
            Customers increasingly search online and inspect modern websites before contacting or visiting a business.
          </p>
        </div>

        {/* Storytelling Visual Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AGENCY_CONFIG.importancePoints.map((point, index) => {
            const Icon = icons[index] || ShieldCheck;

            return (
              <div
                key={point.title}
                className="bg-[#F7F7F8] p-7 rounded-2xl border border-gray-200/80 shadow-subtle hover:shadow-cardHover transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-purple-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0A0A0A]">
                  {point.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}

          {/* CTA Box filling the remaining grid space */}
          <div className="bg-gradient-to-br from-[#0A0A0A] to-gray-900 p-7 rounded-2xl text-white flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">
                Take Action Today
              </span>
              <h3 className="text-xl font-bold">
                Ready to elevate your online credibility?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Let Diginet Studio build a sleek, trustworthy digital platform designed to bring in real customer enquiries.
              </p>
            </div>
            <button
              onClick={onOpenAppointment}
              className="w-full py-3 rounded-xl bg-white hover:bg-gray-100 text-[#0A0A0A] text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Improve My Online Presence</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
