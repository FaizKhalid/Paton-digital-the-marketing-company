// components/GrowthProcessSection.tsx
"use client";
import { FaLightbulb, FaClone, FaChartLine } from "react-icons/fa";
import bgImage from "../../public/images/Paton-digital_03.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import GradientButton from "./GradiantButton";

const steps = [
  {
    icon: <FaLightbulb className="text-white text-xl" />,
    title: "Strategy Session",
    description:
      "We uncover your goals, audience, and opportunities to create a customized growth roadmap.",
    number: 1,
    bg: "from-purple-700 to-indigo-600",
  },
  {
    icon: <FaClone className="text-white text-xl" />,
    title: "Creative That Converts",
    description:
      "Our team designs your landing page and ad creatives (static, video, UGC) optimized for maximum conversion.",
    number: 2,
    bg: "from-pink-600 to-purple-500",
  },
  {
    icon: <FaChartLine className="text-white text-xl" />,
    title: "Scale With Confidence",
    description:
      "We launch, optimize, and manage media buying on Facebook and Google to maximize ROI and scale profitably.",
    number: 3,
    bg: "from-green-500 to-emerald-400",
  },
];

export default function Strategy() {
  return (
    <section
      className=" text-white py-30 px-6 md:px-16 text-center min-h-screen bg-cover bg-no-repea"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Heading */}
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-3xl font-semibold">
          Our 3-Step Growth Process
        </h2>
        <p className="text-gray-400 mt-4">
          From strategy to scale, we handle every aspect of your growth journey
          with a proven methodology that delivers results.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 md:w-[320px] h-full flex flex-col items-center text-center "
          >
            {/* Icon */}
            <div
              className={`bg-gradient-to-br ${step.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
            >
              {step.icon}
            </div>

            {/* Step Number Bubble */}
            <div className=" absolute top-3 right-4 bg-emerald-400 text-white border border-gray-600 rounded-full w-6 h-6 text-sm flex items-center justify-center">
              {step.number}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400">{step.description}</p>

            {/* Arrow (except after last item) */}
            {idx !== steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-35px] transform -translate-y-1/2">
                <HiArrowNarrowRight className="text-red-500 text-2xl" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <GradientButton>Claim Your Free Strategy Session</GradientButton>
      </div>
    </section>
  );
}
