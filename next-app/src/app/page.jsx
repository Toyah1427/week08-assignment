import { sql } from "@vercel/postgres" ;

export default async function Home() {
  const movies = await sql`SELECT * FROM movies`;
console.log(movies);

  return (
    <div className="home-container">
      <h2>Home</h2>
      <div>
        {movies.rows.map((movie) => {
          return (
            <div key={movie.name} className="movie-item">
              <h3>{movie.name}</h3>
              <p>{movie.description}</p>
              </div>
          );
        })}
      </div>
    </div>
  );
}
