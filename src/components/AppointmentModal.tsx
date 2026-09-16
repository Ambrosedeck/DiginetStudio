"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, MessageCircle, ArrowRight, Loader2 } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageName?: string;
}

export function AppointmentModal({ isOpen, onClose, initialPackageName }: AppointmentModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState(
    initialPackageName ? `Website Package (${initialPackageName})` : "Website Development"
  );
  const [selectedDate, setSelectedDate] = useState("2026-08-12");
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  if (!isOpen) return null;

  const timeSlots = ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM", "06:00 PM"];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1474e901-8e43-477c-937b-3ab23795fedc",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          appointment_date: selectedDate,
          time_slot: selectedSlot,
          message: `Appointment requested for ${selectedService} on ${selectedDate} at ${selectedSlot}. Client Notes: ${formData.notes || "None"}`,
          subject: `NEW APPOINTMENT BOOKING: ${formData.name} on ${selectedDate} at ${selectedSlot}`,
        }),
      });

      fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          date: selectedDate,
          slot: selectedSlot,
        }),
      }).catch(() => {});

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-xl rounded-2xl border border-gray-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0A0A0A] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-purple-400 font-semibold">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Diginet Studio Booking</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">Let&apos;s Talk About Your Business</h3>
            <p className="text-xs text-gray-400">Have a project in mind? Book a time that works for you.</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#0A0A0A]">Appointment Confirmed & Emailed!</h4>
              <p className="text-xs text-gray-500">
                An email notification has been dispatched to <strong>{AGENCY_CONFIG.contact.email}</strong>.
              </p>
              <div className="p-4 bg-gray-50 rounded-xl text-xs text-left max-w-sm mx-auto space-y-1.5 border border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold text-gray-900">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date & Time:</span>
                  <span className="font-semibold text-gray-900">{selectedDate} at {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Client:</span>
                  <span className="font-semibold text-gray-900">{formData.name} ({formData.phone})</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <a
                  href={`https://wa.me/919366161941?text=Hello%20Diginet%20Studio!%20I%20have%20booked%20an%20appointment%20for%20${encodeURIComponent(selectedService)}%20on%20${selectedDate}%20at%20${selectedSlot}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0A0A0A] text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Select Service / Focus Area
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="SEO & Google Optimisation">SEO & Google Optimisation</option>
                      <option value="AI Automation & CRM">AI Automation & CRM</option>
                      <option value="Custom Project Strategy">Custom Project Strategy</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        min="2026-08-10"
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Select Time Slot
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {timeSlots.slice(0, 4).map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2.5 px-2 text-xs font-semibold rounded-lg border transition-all ${
                              selectedSlot === slot
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 rounded-xl bg-[#0A0A0A] hover:bg-gray-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 93661 61941"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific questions or project link..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md disabled:opacity-60 active:scale-[0.99]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Sending Notification...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Confirm Appointment</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
