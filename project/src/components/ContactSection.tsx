import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter l'appel à votre API de traitement du formulaire
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
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
  );
};

export default ContactSection;
