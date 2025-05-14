"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white/5 p-6 rounded-2xl border border-sky-500 hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-sky-400">
              {project.title}
            </h3>
            <p className="text-sm mb-4">{project.description}</p>
            <Link
              href={project.link}
              className="text-sky-500 hover:underline"
            >
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
