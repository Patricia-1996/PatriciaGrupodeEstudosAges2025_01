import React from "react";

const Project: React.FC = () => {
  return (
    <section className="bg-pink-500 text-center py-16">
      <h2 className="text-3xl font-pixel mb-8 text-white">
        Front End Projects
      </h2>
      <div className="space-y-8">
        <div className="bg-pink-400 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Calculator</h3>
          <p className="mb-4">Created with HTML, CSS and JavaScript</p>
          <button className="bg-black text-white py-2 px-4 rounded">
            View the project
          </button>
        </div>
        <div className="bg-pink-400 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Coinverter</h3>
          <p className="mb-4">
            A coin converter created with HTML, CSS, JavaScript and API
          </p>
          <button className="bg-black text-white py-2 px-4 rounded">
            View the project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
