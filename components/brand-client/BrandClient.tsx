import {dsnCN} from "../../hooks/helper";
import DsnGrid, {DsnGridProps} from "../../layout/DsnGrid";
import Image from "next/image";


const data = [
    {src: "/img/logo/arantes-psicologia.png"},
    {src: "/img/logo/beach-fitness.png"},
    {src: "/img/logo/casa-alto-lagoa.png"},
    {src: "/img/logo/ecosintese-meio-ambiente.png"},
    {src: "/img/logo/famillevet-clinica-veterinaria.png"},
    {src: "/img/logo/furlani-distribuidora.png"},
    {src: "/img/logo/gastrobeef-restaurante.png"},
    {src: "/img/logo/kretzer.png"},
    {src: "/img/logo/mg-superficies.png"},
    {src: "/img/logo/nexmoby-imobiliaria.png"},
    {src: "/img/logo/prevencao-seguranca-do-trabalho.png"},
    {src: "/img/logo/pvoperation.png"},
    {src: "/img/logo/ricky-autocenter.png"},
    {src: "/img/logo/rz-makeup.png"},
    {src: "/img/logo/sao-chico-barbearia.png"},
];


function BrandClient({className, ...retsProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN("brand-client wrapper-client", className)} {...retsProps}>


                {data && data.map(($item, $index) =>
                    <div className="logo-box" key={$index}>
                        <div className="logo-box-inner p-relative">
                            <Image src={$item?.src} alt={""} width={180} height={54}/>
                        </div>
                    </div>
                )}


        </DsnGrid>
    );
}

export default BrandClient;