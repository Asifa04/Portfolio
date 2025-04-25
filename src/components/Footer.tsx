import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { socialLinks } from '../utils/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
              SA
            </a>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              &copy; {currentYear} Syed Asifa. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-sm text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-sm text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-center text-slate-600 dark:text-slate-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Syed Asifa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;