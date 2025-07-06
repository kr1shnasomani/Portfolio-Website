
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const SkillsGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: 'C', icon: '/lovable-uploads/ca87209a-648b-473e-aa91-ed04b4b7d828.png' },
    { name: 'C++', icon: '/lovable-uploads/d948e6b4-f887-4ccb-a40d-80a10ba2cb9e.png' },
    { name: 'Java', icon: '/lovable-uploads/122ffbbd-99d0-4074-b603-b2593c55083c.png' },
    { name: 'HTML', icon: '/lovable-uploads/3bd69446-c36d-44b8-9469-eb196cfbc754.png' },
    { name: 'CSS', icon: '/lovable-uploads/ddbe3989-181c-448e-9768-81a7f3f39c6a.png' },
    { name: 'JavaScript', icon: '/lovable-uploads/a4e7f3d2-e451-4235-8059-4872a15ce057.png' },
    { name: 'Python', icon: '/lovable-uploads/a2ee47ec-4d65-466d-a088-7405c57d341c.png' },
    { name: 'NumPy', icon: '/lovable-uploads/6167cf56-c729-46a2-9bc6-5a02716e4044.png' },
    { name: 'Pandas', icon: '/lovable-uploads/05fbc891-10e3-49d6-8506-734f54f869cf.png' },
    { name: 'SciPy', icon: '/lovable-uploads/914a41fb-ae31-4011-93c3-efd801d8ab2f.png' },
    { name: 'PyTorch', icon: '/lovable-uploads/3df7536a-3f7e-47ac-9cc2-b9462ceef551.png' },
    { name: 'TensorFlow', icon: '/lovable-uploads/f2a491fb-4443-40d4-b360-f747d9ad506e.png' },
    { name: 'Keras', icon: '/lovable-uploads/a7350684-240f-438d-9bbb-a3bf4dfa4f44.png' },
    { name: 'spaCy', icon: '/lovable-uploads/adeff76c-3bf4-4de7-9a07-6782246f4f58.png' },
    { name: 'Selenium', icon: '/lovable-uploads/d5b704d6-ab72-4db8-8142-ec0a9e00541a.png' },
    { name: 'Scrapy', icon: '/lovable-uploads/987306a9-31ce-470c-897b-17a2cb89a331.png' },
    { name: 'OpenCV', icon: '/lovable-uploads/1a44c91b-d2b1-4fdd-afa7-2039308b595c.png' },
    { name: 'Seaborn', icon: '/lovable-uploads/a3013bfd-b1e9-4793-90ad-e1b1345e3a53.png' },
    { name: 'Matplotlib', icon: '/lovable-uploads/739d6afe-f3e9-461d-813e-990a8d2ecf51.png' },
    { name: 'Scikit-learn', icon: '/lovable-uploads/f9f996bf-18d2-45bc-b3dd-1841ea4c0fef.png' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="relative group"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="w-16 h-16 bg-white/90 backdrop-blur-xl border border-gray-200/50 hover:border-gray-300 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-200 hover:scale-110 hover:shadow-xl hover:shadow-black/5 group-hover:bg-white">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
            
            {/* Enhanced Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{
                opacity: hoveredSkill === skill.name ? 1 : 0,
                y: hoveredSkill === skill.name ? -55 : 15,
                scale: hoveredSkill === skill.name ? 1 : 0.9
              }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
            >
              <div className="bg-black/90 backdrop-blur-xl text-white text-xs font-medium px-3 py-2 rounded-lg shadow-2xl shadow-black/20 whitespace-nowrap">
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
