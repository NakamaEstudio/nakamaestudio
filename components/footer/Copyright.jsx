import {dsnCN} from "../../hooks/helper";
import Link from "next/link";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            {new Date().getFullYear()} © Todos os direitos reservados   
            <Link className="link-hover mr-4" data-hover-text="Estúdio Nákama" 
               rel="nofollow"
               href="/" > Estudio Nákama </Link>
        </h5>
    );
}


export default Copyright;