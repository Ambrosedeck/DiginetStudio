"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const stages = [
    {
      step: "01",
      name: "UNDERSTAND",
      desc: "Before we design anything, we understand your business, audience and goals.",
    },
    {
      step: "02",
      name: "BUILD",
      desc: "We create the digital foundation — from strategy and design to development.",
    },
    {
      step: "03",
      name: "CONNECT",
      desc: "We connect SEO, analytics, CRM and automation around the website.",
    },
    {
      step: "04",
      name: "GROW",
      desc: "We keep improving what works and remove what doesn't.",
    },
  ];

  const standards = [
    {
      num: "01",
      title: "Clarity over clutter",
      desc: "If a visitor doesn't understand what you do in seconds, the design isn't finished.",
    },
    {
      num: "02",
      title: "Performance over decoration",
      desc: "Beautiful is important. Fast, accessible and useful is non-negotiable.",
    },
    {
      num: "03",
      title: "Systems over one-off projects",
      desc: "Your website shouldn't exist in isolation.",
    },
    {
      num: "04",
      title: "Outcomes over vanity",
      desc: "Traffic, enquiries, efficiency and growth matter more than screenshots.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white cv-auto text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER & MAIN POSITIONING */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F8] border border-gray-200/80 text-gray-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            <span>About Diginet Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#0A0A0A]">
            We don&apos;t build websites. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-purple-600 bg-clip-text text-transparent">
              We build digital advantages.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-[720px] font-normal pt-1">
            Diginet Studio exists to make businesses better online — not just better looking. We combine strategy, design, development, search and automation to build digital systems that help businesses get discovered, earn trust and turn more attention into action.
          </p>
        </div>

        {/* 2. OUR BELIEF — EDITORIAL STATEMENT WITH BLUE TO PURPLE GRADIENT ACCENT */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-gray-200/80 space-y-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Our Belief
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight leading-[1.16] max-w-5xl">
            &ldquo;A website should not just look good. <br className="hidden sm:inline" />
            It should make your business{" "}
            <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
              easier to discover
            </span>, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
              easier to trust
            </span>, and{" "}
            <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
              easier to grow
            </span>.&rdquo;
          </blockquote>
        </div>

        {/* 3. HOW WE WORK — COMPACT 4-STAGE HORIZONTAL SYSTEM */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-gray-200/80">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">
            How We Work
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-gray-100 pt-6">
            {stages.map((stage) => (
              <div key={stage.name} className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-purple-600">
                    {stage.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#0A0A0A]">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. OUR STANDARD — RHYTHMIC EDITORIAL LIST */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-14 border-t border-gray-200/80">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Our Standard
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8 border-t border-gray-100 pt-6">
            {standards.map((std) => (
              <div key={std.title} className="pb-4 border-b border-gray-100/80 space-y-1.5 group">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-purple-600">
                    {std.num}
                  </span>
                  <h4 className="text-base font-bold text-[#0A0A0A] group-hover:text-purple-600 transition-colors">
                    {std.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-6 max-w-[600px]">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. BOTTOM CALLOUT */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-[#666666] font-medium max-w-xl">
            Ready to give your business a digital advantage?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A0A0A] text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-xs active:scale-95"
          >
            <span>Talk to Diginet Studio</span>
            <ArrowRight className="w-4 h-4 text-purple-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
