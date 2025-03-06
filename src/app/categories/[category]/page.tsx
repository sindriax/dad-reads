import { getBooksByCategory, Book } from "../../../lib/books";
import Image from "next/image";
import Link from "next/link";

interface CategoryPageProps {
  params: { category: string };
}

export default async function CategoryDetailPage({
  params,
}: CategoryPageProps) {
  const { category } = params;
  const books: Book[] = await getBooksByCategory(category, 20);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Categoría: {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => {
          const workId = book.key.split("/")[2];
          return (
            <Link key={book.key} href={`/book/${workId}`}>
              <div className="bg-white p-4 rounded shadow cursor-pointer">
                {book.cover_i ? (
                  <Image
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={`Cover for ${book.title}`}
                    width={300}
                    height={256}
                    className="w-full h-64 object-cover mb-2"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-2">
                    <span>No Image</span>
                  </div>
                )}
                <h3 className="text-center text-lg font-semibold">
                  {book.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
