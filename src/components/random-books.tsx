"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Book {
  key: string;
  title: string;
  cover: string;
}

const hardcodedBooks: Book[] = [
  {
    key: "cien-anos-de-soledad",
    title: "Cien Años de Soledad",
    cover: "/images/books/cien-anos-de-soledad.jpg",
  },
  {
    key: "don-quijote",
    title: "Don Quijote de la Mancha",
    cover: "/images/books/don.jpg",
  },
  {
    key: "la-sombra-del-viento",
    title: "La Sombra del Viento",
    cover: "/images/books/sombra.jpg",
  },
  {
    key: "el-amor-en-los-tiempos-del-colera",
    title: "El Amor en los Tiempos del Cólera",
    cover: "/images/books/colera.png",
  },
  {
    key: "rayuela",
    title: "Rayuela",
    cover: "/images/books/rayuela.png",
  },
  {
    key: "ficciones",
    title: "Ficciones",
    cover: "/images/books/ficciones.jpg",
  },
  {
    key: "pedro-paramo",
    title: "Pedro Páramo",
    cover: "/images/books/pedro.jpg",
  },
  {
    key: "el-aleph",
    title: "El Aleph",
    cover: "/images/books/aleph.jpg",
  },
];

export default function RandomBooks() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const duplicatedBooks = [...hardcodedBooks, ...hardcodedBooks];

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-8">
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-2 snap-x snap-mandatory"
        >
          {duplicatedBooks.map((book, index) => (
            <Link key={`${book.key}-${index}`} href={`/book/${book.key}`}>
              <div className="bg-white border border-gray-200 p-4 rounded shadow cursor-pointer flex flex-col h-80 min-w-[15rem] snap-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Image
                  src={book.cover}
                  alt={`Portada de ${book.title}`}
                  width={300}
                  height={256}
                  className="w-full h-64 object-cover mb-2 rounded"
                />
                <h3 className="text-center text-lg font-semibold text-[#8AAC92] line-clamp-2 overflow-hidden">
                  {book.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
}
