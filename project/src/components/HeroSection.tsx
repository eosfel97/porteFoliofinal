import React from 'react';
import { Server, Database, Cpu, Layers, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Concepteur Développeur <span className="text-emerald-500">d'applications</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
           bases de données et développement d'API Rest
        </p>
        <div className="flex space-x-4">
          <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
            Contact <ChevronRight size={18} className="ml-2" />
          </a>
          <a href="#projects" className="border border-gray-700 hover:border-emerald-500 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Projets
          </a>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-3xl"></div>
        <div className="bg-slate-900/90 p-8 rounded-xl border border-slate-800 shadow-xl relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800 rounded-lg">
              <Server className="text-emerald-500 mb-2" size={24} />
              <h3 className="font-medium mb-1">API Design</h3>
              <p className="text-gray-400 text-sm">RESTful </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <Database className="text-emerald-500 mb-2" size={24} />
              <h3 className="font-medium mb-1">Database</h3>
              <p className="text-gray-400 text-sm">SQL </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <Cpu className="text-emerald-500 mb-2" size={24} />
              <h3 className="font-medium mb-1">Microservices</h3>
              <p className="text-gray-400 text-sm">Architecture & Design</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <Layers className="text-emerald-500 mb-2" size={24} />
              <h3 className="font-medium mb-1">DevOps</h3>
              <p className="text-gray-400 text-sm">CI/CD & Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
