import React from "react";
import Navbar from "./components/Navbar"; // Certifique-se do caminho correto
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Passe o valor para githubUsername */}
      <Navbar githubUsername="Patricia-1996" />
      <Hero />
      <Skills />
      <Project />
      <About />
    </div>
  );
};

export default App;
