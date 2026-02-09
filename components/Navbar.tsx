
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Planes', path: '/planes' },
    { name: 'Blog', path: '/blog' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cierra menús al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-white">elevator</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tighter text-primary uppercase">Wolf Group</span>
              <span className="text-[10px] text-secondary font-bold tracking-[0.2em] uppercase">Ascensores</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              Inicio
            </Link>

            {/* Dropdown Servicios */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-semibold transition-colors hover:text-primary ${
                  location.pathname.startsWith('/servicios') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <span>Servicios</span>
                <span className={`material-icons text-sm transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              {/* Dropdown Panel - Ajustado para más items */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-[650px] transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/servicios/${service.slug}`}
                        className="flex items-start p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                          <span className="material-symbols-outlined text-xl">{service.icon}</span>
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 truncate">{service.title}</h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <Link to="/servicios" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:underline">
                      Ver catálogo completo <span className="material-icons text-sm ml-2">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.filter(l => l.path !== '/' && l.path !== '/servicios').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+573105167137"
              className="flex items-center space-x-1 text-red-600 font-bold border-2 border-red-600 px-4 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition-all text-xs"
            >
              <span className="material-icons text-sm">emergency</span>
              <span>EMERGENCIAS 24/7</span>
            </a>
            <Link 
              to="/contacto"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl transition-all"
            >
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                isActive('/') ? 'bg-primary/10 text-primary' : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              Inicio
            </Link>

            {/* Mobile Services Submenu */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname.startsWith('/servicios') ? 'text-primary' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <span>Servicios</span>
                <span className={`material-icons transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-6 space-y-1 mt-1 mb-2">
                  <Link
                    to="/servicios"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50"
                  >
                    Resumen General
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicios/${service.slug}`}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.filter(l => l.path !== '/' && l.path !== '/servicios').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex flex-col space-y-3 px-3 border-t border-slate-100 dark:border-slate-800 mt-4">
              <a 
                href="tel:+573105167137"
                className="flex items-center justify-center space-x-2 text-red-600 font-bold border-2 border-red-600 px-4 py-3 rounded-xl"
              >
                <span className="material-icons">emergency</span>
                <span>EMERGENCIAS</span>
              </a>
              <Link 
                to="/contacto"
                className="bg-primary text-white py-3 rounded-xl font-bold text-center shadow-lg"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
