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
      period: "June 2025 - November 2025",
      location: "",
      points: [
        "Architected and deployed two AI-powered chatbots using Dify on WhatsApp, reducing code maintenance effort by 70%.",
        "Pharma Bot: Enabled users to search and browse healthcare products, view product details, upload prescription, manage their cart, select delivery addresses, and place orders.",
        "Diagnostics Bot: Allowed users to search diagnostic tests and packages, view details, manage their cart, choose slot dates/timings and addresses, and complete bookings seamlessly.",
        "Engineered the system using Agentic Workflows and LLM Function Calling to handle complex transactional APIs, while implementing RAG pipelines for accurate retrieval of medical product and test data."
      ],
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
      period: "September 2024 - October 2024",
      location: "",
      points: [
        "Engineered an LLM-powered Extraction Agent using Hugging Face’s Llama 3.1 (8B) to parse & retrieve event-specific data.",
        "Developed web scraping ETL pipelines to preprocess raw HTML into clean, structured text for NLP tasks.",
        "Deployed the solution using FastAPI on Render and reduced manual effort by 60%."
      ],
      logo: "/image-uploads/ifYK.png"
    },
    {
      company: "Accuracy",
      city: "Hyderabad",
      role: "Python Developer",
      period: "June 2024 - July 2024",
      location: "",
      points: [
        "Streamlined data extraction from paginated, infinite scroll, and detail view pages into a single script, reducing code maintenance effort by 40%.",
        "Performed EDA on a dataset of 1,000+ job listings, deriving actionable insights on skill demand & geographic hiring trends."
      ],
      logo: "/image-uploads/Accuracy.png"
    }
  ];

  const certifications = [
    {
      title: "Computer Networking Course: Master Computer Networking",
      provider: "Scaler",
      date: "Issued Oct 2025",
      logo: "/image-uploads/Scaler.png"
    },
    {
      title: "Introduction to Machine Learning",
      provider: "NPTEL",
      date: "Issued Sep 2025",
      logo: "/image-uploads/NPTEL.png"
    },
    {
      title: "DBMS Course - Master the Fundamentals and Advanced Concepts",
      provider: "Scaler",
      date: "Issued Feb 2025",
      logo: "/image-uploads/Scaler.png"
    },
    {
      title: "Neural Networks and Deep Learning",
      provider: "DeepLearning.AI",
      date: "Issued Dec 2024",
      logo: "/image-uploads/DeepLearning.AI.png"
    },
    {
      title: "Introduction to Computer Vision and Image Processing",
      provider: "IBM",
      date: "Issued Nov 2024",
      logo: "/image-uploads/IBM.png"
    },
    {
      title: "Programming in Java",
      provider: "NPTEL",
      date: "Issued Nov 2024",
      logo: "/image-uploads/NPTEL.png"
    },
    {
      title: "Artificial Intelligence with Python",
      provider: "Great Learning",
      date: "Issued Oct 2024",
      logo: "/image-uploads/Great Learning.png"
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      date: "Issued Jun 2024",
      logo: "/image-uploads/IBM.png"
    },
    {
      title: "Crash Course on Python",
      provider: "Google",
      date: "Issued May 2024",
      logo: "/image-uploads/Google.png"
    },
    {
      title: "Accelerated Computer Science Fundamentals",
      provider: "University of Illinois Urbana-Champaign",
      date: "Issued Mar 2024",
      logo: "/image-uploads/University of Illinois Urbana-Champaign.png"
    }
  ];

  const achievements = [
    {
      title: "Temenos Tem-E-thon 2025 Hackathon Winner",
      highlight: "First Hackathon, FIrst Win!",
      date: "9 Feb 2025",
      description: "From 1,000+ teams to 30 finalists and ultimately 1 winning team, VChamps emerged as the champions of Tem-E-thon 2025, a national-level 24-hour hackathon organized by Temenos at Anna University, Chennai. The 24 hours were intense, filled with debugging, refining detection, and ensuring everything ran smoothly. From the ₹10,00,000 prize pool, each of the three team members took home a 15-inch Apple MacBook Air M3.",
      images: [
        "/image-uploads/Temenos Tem-E-thon 2025 Hackathon Winner.png"
      ],
      hashtags: ["#Temenos", "#TemEthon2025", "#Hackathon", "#SustainableDevelopmentGoal"]
    }
  ];

  const finshieldAchievement = {
    title: "FinShield Hackathon 2025 Finalist (Top 9)",
    highlight: "Top 9 at FinShield Hackathon 2025!",
    date: "3 Sep 2025",
    description: "My team, Deterium, secured a Top 9 finalist position at FinShield Hackathon 2025, a national-level hackathon under the PSBs Hackathon Series 2025. The event was led by the Government of India and hosted by Bank of India and IIT Hyderabad. The challenge was intense, involving extensive debugging and refinement. Our solution used machine learning and alternative data to improve credit default prediction and tracking.",
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
                  className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative ${activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-300'
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
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/20 via-transparent to-yellow-50/20 animate-pulse" style={{ animationDelay: '1s' }}></div>

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
                    style={{ objectPosition: 'center 35%' }}
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
                  <img src="/image-uploads/Mail.png" alt="Email" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" width="28" height="28" loading="eager" />
                </a>
                <a href="https://github.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/GitHub Profile.png" alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" width="28" height="28" loading="eager" />
                </a>
                <a href="https://www.linkedin.com/in/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/LinkedIn.png" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" width="28" height="28" loading="eager" />
                </a>
                <a href="https://www.instagram.com/kr1shnasomani/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/Instagram.png" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" width="28" height="28" loading="eager" />
                </a>
                <a href="https://x.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/X.png" alt="X" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" width="28" height="28" loading="eager" />
                </a>
                <a href="https://www.kaggle.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-110 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center">
                  <img src="/image-uploads/Kaggle.png" alt="Kaggle" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" width="28" height="28" loading="eager" />
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
            <div className="absolute inset-0 bg-gradient-to-tl from-teal-50/15 via-transparent to-pink-50/15 animate-pulse" style={{ animationDelay: '3s' }}></div>
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
            <div className="absolute inset-0 bg-gradient-to-tl from-orange-50/15 via-transparent to-cyan-50/15 animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                        {/* @ts-ignore */}
                        {exp.points && (
                          <ul className="list-disc pl-5 mt-3 space-y-1">
                            {/* @ts-ignore */}
                            {exp.points.map((point, i) => (
                              <li key={i} className="text-gray-600 text-sm leading-relaxed">{point}</li>
                            ))}
                          </ul>
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
            <div className="absolute inset-0 bg-gradient-to-tl from-yellow-50/15 via-transparent to-green-50/15 animate-pulse" style={{ animationDelay: '6s' }}></div>
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
            <div className="absolute inset-0 bg-gradient-to-tl from-red-50/15 via-transparent to-blue-50/15 animate-pulse" style={{ animationDelay: '5s' }}></div>
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
            <div className="absolute inset-0 bg-gradient-to-tl from-lime-50/15 via-transparent to-fuchsia-50/15 animate-pulse" style={{ animationDelay: '4s' }}></div>
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
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/15 via-transparent to-green-50/15 animate-pulse" style={{ animationDelay: '7s' }}></div>
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
                className="relative max-w-6xl mx-auto px-4"
              >
                <div className="space-y-8">
                  {/* Tem-E-thon Achievement */}
                  <div className="relative md:pl-16">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute left-4 md:left-8 top-2 w-0.5 bg-black -translate-x-1/2 h-[calc(100%+2rem)] z-0" />

                    {/* Dot on Vertical Line */}
                    <div className="hidden md:block absolute left-4 md:left-8 top-2 w-4 h-4 bg-black rounded-full ring-4 ring-white -translate-x-1/2 z-10" />

                    {/* Date & Content */}
                    <div className="flex flex-col gap-4">
                      <span className="text-xl font-bold text-black">9 February, 2025</span>
                      <AchievementCarousel achievements={achievements} />
                    </div>
                  </div>

                  {/* FinShield Achievement */}
                  <div className="relative md:pl-16">
                    {/* Dot on Vertical Line */}
                    <div className="hidden md:block absolute left-4 md:left-8 top-2 w-4 h-4 bg-black rounded-full ring-4 ring-white -translate-x-1/2 z-10" />

                    {/* Date & Content */}
                    <div className="flex flex-col gap-4">
                      <span className="text-xl font-bold text-black">3 September, 2025</span>

                      {/* FinShield Card */}
                      <div className="max-w-5xl mx-auto">
                        <div className="bg-black border border-gray-800 overflow-hidden rounded-xl shadow-2xl hover:shadow-blue-900/20 transition-shadow duration-300">
                          <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="md:w-3/4 w-full relative overflow-hidden bg-gray-900" style={{ aspectRatio: '16/9' }}>
                              <img
                                src={finshieldAchievement.image}
                                alt={finshieldAchievement.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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