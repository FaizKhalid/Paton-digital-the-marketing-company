"use client";
import { useState, useEffect } from "react";
import bgImage from "../../public/images/Paton-digital_06.jpg";

const testimonials = [
  {
    id: 1,
    name: "Devid Aldiando",
    title: "Founder & CEO",
    image: "/images/avatar1.avif",
    review:
      "Excellent service! Communication was strong and professional from day one.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "/images/avatar2.avif",
    review:
      "Amazing experience! The team understood exactly what I needed. Highly recommend them!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "Entrepreneur",
    image: "/images/avatar3.avif",
    review:
      "They were professional, fast, and exceeded my expectations. Will definitely hire again.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Watson",
    title: "Startup Founder",
    image: "/images/avatar4.avif",
    review:
      "Brilliant work! They truly went above and beyond to deliver outstanding results.",
    rating: 5,
  },
  {
    id: 5,
    name: "John Smith",
    title: "Business Owner",
    image: "/images/avatar5.avif",
    review: "Super easy to work with, fast delivery, and exceptional quality!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section
      className="text-white py-8 px-6 text-center overflow-hidden md:h-screen bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-5">Testimonials</h2>

      {/* Avatar Carousel */}
      <div className="relative overflow-hidden w-full max-w-2xl mx-auto mb-5">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${currentIndex * 6}rem - 2rem))`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className={`w-20 h-20 p-0.5 rounded-2xl border-4 transition-all duration-500 ${
                  i === currentIndex
                    ? "border-white scale-110"
                    : "border-red-500 opacity-60"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="relative w-full max-w-2xl mx-auto flex justify-center">
        {/* Frame Image */}
        <img
          src="/images/testimonial.svg"
          alt="testimonial frame"
          className="w-full md:max-w-[80%] md:pl-4 h-auto "
        />

        {/* Testimonial Content (overlap) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center mb-20 px-3 text-center md:h-[70%] h-[40%] mt-15 md:mt-0">
          <div className="flex items-center justify-center gap-2 md:mb-3">
            <img
              src={current.image}
              alt={current.name}
              className="w-12 h-12 rounded-full border-2 border-red-500"
            />
            <div>
              <h3 className="font-semibold">{current.name}</h3>
              <p className="text-sm text-gray-400">{current.title}</p>
            </div>
          </div>
          <p className="text-gray-200 italic md:mb-2 max-w-lg px-2">
            "{current.review}"
          </p>

          <div className="flex justify-center gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
