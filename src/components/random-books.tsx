"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getRandomBooks, Book } from "../lib/books";
import Link from "next/link";

export default function RandomBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function loadBooks() {
      try {
        const randomBooks = await getRandomBooks();
        const filteredBooks = randomBooks.filter((book) => book.cover_i);
        setBooks(filteredBooks);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error fetching books");
        }
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {books.map((book) => {
        const workId = book.key.split("/")[2];
        return (
          <Link key={book.key} href={`/book/${workId}`}>
            <div className="bg-white p-4 rounded shadow cursor-pointer flex flex-col h-80">
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover for ${book.title}`}
                width={300}
                height={256}
                className="w-full h-64 object-cover mb-2"
              />
              <h3 className="text-center text-lg font-semibold line-clamp-2 overflow-ellipsis overflow-hidden">
                {book.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
