import {sql} from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default function AddMovie() {
    async function handleAddMovie(formData) {
        "use server"

        const name = formData.get("name")
        const description = formData.get("description")

        await sql`INSERT INTO movie (name, description) values ($(name)), ${description}`;

        revalidatePath("/)");

        redirect("/)");
    }

    return (
        <div className="add-movie-container">
        <h2>Add Movie</h2>
        <form action={handleAddMovie}>
        <lable htmlFor="name">Name</lable>
        <input name="name" id="name" placeholder="Name"/>
        <input name="description" id="description"
        placeholder="Description"/>
        </form>
        </div>
    );
}