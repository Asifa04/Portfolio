import React from 'react';
import { Testimonial } from '../utils/data';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Quote className="text-primary-300 dark:text-primary-700 mb-4" size={32} />
      
      <p className="text-slate-700 dark:text-slate-300 italic mb-6">
        {testimonial.content}
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;