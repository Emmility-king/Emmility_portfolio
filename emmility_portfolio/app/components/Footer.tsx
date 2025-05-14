import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-2">Emmility</h3>
            <p className="text-gray-400 text-sm">Building innovative solutions with passion</p>
          </div>
          
          <div className="text-center sm:text-left">
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
          
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-medium mb-2">Connect</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://github.com/Emmility-king" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/olafisoye-emmanuel" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com/Emmility4real" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={22} />
              </a>
              <a href="mailto:contact@emmility.com"
                 className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
          <p>© {currentYear} Emmility. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
