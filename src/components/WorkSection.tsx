"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function WorkSection() {
  const projects = [
    {
      title: "Website Concept — Hospitality",
      category: "Boutique Hotel & Resort Platform",
      deliverable: "UI/UX • Responsive Build • Booking Integration",
      bgGradient: "from-amber-500/10 via-white to-gray-50",
      accentColor: "text-amber-700",
    },
    {
      title: "Website Concept — Healthcare",
      category: "Medical Clinic & Specialist Practice",
      deliverable: "Patient Portal UI • Local SEO • Appointment Scheduling",
      bgGradient: "from-sky-500/10 via-white to-gray-50",
      accentColor: "text-sky-700",
    },
    {
      title: "Website Concept — Local Business",
      category: "Professional Legal & Financial Services",
      deliverable: "Brand Identity • Custom Web Build • CRM Lead Routing",
      bgGradient: "from-purple-500/10 via-white to-gray-50",
      accentColor: "text-purple-700",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-28 bg-[#F7F7F8] border-t border-gray-200/60 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight">
            Selected Work
          </h2>
          <p className="text-sm text-[#666666]">
            Exploratory project architectures and bespoke client website builds crafted by Diginet Studio.
          </p>
        </div>

        {/* Large Website Design Previews */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl border border-gray-200/90 shadow-subtle overflow-hidden transition-all duration-300 hover:shadow-md group"
            >
              <div className="p-8 sm:p-12 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-6">
                  <div>
                    <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 self-start sm:self-auto">
                    Concept Architecture
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                  <div className="md:col-span-8 space-y-4">
                    <p className="text-sm text-[#666666] leading-relaxed">
                      Clean editorial layout tailored specifically for {project.category.toLowerCase()}, featuring intuitive navigation, fast mobile loading speed, and structured conversion paths.
                    </p>
                    <div className="text-xs font-mono text-gray-500">
                      Scope: {project.deliverable}
                    </div>
                  </div>

                  <div className="md:col-span-4 text-right">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A0A0A] text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-xs"
                    >
                      <span>Inquire Similar Build</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
