import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  content: string | string[];
  isLeft?: boolean;
  isInView: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  content,
  isLeft = false,
  isInView,
  delay,
}) => {
  const renderContent = () => {
    if (typeof content === 'string') {
      return <p className="text-slate-600 dark:text-slate-300">{content}</p>;
    } else {
      return (
        <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className={`flex md:contents ${isLeft ? 'flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 50 : -50 }}
        transition={{ duration: 0.6, delay }}
        className={`col-start-1 col-end-2 md:mx-auto relative ${isLeft ? 'md:col-start-6 md:col-end-10' : 'md:col-start-4 md:col-end-8'}`}
      >
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-slate-200 dark:bg-slate-700 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-0 rounded-full bg-primary-500 dark:bg-primary-400 shadow-md"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className={`col-start-2 col-end-10 p-6 rounded-lg my-6 ml-8 md:ml-0 bg-white dark:bg-slate-800 shadow-md ${
          isLeft ? 'md:col-start-2 md:col-end-6' : 'md:col-start-8 md:col-end-12'
        }`}
      >
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">{subtitle}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{date}</p>
        {renderContent()}
      </motion.div>
    </div>
  );
};

export default TimelineItem;