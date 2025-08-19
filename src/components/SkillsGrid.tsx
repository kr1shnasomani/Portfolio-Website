import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const SkillsGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: 'HTML', icon: '/image-uploads/3bd69446-c36d-44b8-9469-eb196cfbc754.png' },
    { name: 'CSS', icon: '/image-uploads/ddbe3989-181c-448e-9768-81a7f3f39c6a.png' },
    { name: 'JavaScript', icon: '/image-uploads/a4e7f3d2-e451-4235-8059-4872a15ce057.png' },
    { name: 'C', icon: '/image-uploads/ca87209a-648b-473e-aa91-ed04b4b7d828.png' },
    { name: 'C++', icon: '/image-uploads/d948e6b4-f887-4ccb-a40d-80a10ba2cb9e.png' },
    { name: 'Java', icon: '/image-uploads/122ffbbd-99d0-4074-b603-b2593c55083c.png' },
    { name: 'Python', icon: '/image-uploads/a2ee47ec-4d65-466d-a088-7405c57d341c.png' },
    { name: 'NumPy', icon: '/image-uploads/6167cf56-c729-46a2-9bc6-5a02716e4044.png' },
    { name: 'pandas', icon: '/image-uploads/05fbc891-10e3-49d6-8506-734f54f869cf.png' },
    { name: 'SciPy', icon: '/image-uploads/914a41fb-ae31-4011-93c3-efd801d8ab2f.png' },
    { name: 'PyTorch', icon: '/image-uploads/3df7536a-3f7e-47ac-9cc2-b9462ceef551.png' },
    { name: 'TensorFlow', icon: '/image-uploads/f2a491fb-4443-40d4-b360-f747d9ad506e.png' },
    { name: 'Keras', icon: '/image-uploads/a7350684-240f-438d-9bbb-a3bf4dfa4f44.png' },
    { name: 'scikit-learn', icon: '/image-uploads/f9f996bf-18d2-45bc-b3dd-1841ea4c0fef.png' },
    { name: 'Transformers', icon: '/image-uploads/76d3b69e-6d2c-4e0b-a0db-dccb4dd429de.png' },
    { name: 'spaCy', icon: '/image-uploads/adeff76c-3bf4-4de7-9a07-6782246f4f58.png' },
    { name: 'OpenCV', icon: '/image-uploads/1a44c91b-d2b1-4fdd-afa7-2039308b595c.png' },
    { name: 'Selenium', icon: '/image-uploads/d5b704d6-ab72-4db8-8142-ec0a9e00541a.png' },
    { name: 'Scrapy', icon: '/image-uploads/987306a9-31ce-470c-897b-17a2cb89a331.png' },
    { name: 'seaborn', icon: '/image-uploads/a3013bfd-b1e9-4793-90ad-e1b1345e3a53.png' },
    { name: 'Matplotlib', icon: '/image-uploads/739d6afe-f3e9-461d-813e-990a8d2ecf51.png' },
    { name: 'PyPi', icon: '/image-uploads/3eb9aaa5-9b11-4652-8585-69de49724639.png' },
    { name: 'Git', icon: '/image-uploads/c08fa6d6-edfe-4cc2-bfdf-d52253f6bb6c.png' },
    { name: 'GitHub', icon: '/image-uploads/c08fa6d6-edfe-4cc2-bfdf-d52253f6bb6c.png' },
    { name: 'PostgreSQL', icon: '/image-uploads/PostgreSQL.png' },
    { name: 'Dify', icon: '/image-uploads/Dify.jpeg' },
    { name: 'n8n', icon: '/image-uploads/n8n.png' },
    { name: 'LangChain', icon: '/image-uploads/LangChain.webp' },
    { name: 'Postman', icon: '/image-uploads/Postman.webp' },
    { name: 'Figma', icon: '/image-uploads/9fd3f12d-ae58-49bb-b147-14f220ca8f6a.png' }
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