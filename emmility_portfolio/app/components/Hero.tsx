"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-8 sm:py-12 md:py-16 px-4 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        Olafisoye-Oragbade Oluwatobi Emmanuel
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-black-300"
      >
        Full-Stack Developer | Data Analyst | Mobile Dev | Trainer
      </motion.p>
      <motion.div
        className="mt-6 sm:mt-8 md:mt-10 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Image
          src="/me.jpg"
          alt="Oluwatobi Emmanuel"
          width={200}
          height={200}
          className=" rounded-b-4xl border-2 border-sky-500 shadow-xl mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-fill"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
      >
        <a 
          href="#contact" 
          className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Contact Me
        </a>
        <a 
          href="#projects" 
          className="bg-transparent hover:bg-gray-100 dark:hover:bg-blue-800 border border-black-300 dark:border-gray-700 text-gray-800 dark:text-black-200 font-medium py-2 px-4 rounded-md transition-colors duration-300 mt-2 sm:mt-0"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}
