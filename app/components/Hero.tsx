"use client";
import bgImage_vedio from "../../public/images/vedio_background.png";
import GradientButton from "./GradiantButton";

export default function Hero() {
  return (
    <section className="bg-[#23090c] text-white w-full h-full md:h-screen overflow-hidden md:pt-20 pt-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 pt-10 w-full">
        {/* Right Side - Image + Video */}
        <div className="md:w-1/2 w-full flex items-center justify-center order-1 md:order-2">
          <div className="w-full max-w-2xl">
            {" "}
            {/* ⬅️ size increased */}
            {/* Video Overlay */}
            <div className="inset-0 flex items-center justify-center">
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Marketing Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side - Text */}
        <div className="md:w-1/2 w-full text-center md:text-left order-2 md:order-1 px-2 md:px-4 mt-2 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight break-words">
            Your All-In-One <br />
            <span className="text-[#FF0013]">
              Marketing <br />{" "}
              <span className="text-[#FF8000]">Growth Package</span>
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-md break-words">
            We design your landing pages, ads, and manage campaigns from social
            to Google and manage your media buying on Facebook and Google —
            everything you need to convert more customers.
          </p>
          <GradientButton>Claim Your Free Strategy Session</GradientButton>
          <div className="flex flex-col sm:flex-row capitalize text-sm text-gray-400 gap-4 sm:gap-6 mt-10 mb-20 md:mb-0">
            <div className="flex gap-2 items-center">
              <i className="ri-check-line text-[#e2910b]"></i>
              <span>No Long Term Contract</span>
            </div>
            <div className="flex gap-2 items-center">
              <i className="ri-check-line text-[#e2910b]"></i>
              <span>Full Transparency</span>
            </div>
            <div className="flex gap-2 items-center">
              <i className="ri-check-line text-[#e2910b]"></i>
              <span>Results in 30 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
