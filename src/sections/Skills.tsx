import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { skills } from '../utils/data';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'soft'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <SectionHeader 
          title="My Skills" 
          subtitle="Technologies and abilities I've acquired over the years" 
        />
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-slate-200 dark:bg-slate-700">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-slate-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('technical')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeCategory === 'technical'
                  ? 'bg-white dark:bg-slate-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveCategory('soft')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeCategory === 'soft'
                  ? 'bg-white dark:bg-slate-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className={`h-2.5 rounded-full ${
                    skill.category === 'technical'
                      ? 'bg-primary-500 dark:bg-primary-400'
                      : 'bg-secondary-500 dark:bg-secondary-400'
                  }`}
                ></motion.div>
              </div>
              
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                {skill.category === 'technical'
                  ? 'Technical proficiency gained through hands-on project experience.'
                  : 'Soft skill developed through team collaboration and leadership roles.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;