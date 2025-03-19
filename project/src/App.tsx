import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Server, 
  Database, 
  Code, 
  Globe, 
  TerminalSquare,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-500"><img src="./logo.svg"alt="Logos" /><span className="text-white">.io</span></div>
          <div className="hidden md:flex space-x-10 text-sm">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Accueil</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">À propos</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projets</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Expérience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
              CV
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Développeur <span className="text-emerald-500">Backend</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Spécialiste en architecture système, bases de données et développement d'API
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
                <p className="text-gray-400 text-sm">RESTful & GraphQL</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <Database className="text-emerald-500 mb-2" size={24} />
                <h3 className="font-medium mb-1">Database</h3>
                <p className="text-gray-400 text-sm">SQL & NoSQL</p>
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

      {/* About Section */}
      <section id="about" className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="rounded-xl overflow-hidden h-80 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600" 
                  alt="Backend Developer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-16">
              <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Je suis un développeur backend passionné avec plus de 5 ans d'expérience dans la conception 
                et le développement de systèmes robustes, évolutifs et performants. Mon expertise couvre les 
                bases de données, les API, l'architecture des microservices et l'infrastructure cloud.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                J'aime relever des défis techniques complexes et créer des solutions élégantes qui répondent 
                aux besoins métier tout en garantissant une haute performance et une sécurité optimale.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">Python</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">Java</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">SQL</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">NoSQL</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">Docker</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">Kubernetes</span>
                <span className="bg-slate-800 text-emerald-400 text-sm px-3 py-1 rounded-full">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Mes compétences techniques</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Une expertise approfondie dans les technologies backend et DevOps pour créer des applications robustes et évolutives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <Code className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Langages de programmation</h3>
              <p className="text-gray-400 mb-4">Maîtrise des langages serveur les plus demandés du marché</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Node.js / JavaScript / TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Python (Django, Flask)
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Java (Spring Boot)
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Go
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  PHP (Laravel)
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <Database className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Bases de données</h3>
              <p className="text-gray-400 mb-4">Conception et optimisation de solutions de stockage de données</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  PostgreSQL, MySQL, MariaDB
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  MongoDB, Cassandra
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Redis, Memcached
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Elasticsearch
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Conception de schémas & optimisation
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
              <Globe className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Infrastructure & DevOps</h3>
              <p className="text-gray-400 mb-4">Déploiement et gestion d'infrastructures cloud robustes</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Docker, Kubernetes
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  AWS, GCP, Azure
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  CI/CD (Jenkins, GitHub Actions)
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Terraform, Ansible
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                  Monitoring (Prometheus, Grafana)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Système de microservices e-commerce</h3>
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">API de traitement de données financières</h3>
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Système d'authentification distribué</h3>
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">API GraphQL pour application mobile</h3>
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

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Me contacter</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Une question, une proposition de projet ou simplement envie d'échanger ? N'hésitez pas à me contacter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-emerald-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@devback.io" className="text-gray-400 hover:text-emerald-400 transition-colors">contact@devback.io</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="text-emerald-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/backenddev" className="text-gray-400 hover:text-emerald-400 transition-colors">linkedin.com/in/backenddev</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="text-emerald-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a href="https://github.com/devback" className="text-gray-400 hover:text-emerald-400 transition-colors">github.com/devback</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Disponibilité</h4>
                <p className="text-gray-400 mb-4">
                  Je suis actuellement disponible pour des projets freelance ou des opportunités de collaboration à long terme.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-green-400">Disponible pour de nouveaux projets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-emerald-500 mb-4 md:mb-0">Devback<span className="text-white">.io</span></div>
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">Accueil</a>
              <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">À propos</a>
              <a href="#skills" className="text-gray-400 hover:text-emerald-400 transition-colors">Compétences</a>
              <a href="#projects" className="text-gray-400 hover:text-emerald-400 transition-colors">Projets</a>
              <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@devback.io" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Devback.io. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;