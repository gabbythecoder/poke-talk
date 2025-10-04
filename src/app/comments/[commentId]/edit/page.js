import { db } from "@/utils/database-connection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";
import PokeballIcon from "@/../public/images/pokeball-icon.png";

export default async function EditCommentPage({ params }) {
    const commentId = (await params).commentId;

    const commentsQuery = await db.query(
        `SELECT id, user_name, comment, rating, pokemon_id FROM comments WHERE id = $1`, 
        [commentId]
    );

    const comment = commentsQuery.rows[0];
    console.log(comment);

    if(!comment) {
        return <p>Comment not found.</p>
    }

    async function handleEdit(formData) {
        "use server";

        const updatedName = formData.get("user_name");
        const updatedComment = formData.get("comment");
        const updatedRating = formData.get("rating");

        await db.query(
            `UPDATE comments SET user_name = $1, comment = $2, rating = $3 WHERE id = $4`,
            [updatedName, updatedComment, updatedRating, commentId]
        );

        revalidatePath(`/pokemons/${comment.pokemon_id}`);

        redirect(`/pokemons/${comment.pokemon_id}`);
    }

    return (
        <div className="edit-form-container">
            <h2 className="edit-form-title">Edit your comment:</h2>
        <form action={handleEdit} className="edit-form">
            <input type="hidden" name="pokemon_id" value={comment.pokemon_id}/>
        
                <div>
                    <label htmlFor="user_name">Name:</label>
                        <input 
                            className="form-input"
                            type="text" 
                            name="user_name" 
                            id="user_name" 
                            defaultValue={comment.user_name} 
                            required/>
                </div>
        
                <label htmlFor="comment">Comment:</label>
                    <textarea 
                        className="form-textarea"
                        id="comment" 
                        name="comment" 
                        rows="3" 
                        cols="10" 
                        defaultValue={comment.comment}
                    ></textarea>
        
                    <fieldset className="form-fieldset">
                        <legend className="form-legend">Poké Rating:</legend>
        
                            <input hidden type="radio" name="rating" id="rating1" value="1" required className="radio-button" defaultChecked={comment.rating === 1}/>
                            <label htmlFor="rating1">
                                <Image 
                                    src={PokeballIcon}
                                    alt="Pokeball rating icon"
                                    width={25}
                                    height={25}
                                    />
                            </label>
        
                            <input hidden type="radio" name="rating" id="rating2" value="2" required className="radio-button" defaultChecked={comment.rating === 2}/>
                                <label htmlFor="rating2">
                                    <Image 
                                        src={PokeballIcon}
                                        alt="Pokeball Icon"
                                        width={25}
                                        height={25}
                                    />
                                </label>
        
                            <input hidden type="radio" name="rating" id="rating3" value="3" required className="radio-button" defaultChecked={comment.rating === 3}/>
                                <label htmlFor="rating3">
                                    <Image 
                                        src={PokeballIcon}
                                        alt="Pokeball Icon"
                                        width={25}
                                        height={25}
                                    />
                                </label>
        
                            <input hidden type="radio" name="rating" id="rating4" value="4" required className="radio-button" defaultChecked={comment.rating === 4}/>
                                <label htmlFor="rating4">
                                    <Image 
                                        src={PokeballIcon}
                                        alt="Pokeball Icon"
                                        width={25}
                                        height={25}
                                    />
                                </label>
        
                            <input hidden type="radio" name="rating" id="rating5" value="5" required className="radio-button" defaultChecked={comment.rating === 5}/>
                                <label htmlFor="rating5">
                                    <Image 
                                        src={PokeballIcon}
                                        alt="Pokeball Icon"
                                        width={25}
                                        height={25}
                                    />
                                </label>
                    </fieldset>

                    <button className="save-button" type="submit">Save Changes</button>
        </form>
        </div>
    )
}