"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Logo } from "@/components/Logo";
import { MessageCircle, Mail, ArrowUpRight, X, Shield, Lock } from "lucide-react";

interface FooterProps {
  onOpenAppointment: () => void;
}

export function Footer({ onOpenAppointment }: FooterProps) {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block hover:opacity-95 transition-opacity">
              <Logo variant="horizontal" size="lg" lightMode={true} />
            </a>

            <p className="text-xs uppercase font-bold tracking-widest text-purple-400">
              {AGENCY_CONFIG.tagline}
            </p>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Helping creators and businesses grow online through websites, SEO, AI automation and digital strategy.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <button onClick={onOpenAppointment} className="hover:text-purple-400 transition-colors text-left">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Website Development</li>
              <li>SEO & Google Optimisation</li>
              <li>AI Automation & CRM</li>
              <li>E-commerce Websites</li>
              <li>Local Business Optimisation</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <a
                href={`mailto:${AGENCY_CONFIG.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span className="truncate">{AGENCY_CONFIG.contact.email}</span>
              </a>
              <a
                href={AGENCY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Diginet Studio. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in text-gray-900">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl border border-gray-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === "privacy" ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-600 font-bold">
                  <Shield className="w-5 h-5" />
                  <span>Privacy Policy — Diginet Studio</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Diginet Studio respects your privacy. Information collected via project inquiry forms and booking scheduling (such as name, email, and phone number) is strictly used for project communication, proposal generation, and client onboarding. We do not sell, rent, or distribute personal information to third parties.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  For questions regarding data security or deletion requests, contact hello@diginetstudio.com.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-600 font-bold">
                  <Lock className="w-5 h-5" />
                  <span>Terms & Conditions — Diginet Studio</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All digital assets, code bases, design mockups, and strategic packages provided by Diginet Studio are subject to agreed project proposals and milestones. Websites are delivered with clean code, standard browser compatibility, and initial search engine configuration.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Packages starting from ₹7,999+ vary according to total page scope, custom integrations, e-commerce requirements, and client add-ons.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
