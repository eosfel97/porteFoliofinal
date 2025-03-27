import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mon expérience professionnelle</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez mes expériences variées dans le domaine du développement, du retail et du service.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Expérience 2 : Concepteur Développeur d’Applications - Greta l’Essonne */}
          <div className="relative pl-8 border-l-2 border-slate-700">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full"></div>
            <div className="bg-slate-900 p-6 rounded-xl mt-[-6px] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Concepteur Développeur d’Applications</h3>
                  <p className="text-emerald-500">Greta l’Essonne</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400">2022 - 2023</div>
              </div>
              <p className="text-gray-300 mb-4">
                Stage de 11 semaines, centré sur la conception et l’implémentation d’applications web et mobiles.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Conception et développement d'une Applications</li>
                <li>Création d'une API REST avec Spring Boot</li>
                <li>Tests unitaires avec jUnit et documentation avec swagger</li>
              </ul>
            </div>
          </div>

          {/* Expérience 3 : Développeur web - Philiance formation */}
          <div className="relative pl-8 border-l-2 border-slate-700">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full"></div>
            <div className="bg-slate-900 p-6 rounded-xl mt-[-6px] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Développeur web</h3>
                  <p className="text-emerald-500">Philiance formation</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400">2021 - 2022</div>
              </div>
              <p className="text-gray-300 mb-4">
                Stage de 9 semaines, axé sur la création de sites et d’applications web interactifs.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Intégration HTML/CSS/JavaScript</li>
                <li>Utilisation de frameworks Symfony pour le front end</li>
                <li>Utilisation de PHP pour le backend</li>
                <li>Collaboration en  équipes pour le développement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
