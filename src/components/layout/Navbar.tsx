"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Campus", href: "#campus" },
  { name: "Admissions", href: "#admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/30 px-6 py-3 text-white backdrop-blur-xl">
        <a href="#" className="text-2xl font-bold">
          TIS<span className="text-orange-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#admissions"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-6 text-white backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
