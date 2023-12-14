"use client";
import Image from 'next/image';
import CustonButton from './CustomButton';  // Corregido el nombre del componente

const Hero = () => {
  const handleScroll = () => {
    // Tu lógica para el manejo de desplazamiento aquí
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x text-center'>
        <h1 className='hero__title text-5xl font-extrabold mb-6'>
         Reserve o alquile un coche de forma rápida 
        </h1>
        <p className='hero__subtitle mb-8'>
        Optimice su experiencia de alquiler de vehículos con nuestro sencillo proceso de reserva.
        </p>
        <CustonButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <img src="/hero.png" alt="hero" className="hero-image" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
