import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ProjectCarousel from '@/components/ProjectCarousel';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'education', 'certifications', 'projects', 'skills', 'achievements'];
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
      description: "Blood group prediction from fingerprints using deep learning with PyTorch, EfficientNetB0, and ResNet50",
      tech: ["PyTorch", "EfficientNetB0", "ResNet50", "Deep Learning"],
      image: "/lovable-uploads/ce9f07a9-e7b0-433c-8536-990fbf35c5ab.png",
      githubUrl: "https://github.com/kr1shnasomani/BloodPrint"
    },
    {
      title: "CaptionCraft", 
      description: "Image caption generator using DenseNet201 + LSTM architecture for automated image understanding",
      tech: ["TensorFlow", "Keras", "DenseNet201", "LSTM"],
      image: "/lovable-uploads/8e746e46-8b0a-409a-b356-e565c59eb2a8.png",
      githubUrl: "https://github.com/kr1shnasomani/CaptionCraft"
    },
    {
      title: "SpeedVision",
      description: "Vehicle detection and speed estimation system using YOLOv8 and OpenCV for traffic monitoring",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      image: "/lovable-uploads/07dfd706-2a40-495a-8e65-8f37f0d499c3.png",
      githubUrl: "https://github.com/kr1shnasomani/SpeedVision"
    },
    {
      title: "ToneSense",
      description: "Speech emotion recognition system achieving 98%+ accuracy using TensorFlow and Librosa",
      tech: ["TensorFlow", "Librosa", "NLP", "Audio Processing"],
      image: "/lovable-uploads/2d227abc-4cde-4bd9-8d77-4a50eb0a9000.png",
      githubUrl: "https://github.com/kr1shnasomani/ToneSense"
    },
    {
      title: "Sportiq",
      description: "Player and ball tracking system for tennis using Mediapipe and custom TrackNet implementation",
      tech: ["Mediapipe", "TrackNet", "Computer Vision", "Sports Analytics"],
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
      role: "Data Science Intern",
      period: "Jun 2025 - Present",
      location: "Bengaluru, Karnataka, India • Hybrid",
      description: "Developed a chatbot using Dify to recommend diagnostic tests and health packages based on user-reported issues, built a WhatsApp chatbot that brought key app features directly into the chat experience, and created an AI-powered content pipeline that generates short-form content weekly while identifying trending topics.",
      logo: "/lovable-uploads/fd6c3dad-b180-4cfa-a02e-87b22cd159d2.png"
    },
    {
      company: "Data Science Community SRM",
      role: "AI/ML Technical Team Member",
      period: "Dec 2024 - Present",
      location: "Chennai, Tamil Nadu, India • On-site",
      description: "",
      logo: "/lovable-uploads/0514ae2e-4cb9-46c0-a718-5bd83dd0c1bf.png"
    },
    {
      company: "IEEE SRMIST Student Branch",
      role: "Research & Development Member", 
      period: "Nov 2024 - Present",
      location: "Chennai, Tamil Nadu, India • On-site",
      description: "",
      logo: "/lovable-uploads/ea9139e1-3664-456e-a42f-e38ba734d92b.png"
    },
    {
      company: "ifYK",
      role: "Machine Learning Intern",
      period: "Sep 2024 - Oct 2024",
      location: "New York, United States • Remote",
      description: "Engineered a chatbot powered by Hugging Face's Llama 3.1 (8B) model to efficiently extract event-specific data, leveraging NLP capabilities for accurate information retrieval. Designed and implemented web scraping pipelines to preprocess raw HTML into clean, structured text, optimizing data preparation for NLP tasks. Deployed the solution using FastAPI on Render, enabling real-time query handling and seamless user interaction. This system reduced manual effort in event information extraction, streamlining data processing workflows.",
      logo: "/lovable-uploads/1e76810f-7c22-4aa7-8cea-0fed648cd697.png"
    },
    {
      company: "Accuracy",
      role: "Python Developer",
      period: "Jun 2024 - Jul 2024",
      location: "Hyderabad, Telangana, India • Remote",
      description: "Streamlined data extraction from paginated, infinite scroll, and detail view pages into a unified script. Conducted textual analysis on over 1,000 extracted job postings to uncover in-demand and least sought-after roles, identify top required skills, and analyze geographic trends, providing actionable insights to enhance hiring strategies.",
      logo: "/lovable-uploads/9e65c59f-7d17-4627-a0f9-cd664c99bde6.png"
    }
  ];

  const skills = {
    "Languages": ["Python", "C", "C++", "Java", "HTML", "CSS", "JavaScript"],
    "ML/AI": ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    "Libraries": ["PyTorch", "TensorFlow", "Keras", "OpenCV", "scikit-learn"],
    "Tools": ["Git", "GitHub", "Figma", "MSSQL", "PostgreSQL"]
  };

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
      description: "Won 15 inch MacBook Air M3 (16GB RAM/256GB SSD)",
      logo: "/lovable-uploads/27c43e0b-3168-4c93-9cf3-4112332b0f78.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white relative overflow-hidden font-apple">
      {/* Enhanced background with animated elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Krishna Somani
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Education', 'Certifications', 'Projects', 'Skills', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Krishna Somani
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-cyan-200">
              Artificial Intelligence, Machine Learning and Data Science Enthusiast
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed">
              I'm passionate about Artificial Intelligence & Machine Learning, with a strong focus on solving real-world problems through intelligent, automated systems. I'm especially interested in AI-driven innovation, scalable solutions, and their impact across industries—from security to sustainability. I thrive in environments that challenge me to learn and build meaningful technology. Always open to discussions on artificial intelligence/machine learning and emerging tech.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('experience')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Learn More
              </Button>
              <Button
                className="bg-slate-700 hover:bg-slate-600 text-white border border-cyan-400/30 hover:border-cyan-400/50 px-8 py-3 rounded-full transition-all shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a href="mailto:krishnasomani272005@gmail.com" className="text-white/60 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Mail size={32} />
              </a>
              <a href="tel:+919940520537" className="text-white/60 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Phone size={32} />
              </a>
              <a href="https://github.com/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/kr1shnasomani" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors transform hover:scale-110">
                <Linkedin size={32} />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
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
                transition={{ delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-start mb-4">
                  <div className="w-20 h-20 rounded-lg bg-slate-800/50 backdrop-blur-lg border border-cyan-500/30 flex items-center justify-center mr-6 flex-shrink-0 p-2">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                    <p className="text-cyan-300 font-medium leading-tight">{exp.period}</p>
                    <p className="text-white/80 leading-tight">{exp.company}, {exp.location.split(',')[0]}</p>
                    {exp.description && (
                      <p className="text-white/70 text-sm leading-relaxed mt-4">{exp.description}</p>
                    )}
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent ml-10 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
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
                transition={{ delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-start justify-center mb-4">
                  <div className="w-20 h-20 rounded-lg bg-slate-800/50 backdrop-blur-lg border border-cyan-500/30 flex items-center justify-center mr-6 flex-shrink-0 p-2">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white leading-tight">{edu.institution}</h3>
                    <p className="text-white/60 text-sm leading-tight">{edu.period}</p>
                    <p className="text-cyan-300 font-medium leading-tight">{edu.grade}</p>
                  </div>
                </div>
                {index < education.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent mx-auto mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Certifications
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/30 backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-20 h-20 rounded-lg bg-slate-800/50 backdrop-blur-lg border border-cyan-500/30 flex items-center justify-center mr-6 flex-shrink-0 p-2">
                        <img 
                          src={cert.logo} 
                          alt={`${cert.provider} logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                        <p className="text-cyan-300 font-medium leading-tight">{cert.provider}</p>
                        <p className="text-white/60 text-sm leading-tight">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ProjectCarousel projects={projects} />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:border-cyan-400/40 transition-all h-full shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-slate-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Achievements
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:bg-slate-800/70 hover:border-cyan-400/40 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/10">
                  <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-4">
                    <img
                      src={achievement.logo}
                      alt={achievement.title}
                      className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-center">{achievement.title}</CardTitle>
                    <CardDescription className="text-white/70 text-center">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-white/80">
              Made with ❤️ by Krishna Somani
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
