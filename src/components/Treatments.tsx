import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { treatments } from "./mock";

const Treatments: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const selectedCategory = treatments[selectedCategoryIndex];
  const categoryRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (categoryRefs.current[selectedCategoryIndex]) {
      categoryRefs.current[selectedCategoryIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedCategoryIndex]);

  return (
    <div
      id="treatments"
      className="min-h-screen bg-white flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Título e Descrição */}
      <motion.div
        className="max-w-2xl text-center mb-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Nossos Tratamentos
        </h1>
        <span className="text-base lg:text-lg text-gray-700 lg:whitespace-nowrap">
          Explore nossos tratamentos exclusivos, cuidadosamente selecionados
          para melhorar sua beleza e bem-estar.
        </span>
      </motion.div>

      {/* Abas de Categorias */}
      <div className="mb-6 w-full md:overflow-x-hidden overflow-x-auto">
        <ul className="flex justify-start md:justify-center space-x-8 md:space-x-6">
          {treatments.map((category, index) => (
            <motion.li
              key={index}
              className={`cursor-pointer pb-2 whitespace-nowrap font-bold ${
                selectedCategoryIndex === index
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
              ref={(el) => (categoryRefs.current[index] = el)}
              onClick={() => setSelectedCategoryIndex(index)}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {category.title}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Swiper com os Cards */}
      <motion.div
        className="w-full lg:w-3/4 mt-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ paddingBottom: "40px" }} // Adiciona espaço para os bullets
      >
        <Swiper
          modules={[Pagination]} // Instalação do módulo Pagination
          centeredSlides={true} // Centraliza o slide no modo responsivo
          pagination={{
            clickable: true,
            el: ".swiper-pagination", // Usando a classe padrão do Swiper
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
            1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
            1280: { slidesPerView: 4, spaceBetween: 5, centeredSlides: false },
          }}
        >
          {selectedCategory.items.map((item, idx) => (
            <SwiperSlide key={idx} className="pb-6">
              <motion.div
                className="p-4 border rounded-lg bg-white shadow-lg flex flex-col items-center mx-auto w-72"
                style={{ height: "350px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-md font-semibold mb-2 text-center text-gray-800 truncate w-full">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm text-left overflow-hidden overflow-ellipsis h-20">
                  {item.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="swiper-pagination mt-4"></div>
      </motion.div>
    </div>
  );
};

export default Treatments;
