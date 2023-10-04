

const data = [
    {
        id: 1,
        title: "Case 1",
        slug: 'huggl-power-pack',
        category: ['Aura',],
        description: 'Vin tries to reflect Diesel’s vision and combines.',
        src: '/img/project/project1/1.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "Case 2",
        slug: 'lengshuikeng',
        src: '/img/project/project2/1.jpg',

        category: ['Ambiente'],
        description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Case 3",
        slug: 'maybe-speaker',
        category: ['Ambiente'],
        src: '/img/project/project3/1.jpg',        
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 4,
        title: "Case 4",
        slug: 'principal-garden',
        category: ['Autonomia'],
        src: '/img/project/project4/1.jpg',
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },  
    {
        id: 5,
        title: "Case 5",
        slug: 'small-silver-car',
        category: ['Autonomia'],
        src: '/img/project/project5/1.jpg',
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },    
    {
        id: 6,
        title: "Case 6",
        slug: 'yaren-collection',
        category: ['Aura'],
        src: '/img/project/project6/1.jpg',
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
        return item.slug && '/portfolio/' + item.slug

    return '';
};