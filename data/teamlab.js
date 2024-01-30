const dataLAB = [
    {
      id: 1,
      name: 'Aderbal Amorin',
      position: 'Gestor de Marcas / Especialista em Branding',
      src: '/img/pad/time/aderbal.jpg',
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
      src: '/img/pad/time/andre.jpg',
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
        src: '/img/pad/time/sung.jpg',
        social: [
          { title: 'IG', url: 'https://www.instagram.com/zubiestudio/' },   
          { title: 'G', url: 'https://maps.app.goo.gl/2JFR9Lf2wnSi2WuY8' },     
        { title: 'IN', url: 'https://www.linkedin.com/in/fabiosung' },
        { title: 'WEB', url: 'https://www.zubiestudio.com/' }
        ]
      },
      {
        id: 4,
        name: 'Fernanda Medeiros',
        position: 'Empreendedora e Franqueada',
        src: '/img/pad/time/fabio.jpg',
        social: [
          { title: 'IG', url: 'https://www.instagram.com/fabmidia/' },
          { title: 'G', url: 'https://maps.app.goo.gl/WHacwfQtqPeo3Syq9' },
          { title: 'IN', url: 'http://linkedin.com/in/fabriciosousa' },
          { title: 'WEB', url: 'https://retratos.fabriciosousa.com.br/' },
        ]
      }
  ];
  
  export const getTeamLab = () => dataLAB;
  
  export const getTeamItem = (value, whereName = 'id') => {
    return dataLAB.find((item) => item[whereName] === value);
  };
  