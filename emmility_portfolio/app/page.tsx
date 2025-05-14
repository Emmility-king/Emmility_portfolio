"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
 import { projects, experiences } from "@/data/content";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
  }, []);

  return (
    <>
      <Head>
        <title>Oluwatobi Emmanuel – Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Olafisoye-Oragbade Oluwatobi Emmanuel – Full-Stack Developer & Data Analyst"
        />
      </Head>

      <main className="text-white font-montserrat min-h-screen px-6 py-10">
        <section className="flex flex-col gap-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Olafisoye-oragbade Oluwatobi Emmanuel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 text-lg md:text-xl"
            >
              Full-Stack Developer | Data Analyst | Mobile Dev | Trainer
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto"
          >
            <Image
              src="/me.jpg"
              alt="Oluwatobi Emmanuel"
              width={250}
              height={250}
              className="rounded-full border-4 border-sky-500 shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-base md:text-lg leading-relaxed">
              With a strong background in full-stack development, data
              analytics, and mobile development, I craft high-performing digital
              solutions that solve real-world problems. From developing
              enterprise systems at Ambrose Alli University to leading trainings
              that empower over 800 public servants in digital literacy, I merge
              technical skill with impactful delivery.
            </p>
          </motion.div>          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-8"
          >
            {[
              { title: "Projects", href: "#projects" },
              { title: "Experience", href: "#experience" },
              { title: "Contact", href: "#contact" },
              { title: "GitHub", href: "https://github.com/Emmility-king" },
              { title: "Blog", href: "https://medium.com/@olafisoyeemmanuel7" },
              { title: "Dev Profile", href: "https://dev.to/emmilityking" },
            ].map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="border border-sky-500 rounded-2xl py-4 hover:bg-sky-500 hover:text-black transition-colors duration-300"
              >
                {title}
              </Link>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-10"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-2xl border border-sky-500 hover:shadow-lg transition"
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

        {/* Experience Section */}
        <section id="experience" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-10"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-10">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 p-6 rounded-2xl border border-sky-500"
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

        {/* Contact Section */}
        <section id="contact" className="mt-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Contact Me
          </motion.h2>
          <p className="mb-4">Have a project in mind or want to collaborate?</p>
          <a
            href="mailto:olafisoyeemmanuel7@gmail.com"
            className="inline-block mt-4 border border-sky-500 text-white py-2 px-6 rounded-2xl hover:bg-sky-500 hover:text-black transition-colors"
          >
            <Link href="mailto:olafisoyeemmanuel7@gmail.com">
            Send Email
            </Link>
           
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
