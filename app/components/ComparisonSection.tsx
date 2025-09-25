// components/GrowthComparison.tsx

import { FaTimes, FaCheck, FaStar } from "react-icons/fa";
import GradientButton from "./GradiantButton";
import bgImage from "../../public/images/stats.png";

const leftPoints = [
  {
    title: "Piecemeal Services",
    desc: "Separate teams for creative, landing pages, and ads",
  },
  {
    title: "Slow Results",
    desc: "3–6 months to see meaningful improvements",
  },
  {
    title: "Wasted Ad Spend",
    desc: "Poor coordination leads to budget inefficiency",
  },
  {
    title: "Limited Transparency",
    desc: "Black box reporting and unclear metrics",
  },
  {
    title: "Long-Term Contracts",
    desc: "Locked into 12+ month commitments",
  },
];

const rightPoints = [
  {
    title: "Complete System",
    desc: "Integrated creative, landing pages, and media buying",
  },
  {
    title: "Fast Execution",
    desc: "Results visible within 30 days of launch",
  },
  {
    title: "Measurable Growth",
    desc: "Every dollar tracked with clear ROI reporting",
  },
  {
    title: "Full Transparency",
    desc: "Real-time dashboard access and weekly reports",
  },
  {
    title: "No Long-Term Contracts",
    desc: "Month-to-month with performance guarantees",
  },
];

export default function ComparisonSection() {
  return (
    <section
      className="text-white py-20 px-6 md:px-12 relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          More Than Ads. A Complete Growth System.
        </h2>
        <p className="text-gray-400 text-base">
          Other agencies focus on clicks. We focus on customers. By combining
          creative, landing pages, and media buying into one package, we cut the
          waste, simplify the process, and deliver real results.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 w-full">
        {/* Left Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-red-600 shadow-lg w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-neutral-700 p-4 rounded-lg">
              <FaStar className="border-red text-lg" />
            </div>
            <h3 className="text-lg font-semibold">Other Agencies</h3>
          </div>
          <ul className="space-y-3">
            {leftPoints.map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <FaTimes className="text-red-500 mt-1 text-sm" />
                <div>
                  <p className="font-semibold text-sm">{point.title}</p>
                  <p className="text-xs text-gray-400">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-blue-500/50 shadow-lg w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FF0013] p-4 rounded-lg">
              <FaStar className="text-white text-lg" />
            </div>
            <h3 className="text-lg font-semibold">Paton Digital</h3>
          </div>
          <ul className="space-y-3">
            {rightPoints.map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <FaCheck className="text-green-400 mt-1 text-sm" />
                <div>
                  <p className="font-semibold text-sm">{point.title}</p>
                  <p className="text-xs text-gray-400">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <GradientButton>Claim Your Free Strategy Session</GradientButton>
      </div>
    </section>
  );
}
