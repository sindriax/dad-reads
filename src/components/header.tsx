"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <div className="bg-[#E3D2C3]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/anselmo-bg.png"
            alt="Anselmo logo"
            width={80}
            height={80}
          />
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-bold text-black">
            Inicio
          </Link>
          <Link href="/about" className="text-sm font-bold text-black">
            Acerca de
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
}
