
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: 'Residencial' | 'Comercial' | 'Industrial' | 'Salud' | 'Especial';
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
}
