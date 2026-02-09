
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Residencial' | 'Comercial' | 'Industrial' | 'Salud'>('Todos');

  const filteredServices = filter === 'Todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter || (filter === 'Todos' && s.category === 'Especial'));

  const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Salud'];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 tracking-widest uppercase">Especialistas en Cartagena</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Soluciones de Transporte Vertical <br className="hidden md:block" /> de <span className="text-primary">Clase Mundial</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Diseño, instalación y mantenimiento de equipos de elevación con los más altos estándares de seguridad y eficiencia energética para el sector caribeño.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded text-sm font-bold transition-all ${
                  filter === cat ? 'bg-primary text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-500 font-medium italic">
            Mostrando {filteredServices.length} categorías de equipos especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/60 dark:border-slate-700/50">
              <div className="h-60 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={service.image} 
                  alt={service.title} 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-primary uppercase">
                  {service.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={`/servicios/${service.slug}`} className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all uppercase tracking-wider">
                  Ver Más <span className="material-icons text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[40px] border-white"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesita una solución a medida?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Nuestro equipo de ingenieros expertos en Cartagena está listo para asesorarlo en su próximo proyecto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto" className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-2xl transition-all uppercase tracking-wider">
                Contactar Asesor
              </Link>
              <Link to="/servicios" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all uppercase tracking-wider">
                Ver Portafolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
