import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import estetica2 from "../assets/estetica-2.jpg";
import estetica3 from "../assets/estetica-3.jpg";

const About: React.FC = () => {
  const images = [estetica2, estetica3];
  const [displayText, setDisplayText] = useState("");
  const [textFinished, setTextFinished] = useState(false);
  const [showImages, setShowImages] = useState([false, false, false]);
  const fullText =
    "A Face Training Studio nasceu da experiência e da vontade de ajudar as pessoas a elevar a sua autoestima, cuidando da sua pele com tratamentos de excelência. Investimos nos melhores e mais modernos tratamentos, produtos e tecnologia para garantir os melhores resultados. \n\nA nossa equipa de profissionais compromete-se a trabalhar com honestidade e máxima excelência, oferecendo uma experiência única e personalizada. Queremos fazer parte da sua jornada em todas as etapas da sua vida. O nosso objetivo é chegar a todas as pessoas, brilhando ao seu lado em cada momento.";

  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    let currentText = "";
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentText += fullText[currentIndex];
      setDisplayText(currentText);
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
        hasAnimated.current = true;
        setTextFinished(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (textFinished) {
      const timer2 = setTimeout(() => setShowImages([true, true, false]), 1000);
      const timer3 = setTimeout(() => setShowImages([true, true, true]), 1500);

      return () => {
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [textFinished]);

  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center p-4"
    >
      <motion.div
        className="max-w-2xl text-center lg:text-left mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Sobre Nós</h1>
        <motion.p
          className="text-base lg:text-lg whitespace-pre-line text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
        </motion.p>
      </motion.div>

      {textFinished && (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:ml-8 mt-8 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-4">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Estética ${index + 1}`}
              className="w-full max-w-xs rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: showImages[index] ? 1 : 0,
                x: showImages[index] ? 0 : 50,
              }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default About;