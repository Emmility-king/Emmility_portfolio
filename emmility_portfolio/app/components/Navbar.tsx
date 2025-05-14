"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-black/70 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-sky-500">
      <h1 className="text-xl font-bold text-sky-400">Oluwatobi Emmanuel</h1>
      <div className="flex gap-4 text-sm">
        {[
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Experience", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="hover:text-sky-400 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
