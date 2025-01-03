
import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para verificar o user agent
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // Expressão regular para detectar dispositivos móveis
      return /android|iphone|ipad|iPod|opera mini|iemobile|wpdesktop/i.test(userAgent);
    };

    setIsMobile(checkIsMobile());

    // Opcional: Adicionar listener para mudanças no redimensionamento
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
