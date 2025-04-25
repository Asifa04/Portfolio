import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../utils/data';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeader 
          title="About Me" 
          subtitle="Get to know me better" 
        />
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {personalInfo.name}
            </h3>
            <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-6">
              {personalInfo.role}
            </p>
            
            <div className="space-y-6">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Location
                </h4>
                <p className="text-slate-800 dark:text-slate-200">{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Email
                </h4>
                <p className="text-slate-800 dark:text-slate-200">{personalInfo.email}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Phone
                </h4>
                <p className="text-slate-800 dark:text-slate-200">{personalInfo.phone}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/WhatsApp Image 2025-04-18 at 14.44.51.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;