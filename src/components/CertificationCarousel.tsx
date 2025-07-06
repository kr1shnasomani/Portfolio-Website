
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  title: string;
  provider: string;
  date: string;
  logo: string;
}

interface CertificationCarouselProps {
  certifications: Certification[];
}

const CertificationCarousel = ({ certifications }: CertificationCarouselProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 200; // 180px width + 20px margin
      scrollRef.current.scrollBy({ left: -cardWidth * 3, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 200; // 180px width + 20px margin
      scrollRef.current.scrollBy({ left: cardWidth * 3, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <Button
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700/90 border border-cyan-500/30 backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>

      {/* Right Arrow */}
      <Button
        onClick={scrollRight}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700/90 border border-cyan-500/30 backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        size="icon"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={checkScrollButtons}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-12 py-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[180px] h-[280px] bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-lg border border-cyan-500/20 rounded-xl shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 p-6 flex flex-col items-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Square Logo */}
            <div className="w-20 h-20 rounded-lg bg-slate-700/50 border border-cyan-500/20 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={cert.logo}
                alt={`${cert.provider} logo`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="text-center flex-1 flex flex-col">
              <div className="mb-4">
                <p className="text-cyan-300 font-bold text-sm mb-2">
                  {cert.provider}
                </p>
                <h3 className="text-sm font-medium text-white leading-tight mb-3">
                  {cert.title}
                </h3>
              </div>
              <p className="text-white/60 text-xs mt-auto">
                {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationCarousel;
