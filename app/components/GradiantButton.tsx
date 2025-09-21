"use client";
import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function GradientButton({
  children,
  onClick,
  className = "",
}: GradientButtonProps) {
  const handleClick = () => {
    window.open(
      "https://forms.monday.com/forms/2c30b407e30a09baad27b6a4e646d094?r=use1",
      "_blank"
    ); // link new tab me khulega
  };

  return (
    <button
      onClick={handleClick}
      className={`relative mt-6 px-6 py-3 rounded-lg font-semibold text-white
      bg-gradient-to-r from-[#fe110f] to-[#ff7401]
      shadow-lg border-2 border-transparent
      bg-clip-padding
      animate-glow
      transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <span className="relative z-10">{children}</span>

      {/* Glow Border Layer */}
      <span
        className="absolute inset-0 rounded-lg border-2 border-transparent
        bg-gradient-to-r from-[#fe110f] to-[#ff7401]
        blur-md opacity-60 animate-pulse"
      ></span>
    </button>
  );
}
