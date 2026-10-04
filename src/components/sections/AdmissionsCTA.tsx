"use client";

import { motion } from "framer-motion";

export default function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-[#111] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Admissions
          </p>

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-8xl">
            Your next chapter
            <br />
            <span className="text-white/30">starts here.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg">
            Discover an environment where curiosity is encouraged,
            possibilities are explored and every student is prepared for a
            bigger future.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400"
            >
              Visit TIS
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Explore the School
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col justify-between gap-3 text-xs uppercase tracking-wider text-white/30 md:flex-row">
            <span>Tulas International School</span>
            <span>Learn. Explore. Become.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
