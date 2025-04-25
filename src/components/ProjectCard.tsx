import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../utils/data';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={16} className="mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;