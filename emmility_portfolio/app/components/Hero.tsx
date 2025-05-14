"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Olafisoye-Oragbade Oluwatobi Emmanuel
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg md:text-xl"
      >
        Full-Stack Developer | Data Analyst | Mobile Dev | Trainer
      </motion.p>
      <motion.div
        className="mt-10 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Image
          src="/me.jpg"
          alt="Oluwatobi Emmanuel"
          width={200}
          height={200}
          className="rounded-full border-4 border-sky-500 shadow-xl mx-auto"
        />
      </motion.div>
    </section>
  );
}
