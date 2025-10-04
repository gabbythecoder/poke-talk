import { db } from "@/utils/database-connection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import "./CommentsForm.css";
import Image from "next/image";
import PokeballIcon from "@/../public/images/pokeball-icon.png";

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
        <div className="form-container">
            <form action={handleSubmit} className="form-content">
            <input type="hidden" name="pokemon_id" value={pokemonId}/>

                <div className="form-comment-name">
                <label htmlFor="user_name">Name:</label>
                <input 
                    className="form-input"
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    placeholder="Ash" 
                    required/>
                </div>

                <label htmlFor="comment">Comment:</label>
                <textarea 
                    className="form-textarea"
                    id="comment" 
                    name="comment" 
                    rows="3" 
                    cols="10" 
                    placeholder="Please add your comments for this pokémon"
                ></textarea>

                <fieldset className="form-fieldset">
                    <legend className="form-legend">Poké Rating:</legend>

                        <input hidden type="radio" name="rating" id="rating1" value="1" required className="radio-button"/>
                        <label htmlFor="rating1">
                            <Image 
                                src={PokeballIcon}
                                alt="Pokeball rating icon"
                                width={25}
                                height={25}
                            />
                        </label>

                        <input hidden type="radio" name="rating" id="rating2" value="2" required className="radio-button"/>
                        <label htmlFor="rating2">
                            <Image 
                                src={PokeballIcon}
                                alt="Pokeball Icon"
                                width={25}
                                height={25}
                            />
                            </label>

                        <input hidden type="radio" name="rating" id="rating3" value="3" required className="radio-button"/>
                        <label htmlFor="rating3">
                            <Image 
                                src={PokeballIcon}
                                alt="Pokeball Icon"
                                width={25}
                                height={25}
                            />
                            </label>

                        <input hidden type="radio" name="rating" id="rating4" value="4" required className="radio-button"/>
                        <label htmlFor="rating4">
                            <Image 
                                src={PokeballIcon}
                                alt="Pokeball Icon"
                                width={25}
                                height={25}
                            />
                            </label>

                        <input hidden type="radio" name="rating" id="rating5" value="5" required className="radio-button"/>
                        <label htmlFor="rating5">
                            <Image 
                                src={PokeballIcon}
                                alt="Pokeball Icon"
                                width={25}
                                height={25}
                            />
                            </label>
                </fieldset>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}