"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Anselmo Reads
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            About
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
