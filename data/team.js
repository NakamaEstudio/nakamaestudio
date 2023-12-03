const data = [
    {
        id: 1,
        name: "Aderbal Amorin",
        position: 'Diretor de Criação',
        src: '/img/team/1.jpg',
        social: [
            {title: "FB", url: "#0"},
            {title: "TW", url: "#0"},
            {title: "LN", url: "#0"}
        ]
    },  {
        id: 2,
        name: "André Arins",
        position: 'Diretor Comercial Administrativo',
        src: '/img/team/2.jpg',
        social: [
            {title: "FB", url: "#0"},
            {title: "TW", url: "#0"},
            {title: "LN", url: "#0"}
        ]
    },  

]

export const getTeamData = () => data;

export const getTeamItem = (value, whereName = "id") => {
    return data.find(item => item[whereName] === value);
};
