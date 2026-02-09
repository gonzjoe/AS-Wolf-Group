
import React from 'react';
import { Link } from 'react-router-dom';

const Maintenance: React.FC = () => {
  const plans = [
    {
      name: 'Preventivo',
      tagline: 'Cuidado Básico',
      features: ['Revisión técnica mensual', 'Lubricación y limpieza', 'Ajustes de seguridad'],
      excluded: ['Repuestos no incluidos'],
      recommended: false
    },
    {
      name: 'Correctivo',
      tagline: 'Reparaciones Prioritarias',
      features: ['Todo lo del Plan Preventivo', 'Asistencia técnica prioritaria', 'Descuento en repuestos', 'Soporte telefónico 24/7'],
      recommended: true
    },
    {
      name: 'Todo Incluido',
      tagline: 'Cobertura Total',
      features: ['Todo lo del Plan Correctivo', 'Repuestos originales incluidos', 'Mano de obra ilimitada', 'Monitoreo remoto 24/7'],
      recommended: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
          Mantenimiento y Emergencias <span className="text-primary">24/7</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Garantizamos la operatividad y seguridad de sus equipos de elevación en Cartagena con tiempos de respuesta récord y personal altamente calificado.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Plans */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col border ${plan.recommended ? 'border-primary ring-2 ring-primary/20 scale-105 z-10' : 'border-slate-200 dark:border-slate-800'}`}>
                {plan.recommended && <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 text-center">Recomendado</div>}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{plan.tagline}</p>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-4 text-sm">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-icons text-green-500 text-sm mt-0.5">check_circle</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {plan.excluded?.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400">
                        <span className="material-icons text-sm mt-0.5">cancel</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
                  <Link 
                    to="/contacto"
                    className={`block w-full text-center py-2.5 font-bold rounded-lg transition-all ${plan.recommended ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
                  >
                    Cotizar Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full text-primary">
                <span className="material-icons text-3xl">verified_user</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Técnicos Certificados</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Certificación nacional de seguridad.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-full text-primary">
                <span className="material-icons text-3xl">settings_input_component</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Repuestos Originales</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Componentes de fábrica certificados.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Panel */}
        <aside className="lg:col-span-4 sticky top-24">
          <div className="bg-primary rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">Centro de Respuesta 24/7</span>
              </div>
              <h2 className="text-3xl font-black mb-4">¿Emergencia en su edificio?</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Contamos con unidades móviles distribuidas en Cartagena para una respuesta en menos de <span className="text-white font-bold">30 minutos</span>.
              </p>
              <div className="space-y-6">
                <a href="tel:+573105167137" className="block w-full bg-white text-primary text-center py-5 rounded-xl font-black text-xl hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center gap-3">
                  <span className="material-icons">phone_in_talk</span>
                  310 516 7137
                </a>
                <p className="text-center text-xs opacity-70">Toque para llamar inmediatamente</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Maintenance;
