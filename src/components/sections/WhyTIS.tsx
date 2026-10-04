"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Purposeful Learning",
    description:
      "An environment that encourages curiosity, critical thinking and a genuine love for learning.",
  },
  {
    number: "02",
    title: "Beyond the Classroom",
    description:
      "Sports, creativity, leadership and experiences that help students discover who they are.",
  },
  {
    number: "03",
    title: "Future Ready",
    description:
      "A balanced education designed to build confidence, independence and skills for tomorrow.",
  },
];

export default function WhyTIS() {
  return (
    <section className="bg-[#171717] px-6 py-24 text-white md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400"
          >
            Why TIS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            More than a school.
            <br />
            <span className="text-white/40">A place to become.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group min-h-[360px] bg-[#1d1d1d] p-8 transition-colors duration-500 hover:bg-orange-500 md:p-10"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-sm font-medium text-white/30 transition-colors group-hover:text-white/60">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-sm leading-7 text-white/50 transition-colors group-hover:text-white/80">
                    {feature.description}
                  </p>

                  <span className="mt-8 inline-block text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
