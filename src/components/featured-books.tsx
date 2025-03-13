"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function FeaturedBooks() {
  return (
    <section className="py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {hardcodedBooks.map((book) => (
          <SwiperSlide key={book.key}>
            <Link href={`/book/${book.key}`}>
              <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer flex flex-col h-80 min-w-[15rem] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Image
                  src={book.cover}
                  alt={`Portada de ${book.title}`}
                  width={300}
                  height={256}
                  className="w-full h-64 object-cover mb-2 rounded-t-lg"
                />
                <h3 className="text-center text-lg font-semibold text-[#8AAC92] line-clamp-2 overflow-hidden">
                  {book.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
