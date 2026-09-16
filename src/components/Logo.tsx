import React from "react";

interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  size?: "sm" | "md" | "lg" | "responsive";
  lightMode?: boolean;
  className?: string;
}

export function Logo({
  size = "responsive",
  lightMode = false,
  className = "",
}: LogoProps) {
  // Height set to ~32px-34px matching exact current navbar icon sizing
  const iconHeights = {
    sm: "h-6 sm:h-7",
    md: "h-7 sm:h-8",
    lg: "h-8 sm:h-9.5",
    responsive: "h-7 sm:h-8 md:h-[34px]",
  };

  const textSizes = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-lg sm:text-xl",
    responsive: "text-sm sm:text-base md:text-lg",
  };

  const textColor = lightMode ? "text-white" : "text-[#0E1B38]";
  const mutedTextColor = lightMode ? "text-gray-300" : "text-[#0E1B38]/70";
  const iconSrc = lightMode ? "/diginet-icon-new-light.png" : "/diginet-icon-new.png";

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 select-none group ${className}`}>
      {/* 1. NEW Uploaded Standalone Transparent D Icon FIRST */}
      <img
        src={iconSrc}
        alt="Diginet Studio Official D Icon"
        className={`${iconHeights[size]} w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105`}
        loading="eager"
      />

      {/* 2. Wordmark "DIGINET STUDIO" SECOND */}
      <div className="flex items-center tracking-tight leading-none font-sans">
        <span className={`font-black tracking-tight ${textSizes[size]} ${textColor}`}>
          DIGINET
        </span>
        <span className="w-1.5" />
        <span className={`font-light tracking-wide ${textSizes[size]} ${mutedTextColor}`}>
          STUDIO
        </span>
      </div>
    </div>
  );
}
