import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const SkillsGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: 'HTML', icon: '/image-uploads/HTML.png' },
    { name: 'CSS', icon: '/image-uploads/CSS.png' },
    { name: 'JavaScript', icon: '/image-uploads/JavaScript.png' },
    { name: 'C', icon: '/image-uploads/C.png' },
    { name: 'C++', icon: '/image-uploads/C++.png' },
    { name: 'Java', icon: '/image-uploads/Java.png' },
    { name: 'Python', icon: '/image-uploads/Python.png' },
    { name: 'NumPy', icon: '/image-uploads/NumPy.png' },
    { name: 'pandas', icon: '/image-uploads/pandas.png' },
    { name: 'SciPy', icon: '/image-uploads/SciPy.png' },
    { name: 'PyTorch', icon: '/image-uploads/PyTorch.png' },
    { name: 'TensorFlow', icon: '/image-uploads/TensorFlow.png' },
    { name: 'Keras', icon: '/image-uploads/Keras.png' },
    { name: 'scikit-learn', icon: '/image-uploads/scikit-learn.png' },
    { name: 'Transformers', icon: '/image-uploads/Transformers.png' },
    { name: 'spaCy', icon: '/image-uploads/spaCy.png' },
    { name: 'OpenCV', icon: '/image-uploads/OpenCV.png' },
    { name: 'Selenium', icon: '/image-uploads/Selenium.png' },
    { name: 'Scrapy', icon: '/image-uploads/Scrapy.png' },
    { name: 'seaborn', icon: '/image-uploads/seaborn.png' },
    { name: 'Matplotlib', icon: '/image-uploads/Matplotlib.png' },
    { name: 'PyPi', icon: '/image-uploads/PyPi.png' },
    { name: 'Git', icon: '/image-uploads/Git.png' },
    { name: 'GitHub', icon: '/image-uploads/GitHub.png' },
    { name: 'PostgreSQL', icon: '/image-uploads/PostgreSQL.png' },
    { name: 'Dify', icon: '/image-uploads/Dify.jpeg' },
    { name: 'n8n', icon: '/image-uploads/n8n.png' },
    { name: 'LangChain', icon: '/image-uploads/LangChain.webp' },
    { name: 'Postman', icon: '/image-uploads/Postman.webp' },
    { name: 'Figma', icon: '/image-uploads/Figma.png' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-12 w-12 transition-transform duration-200 hover:scale-110"
            />
            <span className="mt-2 text-sm text-muted-foreground">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;