"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiNestjs, 
  SiSass, 
  SiPython,
  SiReact
} from "react-icons/si";

export default function About() {
  const technologies = [
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-600" },
    { icon: SiNestjs, name: "NestJS", color: "text-red-600" },
      { icon: SiSass, name: "Sass", color: "text-pink-500" },
      { icon: SiPython, name: "Python", color: "text-yellow" },
      { icon: SiReact, name: "React", color: "text-blue-500" }
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-base md:text-lg leading-loose"
      >
        With a strong background in full-stack development, data analytics, and mobile development, I craft high-performing digital solutions that solve real-world problems...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <tech.icon className={`text-4xl ${tech.color} mb-2`} />
              <span className="text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
