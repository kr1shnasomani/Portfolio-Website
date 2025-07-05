
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
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'certifications', 'achievements', 'contact'];
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
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const projects = [
    {
      title: "BloodPrint",
      description: "Blood group prediction from fingerprints using deep learning with PyTorch, EfficientNetB0, and ResNet50",
      tech: ["PyTorch", "EfficientNetB0", "ResNet50", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      title: "CaptionCraft",
      description: "Image caption generator using DenseNet201 + LSTM architecture for automated image understanding",
      tech: ["TensorFlow", "Keras", "DenseNet201", "LSTM"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "SpeedVision",
      description: "Vehicle detection and speed estimation system using YOLOv8 and OpenCV for traffic monitoring",
      tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      title: "ToneSense",
      description: "Speech emotion recognition system achieving 98%+ accuracy using TensorFlow and Librosa",
      tech: ["TensorFlow", "Librosa", "NLP", "Audio Processing"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    },
    {
      title: "Sportiq",
      description: "Player and ball tracking system for tennis using Mediapipe and custom TrackNet implementation",
      tech: ["Mediapipe", "TrackNet", "Computer Vision", "Sports Analytics"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    }
  ];

  const experiences = [
    {
      company: "PharmEasy",
      role: "Data Science Intern",
      period: "Jun 2025–Present",
      description: "Chatbot development, AI content pipeline, WhatsApp integration",
      color: "bg-blue-500"
    },
    {
      company: "ifYK, New York",
      role: "Machine Learning Intern",
      period: "Sep–Oct 2024",
      description: "Llama 3.1-powered chatbot, web scraping, FastAPI deployment",
      color: "bg-purple-500"
    },
    {
      company: "Accuracy, Hyderabad",
      role: "Python Developer",
      period: "Jun–Jul 2024",
      description: "Job data analysis, scraping, hiring insights",
      color: "bg-green-500"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Krishna Somani
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white/80'
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Krishna Somani
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-200">
              Aspiring AI/ML Engineer | Data Scientist | Developer
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              I blend deep theoretical knowledge with hands-on expertise to build intelligent systems that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="mailto:krishna@example.com" className="text-white/60 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+1234567890" className="text-white/60 hover:text-blue-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
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

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate tech enthusiast specializing in Artificial Intelligence, Machine Learning, and Data Science. 
              Currently pursuing my education at <strong>SRM University</strong> with a CGPA of <strong>8.97</strong>, 
              I combine strong theoretical foundations with practical problem-solving skills. 
              My expertise spans deep learning, computer vision, and natural language processing, 
              with a focus on building intelligent systems that create real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      {project.title}
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {tech}
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

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full ${exp.color} mr-4`}></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-300">{exp.company}</p>
                    <p className="text-white/60 text-sm">{exp.period}</p>
                  </div>
                </div>
                <p className="text-white/80 ml-8">{exp.description}</p>
                {index < experiences.length - 1 && (
                  <div className="w-px h-8 bg-white/20 ml-2 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
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
      <section id="certifications" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
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
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                <Card className="bg-white/5 backdrop-blur-lg border-white/10">
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
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Textarea 
                placeholder="Your Message" 
                rows={6}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
              >
                Send Message
              </Button>
            </motion.form>

            <div className="text-center mt-12">
              <p className="text-white/80 mb-4">Or reach out directly:</p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <Mail className="mx-auto mb-2 text-blue-400" size={24} />
                  <p className="text-white/80">krishna@example.com</p>
                </div>
                <div className="text-center">
                  <Phone className="mx-auto mb-2 text-blue-400" size={24} />
                  <p className="text-white/80">+1 (234) 567-8901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              © 2025 Krishna Somani. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:krishna@example.com" className="text-white/60 hover:text-blue-400 transition-colors">
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
