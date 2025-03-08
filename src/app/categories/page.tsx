// app/categories/page.tsx
import Link from "next/link";

const categories = [
  "Romance",
  "Science Fiction",
  "Mystery",
  "History",
  "Biography",
  "Fantasy",
  "Horror",
  "Non-fiction",
];

const categoryEmojis: Record<string, string> = {
  Romance: "💖",
  "Science Fiction": "🚀",
  Mystery: "🕵️",
  History: "🏛️",
  Biography: "🖋️",
  Fantasy: "🐉",
  Horror: "👻",
  "Non-fiction": "📚",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Popular Categories
      </h1>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category} href={`/categories/${category.toLowerCase()}`}>
            <div className="bg-white border border-gray-200 shadow-sm rounded p-6 text-center hover:shadow-lg transition">
              <span className="text-3xl block mb-2">
                {categoryEmojis[category] || "📖"}
              </span>
              <h2 className="text-xl font-semibold">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
