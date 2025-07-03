import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Code, Palette, Zap, Globe, Smartphone, Database, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications using React, Node.js, and modern frameworks. Clean, scalable, and performant code.',
      features: ['React & Next.js', 'TypeScript', 'Node.js & Express', 'API Development']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Animation & Interactions',
      description: 'Engaging animations and micro-interactions using GSAP, Framer Motion, and CSS animations.',
      features: ['GSAP Animations', 'Three.js', 'Interactive Elements', 'Performance Optimization']
    },
    {
      icon: Globe,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility and ranking with technical SEO and performance optimization.',
      features: ['Technical SEO', 'Performance Audit', 'Core Web Vitals', 'Analytics Setup']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and modern mobile technologies.',
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: Database,
      title: 'Backend Solutions',
      description: 'Robust backend systems with databases, APIs, and cloud infrastructure for scalable applications.',
      features: ['Database Design', 'Cloud Deployment', 'API Architecture', 'Security Implementation']
    }
  ];

  useEffect(() => {
    const cards = servicesRef.current?.querySelectorAll('.service-card');
    
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
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-to-r from-glow via-white to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            Comprehensive digital solutions to bring your ideas to life with cutting-edge technology and creative expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative p-8 rounded-2xl bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 hover:border-glow/40 transition-all duration-500 overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-glow/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-glow/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-glow" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-orbitron text-white mb-4 group-hover:text-glow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-light/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-light/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-glow mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-glow/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-glow/10 to-secondary/10 border border-glow/20">
            <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-light/80 mb-6 max-w-md">
              Let's discuss how we can bring your vision to life with innovative solutions.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-glow to-secondary rounded-lg text-dark font-medium hover:shadow-lg hover:shadow-glow/25 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;