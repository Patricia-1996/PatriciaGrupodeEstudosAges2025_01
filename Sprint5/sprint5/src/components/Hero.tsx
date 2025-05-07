// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-black text-white py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Welcome! <br /> I'm Patricia!
        </h1>
        <div className="hero-image-container"></div>
        <img
          src="/images/image1.png"
          alt="Foto da Patricia"
          className="hero-image"
        />
        <p className="text-lg mb-8">
          <strong>Education:</strong> Born in 1996, I am Brazilian and hold a
          Technician degree in Digital Game Programming from the Universidade
          Ritter dos Reis (UniRitter) (2014-2015). I am currently pursuing a
          Bachelor's degree in Computer Science at the Pontifícia Universidade
          Católica do Rio Grande do Sul (PUCRS) (2022 - in progress).
        </p>
      </div>
    </section>
  );
};

export default Hero;
