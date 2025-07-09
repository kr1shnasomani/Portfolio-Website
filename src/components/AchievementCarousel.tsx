import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  images: string[];
}

interface AchievementCarouselProps {
  achievements: Achievement[];
}

const AchievementCarousel = ({ achievements }: AchievementCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!achievements.length) return null;
  
  const achievement = achievements[0]; // For now, displaying the first achievement
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === achievement.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? achievement.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="bg-black border-gray-800 overflow-hidden rounded-xl">
          <div className="flex" style={{ aspectRatio: '16/9' }}>
            {/* Image Section - 3/4 width */}
            <div className="w-3/4 relative overflow-hidden bg-gray-900">
              <img
                src={achievement.images[currentImageIndex]}
                alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
            </div>
            
            {/* Text Section - 1/4 width */}
            <div className="w-1/4 p-6 flex flex-col justify-center bg-black text-white">
              <div className="space-y-4">
                <p className="text-lg font-bold text-yellow-400">
                  1000+ teams. 30 finalists. 1 winning team – Tem-E-thon 2025 Champions!
                </p>
                <p className="text-sm leading-relaxed text-gray-300">
                  My team won Tem-E-thon 2025, a national level hackathon organized by Temenos at Anna University, Chennai, taking home an Apple MacBook Air M3 (15-inch) per team member from a ₹10,00,000 prize pool. It was an incredible experience, but the real win was proving how tech can drive sustainability.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-blue-400">#Temenos</span>
                  <span className="text-blue-400">#TemEthon2025</span>
                  <span className="text-blue-400">#Hackathon</span>
                  <span className="text-blue-400">#SustainableDevelopmentGoal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementCarousel;