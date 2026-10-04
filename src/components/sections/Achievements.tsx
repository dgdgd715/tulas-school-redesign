"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "22",
    label: "Acre Campus",
    description: "A spacious environment designed for learning and growth.",
  },
  {
    value: "16+",
    label: "Sports",
    description: "Opportunities to build teamwork, discipline and confidence.",
  },
  {
    value: "6:1",
    label: "Student Ratio",
    description: "A learning environment focused on meaningful engagement.",
  },
  {
    value: "24/7",
    label: "Student Support",
    description: "Care and support that extends beyond the classroom.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-[#f5f2eb] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            TIS by the numbers
          </p>

          <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl">
            An environment
            <br />
            <span className="text-black/30">built to go further.</span>
          </h2>
        </motion.div>

        <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border-b border-r border-black/10 p-7 transition-colors duration-300 hover:bg-white md:p-8"
            >
              <div className="flex min-h-[250px] flex-col justify-between">
                <span className="text-xs text-black/30">
                  0{index + 1}
                </span>

                <div>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="text-5xl font-semibold tracking-[-0.05em] text-[#171717] md:text-6xl"
                  >
                    {stat.value}
                  </motion.p>

                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-orange-500">
                    {stat.label}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/45">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
