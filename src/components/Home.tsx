import React, { useEffect, useState } from "react";
import estetica1 from "../assets/estetica-1.jpg";
import estetica2 from "../assets/estetica-2.jpg";
import estetica3 from "../assets/estetica-3.jpg";
import logo from "../assets/logo.svg";

const images = [estetica1, estetica2, estetica3];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca de imagem a cada 4 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center p-4"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="relative z-10 text-center">
        <img src={logo} alt="Logo" className="mx-auto lg:mx-0 lg:scale-150" />
        <p className="mt-4 text-lg lg:text-2xl font-bold">
          Brilhe connosco, em cada momento da sua vida
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-5 z-1"></div>{" "}
      {/* Overlay para escurecer as imagens */}
    </div>
  );
};

export default Home;
