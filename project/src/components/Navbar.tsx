import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import myLogo from '../asssets/logo.svg';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-500">
        <img src={myLogo} alt="Logo" className="h-16 w-auto" />
        </div>
        {/* Menu desktop */}
        <div className="hidden md:flex space-x-10 text-sm">
          <a href="#home" className="hover:text-emerald-400 transition-colors">Accueil</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">À propos</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projets</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Expérience</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        {/* Bouton pour mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Icônes sociales et bouton CV (visible sur desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
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
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-4">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Accueil</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">À propos</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Compétences</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Projets</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Expérience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Contact</a>
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
      )}
    </nav>
  );
};

export default Navbar;
