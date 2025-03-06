"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Book {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim() !== "") {
        fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            query
          )}&limit=5`
        )
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
  }, [query]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por título o autor..."
        className="border rounded p-2"
        onFocus={() => {
          if (results.length > 0) setDropdownOpen(true);
        }}
        onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
      />
      {dropdownOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border mt-1 rounded shadow z-10">
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
                      <span>No Img</span>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold">{book.title}</p>
                    {book.author_name && (
                      <p className="text-xs text-gray-500">
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
  );
}
