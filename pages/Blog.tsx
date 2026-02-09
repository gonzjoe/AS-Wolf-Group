
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <span className="text-primary font-bold uppercase tracking-widest text-xs">Especialistas en Cartagena</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mt-4">
          Blog de Transporte Vertical: <span className="text-primary">Seguridad y Normativa</span>
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><i className="material-icons text-sm">calendar_today</i> {post.date}</span>
                    <span className="flex items-center gap-1"><i className="material-icons text-sm">schedule</i> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-primary font-bold flex items-center gap-1 text-sm">
                    Leer artículo <span className="material-icons text-base">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="lg:w-1/3 space-y-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Buscar en el blog</h3>
            <div className="relative">
              <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary transition-all" placeholder="Palabras clave..." />
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20 shadow-sm text-center">
            <span className="material-icons text-primary text-4xl mb-4">mail_outline</span>
            <h3 className="text-xl font-bold mb-2">Boletín Técnico</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Reciba mensualmente actualizaciones sobre normativa vigente.</p>
            <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg mb-3" placeholder="Su correo" />
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Suscribirme</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
