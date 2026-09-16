"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { PricingSection } from "@/components/PricingSection";
import { OnlinePresenceSection } from "@/components/OnlinePresenceSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { DiginetAiWidget } from "@/components/DiginetAiWidget";
import { Footer } from "@/components/Footer";
import { PricingPlan } from "@/config/agency";

// Dynamically import AppointmentModal to reduce initial JavaScript bundle size
const AppointmentModal = dynamic(
  () => import("@/components/AppointmentModal").then((mod) => mod.AppointmentModal),
  { ssr: false }
);

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string | undefined>();

  const handleOpenAppointment = () => {
    setSelectedPlanName(undefined);
    setAppointmentOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPlan) => {
    setSelectedPlanName(pkg.name);
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header onOpenAppointment={handleOpenAppointment} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onOpenAppointment={handleOpenAppointment} />
        <TrustStrip />
        <ServicesSection onOpenAppointment={handleOpenAppointment} />
        <WhyUsSection />
        <PricingSection
          onSelectPackage={handleSelectPackage}
          onOpenAppointment={handleOpenAppointment}
        />
        <OnlinePresenceSection onOpenAppointment={handleOpenAppointment} />
        <ProcessSection />
        <TargetAudienceSection />
        <CtaSection onOpenAppointment={handleOpenAppointment} />
        <ContactSection />
        
        {/* About Diginet Studio (Positioned as final storytelling section before footer) */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Floating Diginet AI Assistant Widget */}
      <DiginetAiWidget onOpenAppointment={handleOpenAppointment} />

      {/* Lazy-loaded Appointment Booking Modal */}
      {appointmentOpen && (
        <AppointmentModal
          isOpen={appointmentOpen}
          onClose={() => setAppointmentOpen(false)}
          initialPackageName={selectedPlanName}
        />
      )}
    </div>
  );
}
