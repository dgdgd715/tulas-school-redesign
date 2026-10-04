"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111] text-white">
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.avif"
          alt="Tulas International School campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-black/40" />
      </div>

      {/* Orange glow */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-500/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Tulas International School
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.06em]"
        >
          Education
          <br />
          <span className="text-white/50">for a</span>{" "}
          <span className="text-orange-500">bigger</span>
          <br />
          future.
        </motion.h1>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl"
          >
            <p className="text-base leading-7 text-white/65 md:text-lg md:leading-8">
              A modern learning environment where strong values, curiosity and
              ambition come together to help every student discover their
              potential.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400"
              >
                Begin Your Journey
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Discover TIS
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="grid grid-cols-3 gap-6 border-t border-white/20 pt-5 md:min-w-[390px]"
          >
            <div>
              <p className="text-2xl font-semibold md:text-3xl">22</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                Acre Campus
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold md:text-3xl">16+</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                Sports
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold md:text-3xl">24/7</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
                Support
              </p>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
