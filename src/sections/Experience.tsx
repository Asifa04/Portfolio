import React from 'react';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';
import { experiences, education } from '../utils/data';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <SectionHeader 
          title="Experience & Education" 
          subtitle="My professional journey and academic background" 
        />
        
        <div className="container mx-auto">
          <div ref={ref} className="flex flex-col md:grid grid-cols-12 gap-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 col-span-12">
              Work Experience
            </h3>
            
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                title={experience.position}
                subtitle={experience.company}
                date={experience.duration}
                content={experience.description}
                isLeft={index % 2 === 1}
                isInView={inView}
                delay={index * 0.2}
              />
            ))}
            
            <div className="col-span-12 mt-12 mb-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>
            
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                subtitle={edu.institution}
                date={edu.duration}
                content={edu.description}
                isLeft={index % 2 === 1}
                isInView={inView}
                delay={(index + experiences.length) * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;