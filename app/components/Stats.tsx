import {
  RiFlashlightLine,
  RiCheckboxCircleLine,
  RiStarLine,
} from "react-icons/ri";
import bgImage_vedio from "../../public/images/stats.png";
import React from "react";
import { DollarSign } from "lucide-react";

const ProvenResultsSection = () => {
  return (
    <section
      className=" text-white  px-4 md:px-12 relative overflow-hidden w-full md:h-screen h-full bg-cover bg-no-repeat flex items-center justify-center pt-15 pb-10 md:py-0"
      style={{
        backgroundImage: `url(${bgImage_vedio.src})`,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Proven Results Backed by <br />{" "}
          <span className="text-white">$150M+ in Ad Spend</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We've managed over $150 million in paid media for Fortune 500 brands,
          e-commerce companies, and local businesses. From scaling global
          campaigns to driving leads for SMBs, we know what works.
        </p>

        {/* Feature Line Icons */}
        <div className="flex justify-center items-center gap-6 mb-10 flex-wrap py-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF0013] p-3 rounded-lg">
              <RiFlashlightLine className="text-white text-2xl" />
            </div>
            <span className="font-semibold">Fortune 500 Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#f99c07] p-3 rounded-lg">
              <RiCheckboxCircleLine className="text-white text-2xl" />
            </div>
            <span className="font-semibold">SMB Growth Focus</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-xl px-4 bg-white/10 backdrop-blur-md border border-red-500/40 shadow-lg py-10 gap-5">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#FF0013] p-4 rounded-xl ">
                <DollarSign className="text-2xl text-white" />
              </div>
              <div className="flex py-2 items-center justify-center">
                <h3 className="text-4xl font-extrabold text-[#FF0013]">$150</h3>
                <span className="text-[#FF0013] font-bold text-2xl"> M+</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">Ad Spend Managed</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-6 bg-white/10 backdrop-blur-md border border-red-500/40 shadow-lg py-10 gap-5">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#f99c07] p-4 rounded-xl">
                <RiStarLine className="text-2xl text-white" />
              </div>
              <div className="flex py-2">
                <h3 className="text-4xl font-extrabold text-[#f99c07]">16</h3>
                <span className="text-[#f99c07] font-bold text-4xl">+</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResultsSection;
