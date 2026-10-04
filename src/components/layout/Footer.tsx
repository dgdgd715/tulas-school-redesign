"use client";

import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] px-6 pb-8 text-white md:px-10">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-semibold tracking-tight">
              TULAS<span className="text-orange-500">.</span>
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              A modern learning environment built to inspire curiosity,
              confidence and a bigger future.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Explore
            </p>

            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/60 transition-colors hover:text-orange-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              School
            </p>

            <a
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-orange-500"
            >
              Official TIS Website →
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/25 md:flex-row">
          <span>© {new Date().getFullYear()} Tulas International School</span>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Designed & developed with modern web technologies.
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
