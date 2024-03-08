'use client';
import { useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@/hooks";

export const Navbar = () => {

    const pathname = usePathname();

    const { windowWidth } = useWindowWidth();

    const [ enable, setEnable ] = useState(false)

    const onDisableNavbar = () => {
        setEnable(!enable)
    }

    return (

        <nav className="flex p-20 justify-content">
            <div className={`flex bg-light-gray-color radius ${ enable ? 'nav-items-enable' : 'nav-items-disable'}`}>
                <Link href='/' className={`ph-20 p-10 radius ${pathname == '/' ? 'bg-primary white-text' : 'black-text'}`}
                    onClick={() => onDisableNavbar()}
                >Inicio</Link>
                <Link href='/sobre-nosotros' className={`ph-20 p-10 radius ${pathname == '/sobre-nosotros' ? 'bg-primary white-text' : 'black-text'} `} 
                    onClick={() => onDisableNavbar()}
                >Sobre nosotros</Link>
                <Link href='/servicios' className={`ph-20 p-10 radius ${pathname == '/servicios' ? 'bg-primary white-text' : 'black-text'} `}
                    onClick={() => onDisableNavbar()}
                >Servicios</Link>
                <Link href='/contacto' className={`ph-20 p-10 radius ${pathname == '/contacto' ? 'bg-primary white-text' : 'black-text'} `}
                    onClick={() => onDisableNavbar()}
                >Contacto</Link>
                <Link href='/cotizar' className={`ph-20 p-10 radius ${pathname == '/cotizar' ? 'bg-primary white-text' : 'black-text' } ${ windowWidth <= 768 ? '' : 'none'}`}
                    onClick={() => onDisableNavbar()}
                >
                    Cotizar <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>

            <div className={`center ${ enable ? 'control-enable': 'control-disable'}`} style={{ display: windowWidth <= 768 ? 'flex': 'none'}}>
                <i className={`fa-solid fa-angles-right `} onClick={ () => onDisableNavbar()}></i>
            </div>
            <Link href='' 
                className={ windowWidth <= 768 ? "none": "bg-primary white-text ph-20 p-10 radius gap-15 flex align-center"} 
                style={{ position: 'absolute', right: 100 }}>
                Cotizar
                <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </nav>
    )
}
