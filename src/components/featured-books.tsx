// app/components/FeaturedBooks.tsx

import RandomBooks from "./random-books";

export default function FeaturedBooks() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Featured Books You Might Like
      </h2>
      <RandomBooks />
    </section>
  );
}
