impimport React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;