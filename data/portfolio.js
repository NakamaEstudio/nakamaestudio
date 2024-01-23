const data = [
  {
    id: 1,
    title: 'PV Operation',
    slug: 'pv-operation',
    category: ['Tecnologia'],
    description: 'Vin tries to reflect Diesel’s vision and combines.',
    src: '/img/portfolio/pv-operation/3.png',
    overlay: 4
  },
  {
    id: 2,
    title: 'Case 2',
    slug: 'lengshuikeng',
    category: ['Saúde-e-Beleza'],
    description: 'symbols through which express themselves.',
    src: '/img/project/project2/1.jpg',
    overlay: 2
  },
  {
    id: 3,
    title: 'Artisan - Marcenaria & Design',
    slug: 'artisan-marcenaria',
    category: ['Arquitetura-e-Marcenaria'],
    description: 'We are thrilled to share our new reel with you all.',
    src: '/img/project/artisan/hero.jpg',
    overlay: 4
  },
  {
    id: 4,
    title: 'Prevenção - Segurança do Trabalho',
    slug: 'principal-garden',
    category: ['Engenharia'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 5,
    title: 'Artisan',
    slug: 'artisan-case',
    category: ['Arquitetura-e-Marcenaria'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 6,
    title: 'Procidade',
    slug: 'procidade-case',
    category: ['Engenharia'],
    src: '/img/procidade.png',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 6,
    title: 'Procidade',
    slug: 'procidade-case',
    category: ['Alimentação'],
    src: '/img/procidade.png',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  }
];

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = 'slug') => {
  return data.find((item) => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
  if (item) return item.slug && '/portfolio/' + item.slug;

  return '';
};
