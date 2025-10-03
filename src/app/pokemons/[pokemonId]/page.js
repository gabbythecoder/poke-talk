import { db } from "@/utils/database-connection";
import Image from "next/image";
import CommentsForm from "@/components/commentsform/CommentsForm";
import DeleteButton from "@/components/deletebutton/DeleteButton";

export default async function PokemonIdPage({ params }) {
    const pokemonId = (await params).pokemonId;

    //pokemon 
    const pokemonQuery = await db.query(`SELECT id, name, type, ability, description, image_url FROM pokemon WHERE id = $1`, 
        [pokemonId]
    );
    // console.log(query);

    const pokemon = pokemonQuery.rows[0];
    // console.log(pokemon);

    //comments
    const commentsQuery = await db.query(`SELECT id, user_name, comment, rating FROM comments WHERE pokemon_id = $1 ORDER BY created_at DESC`, 
        [pokemonId]
    );

    const comments = commentsQuery.rows;
    // console.log(comments);

    return (
        <div>

        <div>
            <Image 
                src={pokemon?.image_url}
                alt={pokemon.name}
                width={500}
                height={500}
            />
            <h2>{pokemon.name}</h2>
            <h3>Type: {pokemon.type}</h3>
            <h3>Abilities: {pokemon.ability}</h3>
            <p>{pokemon.description}</p>
        </div>

        <div>

            <h2>Comments:</h2>
            {comments.length === 0 ? (
                <p>Be the first to leave a comment!</p>
            ) : ( 
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.user_name}</p>
                            <p>{comment.comment}</p>
                            <p>Rating: {comment.rating}</p>

                            <DeleteButton commentId={comment.id} pokemonId={pokemon.id}/>
                        </div>
                    )
                })
            )}
        </div>

            <CommentsForm pokemonId={pokemon.id}/>

        </div>
    )
}