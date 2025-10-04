import { db } from "@/utils/database-connection";
import Image from "next/image";
import CommentsForm from "@/components/commentsform/CommentsForm";
import DeleteButton from "@/components/deletebutton/DeleteButton";
import PokeballIcon from "@/../public/images/pokeball-icon.png";
import Link from "next/link";

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
        <div className="pokemon-details-page">

        <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <Image 
                src={pokemon?.image_url}
                alt={pokemon.name}
                width={450}
                height={450}
                className="pokemon-image"
            />

            <h3 className="pokemon-type-ability">Type: {pokemon.type}</h3>
            <h3 className="pokemon-type-ability">Abilities: {pokemon.ability}</h3>
            <p className="pokemon-description">{pokemon.description}</p>
        </div>

        <div className="pokemon-comments-section">
            <h2 className="comments-title">TRAINERS COMMENTS:</h2>
            <div className="comments-box">
            {comments.length === 0 ? (
                <p>Be the first to leave a comment!</p>
            ) : ( 
                comments.map((comment) => {
                    return (
                        <div className="single-comment" key={comment.id}>
                            <p className="comment-username">{comment.user_name}</p>
                            <p>{comment.comment}</p>

                            <div className="rating-icons">
                                <p>Rating:</p>
                                {Array.from({ length: comment.rating }).map((_, i) => {
                                    return (
                                    <Image 
                                        key={i}
                                        src={PokeballIcon}
                                        alt="Pokeball rating icon"
                                    />
                                )})}
                            </div>
                            
                        <div className="comment-actions">
                            <Link href={`/comments/${comment.id}/edit`} className="edit-button">Edit</Link>
                            <DeleteButton commentId={comment.id} pokemonId={pokemon.id}/>
                        </div>

                        </div>
                    )
                })
            )}
            </div>
            
                <CommentsForm pokemonId={pokemon.id}/>
                    
        </div>

        </div>
    )
}