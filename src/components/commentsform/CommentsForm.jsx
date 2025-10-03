import { db } from "@/utils/database-connection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function CommentsForm({ pokemonId }) {

    async function handleSubmit(formData) {
        "use server";

        const formValues = {
            user_name: formData.get("user_name"),
            comment: formData.get("comment"),
            rating: formData.get("rating"),
            pokemon_id: formData.get("pokemon_id")
        };
        console.log(formValues);

        db.query(
            `INSERT INTO comments (user_name, comment, rating, pokemon_id) VALUES ($1, $2, $3, $4)`,
            [formValues.user_name, formValues.comment, formValues.rating, formValues.pokemon_id]
        );

        revalidatePath("/pokemons");

        redirect("/pokemons");
    }

    return (
        <div>
            <form action={handleSubmit}>
            <input type="hidden" name="pokemon_id" value={pokemonId}/>

                <label htmlFor="user_name">Name:</label>
                <input type="text" name="user_name" id="user_name" placeholder="Ash" required/>
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" name="comment" rows="5" cols="10" placeholder="Please add your comments for this pokémon"></textarea>
                <fieldset>
                    <legend>Poké Rating:</legend>
                        <label htmlFor="rating">1</label>
                        <input type="radio" name="rating" id="rating" value="1" required/>
                        <label htmlFor="rating">2</label>
                        <input type="radio" name="rating" id="rating" value="2" required/>
                        <label htmlFor="rating">3</label>
                        <input type="radio" name="rating" id="rating" value="3" required/>
                        <label htmlFor="rating">4</label>
                        <input type="radio" name="rating" id="rating" value="4" required/>
                        <label htmlFor="rating">5</label>
                        <input type="radio" name="rating" id="rating" value="5" required/>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}