"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Professional Experience
      </motion.h2>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            className="bg-white/5 p-6 rounded-2xl border border-sky-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-sky-400">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm italic mb-2">{exp.duration}</p>
            <ul className="list-disc list-inside text-sm">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
