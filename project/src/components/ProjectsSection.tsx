import React from 'react';
import { Server, Database, TerminalSquare, Cpu, ChevronRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mes projets récents</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Une sélection de projets backend démontrant mes compétences en architecture, performance et sécurité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-xl overflow-hidden group">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Server size={48} className="text-emerald-500/70" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                Système de microservices e-commerce
              </h3>
              <p className="text-gray-400 mb-4">
                Architecture de microservices complète pour une plateforme e-commerce à haute disponibilité gérant plus de 10K transactions quotidiennes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Kubernetes</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Redis</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">RabbitMQ</span>
              </div>
              <a href="#" className="text-emerald-500 font-medium flex items-center hover:text-emerald-400 transition-colors">
                Voir le projet <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl overflow-hidden group">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Database size={48} className="text-emerald-500/70" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                API de traitement de données financières
              </h3>
              <p className="text-gray-400 mb-4">
                Système d'analyse en temps réel pour les transactions financières avec conformité GDPR et traitement de 1M+ enregistrements par jour.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Apache Kafka</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Cassandra</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Docker</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">AWS</span>
              </div>
              <a href="#" className="text-emerald-500 font-medium flex items-center hover:text-emerald-400 transition-colors">
                Voir le projet <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl overflow-hidden group">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <TerminalSquare size={48} className="text-emerald-500/70" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                Système d'authentification distribué
              </h3>
              <p className="text-gray-400 mb-4">
                Service d'authentification et d'autorisation multi-tenant avec OAuth2, JWT et support d'authentification à deux facteurs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Java</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Spring Boot</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">MySQL</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Redis</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">OAuth2</span>
              </div>
              <a href="#" className="text-emerald-500 font-medium flex items-center hover:text-emerald-400 transition-colors">
                Voir le projet <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl overflow-hidden group">
            <div className="h-48 bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu size={48} className="text-emerald-500/70" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                API GraphQL pour application mobile
              </h3>
              <p className="text-gray-400 mb-4">
                Backend performant pour une application mobile avec plus de 500K utilisateurs, intégration de caching et optimisation des requêtes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">TypeScript</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">GraphQL</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">MongoDB</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">Redis</span>
                <span className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">GCP</span>
              </div>
              <a href="#" className="text-emerald-500 font-medium flex items-center hover:text-emerald-400 transition-colors">
                Voir le projet <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
