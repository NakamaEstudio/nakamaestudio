import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        {link: "#0", name: "Instagram."},
        {link: "#0", name: "Linkedin."},
        {link: "#0", name: "Facebook."},
        {link: "#0", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Estudio Nákama</h5>
                    <p>
                    Zona UTM: 22J <br/> Biguaçu - SC - Brasil
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contato</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+00 (2)012 3321" data-hover-text="+00 (2)012 3321">
                            +55 (48) 9 9999-9999
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:andre@estudionakama.com.br"
                           data-hover-text="info@dsngrid.com">andre@estudionakama.com.br</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Siga-nos</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;