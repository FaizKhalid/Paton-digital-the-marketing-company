// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="bg-[#232326] text-white pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo Left */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/Paton-Final_Logo-01.png"
            alt="Paton Digital Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Center Info */}
        <div className="text-center">
          <p className="text-lg font-semibold">Paton Digital</p>
          <p className="text-sm text-gray-300">Proud Member of</p>
          <div className="flex justify-center mt-2">
            <Image
              src="/images/footer_img.png"
              alt="Lancaster County Chamber"
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-xl text-white">
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn className="hover:text-[#0077b5]" />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookF className="hover:text-[#1877f2]" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram className="hover:text-[#e1306c]" />
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400 mt-10">
        <p>
          Copyright © Paton Digital Marketing. All Rights Reserved.{" "}
          <Link href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/sitemap" className="underline hover:text-white">
            Site Map
          </Link>
        </p>
      </div>
    </footer>
  );
}
