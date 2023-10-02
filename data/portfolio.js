

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
        slug: 'huggl-power-pack',
        src: '/img/project/project2/1.jpg',

        category: ['Ambiente'],
        description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Case 3",
        slug: 'huggl-power-pack',
        category: ['Ambiente'],
        src: '/img/project/project3/1.jpg',        
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 4,
        title: "Case 4",
        slug: 'huggl-power-pack',
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
        return item.slug && '/portfolio/' + item.slug

    return '';
};