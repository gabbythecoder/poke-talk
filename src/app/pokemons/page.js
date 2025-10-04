import { db } from "@/utils/database-connection";
import Link from "next/link";
import Image from "next/image";

export default async function PokemonsPage({ searchParams }) {
    const query = await db.query(`SELECT id, name, type, ability, description, small_image_url FROM pokemon`);

    const pokemons = query.rows;

    const sort = await searchParams;
    const sortOrder = sort.sort;

    if (sortOrder === "asc") {
        pokemons.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    } else if (sortOrder === "desc") {
        pokemons.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })
    }

    return (
        <div className="pokemon-page-container">
            <div className="sort-container">
                <p>Sort: </p>
                <Link className="sort-button" href={"/pokemons?sort=asc"}>A-Z</Link>
                <Link className="sort-button" href={"/pokemons?sort=desc"}>Z-A</Link>
            </div>

            <div className="pokemon-list-wrapper">
            {pokemons.map((pokemon) => {
                return (
                    <div className="pokemon-list" key={pokemon.id}>
                        <Image 
                            src={pokemon.small_image_url}
                            alt={pokemon.name}
                            width={135}
                            height={135}
                            
                            className="pokemon-small-image"
                        />

                        <Link className="pokemon-list-button" href={`/pokemons/${pokemon.id}`}>
                            <h2>{pokemon.name}</h2>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}