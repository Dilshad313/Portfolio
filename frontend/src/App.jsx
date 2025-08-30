import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Database,
  Globe,
  Star,
  ArrowRight,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  Terminal,
  Sparkles
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const skills = [
    { name: 'React', level: 95, icon: <Code2 className="w-5 h-5" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', level: 90, icon: <Terminal className="w-5 h-5" />, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', level: 85, icon: <Database className="w-5 h-5" />, color: 'from-green-400 to-emerald-500' },
    { name: 'UI/UX Design', level: 88, icon: <Palette className="w-5 h-5" />, color: 'from-pink-400 to-purple-500' },
    { name: 'AWS', level: 75, icon: <Globe className="w-5 h-5" />, color: 'from-orange-400 to-red-500' },
    { name: 'GraphQL', level: 82, icon: <Sparkles className="w-5 h-5" />, color: 'from-purple-400 to-pink-500' }
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time data visualization platform with ML-driven insights and predictive analytics',
      tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory, payment processing, and admin dashboard',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media Scheduler',
      description: 'Automated content scheduling platform with analytics and multi-platform support',
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'Bull Queue'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform using smart contracts and decentralized storage',
      tech: ['Solidity', 'Web3.js', 'IPFS', 'React'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications, mentoring junior developers, and architecting scalable solutions.'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Built responsive web applications, improved performance by 40%, and implemented modern UI/UX designs.'
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2018 - 2020',
      description: 'Developed features for SaaS products, collaborated in agile teams, and contributed to open-source projects.'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500`}>
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)',
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800/20">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrollProgress > 5 ? 'backdrop-blur-xl bg-gray-900/70' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative py-2 transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400" />
                  )}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-800/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-gray-900/90 border-t border-gray-800">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-purple-400 transition-colors"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6" ref={heroRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">Available for work</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-400">& UI/UX Enthusiast</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, and cloud architecture.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                View Projects
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gray-700 rounded-full font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                <Download className="inline-block mr-2 w-5 h-5" />
                Download CV
              </button>
            </div>
            
            <div className="flex justify-center space-x-6 pt-8">
              <a href="#" className="p-3 rounded-lg bg-gray-800/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-gray-800/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-lg bg-gray-800/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in building 
                scalable web applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My passion lies in solving complex problems through elegant code and intuitive design. 
                I believe in continuous learning and staying at the forefront of technology trends.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-400">Experience Timeline</h3>
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{exp.role}</h4>
                      <p className="text-purple-400">{exp.company} • {exp.period}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gray-800/50">
                    <div className="text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-800/50">
                    <div className="text-3xl font-bold text-pink-400">30+</div>
                    <div className="text-gray-400">Clients</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-800/50">
                    <div className="text-3xl font-bold text-blue-400">5+</div>
                    <div className="text-gray-400">Years</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gray-800/50">
                    <div className="text-3xl font-bold text-green-400">15+</div>
                    <div className="text-gray-400">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                      <a href={project.live} className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-400">Email</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Subject</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">© 2024 Portfolio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
