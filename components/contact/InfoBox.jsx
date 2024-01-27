import React from 'react';
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <ul>
                <li>
                    <h5 className="title-block mb-15">Contato</h5>
                    <p className="text-p ">+55 (48) 9127-7979</p>
                    <div className="over-hidden mt-5">
                        <a className="link-hover" data-hover-text="andre@estudionakama.com.br"
                           href="#">andre@estudionakama.com.br</a>
                    </div>

                </li>
                <li>
                    <h5 className="title-block mb-15">Endereço</h5>
                    <p className="text-p">Brasil - Santa Catarina</p>
                </li>
                <li>
                    <h5 className="title-block mb-15">Nos siga</h5>
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Instagram." href="https://www.instagram.com.br/nakamaestudio"
                           target="_blank" rel="nofollow">Instagram.</a>
                    </div>{/*}
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Facebook." href="#"
                           target="_blank" rel="nofollow">Facebook.</a>
                    </div>
    */}
                    <div className="social-item over-hidden">
                        <a className="link-hover" data-hover-text="Linkedin." href="https://www.linkedin.com/company/est%C3%BAdio-n%C3%A1kama-branding-design/"
                           target="_blank" rel="nofollow">Linkedin.</a>
                    </div>
                    
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;