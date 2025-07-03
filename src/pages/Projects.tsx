import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: '3D Portfolio Website',
      description: 'An interactive 3D portfolio built with Three.js and React. Features immersive animations, particle systems, and responsive design.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      tech: ['React', 'Three.js', 'GSAP', 'WebGL'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      tech: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with interactive charts, location-based forecasts, and animated weather icons.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'frontend',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 5,
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by OpenAI API with real-time messaging, conversation history, and smart responses.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      tech: ['React', 'OpenAI API', 'WebSocket', 'Express'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 6,
      title: 'Crypto Trading Bot',
      description: 'An automated cryptocurrency trading bot with backtesting, risk management, and real-time market analysis.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      tech: ['Python', 'TensorFlow', 'Binance API', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const cards = projectsRef.current?.querySelectorAll('.project-card');
    
    gsap.fromTo(cards,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [filteredProjects]);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-to-r from-glow via-white to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-glow to-secondary text-dark'
                  : 'bg-dark/50 border border-glow/30 text-light hover:border-glow/60 hover:text-glow'
              }`}
            >
              <Filter className="h-4 w-4 inline mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-2xl overflow-hidden hover:border-glow/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark/80 rounded-full border border-glow/30 hover:border-glow/60 transition-all duration-300"
                  >
                    <Github className="h-5 w-5 text-glow" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark/80 rounded-full border border-glow/30 hover:border-glow/60 transition-all duration-300"
                  >
                    <ExternalLink className="h-5 w-5 text-glow" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-glow transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-light/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-glow/10 border border-glow/30 rounded-full text-xs text-light hover:bg-glow/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-glow/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-glow/10 to-secondary/10 border border-glow/20">
            <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-light/80 mb-6 max-w-md">
              Let's collaborate and create something amazing together.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-glow to-secondary rounded-lg text-dark font-medium hover:shadow-lg hover:shadow-glow/25 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;