import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Movies",
  description: "The greatest B-movies of all time!",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/"> Home</Link>
          <Link href="/add-movie"> Add a Movie to our collection</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
