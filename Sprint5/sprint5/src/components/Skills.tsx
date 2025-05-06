import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="bg-pink-500 text-center py-16">
      <h2 className="text-3xl font-pixel mb-8 text-white">My Skills</h2>
      <div className="flex justify-center space-x-8">
        <img src="/html5.svg" alt="HTML5" className="h-16" />
        <img src="/css3.svg" alt="CSS3" className="h-16" />
        <img src="/javascript.svg" alt="JavaScript" className="h-16" />
        <img src="/git.svg" alt="Git" className="h-16" />
        <img src="/github.svg" alt="GitHub" className="h-16" />
        <img src="/react.svg" alt="React" className="h-16" />
      </div>
    </section>
  );
};

export default Skills;
