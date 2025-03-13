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

interface LocalBookDetail {
  key: string;
  title: string;
  cover: string;
  description?: string;
  authors?: string[];
}

const hardcodedBooks: LocalBookDetail[] = [
  {
    key: "cien-anos-de-soledad",
    title: "Cien Años de Soledad",
    cover: "/images/books/cien-anos-de-soledad.jpg",
    description:
      "Una novela emblemática de Gabriel García Márquez que narra la historia de la familia Buendía a lo largo de varias generaciones.",
    authors: ["Gabriel García Márquez"],
  },
  {
    key: "don-quijote",
    title: "Don Quijote de la Mancha",
    cover: "/images/books/don.jpg",
    description:
      "Una obra maestra de la literatura española que sigue las aventuras del caballero andante Don Quijote y su fiel escudero Sancho Panza.",
    authors: ["Miguel de Cervantes"],
  },
  {
    key: "la-sombra-del-viento",
    title: "La Sombra del Viento",
    cover: "/images/books/sombra.jpg",
    description:
      "Un misterio literario ambientado en la Barcelona de posguerra, donde un joven descubre libros olvidados y secretos del pasado.",
    authors: ["Carlos Ruiz Zafón"],
  },
  {
    key: "el-amor-en-los-tiempos-del-colera",
    title: "El Amor en los Tiempos del Cólera",
    cover: "/images/books/colera.png",
    description:
      "Una historia de amor a lo largo de los años, explorando la pasión y la persistencia en la vida de sus protagonistas.",
    authors: ["Gabriel García Márquez"],
  },
  {
    key: "rayuela",
    title: "Rayuela",
    cover: "/images/books/rayuela.png",
    description:
      "Una novela experimental que invita al lector a saltar entre capítulos, explorando diferentes perspectivas y narrativas.",
    authors: ["Julio Cortázar"],
  },
  {
    key: "ficciones",
    title: "Ficciones",
    cover: "/images/books/ficciones.jpg",
    description:
      "Una colección de relatos cortos en la que Borges mezcla realidad, fantasía y laberintos literarios.",
    authors: ["Jorge Luis Borges"],
  },
  {
    key: "pedro-paramo",
    title: "Pedro Páramo",
    cover: "/images/books/pedro.jpg",
    description:
      "Una obra fundamental del realismo mágico, donde un hombre viaja a un pueblo lleno de fantasmas y recuerdos.",
    authors: ["Juan Rulfo"],
  },
  {
    key: "el-aleph",
    title: "El Aleph",
    cover: "/images/books/aleph.jpg",
    description:
      "Otra pieza esencial de Borges que explora la infinitud y la complejidad del universo a través de un punto único en el espacio.",
    authors: ["Jorge Luis Borges"],
  },
];

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const localBook = hardcodedBooks.find((book) => book.key === id);

  if (localBook) {
    return (
      <div className="min-h-screen bg-[#E0CEB1] py-10">
        <div className="container mx-auto px-4 max-w-[80%]">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="p-10">
              <h1 className="text-4xl font-bold mb-6 text-center text-[#8AAC92]">
                {localBook.title}
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex-shrink-0 mb-8 md:mb-0">
                  <Image
                    src={localBook.cover}
                    alt={`Portada de ${localBook.title}`}
                    width={300}
                    height={400}
                    className="rounded-md object-cover shadow-md"
                  />
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {localBook.description ||
                    "No hay descripción disponible para este libro."}
                  {localBook.authors && (
                    <p className="mt-4">
                      <strong>Autores:</strong> {localBook.authors.join(", ")}
                    </p>
                  )}
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
  }

  // If the book is not featured locally, fetch its details from the Google Books API.
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
