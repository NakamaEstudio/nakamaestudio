const dataPAD = [
    {
      id: 1,
      name: 'Aderbal Amorin',
      position: 'Founder & Diretor de Criação - Estúdio Nákama',
      src: '/img/pad/time/aderbal.png',
      social: [
        { title: 'FB', url: '#0' },
        { title: 'TW', url: '#0' },
        { title: 'LN', url: '#0' }
      ]
    },
    {
      id: 2,
      name: 'André Arins',
      position: 'Sócio Administrador & Comercial - Estúdio Nákama',
      src: '/img/pad/time/andre.png',
      social: [
        { title: 'FB', url: '#0' },
        { title: 'TW', url: '#0' },
        { title: 'LN', url: '#0' }
      ]
    },
    {
        id: 3,
        name: 'Fábio Sung',
        position: 'Founder e produtor - Zubi Estúdio',
        src: '/img/pad/time/sung.png',
        social: [
          { title: 'FB', url: '#0' },
          { title: 'TW', url: '#0' },
          { title: 'LN', url: '#0' }
        ]
      },
      {
        id: 4,
        name: 'Fabricio Sousa',
        position: 'Fotógrafo e especialista em imagem pessoal - Fabmidia',
        src: '/img/pad/time/fabio.png',
        social: [
          { title: 'FB', url: '#0' },
          { title: 'TW', url: '#0' },
          { title: 'LN', url: '#0' }
        ]
      }
  ];
  
  export const getTeamPad = () => dataPAD;
  
  export const getTeamItem = (value, whereName = 'id') => {
    return dataPAD.find((item) => item[whereName] === value);
  };
  