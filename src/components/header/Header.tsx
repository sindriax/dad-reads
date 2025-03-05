// app/components/Header.tsx
import Link from "next/link";
import SearchBar from "../search-bar.tsx/SearchBar";

export default function Header() {
  return (
    <header className="bg-blue-950 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">AnselmoReads</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-500">
            Inicio
          </Link>
          <Link href="/categories" className="hover:text-blue-500">
            Categorías
          </Link>
          <Link href="/favorites" className="hover:text-blue-500">
            Favoritos
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            Acerca de
          </Link>
        </nav>
        <div className="flex items-center">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
