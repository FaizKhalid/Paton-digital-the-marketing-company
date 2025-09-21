// components/ServiceCard.tsx
"use client";
import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export const ServiceCard = ({
  image,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="bg-[#111] rounded-lg p-4 text-center shadow-md hover:shadow-xl transition min-h-12">
      <div className="w-full h-38 relative mb-4 px-1 ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400 pb-4">{description}</p>
    </div>
  );
};
