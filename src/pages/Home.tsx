import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import Background3D from '../components/Background3D';

const Home = () => {
  const heroRef = useRef(null);
  const avatarRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(avatarRef.current,
      { scale: 0, rotation: 180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for avatar
    gsap.to(avatarRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Glitch effect
    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 8 });
    glitchTl.to(avatarRef.current, {
      x: 3,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <>
      <Background3D />
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div ref={heroRef} className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <div ref={textRef}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-orbitron mb-8">
              <span className="bg-gradient-to-r from-glow via-white to-secondary bg-clip-text text-transparent">
                Nick Hydra
              </span>
            </h1>
          </div>

          {/* Avatar - Between name and tagline */}
          <div ref={avatarRef} className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-glow/20 to-secondary/20 p-1 shadow-2xl shadow-glow/20">
                <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Nick Hydra"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full border-2 border-glow/30 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border border-secondary/40 animate-pulse"></div>
              
              {/* Floating particles */}
              <Sparkles className="absolute -top-3 -right-3 h-5 w-5 text-glow animate-bounce" />
              <Sparkles className="absolute -bottom-3 -left-3 h-4 w-4 text-secondary animate-bounce delay-300" />
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-rajdhani font-light mb-8 text-glow">
            <span className="inline-block animate-pulse">{'<'}</span>
            <span className="mx-2">Interactive Developer</span>
            <span className="inline-block animate-pulse">{'/>'}</span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-light/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Crafting immersive digital experiences with cutting-edge technologies. 
            Specializing in React, Three.js, GSAP animations, and modern web development. 
            Turning creative visions into interactive realities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-glow/20 to-secondary/20 rounded-lg border border-glow/30 hover:border-glow/60 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-white font-medium flex items-center">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-glow/10 to-secondary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <Link 
              to="/resume"
              className="group px-8 py-4 border border-light/30 rounded-lg hover:border-glow/60 transition-all duration-300"
            >
              <span className="text-light group-hover:text-glow transition-colors duration-300 flex items-center">
                Download Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Navigation Quick Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <Link 
              to="/services" 
              className="group text-light/60 hover:text-glow transition-colors duration-300 text-sm font-medium"
            >
              <span className="border-b border-transparent group-hover:border-glow/50 transition-all duration-300">
                Services
              </span>
            </Link>
            <Link 
              to="/projects" 
              className="group text-light/60 hover:text-glow transition-colors duration-300 text-sm font-medium"
            >
              <span className="border-b border-transparent group-hover:border-glow/50 transition-all duration-300">
                Projects
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="group text-light/60 hover:text-glow transition-colors duration-300 text-sm font-medium"
            >
              <span className="border-b border-transparent group-hover:border-glow/50 transition-all duration-300">
                Contact
              </span>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-glow/60 mx-auto" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;