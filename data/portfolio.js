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
    title: 'Famillevet',
    slug: 'famillevet',
    category: ['Saúde-e-Beleza'],
    description: '',
    src: '/img/portfolio/famillevet/3.png',
    overlay: 2
  },
  {
    id: 3,
    title: 'Artisan - Marcenaria & Design',
    slug: 'artisan',
    category: ['Arquitetura-e-Marcenaria'],
    description: 'We are thrilled to share our new reel with you all.',
    src: '/img/project/artisan/hero.jpg',
    overlay: 4
  },
  {
    id: 4,
    title: 'Ecosintese',
    slug: 'ecosintese',
    category: ['Engenharia'],
    src: '/img/portfolio/ecosintese/3.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  
  
  {
    id: 7,
    title: 'Gastrobeef',
    slug: 'gastrobeef',
    category: ['Gastronomia'],
    src: '/img/portfolio/gastrobeef/4.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 8,
    title: 'Ricky Autocenter',
    slug: 'procidade-case',
    category: ['Automotivo'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 9,
    title: 'Dellavaz Boutique',
    slug: 'procidade-case',
    category: ['Varejo-e-atacado'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 10,
    title: 'Nexmoby',
    slug: 'procidade-case',
    category: ['Imobiliaria'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 11,
    title: 'Brisapollar Climatização',
    slug: 'procidade-case',
    category: ['Profissionais-liberais'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 12,
    title: 'Strattax',
    slug: 'procidade-case',
    category: ['Contabilidade-e-finanças'],
    src: '/img/project/project3/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  
];


export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = 'slug') => {
  return data.find((item) => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
  if (item) return item.slug && '/portfolio/' + item.slug;

  return '';
};
