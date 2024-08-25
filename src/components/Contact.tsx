import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Visite-nos em nossa localização, onde oferecemos um ambiente acolhedor e sofisticado para cuidar da sua beleza e bem-estar. Estamos sempre disponíveis para atender suas necessidades e garantir a melhor experiência possível.";

  const hasAnimated = useRef(false);

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
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="location"
      className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center p-4"
    >
      <motion.div
        className="lg:w-1/2 w-full p-6 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Localização</h2>
        <p className="text-base lg:text-lg text-gray-700 mb-6">{displayText}</p>
        <div className="flex justify-center lg:justify-start space-x-6 text-3xl text-gray-700 mb-6">
          <a
            href="https://www.instagram.com/facetrainingstudiobyjs?igsh=b2t4dDFpZDIwbWw3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/913533497"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-8 text-gray-700 space-y-4">
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div className="space-y-1 text-left">
              <h3 className="font-semibold text-lg">Morada da Clínica:</h3>
              <span>
                R. Rodrigo Albuquerque e Melo 27, 2795-232 Linda-a-Velha,
                Portugal
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <FaPhoneAlt className="text-xl mt-1" />
            <div className="space-y-1 text-left">
              <h3 className="font-semibold text-lg">Telefone:</h3>
              <span>913 533 497</span>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <FaCalendarAlt className="text-xl mt-1" />
            <div className="space-y-1 text-left">
              <h3 className="font-semibold text-lg">Dia de Abertura:</h3>
              <p>Previsto para dia 16-22 setembro</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 w-full p-6 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.4890919944296!2d-9.241971135626237!3d38.7051717401909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecc78aec221d5%3A0x9ac7faa77cf0bdf9!2sR.%20Rodrigo%20Albuquerque%20e%20Melo%2027%2C%202795-232%20Linda-a-Velha%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1724556668244!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
