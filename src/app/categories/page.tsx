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

export default function CategoriesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Categorías</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link key={category} href={`/categories/${category.toLowerCase()}`}>
            <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">
              <h2 className="text-xl font-semibold">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
