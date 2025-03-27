import React, { useState } from 'react';
import { Server, Database, TerminalSquare, Cpu, ChevronRight, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Système de microservices e-commerce",
    description: "Architecture de microservices complète pour une plateforme e-commerce à haute disponibilité gérant plus de 10K transactions quotidiennes.",
    icon: <Server size={48} className="text-emerald-500/70" />,
    tags: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "RabbitMQ"],
    images: ["/images/project1_1.jpg", "/images/project1_2.jpg"],
    github: "https://github.com/devback/project1",
  },
  {
    id: 2,
    title: "API de traitement de données financières",
    description: "Système d'analyse en temps réel pour les transactions financières avec conformité GDPR et traitement de 1M+ enregistrements par jour.",
    icon: <Database size={48} className="text-emerald-500/70" />,
    tags: ["Python", "Apache Kafka", "Cassandra", "Docker", "AWS"],
    images: ["/images/project2_1.jpg"],
    github: "https://github.com/devback/project2",
  },
  {
    id: 3,
    title: "Système d'authentification distribué",
    description: "Service d'authentification et d'autorisation multi-tenant avec OAuth2, JWT et support d'authentification à deux facteurs.",
    icon: <TerminalSquare size={48} className="text-emerald-500/70" />,
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "OAuth2"],
    images: ["/images/project3_1.jpg", "/images/project3_2.jpg", "/images/project3_3.jpg"],
    github: "https://github.com/devback/project3",
  },
  {
    id: 4,
    title: "API GraphQL pour application mobile",
    description: "Backend performant pour une application mobile avec plus de 500K utilisateurs, intégration de caching et optimisation des requêtes.",
    icon: <Cpu size={48} className="text-emerald-500/70" />,
    tags: ["TypeScript", "GraphQL", "MongoDB", "Redis", "GCP"],
    images: ["/images/project4_1.jpg"],
    github: "https://github.com/devback/project4",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const nextImage = () => {
    if (selectedProjectIndex === null) return;
    const images = projectsData[selectedProjectIndex].images;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedProjectIndex === null) return;
    const images = projectsData[selectedProjectIndex].images;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="projects" className="bg-slate-900 py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mes projets récents</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Une sélection de projets backend démontrant mes compétences en architecture, performance et sécurité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={project.id} className="bg-slate-800 rounded-xl overflow-hidden group">
              <div className="h-48 bg-slate-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openProject(index)}
                  className="text-emerald-500 font-medium flex items-center hover:text-emerald-400 transition-colors"
                >
                  Voir le projet <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-slate-800 rounded-xl p-8 max-w-2xl w-full relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-emerald-400"
            >
              Fermer
            </button>
            {/* Carousel d'images */}
            <div className="mb-6 relative">
              {projectsData[selectedProjectIndex].images.length > 1 && (
                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-700 text-white p-2 rounded-full hover:bg-emerald-500">
                  {/* Flèche gauche */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <img 
                src={projectsData[selectedProjectIndex].images[currentImageIndex]} 
                alt={projectsData[selectedProjectIndex].title} 
                className="w-full h-64 object-cover rounded-md"
              />
              {projectsData[selectedProjectIndex].images.length > 1 && (
                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-700 text-white p-2 rounded-full hover:bg-emerald-500">
                  {/* Flèche droite */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-4">{projectsData[selectedProjectIndex].title}</h3>
            <p className="text-gray-300 mb-4">{projectsData[selectedProjectIndex].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projectsData[selectedProjectIndex].tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-700 text-emerald-400 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <a 
                href={projectsData[selectedProjectIndex].github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-500 font-medium flex items-center hover:text-emerald-400 transition-colors"
              >
                <Github size={24} />
                <span className="ml-2">Voir sur GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
