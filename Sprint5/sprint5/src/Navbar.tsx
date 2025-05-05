import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="bg-black text-magenta-500 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold">PatriciaFrontEndDevPortifolio</div>
        <div className="flex space-x-4 sm:space-x-2 md:space-x-4">
          <a href="#" className="hover:text-white">
            <div className="relative">
              <div className="absolute -inset-1 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur-sm opacity-75 animate-pulse"></div>
              <div className="relative rounded-md p-2 sm:p-1">
                <AiFillHeart size={24} sm:size={20} />
              </div>
            </div>
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedin size={24} sm:size={20} />
          </a>
          {/* Removi o ícone do GitHub que não estava sendo usado */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
