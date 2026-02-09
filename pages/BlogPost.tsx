
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import NotFound from './NotFound';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <NotFound />;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
        <span className="material-icons text-sm">chevron_right</span>
        <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
        <span className="material-icons text-sm">chevron_right</span>
        <span className="text-primary font-medium">{post.category}</span>
      </nav>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="material-icons text-base">calendar_today</span>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-base">schedule</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </header>

        <div className="rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
          <p className="text-xl font-medium text-slate-900 dark:text-white mb-8">
            {post.excerpt} La seguridad en el transporte vertical es nuestra prioridad absoluta en Cartagena.
          </p>
          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">1. Innovación Tecnológica</h2>
          <p className="mb-6">
            Los edificios modernos requieren soluciones que no solo muevan personas, sino que lo hagan de manera eficiente. La implementación de variadores de frecuencia (VVVF) permite ahorros energéticos de hasta el 30%.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-8 my-10 rounded-r-2xl">
            <p className="italic text-lg text-slate-800 dark:text-slate-200">
              "En Wolf Group, combinamos más de dos décadas de experiencia con las herramientas digitales más avanzadas para garantizar un 99% de disponibilidad operativa."
            </p>
          </div>
          <p>
            Contáctenos hoy para realizar una auditoría técnica de su edificio en Bocagrande, Manga o la Zona Norte de Cartagena.
          </p>
        </div>
      </article>

      <div className="mt-20 border-t border-slate-200 pt-12 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
          <span className="material-icons">arrow_back</span> Volver a todos los artículos
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
