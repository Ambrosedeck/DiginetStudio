"use client";

import React, { useState } from "react";
import { ArrowRight, Search, Bot, TrendingUp } from "lucide-react";

interface DiginetStackSectionProps {
  onOpenAppointment?: () => void;
}

export function DiginetStackSection({ onOpenAppointment }: DiginetStackSectionProps) {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const layers = [
    {
      num: "01",
      ghostNum: "01",
      category: "PRESENCE",
      headlinePrefix: "Websites that make your business ",
      headlineHighlight: "impossible to ignore.",
      description: "High-performance websites, landing pages and digital experiences designed around your brand, customers and goals.",
      annotations: ["DIGITAL EXPERIENCE", "DESIGN SYSTEM", "USER JOURNEY"],
      cta: "Explore Websites",
      href: "#pricing",
    },
    {
      num: "02",
      ghostNum: "02",
      category: "DISCOVERY",
      headlinePrefix: "Get found by the people already ",
      headlineHighlight: "looking for you.",
      description: "SEO and Google strategy that turns your digital presence into a consistent source of qualified visibility.",
      annotations: ["SEARCH", "VISIBILITY", "DISCOVERY"],
      cta: "Explore SEO",
      href: "#contact",
    },
    {
      num: "03",
      ghostNum: "03",
      category: "INTELLIGENCE",
      headlinePrefix: "Let technology handle the work ",
      headlineHighlight: "humans shouldn't.",
      description: "AI-powered workflows, CRM systems and automation that reduce repetitive work and help your team move faster.",
      annotations: ["CONNECT", "AUTOMATE", "RESPOND"],
      cta: "Explore AI & Automation",
      href: "#contact",
    },
    {
      num: "04",
      ghostNum: "04",
      category: "GROWTH",
      headlinePrefix: "Turn your digital presence into a ",
      headlineHighlight: "growth engine.",
      description: "Analytics, conversion optimization and digital strategy designed to continuously improve what you've built.",
      annotations: ["MEASURE", "OPTIMISE", "GROW"],
      cta: "Explore Growth",
      href: "#contact",
    },
  ];

  return (
    <section id="digital-solutions" className="py-14 sm:py-20 bg-white text-[#0A0A0A] cv-auto relative overflow-hidden">
      {/* Subtle Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* 1. SECTION INTRO */}
        <div className="max-w-4xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F8] border border-gray-200/80 text-gray-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>FROM PRESENCE TO GROWTH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#0A0A0A]">
            Digital experiences that{" "}
            <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-purple-600 bg-clip-text text-transparent">
              move your business forward.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-[760px] font-normal pt-1">
            We build the digital pieces that help your business get noticed, trusted and chosen.
          </p>
        </div>

        {/* CONNECTED FLOW BAR */}
        <div className="pt-2 pb-4 border-b border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-purple-50 text-purple-700 font-bold text-[11px] tracking-wider uppercase">
            <span>ONE CONNECTED SYSTEM</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            <span className="text-gray-900">PRESENCE</span>
            <span className="text-purple-600">→</span>
            <span className="text-gray-900">DISCOVERY</span>
            <span className="text-sky-500">→</span>
            <span className="text-gray-900">INTELLIGENCE</span>
            <span className="text-purple-600">→</span>
            <span className="text-gray-900">GROWTH</span>
          </div>
        </div>

        {/* ALTERNATING 4 LAYERS WITH VERTICAL CONNECTORS & GHOST NUMBERS */}
        <div className="space-y-12 sm:space-y-16 relative">
          
          {/* LAYER 01 — PRESENCE (Text LEFT / Visual RIGHT) */}
          <div
            onMouseEnter={() => setActiveHover(1)}
            onMouseLeave={() => setActiveHover(null)}
            className="pt-8 border-t border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group relative"
          >
            {/* Ghost Number 01 */}
            <div className={`absolute -top-10 -left-4 font-mono font-black text-[140px] sm:text-[180px] leading-none pointer-events-none transition-opacity duration-300 z-0 ${
              activeHover === 1 ? "text-purple-600/[0.08]" : "text-gray-900/[0.03]"
            }`}>
              01
            </div>

            {/* Left: Text Content */}
            <div className="lg:col-span-6 space-y-3.5 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                  01
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                  PRESENCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A] leading-snug">
                {layers[0].headlinePrefix}
                <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                  {layers[0].headlineHighlight}
                </span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
                {layers[0].description}
              </p>

              {/* Editorial Annotations */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono tracking-widest text-gray-400 uppercase pt-1">
                {layers[0].annotations.map((ann) => (
                  <span key={ann} className="hover:text-purple-600 transition-colors">{ann} ·</span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] hover:text-purple-600 transition-colors group/link"
                >
                  <span>Explore Websites</span>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover/link:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Floating Design Blueprint Visual */}
            <div className="lg:col-span-6 relative z-10">
              <div className="bg-[#F8F9FA]/80 rounded-xl p-5 border border-gray-100 group-hover:border-purple-200 transition-all duration-300">
                <div className="bg-white rounded-lg p-4 border border-gray-100 space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <div className="w-16 h-1 rounded bg-gray-200" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="w-3/4 h-3.5 rounded bg-[#0A0A0A]" />
                    <div className="w-1/2 h-3.5 rounded bg-gradient-to-r from-sky-500 to-purple-600" />
                  </div>
                  <div className="w-full h-12 rounded border border-dashed border-gray-200 flex items-center justify-center text-[10px] font-mono text-gray-400">
                    DESIGN SYSTEM & LAYOUT GRID
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LAYER 02 — DISCOVERY (Visual LEFT / Text RIGHT) */}
          <div
            onMouseEnter={() => setActiveHover(2)}
            onMouseLeave={() => setActiveHover(null)}
            className="pt-8 border-t border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group relative"
          >
            {/* Ghost Number 02 */}
            <div className={`absolute -top-10 -right-4 font-mono font-black text-[140px] sm:text-[180px] leading-none pointer-events-none transition-opacity duration-300 z-0 ${
              activeHover === 2 ? "text-purple-600/[0.08]" : "text-gray-900/[0.03]"
            }`}>
              02
            </div>

            {/* Left: Search Visualization */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative z-10">
              <div className="bg-[#F8F9FA]/80 rounded-xl p-5 border border-gray-100 group-hover:border-sky-200 transition-all duration-300 space-y-3">
                <div className="bg-white rounded-lg p-3 border border-gray-200 flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span className="text-xs font-mono text-gray-700">SEARCH: &quot;your business near me&quot;</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                  <div className="bg-white p-2.5 rounded-lg border border-gray-100 text-gray-600">Search Intent</div>
                  <div className="bg-sky-50 p-2.5 rounded-lg border border-sky-100 text-sky-700 font-bold">Visibility</div>
                  <div className="bg-white p-2.5 rounded-lg border border-gray-100 text-gray-900 font-bold">Discovered</div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-3.5 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                  02
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                  DISCOVERY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A] leading-snug">
                {layers[1].headlinePrefix}
                <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                  {layers[1].headlineHighlight}
                </span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
                {layers[1].description}
              </p>

              {/* Editorial Annotations */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono tracking-widest text-gray-400 uppercase pt-1">
                {layers[1].annotations.map((ann) => (
                  <span key={ann} className="hover:text-sky-600 transition-colors">{ann} ·</span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] hover:text-sky-600 transition-colors group/link"
                >
                  <span>Explore SEO</span>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover/link:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* LAYER 03 — INTELLIGENCE (Text LEFT / Visual RIGHT) */}
          <div
            onMouseEnter={() => setActiveHover(3)}
            onMouseLeave={() => setActiveHover(null)}
            className="pt-8 border-t border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group relative"
          >
            {/* Ghost Number 03 */}
            <div className={`absolute -top-10 -left-4 font-mono font-black text-[140px] sm:text-[180px] leading-none pointer-events-none transition-opacity duration-300 z-0 ${
              activeHover === 3 ? "text-purple-600/[0.08]" : "text-gray-900/[0.03]"
            }`}>
              03
            </div>

            {/* Left: Text Content */}
            <div className="lg:col-span-6 space-y-3.5 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                  03
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                  INTELLIGENCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A] leading-snug">
                {layers[2].headlinePrefix}
                <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                  {layers[2].headlineHighlight}
                </span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
                {layers[2].description}
              </p>

              {/* Editorial Annotations */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono tracking-widest text-gray-400 uppercase pt-1">
                {layers[2].annotations.map((ann) => (
                  <span key={ann} className="hover:text-purple-600 transition-colors">{ann} ·</span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] hover:text-purple-600 transition-colors group/link"
                >
                  <span>Explore AI & Automation</span>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover/link:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Automation Diagram */}
            <div className="lg:col-span-6 relative z-10">
              <div className="bg-[#F8F9FA]/80 rounded-xl p-5 border border-gray-100 group-hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center justify-between gap-1 text-[11px] font-mono text-center">
                  <div className="bg-white p-2.5 rounded-lg border border-gray-200 font-bold text-gray-800">LEAD</div>
                  <span className="text-purple-600 font-bold">→</span>
                  <div className="bg-white p-2.5 rounded-lg border border-gray-200 font-bold text-gray-800">CRM</div>
                  <span className="text-purple-600 font-bold">→</span>
                  <div className="bg-purple-50 p-2.5 rounded-lg border border-purple-200 font-bold text-purple-700">AI</div>
                  <span className="text-purple-600 font-bold">→</span>
                  <div className="bg-white p-2.5 rounded-lg border border-gray-200 font-bold text-gray-800">FOLLOW-UP</div>
                </div>
              </div>
            </div>
          </div>

          {/* LAYER 04 — GROWTH (Visual LEFT / Text RIGHT) */}
          <div
            onMouseEnter={() => setActiveHover(4)}
            onMouseLeave={() => setActiveHover(null)}
            className="pt-8 border-t border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group relative"
          >
            {/* Ghost Number 04 */}
            <div className={`absolute -top-10 -right-4 font-mono font-black text-[140px] sm:text-[180px] leading-none pointer-events-none transition-opacity duration-300 z-0 ${
              activeHover === 4 ? "text-purple-600/[0.08]" : "text-gray-900/[0.03]"
            }`}>
              04
            </div>

            {/* Left: Growth Vector Curve */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative z-10">
              <div className="bg-[#F8F9FA]/80 rounded-xl p-5 border border-gray-100 group-hover:border-sky-200 transition-all duration-300">
                <div className="bg-white rounded-lg p-4 border border-gray-100 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-gray-700 flex items-center justify-between">
                    <span>Continuous Growth Curve</span>
                    <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded text-[10px]">Optimization</span>
                  </div>

                  <div className="h-12 w-full pt-1">
                    <svg viewBox="0 0 300 50" className="w-full h-full">
                      <path
                        d="M 10 42 Q 100 38 160 20 T 290 8"
                        fill="none"
                        stroke="url(#growthGradientStackUpdated)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="growthGradientStackUpdated" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3E93EA" />
                          <stop offset="100%" stopColor="#7E53EA" />
                        </linearGradient>
                      </defs>
                      <circle cx="10" cy="42" r="3.5" fill="#3E93EA" />
                      <circle cx="160" cy="20" r="3.5" fill="#7E53EA" />
                      <circle cx="290" cy="8" r="4.5" fill="#7E53EA" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-3.5 relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                  04
                </span>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400">
                  GROWTH
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A0A0A] leading-snug">
                {layers[3].headlinePrefix}
                <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                  {layers[3].headlineHighlight}
                </span>
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed max-w-lg">
                {layers[3].description}
              </p>

              {/* Editorial Annotations */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono tracking-widest text-gray-400 uppercase pt-1">
                {layers[3].annotations.map((ann) => (
                  <span key={ann} className="hover:text-sky-600 transition-colors">{ann} ·</span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] hover:text-purple-600 transition-colors group/link"
                >
                  <span>Explore Growth</span>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover/link:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
