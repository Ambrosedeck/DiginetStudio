"use client";

import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

interface CtaSectionProps {
  onOpenAppointment: () => void;
}

export function CtaSection({ onOpenAppointment }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Ambient Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span>Start Your Digital Upgrade Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          Ready to Build a{" "}
          <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            Better Online Presence?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss how Diginet Studio can design, launch and optimise your business website.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAppointment}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-gray-100 text-[#0A0A0A] font-semibold text-sm transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-purple-600" />
            <span>Book an Appointment</span>
          </button>

          <a
            href={AGENCY_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
