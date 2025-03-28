import React, { useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Affiche le splash pendant 3 secondes
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Remplacez le chemin par celui de votre image */}
      <img src="/assets/maPhoto.jpg" alt="Présentation" className="object-cover" />
    </div>
  );
};

export default SplashScreen;
