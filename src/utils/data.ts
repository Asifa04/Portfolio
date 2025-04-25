export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: 'web' | 'mobile' | 'ai' | 'other';
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  logo?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'technical' },
  { name: 'C/C++', level: 85, category: 'technical' },
  { name: 'Streamlit', level: 85, category: 'technical' },
  { name: 'Git', level: 80, category: 'technical' },
  { name: 'HTML/CSS', level: 75, category: 'technical' },
  { name: 'AI/ML Basics', level: 70, category: 'technical' },
  { name: 'Public Speaking', level: 90, category: 'soft' },
  { name: 'Acting', level: 85, category: 'soft' },
  { name: 'Modeling', level: 85, category: 'soft' },
  { name: 'Problem Solving', level: 80, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'BookMind App',
    description: 'An AI-powered book recommendation system built with Streamlit. Features include personalized suggestions, search functionality, and favorites list with PDF export capabilities.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Streamlit', 'AI/ML', 'GitHub'],
    githubLink: 'https://github.com/Asifa04',
    category: 'ai',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'AI Loan Assistant',
    description: 'A concept for a multilingual financial assistant that provides loan guidance and financial literacy through voice and text interactions.',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'NLP', 'Voice Processing'],
    category: 'ai',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Design Thinking Portfolio',
    description: 'Comprehensive collection of design thinking projects including persona creation, journey mapping, and business model canvas.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['UX Research', 'Design Thinking', 'Business Analysis'],
    category: 'other',
    featured: false,
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Google Developer Program',
    position: 'Student Developer',
    duration: '2025 - Present',
    description: [
      'Active participant in Google\'s developer community',
      'Collaborating on open-source projects',
      'Learning and implementing best practices in software development'
    ],
  },
  {
    id: 'exp-2',
    company: 'Performing Arts',
    position: 'Artist',
    duration: '2023 - Present',
    description: [
      'Participated in various stage plays and street performances',
      'Lead roles in mono-acting performances',
      'Featured in short films and theatrical productions',
      'Developed strong public speaking and presentation skills'
    ],
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech in Computer Science Engineering (Core)',
    duration: '2023 - 2027',
    description: 'Focusing on computer science fundamentals, software development, and artificial intelligence.',
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Design Thinking Workshop',
    issuer: 'SRM University',
    date: '2024',
    description: 'Active contributor in design thinking workshops, applying creative problem-solving techniques.',
  },
  {
    id: 'ach-2',
    title: 'Performing Arts',
    issuer: 'Various Organizations',
    date: '2023-2024',
    description: 'Recognized for contributions in stage plays, street performances, and short films.',
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Asifa04',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/syed-asifa-a41975223',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/asifa_2604?igsh=MXF0bW0xdWlzbDJrcQ==',
    icon: 'instagram',
  },
  {
    name: 'Email',
    url: 'mailto:syedasifa2604@gmail.com',
    icon: 'mail',
  },
];

export const personalInfo = {
  name: 'Asifa',
  role: 'CSE Student | Tech Enthusiast | Creative Artist',
  location: 'SRM University',
  email: 'syedasifa2604@gmail.com',
  phone: '+91 9143042598',
  profileImage: 'WhatsApp Image 2024-09-10 at 23.37.44.jpeg',
  about: `I'm a passionate second-year Computer Science Engineering student at SRM University, combining my love for technology with creative expression through performing arts and modeling.

My journey in technology is driven by a desire to create meaningful solutions that impact people's lives. Currently, I'm focusing on AI/ML applications, as demonstrated by my BookMind project - an intelligent book recommendation system.

I'm proficient in Python, C/C++, and various modern development tools. My experience extends beyond coding to include design thinking, public speaking, and performing arts, making me a well-rounded individual who brings both technical expertise and creative perspective to my work.

When I'm not coding or studying, you can find me participating in stage plays, working on short films, or exploring new ways to combine technology with creative expression. I believe in the power of diverse experiences to fuel innovation and creative problem-solving.`,
};