"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { FaEnvelope, FaPhone, FaUser, FaProjectDiagram, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    projectDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    
    // Reset form after submission
    setFormData({
      name: "",
      phoneNumber: "",
      projectDetails: "",
    });
    
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 text-center">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <p className="mb-4 text-sm md:text-base">Have a project in mind or want to collaborate?</p>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <FaEnvelope className="text-sky-500" />
            <a href="mailto:olafisoyeemmanuel7@gmail.com" className="text-sky-400 hover:underline break-all">
              olafisoyeemmanuel7@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <FaPhone className="text-sky-500" />
            <a href="tel:+2348144563800" className="text-sky-400 hover:underline">
              08144563800
            </a>
          </div>
        </div>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 md:mb-4 relative">
            <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center gap-2">
              <FaUser className="text-sky-500" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
            />
          </div>
          
          <div className="mb-3 md:mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1 flex items-center gap-2">
              <FaPhone className="text-sky-500" /> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
            />
          </div>
          
          <div className="mb-4 md:mb-6">
            <label htmlFor="projectDetails" className="block text-sm font-medium mb-1 flex items-center gap-2">
              <FaProjectDiagram className="text-sky-500" /> What would you like me to build for you?
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm md:text-base"
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 border border-sky-500 text-black py-2 px-4 md:px-6 rounded-2xl hover:bg-sky-500 hover:text-black transition-colors text-sm md:text-base"
          >
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
