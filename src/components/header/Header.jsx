"use client";

import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/../public/images/poketalk-logo.png";
import headerStyle from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    
    return (
        <header className={headerStyle.header}>

            <div className={headerStyle.headerContainer}>

            <Image 
                src={HeaderLogo}
                alt="poketalk logo"
                className={headerStyle.logoImage}
                placeholder="blur"
                priority
            />

            <nav className={headerStyle.navBar}>
                <Link className={
                        pathname === "/" ? `${headerStyle.navLink} ${headerStyle.active}` : headerStyle.navLink} href={"/"}>HOME</Link>
                <Link className={
                        pathname.includes("/pokemons") ? `${headerStyle.navLink} ${headerStyle.active}` : headerStyle.navLink} href={"/pokemons"}>POKÉMON</Link>
            </nav>

            </div>
        </header>
    )
}