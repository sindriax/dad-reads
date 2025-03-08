import RandomBooks from "./random-books";

export default function FeaturedBooks() {
  return (
    <section className="mt-10 max-w-[70%] mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Libros Destacados
      </h2>
      <RandomBooks />
    </section>
  );
}
