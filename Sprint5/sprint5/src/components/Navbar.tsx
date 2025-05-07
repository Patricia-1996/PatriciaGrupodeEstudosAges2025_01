import React from "react";

const Navbar: React.FC = () => {
  const githubUsername = "Patricia-1996";
  const linkedinUrl = ""; // Adicione seu LinkedIn URL aqui quando desbloqueado

  return (
    <nav className="bg-black/70 text-pink-400 flex justify-between items-center px-8 py-4 fixed top-0 left-0 w-full z-10">
      <div className="text-lg font-bold">PatriciaFrontEndDevPortfolio</div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-pink-300">
          {" "}
          {/* Alterado para #home */}
          🏠
        </a>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300"
          >
            💼
          </a>
        )}
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300"
        >
          🐱
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
