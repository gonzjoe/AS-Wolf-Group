
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-300 dark:border-slate-700">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-primary/5">
              <span className="material-icons text-primary/40 text-8xl mb-4">warning_amber</span>
              <div className="bg-white dark:bg-slate-900 px-6 py-4 rounded-lg shadow-lg border-2 border-primary/20 transform rotate-2">
                <p className="text-primary font-bold text-lg uppercase tracking-widest">Página en mantenimiento</p>
                <p className="text-slate-500 text-sm">o no encontrada</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-red-500 font-mono text-2xl px-6 py-2 rounded-md border-4 border-slate-700 shadow-xl flex items-center gap-2">
            <span className="animate-pulse">404</span>
            <span className="text-xs text-slate-400 uppercase">Error</span>
          </div>
        </div>

        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            ¡Ups! Parece que este ascensor <span className="text-primary">no llega a este piso.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            La página que busca no existe o ha sido movida. No se preocupe, lo ayudaremos a bajar de forma segura a un nivel conocido.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-primary/25">
              <span className="material-icons">home</span> Volver al Inicio
            </Link>
            <Link to="/contacto" className="px-8 py-4 border-2 border-primary/20 text-primary font-bold rounded-xl flex items-center gap-2 transition-all">
              <span className="material-icons">support_agent</span> Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
