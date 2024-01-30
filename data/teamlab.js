const dataLAB = [
    {
      id: 1,
      name: 'Aderbal Amorin',
      position: 'Gestor de Marcas / Especialista em Branding',
      src: '/img/lab/Aderbal-amorin.jpg',
      social: [
        { title: 'IG', url: 'https://www.instagram.com/nakamaestudio/' },
        { title: 'G', url: 'https://maps.app.goo.gl/VNEazTPkqEnn7DbL9' },       
        { title: 'IN', url: 'https://www.linkedin.com/in/aderbalamorin/' },
        { title: 'WEB', url: 'https://www.estudionakama.com.br' }
      ]
    },
    {
      id: 2,
      name: 'Maiara Zacchi',
      position: 'Especialista em Inteligência Tributária',
      src: '/img/lab/Maiara-Zacchi.jpg',
      social: [
        { title: 'IG', url: 'https://www.instagram.com/nakamaestudio/' },
        { title: 'G', url: 'https://maps.app.goo.gl/VNEazTPkqEnn7DbL9' },         
        { title: 'WEB', url: 'https://www.estudionakama.com.br' }
      ]
    },
    {
        id: 3,
        name: 'Camila Dutra',
        position: 'Consultora Financeira e Estratégica',
        src: '/img/lab/Camila-Dutra.jpg',
        social: [
          { title: 'IG', url: '#' },   
          { title: 'G', url: '#' },     
        { title: 'IN', url: '#' },
        { title: 'WEB', url: '#' }
        ]
      },
      {
        id: 4,
        name: 'Fernanda Medeiros',
        position: 'Empreendedora e Franqueada',
        src: '/img/lab/Fernanda-Medeiros.jpg',
        social: [
          { title: 'IG', url: '#' },
          { title: 'G', url: '#' },
          { title: 'IN', url: '#' },
          { title: 'WEB', url: '#' },
        ]
      }
  ];
  
  export const getTeamLab = () => dataLAB;
  
  export const getTeamItem = (value, whereName = 'id') => {
    return dataLAB.find((item) => item[whereName] === value);
  };
  