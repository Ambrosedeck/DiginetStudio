import { AGENCY_CONFIG } from "@/config/agency";
import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={AGENCY_CONFIG.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Diginet Studio"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-emerald-400"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
        <span className="pr-1 hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
