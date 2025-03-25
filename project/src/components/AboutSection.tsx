import React from 'react';
import myImage from '../asssets/test.jpg';



const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="rounded-xl overflow-hidden h-80 relative">
              <img 
                src={myImage} 
                alt="Étudiant en informatique" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-16">
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Je m'appelle GNAHIET et je suis un étudiant en licence informatique passionné par le développement web et mobile. Fort de mes expériences en stage – notamment en tant que développeur web chez Philiance formation et concepteur développeur d’applications au Greta l’Essonne – je recherche actuellement un stage de 6 mois à partir d'avril pour valider mon cursus et acquérir une expérience professionnelle enrichissante.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Doté d'un esprit d'équipe, d'une grande adaptabilité, d'un goût prononcé pour le challenge et d'une forte autonomie, je m'efforce de toujours fournir des solutions innovantes et performantes répondant aux besoins du métier.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
