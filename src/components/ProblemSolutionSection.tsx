"use client";

import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolutionSection() {
  const problems = [
    {
      title: "NO WEBSITE",
      desc: "Customers cannot quickly understand your business.",
    },
    {
      title: "NOT VISIBLE ON GOOGLE",
      desc: "Potential customers discover your competitors instead.",
    },
    {
      title: "MANUAL FOLLOW-UPS",
      desc: "Leads get lost between WhatsApp, calls and spreadsheets.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-12">
          {/* Heading */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
              Digital Clarity
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-tight">
              Your customers are already looking for you. <br />
              <span className="text-gray-400">But what do they see?</span>
            </h2>
          </div>

          {/* 3 Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((prob) => (
              <div
                key={prob.title}
                className="p-6 rounded-xl bg-[#F7F7F8] border border-gray-200/80 space-y-3"
              >
                <div className="flex items-center gap-2 text-rose-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-wider">{prob.title}</span>
                </div>
                <p className="text-sm text-[#666666] leading-relaxed font-normal">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Banner */}
          <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-[#0A0A0A]">
                Diginet Studio fixes all three.
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Complete digital presence architecture engineered for customer conversion.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-widest uppercase">
              <span>BUILD</span>
              <span className="text-purple-400">•</span>
              <span>GET FOUND</span>
              <span className="text-sky-400">•</span>
              <span>AUTOMATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
