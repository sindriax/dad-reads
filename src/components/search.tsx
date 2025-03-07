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
    console.log("Searching for:", query, "by:", searchType);
  };

  return (
    <section className="mb-8 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Search Books
      </h2>
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center gap-2">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
          </select>
          <input
            type="text"
            placeholder="Search for books..."
            className="border p-2 rounded w-64"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              if (results.length > 0) setDropdownOpen(true);
            }}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
        {dropdownOpen && results.length > 0 && (
          <div className="absolute top-full mt-1 w-96 max-w-full bg-white border rounded shadow z-10">
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
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold truncate">
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
