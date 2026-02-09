
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Branding */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-white text-base">elevator</span>
              </div>
              <span className="text-xl font-extrabold tracking-tighter uppercase">Wolf Group</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Expertos en movilidad vertical en Cartagena. Seguridad, tecnología y confianza en cada trayecto desde hace más de 20 años.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-primary transition-colors text-white">
                <i className="material-icons text-xl">facebook</i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-primary transition-colors text-white">
                <i className="material-icons text-xl">camera_alt</i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-primary transition-colors text-white">
                <i className="material-icons text-xl">link</i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Compañía</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Nuestros Proyectos</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Certificaciones</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog de Ingeniería</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Servicios</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/servicios/montacargas" className="hover:text-white transition-colors">Ascensores de Carga</Link></li>
              <li><Link to="/planes" className="hover:text-white transition-colors">Mantenimiento 24/7</Link></li>
              <li><Link to="/servicios/modernizacion" className="hover:text-white transition-colors">Modernización</Link></li>
              <li><Link to="/servicios/residenciales" className="hover:text-white transition-colors">Ascensores Residenciales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Contacto</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="material-icons text-primary text-sm mt-1 mr-3">location_on</span>
                <a href="https://maps.google.com/?q=Barrio+Manga+Calle+26+18-22+Cartagena" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Barrio Manga, Calle 26 #18-22, Cartagena, Colombia
                </a>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-primary text-sm mr-3">phone</span>
                <a href="tel:+573105167137" className="hover:text-white transition-colors">+57 (310) 516 7137</a>
              </li>
              <li className="flex items-center">
                <span className="material-icons text-primary text-sm mr-3">email</span>
                <a href="mailto:gonzjoel@gmail.com" className="hover:text-white transition-colors">gonzjoel@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>© 2024 Ascensores Wolf Group. Todos los derechos reservados. Nit: 900.xxx.xxx-x</p>
          <div className="flex space-x-6">
            <Link to="/contacto" className="hover:text-white">Política de Privacidad</Link>
            <Link to="/contacto" className="hover:text-white">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
