import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    gsap.fromTo('.nav-item', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-glow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <div className="p-2 rounded-lg bg-gradient-to-r from-glow/20 to-secondary/20 group-hover:from-glow/30 group-hover:to-secondary/30 transition-all duration-300">
              <Code2 className="h-6 w-6 text-glow" />
            </div>
            <span className="text-xl font-bold font-orbitron text-white group-hover:text-glow transition-colors duration-300">
              Nick Hydra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-item px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? 'text-glow'
                      : 'text-light hover:text-glow'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-glow to-secondary transform transition-transform duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-glow hover:bg-glow/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark/95 backdrop-blur-md border-t border-glow/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-glow bg-glow/10'
                    : 'text-light hover:text-glow hover:bg-glow/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;