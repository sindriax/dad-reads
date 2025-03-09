import { notFound } from "next/navigation";
import Image from "next/image";
import axios from "axios";

interface BookDetail {
  volumeInfo: {
    title: string;
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
    authors?: string[];
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  try {
    const res = await axios.get<BookDetail>(
      `https://www.googleapis.com/books/v1/volumes/${id}?langRestrict=es`
    );
    const book = res.data.volumeInfo;
    return (
      <div className="min-h-screen bg-[#E0CEB1] py-10">
        <div className="container mx-auto px-4 max-w-[80%]">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="p-10">
              <h1 className="text-4xl font-bold mb-6 text-center text-[#8AAC92]">
                {book.title}
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-8">
                {book.imageLinks &&
                  (book.imageLinks.thumbnail ||
                    book.imageLinks.smallThumbnail) && (
                    <div className="flex-shrink-0 mb-8 md:mb-0">
                      <Image
                        src={
                          book.imageLinks.thumbnail ||
                          book.imageLinks.smallThumbnail!
                        }
                        alt={`Portada de ${book.title}`}
                        width={300}
                        height={400}
                        className="rounded-md object-cover shadow-md"
                      />
                    </div>
                  )}
                <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {book.description || "No hay descripción disponible."}
                </div>
              </div>
              <div className="mt-10 text-center">
                <button className="bg-[#8AAC92] hover:bg-[#769a7c] text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-300">
                  ¡Lo Quiero!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    return notFound();
  }
}
