"use client";
import { useState, useEffect } from "react";
import bgImage from "../../public/images/Paton-digital_06.jpg";

const testimonials = [
  {
    id: 1,
    name: "Velocity Effect",
    title: "",
    image: "/images/avatar1.avif",
    review:
      "Outstanding work by Alan and his team. He continues to be our go-to resource for outstanding Facebook, Instagram, and LinkedIn ad development and execution.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dave. M",
    title: "",
    image: "/images/avatar2.avif",
    review:
      "We continue to be grateful for what Alan brings the team with each client he works on. This one was no exception. He comes highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Eastern Shore Kettle Korn",
    title: "",
    image: "/images/avatar3.avif",
    review:
      "Paton Digital are truly talented professionals, focused on making their clients successful and developing an excellent end-user experience. We highly recommend for your business needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bradford, Wray Ward",
    title: "",
    image: "/images/avatar4.avif",
    review:
      "For some, paid social media can be confusing and intimidating. Alan was able to cut through the clutter and dispel its myth for clients. I worked closely with Alan and he was able to drive success on many fronts. Better optimizations and learnings led to success month over month, year over year. He led with passion, conviction and a smile.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ed, Media Research Center",
    title: "",
    image: "/images/avatar5.avif",
    review:
      "Alan managed several large Facebook (10M+ total fans) and Twitter (500K+ followers) as well as a very large email file with precision. He developed and executed several coordinated marketing campaigns that were very successful in terms of reach and impact.",
    rating: 5,
  },
  {
    id: 6,
    name: "Jeff, The Prosper Group",
    title: "",
    image: "/images/avatar2.avif",
    review:
      "There are few people in marketing that understand all aspects of marketing like Alan does. He is creative, dedicated to his work, and is excited when his clients are successful. If you need to fill your sales funnel then Alan is your man!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setExpanded(false); // reset when slide changes
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section
      className="text-white py-8 px-6 text-center overflow-hidden md:h-screen bg-cover bg-no-repeat"
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
          className="w-full md:max-w-[80%] md:pl-4 h-auto"
        />

        {/* Testimonial Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center md:h-[70%] h-[40%] overflow-hidden  mt-12 md:mt-0">
          {/* Name */}
          <div className="flex items-center justify-center gap-2 md:mb-3">
            <img
              src={current.image}
              alt={current.name}
              className="w-12 h-12 rounded-full border-2 border-red-500"
            />
            <div>
              <h3 className="font-semibold">{current.name}</h3>
              {current.title && (
                <p className="text-sm text-gray-400">{current.title}</p>
              )}
            </div>
          </div>

          {/* Review with truncate */}
          <p
            className={`text-gray-200 italic text-sm md:mb-2 max-w-lg transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            "{current.review}"
          </p>

          {/* Read More / Less Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-400 text-xs mt-1 underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* Stars */}
          <div className="flex justify-center gap-1 mt-2">
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
