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
        { title: 'IG', url: 'https://www.instagram.com/strattax/' },
        { title: 'IN', url: 'https://www.linkedin.com/in/maiara-zacchi-70b31a117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },         
        
      ]
    },
    {
        id: 3,
        name: 'Camila Dutra',
        position: 'Consultora Financeira e Estratégica',
        src: '/img/lab/Camila-Dutra.jpg',
        social: [
          { title: 'IG', url: 'https://www.instagram.com/camilacsd?igsh=dm1ucjN1bnNoa244' },   
           
        { title: 'IN', url: 'https://www.linkedin.com/in/consultoracamilasdutra' },
        
        ]
      },
      {
        id: 4,
        name: 'Fernanda Medeiros',
        position: 'Empreendedora e Franqueada',
        src: '/img/lab/Fernanda-Medeiros.jpg',
        social: [
          { title: 'IG', url: 'https://www.instagram.com/mais1cafe.palhoca?igsh=NXI3YjlrbnZ0eGVi&utm_source=qr' },       
         
          
        ]
      }
  ];
  
  export const getTeamLab = () => dataLAB;
  
  export const getTeamItem = (value, whereName = 'id') => {
    return dataLAB.find((item) => item[whereName] === value);
  };
  