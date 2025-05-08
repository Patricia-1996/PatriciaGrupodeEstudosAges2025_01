import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="relative bg-pink-500 py-96">
      {/* Imagem de Sakura como enfeite */}
      <img
        src="/Images/sakura.png"
        alt="Sakura"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-120 opacity-80"
      />

      <img
        src="/Images/pckawaii.gif"
        alt="PC Kawaii"
        className="absolute right-0 top-1/2 transform translate-y-16 h-90 opacity-90"
      />

      <div className="max-w-4xl mx-auto">
        {/* Título alinhado à esquerda */}
        <h2 className="text-4xl font-jacquard mb-12 text-white text-left">
          My Skills
        </h2>

        {/* Grid alinhado à esquerda */}
        <div className="grid grid-cols-3 gap-8 text-left">
          {/* HTML5 */}
          <a
            href="https://www.w3schools.com/tags/tag_doctype.ASP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/html5-1.svg"
              alt="HTML5"
              className="h-32 transition-transform transform hover:scale-110"
            />
          </a>

          {/* CSS3 */}
          <a
            href="https://www.w3schools.com/CSSref/index.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/css3-1.svg"
              alt="CSS3"
              className="h-32 transition-transform transform hover:scale-110"
            />
          </a>

          {/* JavaScript */}
          <a
            href="https://www.w3schools.com/js/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/js.svg"
              alt="JavaScript"
              className="h-32 transition-transform transform hover:scale-110"
            />
          </a>

          {/* Git */}
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/git.svg"
              alt="Git"
              className="h-32 transition-transform transform hover:scale-110"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/github.svg"
              alt="GitHub"
              className="h-32 transition-transform transform hover:scale-110"
            />
          </a>

          {/* React */}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/react2.svg"
              alt="React"
              className="h-32 transition-transform transform hover:scale-110"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
