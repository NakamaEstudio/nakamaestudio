

const dataServicos = [
    {
        id: 1,
        title: "Nákama Estudio",
        slug: '/',
        category: ['Aura','Ambiente','Autonomia'],
        description: 'De criação de marcas, materiais gráficos e aplicativos à posicionamento completo no digital.',
        src: '/img/project/project1/1.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "Criação de marcas",
        slug: 'marcas',
        category: ['Aura',],
        description: 'Vin tries to reflect Diesel’s vision and combines.',
        src: '/img/project/project1/1.jpg',
        overlay: 6
    },
    {
        id: 3,
        title: "Materiais Gráficos",
        slug: 'materiais-graficos',
        src: '/img/project/project2/1.jpg',

        category: ['Ambiente'],
        description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 4,
        title: "Sites e canais digitais",
        slug: 'siteseapps',
        category: ['Ambiente'],
        src: '/img/project/project3/1.jpg',        
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 5,
        title: "Consultoria",
        slug: 'consultoria',
        category: ['Autonomia'],
        src: '/img/project/project4/1.jpg',
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },    
]

export const getServicosData = () => dataServicos;

export const getServicosItem = (value, whereName = "slug") => {
    return dataServicos.find(item => item[whereName] === value);
};
export const getServicosLink = (item) => {
    if (item)
        return item.slug && '/servicos/' + item.slug

    return '';
};