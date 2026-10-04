"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f5f2eb] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
        >
          <Image
            src="/images/campus.jpg"
            alt="Tulas International School campus"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#171717]">
            Tulas International School
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            About TIS
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#171717] md:text-6xl">
            More than a school.
            <br />
            <span className="text-black/30">A place to grow.</span>
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-black/60 md:text-lg">
            <p>
              Tulas International School brings together academic excellence,
              character development and opportunities beyond the classroom.
            </p>

            <p>
              Our learning environment encourages students to stay curious,
              think independently and develop the confidence to shape their
              future.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8 border-t border-black/10 pt-6">
            <div>
              <p className="text-3xl font-semibold text-[#171717]">22</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                Acre Campus
              </p>
            </div>

            <div className="h-10 w-px bg-black/10" />

            <div>
              <p className="text-3xl font-semibold text-[#171717]">16+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                Sports
              </p>
            </div>
          </div>

          <a
            href="#academics"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#171717]"
          >
            Explore TIS
            <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
