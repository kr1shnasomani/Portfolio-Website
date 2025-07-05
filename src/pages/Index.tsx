
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'education', 'experience', 'skills', 'certifications', 'achievements', 'contact'];
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
  };

  const projects = [
    {
      title: "BloodPrint",
      description: "Blood group prediction from fingerprints using deep learning with PyTorch, EfficientNetB0, and ResNet50",
      tech: ["PyTorch", "EfficientNetB0", "ResNet50", "Deep Learning"],
      image: "/lovable-uploads/ce9f07a9-e7b0-433c-8536-990fbf35c5ab.png"
    },
    {
      title: "CaptionCraft",
      description: "Image caption generator using DenseNet201 + LSTM architecture for automated image understanding",
      tech: ["TensorFlow", "Keras", "DenseNet201", "LSTM"],
      image: "/lovable-uploads/8e746e46-8b0a-409a-b356-e565c59eb2a8.png"
    },
    {
      title: "SpeedVision",
      description: "Vehicle detection and speed estimation system using YOLOv8 and OpenCV for traffic monitoring",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      image: "/lovable-uploads/07dfd706-2a40-495a-8e65-8f37f0d499c3.png"
    },
    {
      title: "ToneSense",
      description: "Speech emotion recognition system achieving 98%+ accuracy using TensorFlow and Librosa",
      tech: ["TensorFlow", "Librosa", "NLP", "Audio Processing"],
      image: "/lovable-uploads/2d227abc-4cde-4bd9-8d77-4a50eb0a9000.png"
    },
    {
      title: "Sportiq",
      description: "Player and ball tracking system for tennis using Mediapipe and custom TrackNet implementation",
      tech: ["Mediapipe", "TrackNet", "Computer Vision", "Sports Analytics"],
      image: "/lovable-uploads/4126598b-6733-4a96-974e-2b9adf11ee6d.png"
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
      company: "PharmEasy, Bengaluru",
      role: "Data Science Intern",
      period: "Jun 2025–Present",
      description: "Developed a chatbot using Dify to recommend diagnostic tests and health packages based on user-reported issues, built a WhatsApp chatbot that brought key app features directly into the chat experience, and created an AI-powered content pipeline that generates short-form content weekly while identifying trending topics.",
      logo: "/lovable-uploads/fd6c3dad-b180-4cfa-a02e-87b22cd159d2.png"
    },
    {
      company: "ifYK, New York",
      role: "Machine Learning Intern", 
      period: "Sep–Oct 2024",
      description: "Engineered a chatbot powered by Hugging Face's Llama 3.1 (8B) model to efficiently extract event-specific data, leveraging NLP capabilities for accurate information retrieval. Designed and implemented web scraping pipelines to preprocess raw HTML into clean, structured text, optimizing data preparation for NLP tasks. Deployed the solution using FastAPI on Render, enabling real-time query handling and seamless user interaction. This system reduced manual effort in event information extraction, streamlining data processing workflows.",
      logo: "/lovable-uploads/1e76810f-7c22-4aa7-8cea-0fed648cd697.png"
    },
    {
      company: "Accuracy, Hyderabad",
      role: "Python Developer",
      period: "Jun–Jul 2024", 
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
    "Google – Crash Course on Python",
    "IBM – Machine Learning with Python", 
    "IBM – Introduction to Computer Vision and Image Processing",
    "DeepLearning.AI – Neural Networks and Deep Learning",
    "Great Learning – Artificial Intelligence with Python"
  ];

  const achievements = [
    "Winner: Temenos Tem-E-thon 2025 Hackathon (Won MacBook Air M3)",
    "Member: IEEE SRMIST (R&D)",
    "Member: Data Science Community SRM (AI/ML)"
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
              {['Home', 'Projects', 'Education', 'Experience', 'Skills', 'Contact'].map((item) => (
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
              AI/ML & Data Science Enthusiast
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-4xl mx-auto leading-relaxed">
              I am an undergraduate student with a strong passion for Artificial Intelligence, Machine Learning, and Data Science. I actively explore these fields by combining a solid foundation in theoretical concepts with hands-on experience through projects, coursework, and independent learning. My goal is to apply these skills to solve real-world problems and contribute to the advancement of intelligent systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-cyan-400/30 text-white hover:bg-cyan-400/10 hover:border-cyan-400/50 px-8 py-3 rounded-full transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="mailto:krishna@example.com" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+1234567890" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
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

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:bg-slate-800/70 hover:border-cyan-400/40 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      {project.title}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-lg bg-slate-800/50 backdrop-blur-lg border border-cyan-500/30 flex items-center justify-center mr-4 flex-shrink-0 p-2">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    <p className="text-white/60 text-sm mb-2">{edu.period}</p>
                    <p className="text-cyan-300 font-medium">{edu.grade}</p>
                  </div>
                </div>
                {index < education.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent ml-8 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
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
            Experience Timeline
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
                  <div className="w-16 h-16 rounded-lg bg-slate-800/50 backdrop-blur-lg border border-cyan-500/30 flex items-center justify-center mr-4 flex-shrink-0 p-2">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-300 font-medium">{exp.company}</p>
                    <p className="text-white/60 text-sm mb-3">{exp.period}</p>
                    <p className="text-white/80 text-base leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent ml-8 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Skills & Technologies
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Courses & Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:bg-slate-800/70 hover:border-cyan-400/40 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-white/90">{cert}</p>
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
            Achievements & Involvements
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-6 last:mb-0"
              >
                <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:border-cyan-400/40 transition-all shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-white/90">{achievement}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleContactSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name"
                  className="bg-slate-800/50 border-cyan-500/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-800/50 border-cyan-500/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
                />
              </div>
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-slate-800/50 border-cyan-500/20 text-white placeholder:text-white/50 focus:border-cyan-400/50"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Send Message
              </Button>
            </motion.form>

            <div className="text-center mt-12">
              <p className="text-white/80 mb-4">Or reach out directly:</p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <Mail className="mx-auto mb-2 text-cyan-400" size={24} />
                  <p className="text-white/80">krishna@example.com</p>
                </div>
                <div className="text-center">
                  <Phone className="mx-auto mb-2 text-cyan-400" size={24} />
                  <p className="text-white/80">+1 (234) 567-8901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              © 2025 Krishna Somani. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:krishna@example.com" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
