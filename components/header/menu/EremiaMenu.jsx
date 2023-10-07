import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";


const menuContent = [
    {
        name: "Home", href: "/",
        
        
    },
    {
        name: "Cases e Portfólio", href: "/work-card-2-col",
        
        
    },
    /*
    {
        name: "Works",
        dropdownMenu: [
            {
                name: "Works 01 - 03",
                dropdownMenu: [
                    {name: "Huggl Power Pack", href: "/portfolio/huggl-power-pack"},
                    {name: "Lengshuikeng", href: '/portfolio/lengshuikeng'},
                    {name: "Maybe Speaker", href: '/portfolio/maybe-speaker'}
                ]
            }, {
                name: "Works 03 - 06",
                dropdownMenu: [
                    {name: "Principal Garden", href: "/portfolio/principal-garden"},
                    {name: "Small Silver Car", href: '/portfolio/small-silver-car'},
                    {name: "Yaren Collection", href: '/portfolio/yaren-collection'},

                ]
            },
        ]
    },*/
    {name: "Serviços",
    dropdownMenu: [
        {name: "O que fazemos.", href: "/servicos",},
        
        {
            name: "Criação de marcas", href: "/servicos/marcas",
           
        },
        {
            name: "Sites e canais digitais", href: "/servicos/siteseapps",
           
        },
        {
            name: "Materiais gráficos", href: "/servicos/materiais-graficos",
           
        },
        {
            name: "Consultoria", href: "/servicos/consultoria",
           
        },
    ]
},
    
    {name: "Sobre nós", href: "/about"},
    {
        name: "Blog", href: "/blog-list",
        
        
    },
    
    {name: "Contato", href: "/contact"},
];

const EremiaMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link href={items.href} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand href={"/"} transitionPage={{title: "Estudio Nákama"}}>
                <Logo width="120px" height="auto"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

EremiaMenu.defaultProps = {
    hamburger: false
}


export default EremiaMenu;