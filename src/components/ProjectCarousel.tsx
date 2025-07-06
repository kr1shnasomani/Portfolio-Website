
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[1100px] mx-auto">
      {/* Main Carousel Container */}
      <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-slate-900/50 backdrop-blur-lg border border-cyan-500/20">
        
        {/* Navigation Arrows */}
        <Button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 backdrop-blur-sm transition-all"
          size="icon"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 backdrop-blur-sm transition-all"
          size="icon"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </Button>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${projects[currentSlide].image})` }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-4xl font-bold text-white mb-3 leading-tight">
                  {projects[currentSlide].title}
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {projects[currentSlide].description}
                </p>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => {
                    if (projects[currentSlide].githubUrl) {
                      window.open(projects[currentSlide].githubUrl, '_blank');
                    }
                  }}
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Tech Stack Tags (Optional Enhancement) */}
        <div className="absolute top-6 right-6 z-10 flex flex-wrap gap-2 max-w-xs">
          {projects[currentSlide].tech.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white/90 text-sm rounded-full border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
