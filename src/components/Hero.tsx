"use client";

import { Calendar, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenAppointment: () => void;
}

export function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8 md:space-y-10">
          {/* Hero Main Copy Block */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F7F8] border border-gray-200/80 text-gray-700 text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <span>MODERN DIGITAL SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A0A0A] tracking-tight leading-[1.12]">
              Your Business Deserves a{" "}
              <span className="bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600 bg-clip-text text-transparent">
                Better Online Presence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed font-normal">
              We help creators and businesses grow online through modern websites, SEO, AI automation and digital strategy.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0A0A0A] hover:bg-gray-800 text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm hover:shadow active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F7F7F8] hover:bg-gray-200/70 border border-gray-200/80 text-[#111111] font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </a>
            </div>

            {/* Subtle Service Line Under CTAs */}
            <div className="pt-2 text-[11px] sm:text-xs font-semibold text-gray-400 tracking-wider uppercase flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span>WEBSITE DEVELOPMENT</span>
              <span className="text-gray-300">•</span>
              <span>SEO & GOOGLE OPTIMISATION</span>
              <span className="text-gray-300">•</span>
              <span>AI + CRM</span>
            </div>
          </div>

          {/* Clean Credibility/Value Strip Below Hero */}
          <div className="pt-2 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 px-5 py-2.5 rounded-full bg-[#F7F7F8] border border-gray-200/70 text-xs font-semibold text-gray-600">
              <span>Websites</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>SEO</span>
              <span className="text-sky-400 font-bold">•</span>
              <span>AI Automation</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>Digital Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
