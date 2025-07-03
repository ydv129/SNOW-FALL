import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Download, Calendar, MapPin, Award, Code, Briefcase, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const timelineRef = useRef(null);

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for enterprise applications using React, TypeScript, and modern web technologies.',
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Implemented design system used across 10+ products'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed full-stack web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Built 15+ production applications',
        'Reduced deployment time by 60%',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2018 - 2020',
      location: 'Austin, TX',
      description: 'Created responsive web interfaces and interactive user experiences for startup products.',
      achievements: [
        'Increased user engagement by 35%',
        'Implemented A/B testing framework',
        'Optimized mobile performance'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      location: 'Boston, MA',
      gpa: '3.8/4.0'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Angular'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
    { category: 'Animation', items: ['GSAP', 'Three.js', 'Framer Motion', 'CSS Animations'] }
  ];

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    
    gsap.fromTo(items,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-to-r from-glow via-white to-secondary bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-light/80 mb-8">
            A comprehensive overview of my professional journey and technical expertise.
          </p>
          
          {/* Download Button */}
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-glow to-secondary rounded-lg text-dark font-medium hover:shadow-lg hover:shadow-glow/25 transition-all duration-300 transform hover:scale-105">
            <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Download PDF Resume
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <section>
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-glow mr-4" />
                <h2 className="text-3xl font-bold font-orbitron text-white">Experience</h2>
              </div>
              
              <div ref={timelineRef} className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="timeline-item relative pl-8 border-l-2 border-glow/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-glow rounded-full shadow-lg shadow-glow/50"></div>
                    
                    <div className="bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-xl p-6 hover:border-glow/40 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <div className="flex items-center text-glow text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-light/80 mb-4">
                        <span className="font-medium">{job.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      
                      <p className="text-light/80 mb-4">{job.description}</p>
                      
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-light/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center mb-8">
                <Award className="h-8 w-8 text-glow mr-4" />
                <h2 className="text-3xl font-bold font-orbitron text-white">Education</h2>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center text-glow text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-light/80 mb-2">
                    <span className="font-medium">{edu.school}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    {edu.location}
                  </div>
                  
                  <p className="text-secondary">GPA: {edu.gpa}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-glow mr-3" />
                <h2 className="text-2xl font-bold font-orbitron text-white">Skills</h2>
              </div>
              
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-glow mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-glow/10 border border-glow/30 rounded-full text-sm text-light hover:bg-glow/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-gradient-to-br from-glow/10 to-secondary/10 border border-glow/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-light/80 mb-6">
                <p>nick.hydra@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
                <p>Available for remote work</p>
              </div>
              <Link 
                to="/contact"
                className="inline-flex items-center text-glow hover:text-white transition-colors duration-300"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;