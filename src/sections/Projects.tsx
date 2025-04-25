import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/data';
import { useInView } from 'react-intersection-observer';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai' | 'other';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <SectionHeader 
          title="My Projects" 
          subtitle="Check out some of my recent work" 
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'web'
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveCategory('mobile')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'mobile'
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setActiveCategory('ai')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'ai'
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            AI
          </button>
          <button
            onClick={() => setActiveCategory('other')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'other'
                ? 'bg-primary-500 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            Other
          </button>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;