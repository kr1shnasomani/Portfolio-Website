
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality with 7-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[1100px] mx-auto">
      {/* Main Carousel Container */}
      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white/95 backdrop-blur-xl border border-gray-200/50">
        
        {/* Navigation Arrows */}
        <Button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white border border-gray-200/50 backdrop-blur-xl transition-all shadow-lg hover:shadow-xl" 
          size="icon"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </Button>

        <Button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white border border-gray-200/50 backdrop-blur-xl transition-all shadow-lg hover:shadow-xl" 
          size="icon"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </Button>

        {/* Slides Container */}
        <div 
          className="flex w-full h-full transition-transform duration-[800ms] ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full h-full relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${project.image})` }} 
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 z-10 max-w-2xl">
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-white/95 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl border border-gray-700/30" 
                  onClick={() => {
                    if (project.githubUrl) {
                      window.open(project.githubUrl, '_blank');
                    }
                  }}
                >
                  <Github className="mr-2 h-5 w-5 fill-white" />
                  GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
          {projects.map((_, index) => (
            <button 
              key={index} 
              onClick={() => goToSlide(index)} 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/70'
              }`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
