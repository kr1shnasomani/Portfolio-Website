
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SkillsGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Programming Languages
    { name: 'C', icon: '/lovable-uploads/ca87209a-648b-473e-aa91-ed04b4b7d828.png', category: 'Programming Languages' },
    { name: 'C++', icon: '/lovable-uploads/d948e6b4-f887-4ccb-a40d-80a10ba2cb9e.png', category: 'Programming Languages' },
    { name: 'Java', icon: '/lovable-uploads/122ffbbd-99d0-4074-b603-b2593c55083c.png', category: 'Programming Languages' },
    { name: 'Python', icon: '/lovable-uploads/a2ee47ec-4d65-466d-a088-7405c57d341c.png', category: 'Programming Languages' },
    { name: 'JavaScript', icon: '/lovable-uploads/a4e7f3d2-e451-4235-8059-4872a15ce057.png', category: 'Programming Languages' },
    
    // Web Technologies
    { name: 'HTML', icon: '/lovable-uploads/3bd69446-c36d-44b8-9469-eb196cfbc754.png', category: 'Web Technologies' },
    { name: 'CSS', icon: '/lovable-uploads/ddbe3989-181c-448e-9768-81a7f3f39c6a.png', category: 'Web Technologies' },
    
    // Data Science & ML
    { name: 'NumPy', icon: '/lovable-uploads/6167cf56-c729-46a2-9bc6-5a02716e4044.png', category: 'Data Science & ML' },
    { name: 'Pandas', icon: '/lovable-uploads/05fbc891-10e3-49d6-8506-734f54f869cf.png', category: 'Data Science & ML' },
    { name: 'SciPy', icon: '/lovable-uploads/914a41fb-ae31-4011-93c3-efd801d8ab2f.png', category: 'Data Science & ML' },
    { name: 'PyTorch', icon: '/lovable-uploads/3df7536a-3f7e-47ac-9cc2-b9462ceef551.png', category: 'Data Science & ML' },
    { name: 'TensorFlow', icon: '/lovable-uploads/f2a491fb-4443-40d4-b360-f747d9ad506e.png', category: 'Data Science & ML' },
    { name: 'Keras', icon: '/lovable-uploads/a7350684-240f-438d-9bbb-a3bf4dfa4f44.png', category: 'Data Science & ML' },
    { name: 'Scikit-learn', icon: '/lovable-uploads/f9f996bf-18d2-45bc-b3dd-1841ea4c0fef.png', category: 'Data Science & ML' },
    { name: 'Transformers', icon: '/lovable-uploads/76d3b69e-6d2c-4e0b-a0db-dccb4dd429de.png', category: 'Data Science & ML' },
    
    // NLP & Computer Vision
    { name: 'spaCy', icon: '/lovable-uploads/adeff76c-3bf4-4de7-9a07-6782246f4f58.png', category: 'NLP & Computer Vision' },
    { name: 'OpenCV', icon: '/lovable-uploads/1a44c91b-d2b1-4fdd-afa7-2039308b595c.png', category: 'NLP & Computer Vision' },
    
    // Web Scraping & Automation
    { name: 'Selenium', icon: '/lovable-uploads/d5b704d6-ab72-4db8-8142-ec0a9e00541a.png', category: 'Web Scraping & Automation' },
    { name: 'Scrapy', icon: '/lovable-uploads/987306a9-31ce-470c-897b-17a2cb89a331.png', category: 'Web Scraping & Automation' },
    
    // Data Visualization
    { name: 'Seaborn', icon: '/lovable-uploads/a3013bfd-b1e9-4793-90ad-e1b1345e3a53.png', category: 'Data Visualization' },
    { name: 'Matplotlib', icon: '/lovable-uploads/739d6afe-f3e9-461d-813e-990a8d2ecf51.png', category: 'Data Visualization' },
    
    // Tools & Platforms
    { name: 'GitHub', icon: '/lovable-uploads/3eb9aaa5-9b11-4652-8585-69de49724639.png', category: 'Tools & Platforms' },
    { name: 'Git', icon: '/lovable-uploads/c08fa6d6-edfe-4cc2-bfdf-d52253f6bb6c.png', category: 'Tools & Platforms' },
    { name: 'Figma', icon: '/lovable-uploads/9fd3f12d-ae58-49bb-b147-14f220ca8f6a.png', category: 'Tools & Platforms' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="max-w-7xl mx-auto">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
          className="mb-16 last:mb-0"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            {category}
          </h3>
          
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                  className="skill-item relative group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-400/20 group-hover:bg-white">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 rounded-lg"
                    />
                  </div>
                  
                  {/* Enhanced Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      y: hoveredSkill === skill.name ? -65 : 15,
                      scale: hoveredSkill === skill.name ? 1 : 0.9
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
                  >
                    <div className="bg-gray-800/95 backdrop-blur-xl text-white text-sm font-medium px-4 py-2 rounded-lg shadow-2xl shadow-black/40 whitespace-nowrap border border-gray-700/50">
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/95"></div>
                    </div>
                  </motion.div>
                  
                  {/* Skill name below icon for larger screens */}
                  <p className="text-center text-sm font-medium text-gray-700 mt-3 group-hover:text-gray-900 transition-colors duration-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
