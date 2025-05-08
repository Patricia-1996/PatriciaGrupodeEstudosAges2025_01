import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-black text-white py-96 w-full">
      <div className="max-w-7xl mx-auto px-8 flex items-center">
        {/* Imagem à esquerda com animação */}
        <motion.div
          className="flex-shrink-0 mr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src="/Images/image1.png"
            alt="Foto da Patricia"
            className="rounded-lg shadow-lg max-w-lg"
          />
        </motion.div>

        {/* Texto à direita */}
        <div>
          {/* Título com transição de lado */}
          <motion.h1
            className="text-5xl font-jacquard mb-6 text-center text-white"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Welcome! <br />
            <motion.span
              className="text-pink-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              I'm Patricia!
            </motion.span>
          </motion.h1>

          <p className="text-lg mb-8 text-left">
            <strong>Education:</strong> Born in 1996, I am Brazilian and hold a
            Technician degree in Digital Game Programming from the Universidade
            Ritter dos Reis (UniRitter) (2014-2015). I am currently pursuing a
            Bachelor's degree in Computer Science at the Pontifícia Universidade
            Católica do Rio Grande do Sul (PUCRS) (2022 - in progress).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
