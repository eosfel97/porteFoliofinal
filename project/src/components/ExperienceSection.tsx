import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mon expérience professionnelle</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Plus de 5 ans d'expérience dans le développement backend pour des entreprises innovantes.
          </p>
        </div>
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-emerald-500">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-emerald-500 rounded-full"></div>
            <div className="bg-slate-900 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Lead Developer Backend</h3>
                  <p className="text-emerald-500">TechInnovate Solutions</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400">Jan 2021 - Présent</div>
              </div>
              <p className="text-gray-300 mb-4">
                Direction d'une équipe de 5 développeurs backend, conception de l'architecture système et mise en place des meilleures pratiques de développement.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Mise en place d'une architecture de microservices évolutive</li>
                <li>Réduction de 40% du temps de réponse des API</li>
                <li>Implémentation de CI/CD avec couverture de tests à 90%</li>
                <li>Migration vers une infrastructure cloud entièrement managée</li>
              </ul>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-slate-700">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full"></div>
            <div className="bg-slate-900 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Senior Backend Developer</h3>
                  <p className="text-emerald-500">FinTech Services</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400">Mar 2019 - Dec 2020</div>
              </div>
              <p className="text-gray-300 mb-4">
                Développement de services financiers sécurisés et conformes aux normes réglementaires pour une plateforme de paiement en ligne.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Conception d'API REST sécurisées pour les transactions financières</li>
                <li>Implémentation d'authentification multi-facteurs</li>
                <li>Optimisation des requêtes de base de données pour une performance maximale</li>
                <li>Développement de systèmes de détection de fraude en temps réel</li>
              </ul>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-slate-700">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full"></div>
            <div className="bg-slate-900 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Backend Developer</h3>
                  <p className="text-emerald-500">Cloud Solutions</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400">Jun 2017 - Feb 2019</div>
              </div>
              <p className="text-gray-300 mb-4">
                Développement de solutions cloud pour des clients dans différents secteurs, avec un focus sur l'évolutivité et la sécurité.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Intégration d'applications avec des services AWS</li>
                <li>Développement de microservices avec Node.js et Python</li>
                <li>Mise en place de bases de données distribuées</li>
                <li>Création d'outils d'automatisation pour le déploiement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
