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
      image: "/image-uploads/BloodPrint.png",
      githubUrl: "https://github.com/kr1shnasomani/BloodPrint"
    },
    {
      title: "CaptionCraft", 
      description: "Built an image captioning system using DenseNet201 and LSTM to generate natural language descriptions from images with TensorFlow and Keras.",
      image: "/image-uploads/CaptionCraft.png",
      githubUrl: "https://github.com/kr1shnasomani/CaptionCraft"
    },
    {
      title: "SpeedVision",
      description: "Created a real-time vehicle speed detection system using YOLOv8, ByteTrack, and OpenCV to analyze and annotate traffic footage.",
      image: "/image-uploads/SpeedVision.png",
      githubUrl: "https://github.com/kr1shnasomani/SpeedVision"
    },
    {
      title: "ToneSense",
      description: "Implemented a speech emotion recognition model with 98% accuracy using MFCC features and spectrograms for real-time audio emotion analysis.",
      image: "/image-uploads/ToneSense.png",
      githubUrl: "https://github.com/kr1shnasomani/ToneSense"
    },
    {
      title: "Sportiq",
      description: "Designed a computer vision pipeline to track tennis players and ball trajectories using Mediapipe and a custom TrackNet model.",
      image: "/image-uploads/Sportiq.png",
      githubUrl: "https://github.com/kr1shnasomani/Sportiq"
    }
  ];

  const education = [
    {
      institution: "SRM IST Chennai",
      period: "Aug 2023 - Apr 2027",
      grade: "CGPA: 8.95",
      logo: "/image-uploads/SRM IST Chennai.png"
    },
    {
      institution: "St. John's Public School - India",
      period: "Jun 2021 - May 2023",
      grade: "Grade: 83.6%",
      logo: "/image-uploads/St. John's Public School - India.png"
    },
    {
      institution: "The PSBB Millennium School",
      period: "Jun 2011 - Mar 2021",
      grade: "Grade: 87.6%",
      logo: "/image-uploads/The PSBB Millennium School.png"
    }
  ];

  const experiences = [
    {
      company: "PharmEasy",
      city: "Bengaluru",
      role: "Data Science Intern",
      period: "Jun 2025 - Present",
      location: "",
      description: "Designed and deployed two AI-powered chatbots using Dify, integrating core app features into WhatsApp. The first enabled product browsing and ordering via chat, while the second facilitated diagnostic test bookings directly through chat.",
      logo: "/image-uploads/PharmEasy.png"
    },
    {
      company: "Data Science Community SRM",
      city: "Chennai",
      role: "AI/ML Technical Team Member",
      period: "Dec 2024 - Present",
      location: "",
      description: "Built a cold email generator for a services company using Groq, LangChain, and Streamlit. It allows users to input the URL of a company's careers page. The tool then extracts job listings from that page and generates personalized cold emails. These emails include relevant portfolio links, sourced from a vector database, based on the specific job descriptions.",
      logo: "/image-uploads/Data Science Community SRM.png"
    },
    {
      company: "IEEE SRMIST Student Branch",
      city: "Chennai", 
      role: "Research & Development Member", 
      period: "Nov 2024 - Present",
      location: "",
      description: "Developed a project that automates tree segmentation from geospatial images using detectron2’s Mask R-CNN. The workflow involved downloading and processing TIFF images, performing instance segmentation, and generating visual outputs with both default and custom visualizations. The system highlights trees in yellow and backgrounds in purple, with results saved for further environmental analysis.",
      logo: "/image-uploads/IEEE SRMIST Student Branch.png"
    },
    {
      company: "ifYK",
      city: "New York",
      role: "Machine Learning Intern",
      period: "Sep 2024 - Oct 2024",
      location: "",
      description: "Engineered a chatbot powered by Hugging Face's Llama 3.1 (8B) model to efficiently extract event-specific data, leveraging NLP capabilities for accurate information retrieval. Designed and implemented web scraping pipelines to preprocess raw HTML into clean, structured text, optimizing data preparation for NLP tasks. Deployed the solution using FastAPI on Render, enabling real-time query handling and seamless user interaction. This system reduced manual effort in event information extraction, streamlining data processing workflows.",
      logo: "/image-uploads/ifYK.png"
    },
    {
      company: "Accuracy",
      city: "Hyderabad",
      role: "Python Developer",
      period: "Jun 2024 - Jul 2024",
      location: "",
      description: "Streamlined data extraction from paginated, infinite scroll, and detail view pages into a unified script. Conducted textual analysis on over 1,000 extracted job postings to uncover in-demand and least sought-after roles, identify top required skills, and analyze geographic trends, providing actionable insights to enhance hiring strategies.",
      logo: "/image-uploads/Accuracy.png"
    }
  ];

  const certifications = [
    {
      title: "DBMS Course - Master the Fundamentals and Advanced Concepts",
      provider: "Scaler",
      date: "Issued Feb 2025",
      logo: "/image-uploads/DBMS Course - Master the Fundamentals and Advanced Concepts.png"
    },
    {
      title: "Neural Networks and Deep Learning",
      provider: "DeepLearning.AI",
      date: "Issued Dec 2024",
      logo: "/image-uploads/Neural Networks and Deep Learning.png"
    },
    {
      title: "Introduction to Computer Vision and Image Processing",
      provider: "IBM",
      date: "Issued Nov 2024",
      logo: "/image-uploads/Introduction to Computer Vision and Image Processing.png"
    },
    {
      title: "Programming in Java",
      provider: "NPTEL",
      date: "Issued Nov 2024",
      logo: "/image-uploads/Programming in Java.png"
    },
    {
      title: "Artificial Intelligence with Python",
      provider: "Great Learning",
      date: "Issued Oct 2024",
      logo: "/image-uploads/Artificial Intelligence with Python.png"
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      date: "Issued Jun 2024",
      logo: "/image-uploads/Machine Learning with Python.png"
    },
    {
      title: "Crash Course on Python",
      provider: "Google",
      date: "Issued May 2024",
      logo: "/image-uploads/Crash Course on Python.png"
    },
    {
      title: "Accelerated Computer Science Fundamentals",
      provider: "University of Illinois Urbana-Champaign",
      date: "Issued Mar 2024",
      logo: "/image-uploads/Accelerated Computer Science Fundamentals.png"
    }
  ];

  const achievements = [
    {
      title: "Temenos Tem-E-thon 2025 Hackathon Winner",
      highlight: "1000+ teams. 30 finalists. 1 winning team – Tem-E-thon 2025 Champions!",
      description: "My team won Tem-E-thon 2025, a national level hackathon organized by Temenos at Anna University, Chennai, taking home an Apple MacBook Air M3 (15-inch) per team member from a ₹10,00,000 prize pool. It was an incredible experience, but the real win was proving how tech can drive sustainability.",
      images: [
        "/image-uploads/Temenos Tem-E-thon 2025 Hackathon Winner.png"
      ],
      hashtags: ["#Temenos", "#TemEthon2025", "#Hackathon", "#SustainableDevelopmentGoal"]
    }
  ];

  const finshieldAchievement = {
    title: "FinShield Hackathon 2025 Finalist (Top 5)",
    highlight: "Top 5 at FinShield Hackathon 2025!",
    description: "My team and I secured a spot in the Top 5 at FinShield Hackathon 2025, part of the PSBs Hackathon Series 2025 – an initiative by the Government of India, Ministry of Finance & Department of Financial Services, hosted by Bank of India and IIT Hyderabad. While we didn’t win a cash prize from the ₹20,00,000 prize pool, the countless hours of debugging, fine-tuning, and late nights taught us so much!",
    image: "/image-uploads/FinShield Hackathon 2025.jpeg",
    hashtags: [
      "#FinShield2025",
      "#PSBsHackathonSeries2025",
      "#GovernmentOfIndia",
      "#IITHyderabad",
      "#BankOfIndia",
      "#FinTech",
      "#CreditRisk"
    ]
  };

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

            {/* Desktop Links */}
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

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                aria-label="Open menu"
                onClick={() => {
                  const el = document.getElementById('mobile-menu');
                  if (el) el.classList.toggle('hidden');
                }}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - hidden by default */}
          <div id="mobile-menu" className="hidden mt-3 md:hidden">
            <div className="flex flex-col space-y-2">
              {['Home', 'Education', 'Experience', 'Skills', 'Projects', 'Certifications', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => { scrollToSection(item.toLowerCase()); const el = document.getElementById('mobile-menu'); if (el) el.classList.add('hidden'); }}
                  className={`text-gray-300 hover:text-white text-left px-3 py-2 rounded-md font-medium ${activeSection === item.toLowerCase() ? 'text-white bg-white/5' : ''}`}
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
              <div className="mx-auto mb-8">
                <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-black mx-auto">
                  <img
                    src="/image-uploads/Krishna Profile Photo.jpeg"
                    alt="Krishna Somani"
                    className="block h-full w-auto min-w-full min-h-full object-cover"
                    style={{objectPosition: 'center 35%'}}
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-black to-gray-700 bg-clip-text text-transparent">
                Krishna Somani
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-700 font-medium max-w-4xl mx-auto">
                Artificial Intelligence & Machine Learning Enthusiast focused on real-world solutions, automation, and sustainable innovation.
              </p>
              
              <div className="flex justify-center mb-12">
                <a 
                  href="https://drive.google.com/file/d/1bk0AQKQui3UT4YU-Y6Px4UDHXLzkzFPd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <div className="flex justify-center items-center gap-4 flex-wrap z-20">
                <a href="mailto:krishnasomani272005@gmail.com" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/Mail.png" alt="Email" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </a>
                <a href="https://github.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/GitHub Profile.png" alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </a>
                <a href="https://www.linkedin.com/in/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/LinkedIn.png" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </a>
                <a href="https://www.instagram.com/kr1shnasomani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/Instagram.png" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </a>
                <a href="https://x.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/X.png" alt="X" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </a>
                <a href="https://www.kaggle.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/Kaggle.png" alt="Kaggle" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
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
                <div className="space-y-12">
                  {/* Tem-E-thon Achievement (Carousel Component) */}
                  <AchievementCarousel achievements={achievements} />

                  {/* FinShield Achievement Card */}
                  <div className="max-w-5xl mx-auto">
                    <div className="bg-black border border-gray-800 overflow-hidden rounded-xl">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-3/4 w-full relative overflow-hidden bg-gray-900" style={{ aspectRatio: '16/9' }}>
                          <img
                            src={finshieldAchievement.image}
                            alt={finshieldAchievement.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Text Section */}
                        <div className="md:w-1/4 w-full p-6 flex flex-col justify-center bg-black text-white">
                          <div className="space-y-4">
                            <p className="text-lg font-bold text-yellow-400 leading-snug">
                              {finshieldAchievement.highlight}
                            </p>
                            <p className="text-sm leading-relaxed text-white whitespace-pre-line">
                              {finshieldAchievement.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs pt-1">
                              {finshieldAchievement.hashtags.map(tag => (
                                <span key={tag} className="text-blue-400">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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