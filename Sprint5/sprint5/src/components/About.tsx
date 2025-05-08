import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-96">
      {/* Imagem Nintendo DS à direita */}
      <img
        src="/Images/nintendods.gif"
        alt="Nintendo DS"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-96 opacity-90"
      />

      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-pixel mb-8 text-pink-400">
          About my hobbies
        </h2>
        <p className="mb-4">
          I'm passionate about drawing, 3D modeling, games, fashion, music, and
          the process of learning languages.
        </p>
        <p className="mb-4">
          I also love watching anime, dorama, and series, and I'm deeply
          interested in geek/nerd culture, with a strong focus on Japanese and
          Asian culture.
        </p>
        <p className="mb-4">
          I'm currently studying Japanese (somewhere between N5 and N4), and my
          English is at an intermediate level. Although I understand a lot, I'm
          actively working on improving my speaking and writing skills.
        </p>
        <footer className="mt-8 text-gray-500">
          © 2025 PatriciaFrontEndDevPortfolio. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default About;
