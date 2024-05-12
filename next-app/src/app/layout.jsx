import ".globals.css"
import Link from "next/link"

export const metadata = {
  title: "Movies",
  description: "The greatest B-movies of all time!"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <h1>B-MOVIES</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/add-movies">Add a Movie</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
