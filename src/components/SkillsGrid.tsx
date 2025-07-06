
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
    { name: 'SciPy', icon: '/lovable-uploads/914a41fb-ae31-4011-93c3-efd801d8ab2f.png' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="w-20 h-20 bg-slate-800/50 backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-400/40 rounded-xl flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{
                opacity: hoveredSkill === skill.name ? 1 : 0,
                y: hoveredSkill === skill.name ? -50 : 10,
                scale: hoveredSkill === skill.name ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
            >
              <div className="bg-slate-800/90 backdrop-blur-lg border border-cyan-500/30 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/90"></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
