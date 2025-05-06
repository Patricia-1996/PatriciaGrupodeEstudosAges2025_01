import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-900 text-pink-400 flex justify-between items-center px-8 py-4">
      <div className="text-lg font-bold">PatriciaFrontEndDevPortfolio</div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-pink-300">
          🏠
        </a>
        <a href="#linkedin" className="hover:text-pink-300">
          💼
        </a>
        <a href="#github" className="hover:text-pink-300">
          🐱
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
