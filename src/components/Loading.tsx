import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Loading: React.FC<{
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Duração do loading (3 segundos aqui)

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      initial={{ x: 0 }}
      animate={{ x: "100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 2 }} // Animação que move para a esquerda após 2 segundos
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-96" // Logo maior
        initial={{ opacity: 1 }}
        animate={{ scale: [1, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: 2, repeatType: "mirror" }}
      />
    </motion.div>
  );
};

export default Loading;
