const data = [
  {
    id: 1,
    title:
      'Desvendando a Essência da Sua Marca: Criando uma Identidade Memorável',
    slug: 'desvendando-a-essencia-da-sua-marca',
    author: 'Aderbal Amorin',
    date: '17/11/23',
    category: ['Identidade Visual'],
    description: `Você já se perguntou sobre a verdadeira essência por trás de uma marca poderosa? Aquela sensação...`,
    src: '/img/blog/1.jpg',
    overlay: 4
  },
  {
    id: 2,
    title: 'O Poder dos Pontos de Contato na Experiência do Consumidor',
    slug: 'o-poder-dos-pontos-de-contato',
    author: 'Aderbal Amorin',
    date: '12/11/23',
    category: ['Experiência do consumidor'],
    description: `Você já parou para considerar como as marcas criam conexões duradouras? A resposta está...`,
    src: '/img/blog/2.jpg',
    overlay: 4
  },
  {
    id: 3,
    title: 'A Importância da Gestão Estratégica para o Crescimento da Marca',
    slug: 'a-importancia-da-gestao-estrategica',
    author: 'André Arins',
    date: '7/11/23',
    category: ['Gestão Estratégica'],
    description: `A gestão estratégica desempenha um papel crucial no desenvolvimento e sucesso das...`,
    src: '/img/blog/3.jpg',
    overlay: 4
  },
  {
    id: 4,
    title:
      'Fortalecendo Marcas no Mundo Digital: A Importância do Branding no Projeto Autoridade Digital',
    slug: 'fortacelendo-marcas-no-mundo-digital',
    author: 'Aderbal Amorin',
    date: '2/11/23',
    category: ['Branding'],
    description: `No dinâmico cenário digital, o Projeto Autoridade Digital se destaca como uma abordagem estratégica para...`,
    src: '/img/blog/4.jpg',
    overlay: 4
  }
];

export const getBlogData = () => data;

export const getBlogItem = (value, whereName = 'slug') => {
  return data.find((item) => item[whereName] === value);
};
export const getBlogLink = (item) => {
  if (item) return item.slug && '/blog/' + item.slug;

  return '';
};
