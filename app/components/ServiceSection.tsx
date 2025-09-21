// components/ServicesSection.tsx
"use client";
import React from "react";
import image1 from "../../public/images/landing-page.jpg";
import image2 from "../../public/images/landing-page2.jpg";
import image3 from "../../public/images/health-care.jpg";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    image: image1.src, // ✅ without quotes
    title: "High-Converting Page",
    description: "Mobile-optimized design",
  },
  {
    image: image2.src,
    title: "Scroll-Stopping Video",
    description: "UGC-style content",
  },
  {
    image: image3.src,
    title: "High-Impact Static Ads",
    description: "Conversion-optimized",
  },
];

export default function ServicesSection() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[70%] mx-auto mb-5">
        {services.map((service, idx) => (
          <div key={idx} className="-mt-20 md:-mt-30 py-8">
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
