// src/app/book/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import axios from "axios";

interface BookDetail {
  title: string;
  description?: string | { value: string };
  first_sentence?: string | { value: string };
  covers?: number[];
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  try {
    const res = await axios.get<BookDetail>(
      `https://openlibrary.org/works/${id}.json`
    );
    const book = res.data;
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        {book.covers && book.covers.length > 0 && (
          <Image
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={`Cover for ${book.title}`}
            width={300}
            height={400}
            className="mb-4"
          />
        )}
        <p>
          {book.description
            ? typeof book.description === "string"
              ? book.description
              : book.description.value
            : book.first_sentence
            ? typeof book.first_sentence === "string"
              ? book.first_sentence
              : book.first_sentence.value
            : "No description available."}
        </p>
      </div>
    );
  } catch {
    return notFound();
  }
}
