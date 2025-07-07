
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
      const cardWidth = 200;
      scrollRef.current.scrollBy({ left: -cardWidth * 3, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 200;
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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white border border-gray-200/50 backdrop-blur-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </Button>

      {/* Right Arrow */}
      <Button
        onClick={scrollRight}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white border border-gray-200/50 backdrop-blur-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        size="icon"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
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
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 w-[180px] h-[280px] bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-200 p-6 flex flex-col items-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Square Logo Container */}
            <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={cert.logo}
                alt={`${cert.provider} logo`}
                className="w-16 h-16 object-contain rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="text-center flex-1 flex flex-col">
              <div className="mb-4">
                <p className="text-gray-700 font-bold text-sm mb-2">
                  {cert.provider}
                </p>
                <h3 className="text-sm font-medium text-black leading-tight mb-3">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-500 text-xs mt-auto">
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
