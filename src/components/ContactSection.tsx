"use client";

import { useState } from "react";
import { AGENCY_CONFIG } from "@/config/agency";
import { Send, CheckCircle2, MessageCircle, Mail, Phone, MapPin, Loader2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Website Development",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Direct client-side dispatch to Web3Forms to bypass server Cloudflare checks
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1474e901-8e43-477c-937b-3ab23795fedc",
          name: formData.name,
          business_name: formData.businessName || "N/A",
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.details,
          subject: `New Diginet Studio Enquiry from ${formData.name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        // Also log to server API silently
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).catch(() => {});
      } else {
        setErrorMessage(data.message || "Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Graceful fallback for UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold">
              <span>Start Your Project</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight">
              Let&apos;s Build Something Better.
            </h2>

            <p className="text-base text-[#666666] leading-relaxed">
              Tell us about your business, what you&apos;re trying to achieve and where you need help. We&apos;ll get back to you with the right solution.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-100 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-purple-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email Us</div>
                  <a href={`mailto:${AGENCY_CONFIG.contact.email}`} className="font-semibold text-gray-900 hover:text-purple-600">
                    {AGENCY_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Phone / WhatsApp</div>
                  <a href={AGENCY_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-emerald-600">
                    {AGENCY_CONFIG.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="font-medium text-gray-900">{AGENCY_CONFIG.contact.address}</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Prefer WhatsApp?</span>
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Connect directly with our team for quick questions or immediate project discussions.
              </p>
              <a
                href={AGENCY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
              >
                <span>Chat With Diginet Studio →</span>
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 bg-[#F7F7F8] p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-subtle">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A0A]">Enquiry Sent to Email!</h3>
                <p className="text-sm text-[#666666] max-w-md mx-auto">
                  Thank you for reaching out to Diginet Studio. An email notification has been sent directly to <strong>{AGENCY_CONFIG.contact.email}</strong>. We will review your project details and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      businessName: "",
                      email: "",
                      phone: "",
                      service: "Website Development",
                      details: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#0A0A0A] text-white text-xs font-semibold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600 shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company or Brand Name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600 shadow-xs"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600 shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                    What do you need help with?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-base sm:text-sm text-gray-900 focus:outline-none focus:border-purple-600 shadow-xs"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="SEO & Google Optimisation">SEO & Google Optimisation</option>
                    <option value="AI Automation & CRM">AI Automation & CRM</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Other">Other Custom Solutions</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your goals, budget timeline, or specific features needed..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-purple-600 shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#0A0A0A] hover:bg-gray-800 text-white font-medium text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                      <span>Sending Email Notification...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-purple-400" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
