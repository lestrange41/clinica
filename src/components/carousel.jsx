/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styles/carousel.css'; // Archivo de estilos para el carrusel

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para cambiar de diapositiva automáticamente cada cierto tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    }, 5000); // Cambia cada 3 segundos (3000ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="slides">
        <div
          className={currentSlide === 0 ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url('https://ceodontomed.com/wp-content/uploads/2021/12/Clinica-Dental-confianza-murcia-999x499.jpg')` }} // Reemplaza con la URL de tu imagen
        ></div>
        <div
          className={currentSlide === 1 ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url('https://dentalgranado.com/wp-content/uploads/2019/02/dentista-dos-hermanas.jpg')` }} // Reemplaza con la URL de tu imagen
        ></div>
        {/* Repite esta estructura para cada imagen */}
      </div>
    </div>
  );
};

export default Carousel;