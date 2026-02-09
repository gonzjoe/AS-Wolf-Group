
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud enviada correctamente. Un especialista lo contactará pronto.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-white dark:bg-slate-900 py-16 overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Solicita tu <span className="text-primary">Cotización</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Expertos en mantenimiento, instalación y modernización de ascensores en Cartagena. Recibe asesoría técnica profesional en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Formulario de Contacto</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre Completo</label>
                  <input required className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Ej: Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono / WhatsApp</label>
                  <input required className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Ej: 310 000 0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Empresa o Edificio</label>
                <input required className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Nombre del conjunto o razón social" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Servicio Requerido</label>
                <select className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                  <option>Mantenimiento Preventivo</option>
                  <option>Reparación de Emergencia</option>
                  <option>Instalación Nueva</option>
                  <option>Modernización de Equipos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje Adicional</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Cuéntanos más sobre tus necesidades..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                Enviar Solicitud
                <span className="material-icons group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://wa.me/573105167137" target="_blank" className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary transition-all group shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="material-icons">whatsapp</i>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</span>
                <span className="text-lg font-bold">310 516 7137</span>
              </a>
              <a href="mailto:gonzjoel@gmail.com" className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary transition-all group shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className="material-icons">email</i>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                <span className="text-lg font-bold">gonzjoel@gmail.com</span>
              </a>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-xl h-[300px] relative overflow-hidden shadow-lg group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjfDppBw3kkHTYqEt7CB2zMfHaGRA6zLsPEfqNdsJLG_524Kx6kJfOX-byLDt6i8Ig5IuPQD3zHM7GPzWVI_0D6LTX5FW_XG33NO9iYe2MMFB6YVjVaDqEHRv9qCLqtvkHFWLxo-lWPGWMC6CekDmWp_Ly_sVY5tEvCpfnRDhijN1zGRYECSwA_f2sN2NL5CJkGszDEt-omL1Rqv3qmJjuyslJxBhA9vrv_MYlCCSTElze5vSLlja7xSvVfec1zFE_LVAmAlygJA"
                alt="Map of Cartagena"
                className="w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 p-3 rounded-lg shadow-lg border border-primary/20">
                <p className="text-primary font-bold text-sm flex items-center gap-1">
                  <span className="material-icons text-sm">location_on</span> Cobertura Cartagena
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Bocagrande, Manga, Zona Norte y Castillogrande.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
