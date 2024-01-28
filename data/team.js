const data = [
  {
    id: 1,
    name: 'Aderbal Amorin',
    position: 'Founder & Diretor de Criação - Estúdio Nákama',
    src: '/img/sobre/aderbalface.jpg',
    social: [
      { title: 'IG', url: 'https://www.instagram.com/nakamaestudio/' },
      { title: 'G', url: 'https://maps.app.goo.gl/VNEazTPkqEnn7DbL9' },       
      { title: 'LKD', url: 'https://www.linkedin.com/in/aderbalamorin/' },
    
    ]
  },
  {
    id: 2,
    name: 'André Arins',
    position: 'Sócio Administrador & Comercial - Estúdio Nákama',
    src: '/img/sobre/andreface.jpg',
    social: [
      { title: 'IG', url: 'https://www.instagram.com/nakamaestudio/' },
      { title: 'G', url: 'https://maps.app.goo.gl/VNEazTPkqEnn7DbL9' },         
      { title: 'LKD', url: 'https://www.linkedin.com/in/andrearins/' },
    ]
  },
];

export const getTeamData = () => data;

export const getTeamItem = (value, whereName = 'id') => {
  return data.find((item) => item[whereName] === value);
};
