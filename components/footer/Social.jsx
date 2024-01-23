import {dsnCN} from "../../hooks/helper";


const socialContent = [
    
    {name: "Instagram.", href: "https://www.instagram.com.br/nakamaestudio"},
    {name: "Linkedin.", href: "#0"},
    
];


function Social({className, ...restProps}) {
    return (
        <div className={dsnCN("footer-social p-relative", className)} {...restProps}>
            <ul>
                {socialContent && socialContent.map(($item, $number) =>
                    <li className="over-hidden" key={$number}>
                        <a href={$item.href} data-dsn="parallax" target="_blank" rel="nofollow">{$item.name}</a>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Social;