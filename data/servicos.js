const dataServicos = [
  {
    id: 1,
    title: 'Estúdio Nákama',
    slug: '/',
    category: ['BRANDING & DESIGN'],
    description:
      'Já imaginou como seria ter sua marca, conectada com seu cliente a ponto de ser preferência e não a opção mais em conta? Tudo começa na sua marca.',
    src: '/img/project/project1/Background.jpg',
    overlay: 2
  },
  {
    id: 2,
    title: 'Aura - Identidade e<br/> Posicionamento de Marca',
    slug: 'servicos',
    category: ['Distinção', 'DNA', 'Conexão'],
    description:
      'Você já reparou que marcas que expressão claramente causas ambientais, propósitos sociais, discursos culturais ou posicionamento político são muito mais engajadas com seu público? Pense nos seus ideais e as marcas que consome.',
    src: '/img/home/aura.jpg',
    overlay: 5
  },
  
  
  {
    id: 3,
    title: 'Ambiente - Pontos de Contato e Experiência da Marca',
    slug: 'servicos',
    src: '/img/home/ambiente.jpg',

    category: [
      'Ponto de venda',
      'Site',
      'Embalagem',
      'Eventos',
      'Materiais Gráficos'
    ],
    description:
      'Admita, quando se depara com uma marca padronizada em todos os pontos de contato você sente mais confiança em comprar e acredita no que ela fala.',
    overlay: 5
  },
  {
    id: 4,
    title: 'Autonomia - Consultoria de<br/> Gestão de Marcas',
    slug: 'servicos',
    category: ['Acompanhamento', 'Otimização', 'Implementação'],
    src: '/img/home/autonomia.jpg',
    description:
      'Não seria ótimo se pudesse contar com um Gerente de Marketing e Branding experiente olhando para os detalhes do seu negócio ? Amplie suas perspectivas de crescimento. ',
    overlay: 5
  }
];

export const getServicosData = () => dataServicos;

export const getServicosItem = (value, whereName = 'slug') => {
  return dataServicos.find((item) => item[whereName] === value);
};
export const getServicosLink = (item) => {
  if (item) return item.slug && '/' + 'servicos';

  return '';
};
