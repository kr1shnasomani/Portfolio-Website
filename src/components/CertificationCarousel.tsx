
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
      <div className="grid grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-200 p-6 flex flex-col items-center h-[280px]"
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
