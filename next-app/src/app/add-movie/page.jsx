import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddMovie() {
    async function handleAddMovie(formData) {
        "use server";

        const name = formData.get("name");
        const description = formData.get("description");

        await sql`INSERT INTO movies (name, description) values (${name}, ${description})`;

        revalidatePath("/)");

        redirect("/)");
    }

    return (
        <div className="add-movie-container">
          <h2>Add Movie</h2>
          <form action={handleAddMovie}>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" placeholder="Name" />
            <label htmlFor="description">Description</label>
            <input name="description" id="description" placeholder="Description" />
    
            <button type="submit">Add a Movie</button>
          </form>
        </div>
    );
}