"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Learning Spaces",
    description:
      "Thoughtfully designed spaces that encourage curiosity, collaboration and independent learning.",
  },
  {
    number: "02",
    title: "Sports & Fitness",
    description:
      "Opportunities for students to develop discipline, teamwork and confidence beyond academics.",
  },
  {
    number: "03",
    title: "Creative Life",
    description:
      "A vibrant environment where students can explore creativity, culture and personal expression.",
  },
];

export default function Campus() {
  return (
    <section
      id="campus"
      className="overflow-hidden bg-[#171717] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Life at TIS
          </p>

          <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            A campus built
            <br />
            <span className="text-white/30">for possibility.</span>
          </h2>
        </motion.div>

        {/* Features */}
        <div className="mt-16 border-t border-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_1.2fr] md:items-center md:py-10"
            >
              <span className="text-sm text-orange-500">
                {feature.number}
              </span>

              <h3 className="text-2xl font-medium transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                {feature.title}
              </h3>

              <p className="max-w-lg text-sm leading-6 text-white/40 md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-[2rem] bg-orange-500 p-8 md:p-12"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-orange-950/70">
                Tulas International School
              </p>

              <p className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Where everyday experiences become part of the education.
              </p>
            </div>

            <a
              href="#admissions"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white"
            >
              Explore Admissions
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
