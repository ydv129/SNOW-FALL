import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nick@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 bg-dark/90 backdrop-blur-md border-t border-glow/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-r from-glow/10 to-secondary/10 hover:from-glow/20 hover:to-secondary/20 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-light group-hover:text-glow transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-light/70">
            <span>© 2025 Nick Hydra. Made with</span>
            <Heart className="h-4 w-4 text-secondary animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;