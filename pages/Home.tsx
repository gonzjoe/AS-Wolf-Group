
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Modern luxury elevator with ocean view background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHL0R7DNNiIHz0gcBHSZh9v0G9WSokSYTYI7Cz0uW_xmBMruSSt042eMvZDl4YrX6D036XFcVBxdBaZ8n8jX4dagqPzupHwZqhYvNYhdqTE_4tdVqJlWR7yTTBf8On1Q1z3-t8zB7dMz7ehGPeD6VP2msG68v1DDQssJJmFHIBV8w8vIYk_j52HAGjc4DWazAPdl9ijaSFXTWxJFOJrcW6Hv9Y-QFRJPrjdLREh8qxuWDKHR8u0fz2PLQ5qfcZy3yKmnZS118cg" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
              20 Años de Trayectoria
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              Ascensores Wolf Group – Seguridad y tecnología en transporte vertical
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Líderes en Cartagena proporcionando soluciones inteligentes de movilidad con los más altos estándares de seguridad internacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all text-center">
                Solicitar cotización
              </Link>
              <Link to="/servicios" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all text-center">
                Nuestros Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-4xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Seguridad Certificada</h3>
              <p className="text-slate-500 dark:text-slate-400">Cumplimos rigurosamente con las normativas nacionales e internacionales de transporte vertical.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-4xl">memory</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología de Punta</h3>
              <p className="text-slate-500 dark:text-slate-400">Sistemas inteligentes de control y ahorro energético para edificios modernos y sostenibles.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons text-4xl">history</span>
              </div>
              <h3 className="text-xl font-bold mb-4">20 Años de Experiencia</h3>
              <p className="text-slate-500 dark:text-slate-400">Dos décadas garantizando el flujo constante y seguro de personas en la costa colombiana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid Preview */}
      <section className="py-24 bg-background-light dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Ofrecemos un portafolio integral adaptado a las necesidades arquitectónicas y funcionales de cada cliente.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all group">
                <div className="text-primary mb-6">
                  <span className="material-symbols-outlined text-5xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 mb-6">{service.description}</p>
                <Link to={`/servicios/${service.slug}`} className="text-primary font-bold flex items-center group-hover:gap-2 transition-all">
                  Ver detalles <span className="material-icons text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  alt="Professional technician inspecting a modern elevator control system" 
                  className="rounded-3xl shadow-2xl relative z-10" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpnaJQqiWSH3gsQPvHAoU3Ik8oyb54s4TOYyYjlv_dnk3MwZgEJ69CtD34Rlm5hc3DYVEF4w2PorE47M-Zgw9I-B_3VfcACgwsyXekTAm-am2bU7OAEgNNmn5OVJL865uvadke6hsOwAQvBTYaYzJh4bwpL9191oAW7RdlklhTd4oiT3FfSqhkOYnLf0KiaiPLhti5n_ac8GEfwdIgCo-wHhvpJUaD889xEFrBi5dYnGHCh8Mu84DRdAch-2fKuGh9wMPk6CrlYA" 
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-0"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-full -z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">¿Por qué elegirnos?</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Soporte 24/7', desc: 'Atención inmediata para emergencias en cualquier momento del día o la noche.' },
                  { title: 'Técnicos Certificados', desc: 'Personal altamente capacitado y certificado bajo normas de seguridad industrial.' },
                  { title: 'Repuestos Originales', desc: 'Utilizamos exclusivamente componentes originales para garantizar la longevidad del equipo.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 bg-primary text-white p-1 rounded-full"><span className="material-icons text-sm">check</span></div>
                    <div className="ml-4">
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center">
              <div className="flex justify-center mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i} className="material-icons">star</span>)}
              </div>
              <p className="text-xl italic font-light leading-relaxed mb-8">
                "El servicio de Wolf Group ha sido excepcional. Desde que contratamos su mantenimiento preventivo, la disponibilidad de los ascensores en nuestro edificio en Bocagrande ha sido del 100%. Altamente recomendados."
              </p>
              <div>
                <h6 className="font-bold text-lg">Andrés Villarreal</h6>
                <span className="text-white/60 text-sm">Administrador Edificio Horizonte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <div className="w-full text-left p-6 flex justify-between items-center bg-slate-50 dark:bg-slate-900 font-semibold cursor-pointer">
                <span>¿Cuál es el tiempo de respuesta en caso de emergencia?</span>
                <span className="material-icons">expand_more</span>
              </div>
              <div className="p-6 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                Nuestro equipo de respuesta rápida llega en promedio en menos de 30 minutos para emergencias en el área metropolitana de Cartagena.
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/planes" className="text-primary font-bold hover:underline">Ver todas las preguntas frecuentes</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
