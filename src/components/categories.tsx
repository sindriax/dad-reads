"use client";

import Link from "next/link";

const categories = [
  "Romance",
  "Ciencia Ficción",
  "Misterio",
  "Historia",
  "Biografía",
  "Fantasía",
  "Terror",
  "No ficción",
];

const categoryEmojis: Record<string, string> = {
  Romance: "💖",
  "Ciencia Ficción": "🚀",
  Misterio: "🕵️",
  Historia: "🏛️",
  Biografía: "🖋️",
  Fantasía: "🐉",
  Terror: "👻",
  "No ficción": "📚",
};

export default function CategoriesSection() {
  return (
    <section className="py-8 w-4/5 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Categorías Populares
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link key={category} href={`/categories/${category.toLowerCase()}`}>
            <div
              className="bg-white
             text-black border border-[#8aac92] shadow-sm rounded-lg p-4 text-center hover:shadow-lg transition transform duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-2">
                {categoryEmojis[category] || "📖"}
              </div>
              <p className="text-xl font-medium text-gray-600">{category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
