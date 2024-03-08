import { useState, useEffect, use } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Suscribirse al evento resize
    window.addEventListener('resize', handleResize);

    // Limpiar el efecto de suscripción al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El array vacío como segundo argumento asegura que este efecto se ejecute solo una vez, al montar el componente

  return { 
    windowWidth 
  };
}