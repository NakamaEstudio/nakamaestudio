const dataportfolio = [
  {
    id: 1,
    title: 'PV Operation',
    slug: 'pv-operation',
    category: ['Tecnologia'],
    description: 'PV Operation.',
    src: '/img/portfolio/pv-operation/3.png',
    overlay: 3
  },
  {
    id: 2,
    title: 'Famillevet',
    slug: 'famillevet',
    category: ['Saúde-e-Beleza'],
    description: 'Famillevet',
    src: '/img/portfolio/famillevet/3.png',
    overlay: 3
  },
  {
    id: 3,
    title: 'Artisan - Marcenaria & Design',
    slug: 'artisan',
    category: ['Arquitetura-e-Marcenaria'],
    description: 'Artisan - Marcenaria & Design.',
    src: '/img/portfolio/artisan/hero.jpg',
    overlay: 3
  },
  {
    id: 4,
    title: 'Ecosintese',
    slug: 'ecosintese',
    category: ['Engenharia'],
    src: '/img/portfolio/ecosintese/3.jpg',
    description: 'Ecosintese.',
    overlay: 3
  },
  
  
  {
    id: 5,
    title: 'Gastrobeef',
    slug: 'gastrobeef',
    category: ['Gastronomia'],
    src: '/img/portfolio/gastrobeef/4.jpg',
    description: 'Gastrobeef.',
    overlay: 3
  },


  {
    id: 6,
    title: 'Ricky Autocenter',
    slug: 'ricky-autocenter',
    category: ['Automotivo'],
    src: '/img/portfolio/ricky-autocenter/3.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 7,
    title: 'Dellavaz Boutique',
    slug: 'dellavaz',
    category: ['Varejo-e-atacado'],
    src: '/img/portfolio/dellavaz/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 8,
    title: 'Nexmoby',
    slug: 'nexmoby',
    category: ['Imobiliaria'],
    src: '/img/portfolio/nexmoby/3.png',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {/*
  {
    id: 9,
    title: 'Brisapollar Climatização',
    slug: 'procidade-case',
    category: ['Profissionais-liberais'],
    src: '/img/portfolio/ricky-autocenter/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  {
    id: 10,
    title: 'Strattax',
    slug: 'procidade-case',
    category: ['Contabilidade-e-finanças'],
    src: '/img/portfolio/ricky-autocenter/1.jpg',
    description: 'We are thrilled to share our new reel with you all.',
    overlay: 3
  },
  */}
  
];



export const getPortfolioData = () => dataportfolio;

export const getPortfolioItem = (value, whereName = 'slug') => {
  return dataportfolio.find((item) => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
  if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};
