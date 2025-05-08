import React from "react";

// Defina as props do componente Navbar
interface NavbarProps {
  githubUsername: string;
  linkedinUrl?: string; // Opcional
}

const Navbar: React.FC<NavbarProps> = ({ githubUsername }) => {
  return (
    <nav className="bg-black bg-opacity-90 text-pink-400 flex justify-between items-center px-8 py-10 fixed top-0 left-0 w-full z-10">
      {/* Espaço vazio para alinhar o texto central */}
      <div className="flex space-x-4"></div>

      {/* Texto centralizado */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold text-pink-400">
        PatriciaFrontEndDevPortfolio
      </div>

      {/* Ícones alinhados à direita */}
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-pink-300 text-2xl">
          🏠
        </a>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300 text-2xl"
        >
          🐱
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
