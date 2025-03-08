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
      <div className="min-h-screen bg-[#E0CEB1] py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-6 text-center text-[#8AAC92]">
                {book.title}
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-8">
                {book.covers && book.covers.length > 0 && (
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <Image
                      src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                      alt={`Portada de ${book.title}`}
                      width={300}
                      height={400}
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {book.description
                    ? typeof book.description === "string"
                      ? book.description
                      : book.description.value
                    : book.first_sentence
                    ? typeof book.first_sentence === "string"
                      ? book.first_sentence
                      : book.first_sentence.value
                    : "No hay descripción disponible."}
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="bg-[#8AAC92] hover:bg-[#769a7c] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
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
