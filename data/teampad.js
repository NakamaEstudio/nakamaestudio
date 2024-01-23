const dataPAD = [
    {
      id: 1,
      name: 'Aderbal Amorin',
      position: 'Founder & Diretor de Criação - Estúdio Nákama',
      src: '/img/pad/time/aderbal.jpg',
      social: [
        { title: 'IG', url: 'https://www.instagram.com/nakamaestudio/' },
        { title: 'G', url: 'https://maps.app.goo.gl/2JFR9Lf2wnSi2WuY8' },       
        { title: 'IN', url: 'https://www.linkedin.com/in/aderbalamorin/' },
        { title: 'WEB', url: 'https://www.estudionakama.com.br' }
      ]
    },
    {
      id: 2,
      name: 'André Arins',
      position: 'Sócio Administrador & Comercial - Estúdio Nákama',
      src: '/img/pad/time/andre.jpg',
      social: [
        { title: 'IG', url: 'https://www.instagram.com/nakamaestudio/' },
        { title: 'G', url: 'https://maps.app.goo.gl/2JFR9Lf2wnSi2WuY8' },         
        { title: 'WEB', url: 'https://www.estudionakama.com.br' }
      ]
    },
    {
        id: 3,
        name: 'Fábio Sung',
        position: 'Founder e produtor - Zubi Estúdio',
        src: '/img/pad/time/sung.jpg',
        social: [
          { title: 'IG', url: 'https://www.instagram.com/zubiestudio/' },   
          { title: '★', url: 'https://maps.app.goo.gl/2JFR9Lf2wnSi2WuY8' },     
        { title: 'IN', url: 'https://www.linkedin.com/in/fabiosung' },
        { title: 'WEB', url: 'https://www.zubiestudio.com/' }
        ]
      },
      {
        id: 4,
        name: 'Fabricio Sousa',
        position: 'Fotógrafo e especialista em imagem pessoal - Fabmidia',
        src: '/img/pad/time/fabio.jpg',
        social: [
          { title: 'IG', url: 'https://www.instagram.com/fabmidia/' },
          { title: '★', url: 'https://maps.app.goo.gl/WHacwfQtqPeo3Syq9' },
          { title: 'IN', url: 'http://linkedin.com/in/fabriciosousa' },
          { title: 'WEB', url: 'https://retratos.fabriciosousa.com.br/' },
        ]
      }
  ];
  
  export const getTeamPad = () => dataPAD;
  
  export const getTeamItem = (value, whereName = 'id') => {
    return dataPAD.find((item) => item[whereName] === value);
  };
  