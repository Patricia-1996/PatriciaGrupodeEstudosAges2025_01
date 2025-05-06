import React from "react";
//import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="profile-pic">
          <img
            src="/profile-photo.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="hero-text">
          <h1>
            Welcome! <br /> I'm Patricia!
          </h1>
          <p>
            <strong>Education:</strong> Born in 1996, I am Brazilian and hold a
            Technician degree in Digital Game Programming from the Universidade
            Ritter dos Reis (UniRitter) (2014-2015). I am currently pursuing a
            Bachelor's degree in Computer Science at the Pontifícia Universidade
            Católica do Rio Grande do Sul (PUCRS) (2022 - in progress).
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
