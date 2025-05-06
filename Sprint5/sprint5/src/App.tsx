import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import "./components;";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <About />
    </div>
  );
};

export default App;
