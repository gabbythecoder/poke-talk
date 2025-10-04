import { db } from "@/utils/database-connection";
import { revalidatePath } from "next/cache";
import "./DeleteButton.css";

export default function DeleteButton({ commentId, pokemonId }) {

    async function handleDelete(formData) {
        "use server";

        const id = formData.get("id");
        console.log(id);

        db.query(
                    `DELETE FROM comments WHERE id = $1`, [id]
                )
        revalidatePath(`/pokemons/${pokemonId}`);
    }

    return (
        <form action={handleDelete} className="delete-form">
            <input type="hidden" name="id" value={commentId}/>
            <button className="delete-button" type="submit">Delete</button>
        </form>
    )
}