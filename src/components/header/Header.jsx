import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>PokéTalk</h1>

            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/pokemons"}>Pokémons</Link>
            </nav>
        </header>
    )
}