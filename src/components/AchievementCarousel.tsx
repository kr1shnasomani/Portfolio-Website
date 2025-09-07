import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  highlight: string; // first line in yellow
  description: string; // main content (may include \n\n for paragraphs)
  images: string[];
  hashtags?: string[]; // blue colored
}

interface AchievementCarouselProps {
  achievements: Achievement[];
}

const AchievementCarousel = ({ achievements }: AchievementCarouselProps) => {
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!achievements.length) return null;

  const achievement = achievements[currentAchievementIndex];

  const nextAchievement = () => {
    setCurrentAchievementIndex((prev) => {
      const next = prev === achievements.length - 1 ? 0 : prev + 1;
      // reset image index when changing achievement
      setCurrentImageIndex(0);
      return next;
    });
  };

  const prevAchievement = () => {
    setCurrentAchievementIndex((prev) => {
      const next = prev === 0 ? achievements.length - 1 : prev - 1;
      setCurrentImageIndex(0);
      return next;
    });
  };

  const nextImage = () => {
    if (achievement.images.length <= 1) return;
    setCurrentImageIndex((prev) => prev === achievement.images.length - 1 ? 0 : prev + 1);
  };

  const prevImage = () => {
    if (achievement.images.length <= 1) return;
    setCurrentImageIndex((prev) => prev === 0 ? achievement.images.length - 1 : prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="bg-black border border-gray-800 overflow-hidden rounded-xl">
          <div className="flex" style={{ aspectRatio: '16/9' }}>
            {/* Image Section */}
            <div className="w-3/4 relative overflow-hidden bg-gray-900">
              <img
                src={achievement.images[currentImageIndex]}
                alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Image navigation (only if multiple images) */}
              {achievement.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <button
                    aria-label="Previous Image"
                    onClick={prevImage}
                    className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    aria-label="Next Image"
                    onClick={nextImage}
                    className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Achievement navigation */}
              {achievements.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {achievements.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrentAchievementIndex(i); setCurrentImageIndex(0); }}
                      className={`h-2 w-2 rounded-full transition ${i === currentAchievementIndex ? 'bg-yellow-400' : 'bg-white/30 hover:bg-white/60'}`}
                      aria-label={`Go to achievement ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Text Section */}
            <div className="w-1/4 p-6 flex flex-col justify-center bg-black text-white">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">{achievement.title}</p>
                <p className="text-lg font-bold text-yellow-400 leading-snug">
                  {achievement.highlight}
                </p>
                <div className="space-y-3 text-sm leading-relaxed">
                  {achievement.description.split(/\n\n+/).map((para, idx) => (
                    <p key={idx} className="text-white whitespace-pre-line">{para}</p>
                  ))}
                </div>
                {achievement.hashtags && (
                  <div className="flex flex-wrap gap-2 text-xs pt-1">
                    {achievement.hashtags.map(tag => (
                      <span key={tag} className="text-blue-400">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              {achievements.length > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={prevAchievement}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300"
                  >
                    <ChevronLeft size={14} /> Prev
                  </button>
                  <span className="text-[10px] tracking-wider text-gray-400">
                    {currentAchievementIndex + 1} / {achievements.length}
                  </span>
                  <button
                    onClick={nextAchievement}
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementCarousel;