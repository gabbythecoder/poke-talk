// todo - set up a sorting filter (searchParams)

import { db } from "@/utils/database-connection";
import Link from "next/link";

export default async function PokemonsPage() {
    const query = await db.query(`SELECT id, name, type, ability, description FROM pokemon`);

    const pokemons = query.rows;

    return (
        <div>
            {pokemons.map((pokemon) => {
                return (
                    <div key={pokemon.id}>
                        <Link href={`/pokemons/${pokemon.id}`}>
                            <h2>{pokemon.name}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}