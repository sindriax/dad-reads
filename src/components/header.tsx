"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 200;
      const newOpacity = Math.max(0, 1 - scrollY / fadeDistance);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#E3D2C3] shadow-lg transition-opacity duration-1500"
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/anselmo-bg.png"
            alt="Anselmo logo"
            width={80}
            height={80}
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Acerca de
          </Link>
          <Link
            href="/contact"
            className="hidden md:block text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contacto
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
