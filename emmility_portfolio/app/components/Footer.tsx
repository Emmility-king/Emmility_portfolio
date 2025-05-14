import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Emmility</h3>
            <p className="text-gray-400 text-sm">Building innovative solutions with passion</p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-medium mb-2">Quick Links</h4>
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Emmility-king" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/olafisoye-emmanuel" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/Emmility4real" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:contact@emmility.com"
                 className="text-gray-400 hover:text-white transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Emmility. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
