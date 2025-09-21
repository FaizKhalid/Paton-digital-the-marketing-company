// components/FeaturesSection.tsx

"use client";
import { FaLock, FaVideo, FaBullseye } from "react-icons/fa";
import bgImage from "../../public/images/Paton-digital_03.jpg";
import ServicesSection from "./ServiceSection";
import GradientButton from "./GradiantButton";

const features = [
  {
    icon: (
      <div className="bg-[#FF0013] rounded-lg w-15 h-15 flex items-center justify-center mb-4">
        <FaLock className="text-black text-xl" />
      </div>
    ),
    title: "High-Converting Landing Pages",
    description:
      "A high-converting landing page designed to turn clicks into customers. Mobile-first, fast-loading, and built to convert.",
    points: [
      "Conversion-optimized design",
      "A/B testing framework",
      "Mobile optimization",
      "Analytics integration",
    ],
  },
  {
    icon: (
      <div className="bg-[#FF0013] rounded-lg w-15 h-15 flex items-center justify-center mb-4">
        <FaVideo className="text-black text-xl" />
      </div>
    ),
    title: "Proven Ad Creatives",
    description:
      "Static, video, and UGC-style ads that stop the scroll and drive engagement. All tested and optimized for maximum performance.",
    points: [
      "Static image ads",
      "Video advertisements",
      "UGC-style content",
      "Creative testing",
    ],
  },
  {
    icon: (
      <div className="bg-[#FF8000] rounded-lg w-15 h-15 flex items-center justify-center mb-4">
        <FaBullseye className="text-black text-xl" />
      </div>
    ),
    title: "Expert Media Buying",
    description:
      "Expert media buying on Facebook and Google to scale campaigns profitably. Data-driven optimization to maximize your ROAS.",
    points: [
      "Facebook & Instagram Ads",
      "Google Ads management",
      "Advanced targeting",
      "ROAS optimization",
    ],
  },
];

export default function Features() {
  return (
    <section
      className=" text-white px-6 md:px-12 bg-cover bg-no-repeat pb-15"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <ServicesSection />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:pt-20">
        <h2 className="text-2xl md:text-3xl font-bold">
          From Creative to Conversions — We Handle It All
        </h2>
        <p className="mt-4 text-gray-400">
          Most agencies give you one piece of the puzzle. We give you the whole
          system. With Paton Digital, you get:
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition py-10 space-y-3 "
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 w-[70%]">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{feature.description}</p>
            <ul className="space-y-2 text-sm text-gray-200">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#FF0013]">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h3 className="font-semibold text-lg md:text-xl mb-4">
          One package. One partner. Everything you need to grow.
        </h3>
        <GradientButton>Claim Your Free Strategy Session</GradientButton>
      </div>
    </section>
  );
}
