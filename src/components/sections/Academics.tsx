"use client";

import { motion } from "framer-motion";

const academicAreas = [
  {
    number: "01",
    title: "Early Years",
    text: "Building curiosity, confidence and a strong foundation through exploration and discovery.",
  },
  {
    number: "02",
    title: "Primary School",
    text: "Developing independent thinkers through engaging, meaningful and collaborative learning.",
  },
  {
    number: "03",
    title: "Middle School",
    text: "Encouraging students to question, experiment and develop a deeper understanding of the world.",
  },
  {
    number: "04",
    title: "Senior School",
    text: "Preparing young people for higher education and the opportunities that lie beyond school.",
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="bg-[#f3efe7] px-6 py-24 text-[#171717] md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
              Academics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Learning designed to
              <span className="text-orange-600"> open possibilities.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
              At TIS, education is about more than academic achievement. We
              encourage students to think independently, explore ideas and
              develop the confidence to take on new challenges.
            </p>
          </motion.div>
        </div>

        {/* Academic timeline */}
        <div className="mt-20 border-t border-black/10">
          {academicAreas.map((area, index) => (
            <motion.article
              key={area.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-black/10 py-10 transition-all duration-300 md:grid-cols-[100px_0.8fr_1fr] md:items-center md:py-12"
            >
              <span className="text-sm font-medium text-black/30">
                {area.number}
              </span>

              <h3 className="text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-600 md:text-4xl">
                {area.title}
              </h3>

              <p className="max-w-lg text-base leading-7 text-black/55">
                {area.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <a
            href="#admissions"
            className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            Discover TIS
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
