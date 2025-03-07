"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface Book {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
}

export default function SearchSection() {
  const [searchType, setSearchType] = useState("all");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim() !== "") {
        let url = "";
        if (searchType === "all") {
          url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
            query
          )}&limit=5`;
        } else if (searchType === "author") {
          url = `https://openlibrary.org/search.json?author=${encodeURIComponent(
            query
          )}&limit=5`;
        } else if (searchType === "title") {
          url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
            query
          )}&limit=5`;
        }
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setResults(data.docs);
            setDropdownOpen(true);
          })
          .catch((err) => {
            console.error(err);
            setResults([]);
          });
      } else {
        setResults([]);
        setDropdownOpen(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, searchType]);

  const handleSearch = () => {
    console.log("Buscando:", query, "por:", searchType);
  };

  return (
    <section className="mb-8 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Buscar Libros
      </h2>

      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-2">
          {/* Dropdown without "v" icon */}
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="h-10 pl-2 pr-2 border border-gray-300 rounded-md bg-white text-gray-700 
                       focus:outline-none focus:ring-1 focus:ring-gray-300"
          >
            <option value="all">Todo</option>
            <option value="author">Autor</option>
            <option value="title">Título</option>
          </select>

          {/* Search Input with Icon */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Buscar libros..."
              className="h-10 w-[28rem] border border-gray-300 rounded-md bg-white text-gray-700 pr-8 pl-2 
                         focus:outline-none focus:ring-1 focus:ring-gray-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                if (results.length > 0) setDropdownOpen(true);
              }}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            />
            <Search
              className="absolute right-2 text-gray-400 cursor-pointer"
              size={18}
              onClick={handleSearch}
            />
          </div>

          <button
            onClick={handleSearch}
            className="h-10 px-3 border border-gray-300 rounded-md bg-white text-gray-700 
                       hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300"
          >
            Buscar
          </button>
        </div>

        {dropdownOpen && results.length > 0 && (
          <div
            className="absolute top-full mt-2 w-[30rem] bg-white 
                          border border-gray-200 rounded-md shadow-md z-10"
          >
            {results.map((book) => {
              const workId = book.key.split("/")[2];
              return (
                <Link key={book.key} href={`/book/${workId}`}>
                  <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                    {book.cover_i ? (
                      <Image
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                        alt={book.title}
                        width={40}
                        height={60}
                        className="mr-2"
                      />
                    ) : (
                      <div className="w-10 h-14 bg-gray-200 mr-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">No Img</span>
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {book.title}
                      </p>
                      {book.author_name && (
                        <p className="text-xs text-gray-500 truncate">
                          {book.author_name.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
