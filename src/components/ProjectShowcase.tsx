"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectShowcase() {
  return (
    <div className="w-full rounded-2xl border border-gray-200/80 bg-white shadow-subtle overflow-hidden relative group">
      {/* Editorial Website Project Showcase Canvas (Frameless, clean UI design) */}
      <div className="p-6 sm:p-10 md:p-12 bg-gradient-to-br from-gray-50/80 via-white to-purple-50/20">
        {/* Project Header Bar inside design */}
        <div className="flex items-center justify-between border-b border-gray-200/60 pb-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] text-white font-bold flex items-center justify-center text-xs">
              DS
            </div>
            <span className="font-bold text-sm tracking-tight text-[#0A0A0A]">
              Selected Studio Build — Editorial Showcase
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
              Live Client Build
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Website Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Content Block (Left / Center) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">
              <span>Website Development & Brand Architecture</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tracking-tight leading-tight">
              Designed for brand authority.{" "}
              <span className="bg-gradient-to-r from-purple-600 to-sky-500 bg-clip-text text-transparent">
                Engineered for growth.
              </span>
            </h3>

            <p className="text-sm text-[#666666] leading-relaxed max-w-xl font-normal">
              Tailored digital platforms that elevate your online credibility, communicate clear value within 3 seconds, and guide visitors toward booking.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] hover:text-purple-600 transition-colors"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4 text-purple-600" />
              </a>
            </div>
          </div>

          {/* Asymmetrical Side Editorial Card (Right) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-200/90 shadow-xs space-y-4">
            <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
              Core Stack & Standard
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-semibold text-gray-900">Custom UI/UX</span>
                <span className="text-purple-600 font-medium">100% Bespoke</span>
              </div>

              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-semibold text-gray-900">Responsive Layout</span>
                <span className="text-sky-600 font-medium">Mobile Native</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Google SEO</span>
                <span className="text-emerald-600 font-medium">On-Page Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
