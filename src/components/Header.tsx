"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Calendar, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenAppointment: () => void;
}

export function Header({ onOpenAppointment }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#why-us" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: DIGINET STUDIO Wordmark & Official D Icon */}
        <a href="#hero" className="transition-opacity hover:opacity-90 active:scale-[0.98]">
          <Logo variant="horizontal" size="responsive" />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#0A0A0A] transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0A0A0A] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Clean Book an Appointment Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenAppointment}
            className="px-5 py-2.5 rounded-xl bg-[#0A0A0A] hover:bg-gray-800 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow active:scale-[0.98]"
          >
            Book an Appointment
          </button>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenAppointment}
            className="px-3.5 py-2 rounded-lg bg-[#0A0A0A] text-white text-xs font-semibold flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors border border-gray-200 active:scale-95"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-5 pt-3 pb-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-900 py-3 px-3.5 rounded-xl hover:bg-gray-50 active:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3.5 rounded-xl bg-[#0A0A0A] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
            >
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
