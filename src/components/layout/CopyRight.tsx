// components/Copyright.tsx

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Copyright: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="w-full mb-2">
          {/* Social Media Platforms */}
          <h3 className="font-bold text-lg mb-2">FOLLOW US</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 border border-[#97CCD1] rounded p-2 flex justify-center items-center hover:shadow-lg hover:shadow-blue-600/50 transition-all"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 border border-[#97CCD1] rounded p-2 flex justify-center items-center hover:shadow-lg hover:shadow-blue-400/50 transition-all"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 border border-[#97CCD1] rounded p-2 flex justify-center items-center hover:shadow-lg hover:shadow-blue-700/50 transition-all"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 border border-[#97CCD1] rounded p-2 flex justify-center items-center hover:shadow-lg hover:shadow-pink-600/50 transition-all"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Guddu Catering Services. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;