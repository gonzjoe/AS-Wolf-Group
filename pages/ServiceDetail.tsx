
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import NotFound from './NotFound';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <NotFound />;

  return (
    <div>
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
                <span className="material-icons text-sm">settings_suggest</span>
                <span className="text-xs font-bold uppercase tracking-wider">Ingeniería de Alto Rendimiento</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
                {service.description} Solución robusta y eficiente para su proyecto en Cartagena. Garantizamos seguridad y cumplimiento normativo en cada instalación.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contacto" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/25">
                  <span className="material-icons">event_available</span>
                  Agendar inspección gratuita
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={service.image} alt={service.title} className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Especificaciones Técnicas</h2>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider">Característica</th>
                  <th className="p-6 text-sm font-semibold uppercase tracking-wider">Detalle Estándar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-primary/5">
                  <td className="p-6 font-bold">Capacidad</td>
                  <td className="p-6">Desde 450kg hasta 2500kg (Personalizable)</td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="p-6 font-bold">Velocidad</td>
                  <td className="p-6">1.0 m/s - 2.5 m/s</td>
                </tr>
                <tr className="hover:bg-primary/5">
                  <td className="p-6 font-bold">Materiales</td>
                  <td className="p-6">Acero Inoxidable AISI 304 (Grado Marino)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
