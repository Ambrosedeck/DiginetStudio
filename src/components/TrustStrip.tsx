import { AGENCY_CONFIG } from "@/config/agency";
import { CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="bg-[#F7F7F8] border-y border-gray-200/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xs uppercase font-bold tracking-widest text-[#666666]">
            What we help businesses achieve
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {AGENCY_CONFIG.trustStrip.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200/80 shadow-subtle text-xs sm:text-sm font-medium text-[#111111]"
            >
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
