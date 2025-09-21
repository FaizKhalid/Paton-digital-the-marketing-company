// components/Footer.tsx
/* eslint-disable @next/next/no-img-element */

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import bgImage from "../../public/images/Footer.png";

export default function Footer() {
  return (
    <footer
      className="bg-black text-gray-300 bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Top Section */}
      <div className="border-y border-[#FF0013]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Left Section (2/3) */}
          <div className="w-full md:w-3/5 p-8 md:p-12 border-r border-[#FF0013] flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/Paton-Final_Logo-01.png"
                alt="Logo"
                className="w-30 h-10"
              />
            </div>
            {/* Description */}
            <p className="max-w-md text-gray-400">
              Join 500+ businesses that have transformed their marketing with
              our proven system
            </p>
          </div>

          {/* Right Section (1/3) */}
          <div className="w-full md:w-2/5 flex justify-center items-center py-10 text-sm">
            <div className="flex gap-16">
              {/* Page Links */}
              <div>
                <h3 className="font-semibold text-white mb-3">Page links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Ads
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="font-semibold text-white mb-3">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Paton Digital. All Right Reserved</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="text-green-500 hover:text-green-400">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
