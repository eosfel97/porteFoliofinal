import React from 'react';
import { Code, Database, Globe } from 'lucide-react';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mes compétences techniques</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Un aperçu des langages, frameworks et outils que j'utilise pour créer des applications robustes et performantes.
          </p>
        </div>

        {/* Grille de trois colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Colonne 1 : Langages & Frameworks */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <Code className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Langages & Frameworks</h3>
            <p className="text-gray-400 mb-4">
              Maîtrise des langages, frameworks et bibliothèques front-end / back-end.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                HTML5 / CSS3
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                JavaScript / TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Java (Spring)
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Python (Flask)
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                PHP (Symfony)
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Powershell
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Node.js
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                React / React Native / React Router
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                jQuery
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Bootstrap / Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Thymeleaf
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Vite
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                JWT
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Bases de données */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <Database className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Bases de données</h3>
            <p className="text-gray-400 mb-4">
              Conception et optimisation de solutions de stockage.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                MySQL
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Firebase
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Infrastructure & DevOps */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <Globe className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Infrastructure & DevOps</h3>
            <p className="text-gray-400 mb-4">
              Déploiement et gestion d'infrastructures cloud robustes.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Docker
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Git / GitHub
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                GitHub Actions
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Heroku
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Apache Tomcat / Apache Maven
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Swagger
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                NPM
              </li>
              <li className="flex items-center">
                <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                Figma / Canvaa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
