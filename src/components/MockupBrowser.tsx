"use client";

import { useState } from "react";
import { Globe, ArrowUpRight, Search, ShieldCheck, Laptop, Bot, Sparkles, CheckCircle2 } from "lucide-react";

export function MockupBrowser() {
  const [activeService, setActiveService] = useState<"website" | "seo" | "automation">("website");

  return (
    <div className="w-full rounded-2xl border border-gray-200/90 bg-white shadow-subtle overflow-hidden transition-all duration-300">
      {/* Window Title Bar */}
      <div className="bg-[#F7F7F8] px-4 py-3 border-b border-gray-200/80 flex items-center justify-between gap-4">
        {/* Window Control Dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-sm sm:max-w-md bg-white border border-gray-200/80 rounded-md py-1 px-3 flex items-center justify-center gap-2 text-xs text-gray-500 shadow-inner">
          <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="font-mono text-[11px] text-gray-600 truncate">https://diginetstudio.com/client-preview</span>
          <ShieldCheck className="w-3.5 h-3.5 text-purple-600 shrink-0 ml-auto" />
        </div>

        {/* Service Switcher Tabs */}
        <div className="hidden sm:flex items-center gap-1 bg-gray-200/50 p-1 rounded-lg text-xs">
          <button
            onClick={() => setActiveService("website")}
            className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
              activeService === "website"
                ? "bg-white text-[#0A0A0A] shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveService("seo")}
            className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
              activeService === "seo"
                ? "bg-white text-[#0A0A0A] shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            SEO
          </button>
          <button
            onClick={() => setActiveService("automation")}
            className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
              activeService === "automation"
                ? "bg-white text-[#0A0A0A] shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            AI + CRM
          </button>
        </div>
      </div>

      {/* Main Realistic Project Canvas */}
      <div className="p-6 sm:p-8 bg-white min-h-[380px] flex flex-col justify-between">
        {activeService === "website" && (
          <div className="space-y-6 animate-fade-in">
            {/* Project Header Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs">
                  D
                </div>
                <span className="font-bold text-sm text-[#0A0A0A] tracking-tight">Kona Architecture</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-xs text-gray-500 font-medium">
                <span>Projects</span>
                <span>Philosophy</span>
                <span>Studio</span>
                <span>Contact</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] text-white text-xs font-semibold">
                Inquire Project
              </div>
            </div>

            {/* Realistic Editorial Website Hero Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Website Development Project</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight leading-snug">
                  Modern websites built around your business.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg">
                  Designed for brand authority, crystal-clear messaging, fast loading speeds, and high client conversion.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="px-4 py-2 rounded-lg bg-[#0A0A0A] text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>View Client Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Service 01 Callout Card */}
              <div className="md:col-span-4 bg-[#F7F7F8] p-5 rounded-xl border border-gray-200/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-purple-600">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-[#0A0A0A]">Service 01 — Website Dev</div>
                <p className="text-xs text-gray-500 leading-normal">
                  Custom, responsive, fast-loading business platforms engineered for growth.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeService === "seo" && (
          <div className="space-y-6 animate-fade-in">
            {/* Project Header Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs">
                  S
                </div>
                <span className="font-bold text-sm text-[#0A0A0A] tracking-tight">Search Growth</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-100 text-xs font-semibold">
                Google Optimised
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-semibold">
                  <Search className="w-3 h-3" />
                  <span>SEO & Google Optimisation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight leading-snug">
                  Helping businesses become more visible online.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg">
                  Practical local SEO, Google Business profile optimization, and structured search markup so potential clients find your business first.
                </p>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                    <span>Local Search Rank Optimisation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                    <span>On-Page Keywords & Technical Audits</span>
                  </div>
                </div>
              </div>

              {/* Service 02 Callout Card */}
              <div className="md:col-span-4 bg-[#F7F7F8] p-5 rounded-xl border border-gray-200/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sky-600">
                  <Search className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-[#0A0A0A]">Service 02 — SEO</div>
                <p className="text-xs text-gray-500 leading-normal">
                  Targeted Google search positioning to bring in relevant organic enquiries.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeService === "automation" && (
          <div className="space-y-6 animate-fade-in">
            {/* Project Header Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs">
                  A
                </div>
                <span className="font-bold text-sm text-[#0A0A0A] tracking-tight">Smart Workflows</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-100 text-xs font-semibold">
                AI + CRM Active
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] font-semibold">
                  <Bot className="w-3 h-3" />
                  <span>AI Automation & CRM</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight leading-snug">
                  Turning enquiries into smarter business workflows.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg">
                  Automate repetitive follow-ups, organize customer enquiries, and integrate WhatsApp messaging so your business runs efficiently 24/7.
                </p>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>WhatsApp Lead Capture & Routing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span>Automated Customer Follow-ups</span>
                  </div>
                </div>
              </div>

              {/* Service 03 Callout Card */}
              <div className="md:col-span-4 bg-[#F7F7F8] p-5 rounded-xl border border-gray-200/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-purple-600">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-[#0A0A0A]">Service 03 — AI + CRM</div>
                <p className="text-xs text-gray-500 leading-normal">
                  Smarter business automation that saves time and converts leads faster.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3 Core Services Preview Strip inside/around mockup */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-6 border-t border-gray-100">
          <button
            onClick={() => setActiveService("website")}
            className={`p-2.5 rounded-lg border text-left transition-all ${
              activeService === "website"
                ? "bg-purple-50/60 border-purple-200"
                : "bg-[#F7F7F8] border-gray-200/80 hover:bg-gray-100/70"
            }`}
          >
            <div className="text-[11px] font-bold text-[#0A0A0A] truncate">1. Website Dev</div>
            <div className="text-[10px] text-gray-500 hidden sm:block truncate">Built around business</div>
          </button>

          <button
            onClick={() => setActiveService("seo")}
            className={`p-2.5 rounded-lg border text-left transition-all ${
              activeService === "seo"
                ? "bg-sky-50/60 border-sky-200"
                : "bg-[#F7F7F8] border-gray-200/80 hover:bg-gray-100/70"
            }`}
          >
            <div className="text-[11px] font-bold text-[#0A0A0A] truncate">2. SEO & Google</div>
            <div className="text-[10px] text-gray-500 hidden sm:block truncate">Visible online</div>
          </button>

          <button
            onClick={() => setActiveService("automation")}
            className={`p-2.5 rounded-lg border text-left transition-all ${
              activeService === "automation"
                ? "bg-purple-50/60 border-purple-200"
                : "bg-[#F7F7F8] border-gray-200/80 hover:bg-gray-100/70"
            }`}
          >
            <div className="text-[11px] font-bold text-[#0A0A0A] truncate">3. AI + CRM</div>
            <div className="text-[10px] text-gray-500 hidden sm:block truncate">Smarter workflows</div>
          </button>
        </div>
      </div>
    </div>
  );
}
