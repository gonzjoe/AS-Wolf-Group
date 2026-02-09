
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <header className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Wolf Group Cartagena Headquarters" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIS0jHnDwS0_jih0uNSC8p1uKdwctHc_hutcKXSgHvJwuOHseU4VCL0x02WhcanUcBhoMaktIRAYieO29apqPXe4rmpVHDtc2_KUiMYn-yHqystjemCqqkPjyMRZ7JIwRq8GVfkzjhaw_zUkEzg_mOIPwCgaQ6KAq1OkcQgOV4DUzPwZTJpIKDIN0mHCqm0NpIND0tN88FJ5trEekk2tlpJaTAEVrVGdgqRecKPjo0AIcbGce0m7baCPQ55M5AR3690r06XlyKkQ" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 uppercase tracking-widest">Est. 2004</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">Más de 20 años liderando el transporte vertical</h1>
          </div>
        </div>
      </header>

      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
              <span className="material-icons text-primary text-3xl">rocket_launch</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Proveer soluciones de transporte vertical integrales que garanticen la movilidad segura y eficiente de las personas, integrando tecnología de vanguardia y un equipo humano altamente calificado.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
              <span className="material-icons text-primary text-3xl">visibility</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Consolidarnos como la empresa líder y referente en mantenimiento e instalación de ascensores en el Caribe Colombiano para el año 2030, basándonos en la excelencia técnica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'verified_user', title: 'Seguridad', desc: 'Protocolos rigurosos de intervención.' },
              { icon: 'psychology', title: 'Innovación', desc: 'Tecnología global de alto rendimiento.' },
              { icon: 'handshake', title: 'Compromiso', desc: 'Relaciones de confianza a largo plazo.' }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-icons text-primary text-4xl group-hover:text-white">{v.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
