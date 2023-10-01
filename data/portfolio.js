

const data = [
    {
        id: 1,
        title: "Criação de marcas",
        slug: 'marcas',
        category: ['Aura',],
        description: 'Vin tries to reflect Diesel’s vision and combines.',
        src: '/img/project/project1/1.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "Materiais Gráficos",
        slug: 'materiais-graficos',
        src: '/img/project/project2/1.jpg',

        category: ['Ambiente'],
        description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Sites e canais digitais",
        slug: 'siteseapps',
        category: ['Ambiente'],
        src: '/img/project/project3/1.jpg',        
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 4,
        title: "Consultoria",
        slug: 'consultoria',
        category: ['Autonomia'],
        src: '/img/project/project4/1.jpg',
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },    
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/servicos/' + item.slug

    return '';
};