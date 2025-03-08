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
    <div className="bg-gradient-to-b from-[#E3D2C3] to-[#8aac92] py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Categoría: {category}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => {
            const workId = book.key.split("/")[2];
            return (
              <Link key={book.key} href={`/book/${workId}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  {book.cover_i ? (
                    <Image
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={`Portada de ${book.title}`}
                      width={300}
                      height={256}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4 rounded-md">
                      <span className="text-gray-500">Sin imagen</span>
                    </div>
                  )}
                  <h3 className="text-center text-xl font-semibold text-[#8aac92]">
                    {book.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
