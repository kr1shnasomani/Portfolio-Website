
import { motion } from 'framer-motion';

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
  return (
    <div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-black border border-gray-800 rounded-2xl transition-all duration-200 p-6 flex flex-col items-center min-h-[220px]"
          >
            {/* Square Logo Container */}
            <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={cert.logo}
                alt={`${cert.provider} logo`}
                className="w-16 h-16 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="text-center flex-1 flex flex-col">
              <div className="mb-4">
                <p className="text-white font-bold text-sm mb-2">
                  {cert.provider}
                </p>
                <h3 className="text-sm font-medium text-white leading-tight mb-3">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-300 text-xs mt-auto">
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
