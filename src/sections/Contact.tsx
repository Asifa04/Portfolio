import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { personalInfo, socialLinks } from '../utils/data';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's talk about it" 
        />
        
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect with me
            </h4>
            
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-slate-700 p-3 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send me a message
            </h3>
            
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;