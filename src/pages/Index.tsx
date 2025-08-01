import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ProjectCarousel from '@/components/ProjectCarousel';
import CertificationCarousel from '@/components/CertificationCarousel';
import AchievementCarousel from '@/components/AchievementCarousel';
import SkillsGrid from '@/components/SkillsGrid';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'skills', 'projects', 'certifications', 'achievements'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "BloodPrint",
      description: "Developed a deep learning model using PyTorch and TensorFlow to predict blood groups from fingerprint patterns, achieving up to 85% accuracy.",
      image: "/lovable-uploads/ce9f07a9-e7b0-433c-8536-990fbf35c5ab.png",
      githubUrl: "https://github.com/kr1shnasomani/BloodPrint"
    },
    {
      title: "CaptionCraft", 
      description: "Built an image captioning system using DenseNet201 and LSTM to generate natural language descriptions from images with TensorFlow and Keras.",
      image: "/lovable-uploads/8e746e46-8b0a-409a-b356-e565c59eb2a8.png",
      githubUrl: "https://github.com/kr1shnasomani/CaptionCraft"
    },
    {
      title: "SpeedVision",
      description: "Created a real-time vehicle speed detection system using YOLOv8, ByteTrack, and OpenCV to analyze and annotate traffic footage.",
      image: "/lovable-uploads/07dfd706-2a40-495a-8e65-8f37f0d499c3.png",
      githubUrl: "https://github.com/kr1shnasomani/SpeedVision"
    },
    {
      title: "ToneSense",
      description: "Implemented a speech emotion recognition model with 98% accuracy using MFCC features and spectrograms for real-time audio emotion analysis.",
      image: "/lovable-uploads/2d227abc-4cde-4bd9-8d77-4a50eb0a9000.png",
      githubUrl: "https://github.com/kr1shnasomani/ToneSense"
    },
    {
      title: "Sportiq",
      description: "Designed a computer vision pipeline to track tennis players and ball trajectories using Mediapipe and a custom TrackNet model.",
      image: "/lovable-uploads/4126598b-6733-4a96-974e-2b9adf11ee6d.png",
      githubUrl: "https://github.com/kr1shnasomani/Sportiq"
    }
  ];

  const education = [
    {
      institution: "SRM IST Chennai",
      period: "Aug 2023 - Apr 2027",
      grade: "CGPA: 8.97",
      logo: "/lovable-uploads/3c301d09-c1de-44b1-9b02-a0a548cbbaa6.png"
    },
    {
      institution: "St. John's Public School - India",
      period: "Jun 2021 - May 2023",
      grade: "Grade: 83.6%",
      logo: "/lovable-uploads/864fd82d-826c-4093-80da-e90d6adf53a4.png"
    },
    {
      institution: "The PSBB Millennium School",
      period: "Jun 2011 - Mar 2021",
      grade: "Grade: 87.6%",
      logo: "/lovable-uploads/4fa761cb-54dc-429e-bee8-0ea38a29a7ed.png"
    }
  ];

  const experiences = [
    {
      company: "PharmEasy",
      city: "Bengaluru",
      role: "Data Science Intern",
      period: "Jun 2025 - Present",
      location: "",
      description: "Developed a chatbot using Dify to recommend diagnostic tests and health packages based on user-reported issues, built a WhatsApp chatbot that brought key app features directly into the chat experience, and created an AI-powered content pipeline that generates short-form content weekly while identifying trending topics.",
      logo: "/lovable-uploads/fd6c3dad-b180-4cfa-a02e-87b22cd159d2.png"
    },
    {
      company: "Data Science Community SRM",
      city: "Chennai",
      role: "AI/ML Technical Team Member",
      period: "Dec 2024 - Present",
      location: "",
      description: "",
      logo: "/lovable-uploads/0514ae2e-4cb9-46c0-a718-5bd83dd0c1bf.png"
    },
    {
      company: "IEEE SRMIST Student Branch",
      city: "Chennai", 
      role: "Research & Development Member", 
      period: "Nov 2024 - Present",
      location: "",
      description: "",
      logo: "/lovable-uploads/ea9139e1-3664-456e-a42f-e38ba734d92b.png"
    },
    {
      company: "ifYK",
      city: "New York",
      role: "Machine Learning Intern",
      period: "Sep 2024 - Oct 2024",
      location: "",
      description: "Engineered a chatbot powered by Hugging Face's Llama 3.1 (8B) model to efficiently extract event-specific data, leveraging NLP capabilities for accurate information retrieval. Designed and implemented web scraping pipelines to preprocess raw HTML into clean, structured text, optimizing data preparation for NLP tasks. Deployed the solution using FastAPI on Render, enabling real-time query handling and seamless user interaction. This system reduced manual effort in event information extraction, streamlining data processing workflows.",
      logo: "/lovable-uploads/1e76810f-7c22-4aa7-8cea-0fed648cd697.png"
    },
    {
      company: "Accuracy",
      city: "Hyderabad",
      role: "Python Developer",
      period: "Jun 2024 - Jul 2024",
      location: "",
      description: "Streamlined data extraction from paginated, infinite scroll, and detail view pages into a unified script. Conducted textual analysis on over 1,000 extracted job postings to uncover in-demand and least sought-after roles, identify top required skills, and analyze geographic trends, providing actionable insights to enhance hiring strategies.",
      logo: "/lovable-uploads/9e65c59f-7d17-4627-a0f9-cd664c99bde6.png"
    }
  ];

  const certifications = [
    {
      title: "DBMS Course - Master the Fundamentals and Advanced Concepts",
      provider: "Scaler",
      date: "Issued Feb 2025",
      logo: "/lovable-uploads/29d087cb-3685-4551-a4ba-8d6ad368a4f6.png"
    },
    {
      title: "Neural Networks and Deep Learning",
      provider: "DeepLearning.AI",
      date: "Issued Dec 2024",
      logo: "/lovable-uploads/4597d5ab-e9a1-4cc2-a228-2cfd3c9643fb.png"
    },
    {
      title: "Introduction to Computer Vision and Image Processing",
      provider: "IBM",
      date: "Issued Nov 2024",
      logo: "/lovable-uploads/8e0955d6-c265-4747-acc7-e12500adf0bb.png"
    },
    {
      title: "Programming in Java",
      provider: "NPTEL",
      date: "Issued Nov 2024",
      logo: "/lovable-uploads/6f2e2224-f9c0-4e0b-ad95-39f9d71d221d.png"
    },
    {
      title: "Artificial Intelligence with Python",
      provider: "Great Learning",
      date: "Issued Oct 2024",
      logo: "/lovable-uploads/a7c46861-960a-49b6-bcb9-3f76b323256a.png"
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      date: "Issued Jun 2024",
      logo: "/lovable-uploads/b6bf63d5-04db-421b-bb14-301fb87ec120.png"
    },
    {
      title: "Crash Course on Python",
      provider: "Google",
      date: "Issued May 2024",
      logo: "/lovable-uploads/f08d310e-c1a1-4819-83d2-bd74284cb5e1.png"
    },
    {
      title: "Accelerated Computer Science Fundamentals",
      provider: "University of Illinois Urbana-Champaign",
      date: "Issued Mar 2024",
      logo: "/lovable-uploads/7c0a365f-499f-4bd8-b18d-911dc065fe5d.png"
    }
  ];

  const achievements = [
    {
      title: "Temenos Tem-E-thon 2025 Hackathon Winner",
      description: "Won a 15-inch Apple MacBook Air M3 (16GB RAM/256GB SSD)",
      images: [
        "/lovable-uploads/37d36c04-a2e6-4512-9f2a-311c56b6782c.png"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-inter flex flex-col min-h-screen">
      {/* Navigation - Always Black */}
      <nav className="sticky top-0 w-full z-50 bg-black shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Krishna Somani
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Education', 'Experience', 'Skills', 'Projects', 'Certifications', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative ${
                    activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-300'
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 -mt-16 pt-36">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 mx-auto text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/20 via-transparent to-yellow-50/20 animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="w-32 h-32 mx-auto mb-8">
                <img 
                  src="/lovable-uploads/911bfdb1-2ce9-43c7-8e16-19b0f2b5f5f6.png" 
                  alt="Krishna Somani" 
                  className="w-full h-full object-cover rounded-full border-4 border-black shadow-lg"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-black to-gray-700 bg-clip-text text-transparent">
                Krishna Somani
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-700 font-medium max-w-4xl mx-auto">
                Artificial Intelligence & Machine Learning Enthusiast focused on real-world solutions, automation, and sustainable innovation.
              </p>
              
              <div className="flex justify-center mb-12">
                <a 
                  href="https://drive.google.com/file/d/1zrLOMuQTDsKnMG9tzos9pF0eaWBnn7iT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <div className="flex justify-center items-center space-x-8">
                <a href="mailto:krishnasomani272005@gmail.com" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/lovable-uploads/3e4d23f6-ee05-4d9e-84c2-823636190624.png" alt="Email" className="w-7 h-7 object-contain" />
                </a>
                <a href="https://github.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/lovable-uploads/841e0d80-9121-4fe1-9671-8b3ac0ffc2c8.png" alt="GitHub" className="w-7 h-7 object-contain" />
                </a>
                <a href="https://www.linkedin.com/in/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/lovable-uploads/a6bf9787-498f-43cd-8c6e-1928638e8c51.png" alt="LinkedIn" className="w-7 h-7 object-contain" />
                </a>
                <a href="https://www.instagram.com/kr1shnasomani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/lovable-uploads/72600596-33f7-4ec0-b5aa-cdbb0db470a2.png" alt="Instagram" className="w-7 h-7 object-contain" />
                </a>
                <a href="https://x.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/lovable-uploads/cd16318f-af68-4197-8969-74894430cbc4.png" alt="X" className="w-7 h-7 object-contain" />
                </a>
                <a href="https://www.kaggle.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/lovable-uploads/a7974db8-c3bf-42f4-a89d-6ca98dbfee6b.png" alt="Kaggle" className="w-7 h-7 object-contain" />
                </a>
              </div>
            </motion.div>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-rose-50/15 to-indigo-50/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-teal-50/15 via-transparent to-pink-50/15 animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
            >
              Education
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center mr-6 flex-shrink-0 p-2">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`} 
                        className="w-16 h-16 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black leading-tight mb-1">{edu.institution}</h3>
                      <p className="text-gray-600 text-sm leading-tight mb-1">{edu.period}</p>
                      <p className="text-gray-700 font-medium leading-tight">{edu.grade}</p>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent ml-8 mt-6"></div>
                  )}
                </motion.div>
              ))}
            </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-blue-50/15 to-purple-50/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-50/15 via-transparent to-cyan-50/15 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
            >
              Experience
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-6 last:mb-0"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center mr-6 flex-shrink-0 p-2">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-16 h-16 object-contain rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black leading-tight mb-1">{exp.role}</h3>
                      <p className="text-gray-700 font-medium leading-tight mb-1">{exp.company}, {exp.city}</p>
                      <p className="text-gray-600 text-sm leading-tight mb-1">{exp.period}</p>
                      {exp.location && <p className="text-gray-500 text-sm leading-tight">{exp.location}</p>}
                      {exp.description && (
                        <p className="text-gray-600 text-sm leading-relaxed mt-3">{exp.description}</p>
                      )}
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-px h-6 bg-gradient-to-b from-gray-300 to-transparent ml-8 mt-2"></div>
                  )}
                </motion.div>
              ))}
            </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-neutral-50/15 to-slate-50/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-yellow-50/15 via-transparent to-green-50/15 animate-pulse" style={{animationDelay: '6s'}}></div>
            <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
            >
              Skills
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <SkillsGrid />
            </motion.div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-stone-50/15 to-zinc-50/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-red-50/15 via-transparent to-blue-50/15 animate-pulse" style={{animationDelay: '5s'}}></div>
            <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
            >
              Projects
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCarousel projects={projects} />
            </motion.div>
            </div>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-violet-50/15 to-sky-50/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-lime-50/15 via-transparent to-fuchsia-50/15 animate-pulse" style={{animationDelay: '4s'}}></div>
            <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
            >
              Certifications
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <CertificationCarousel certifications={certifications} />
            </motion.div>
            </div>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 flex-1">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-2xl p-12 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 via-orange-50/15 to-red-50/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/15 via-transparent to-green-50/15 animate-pulse" style={{animationDelay: '7s'}}></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
              >
                Achievements
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <AchievementCarousel achievements={achievements} />
              </motion.div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer - Always Black */}
      <footer className="py-6 bg-black border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-100 font-medium text-lg mb-2">
              Made with ❤️ by Krishna Somani
            </p>
            <p className="text-gray-300 text-sm">
              © 2025 Krishna Somani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;