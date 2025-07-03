import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nick.hydra@example.com',
      href: 'mailto:nick.hydra@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message
    gsap.to('.success-message', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    // Hide success message after 3 seconds
    setTimeout(() => {
      gsap.to('.success-message', {
        opacity: 0,
        y: -20,
        duration: 0.5
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-to-r from-glow via-white to-secondary bg-clip-text text-transparent">
              Contact
            </span>
          </h1>
          <p className="text-xl text-light/80 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef}>
            <div className="bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold font-orbitron text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-glow/30 rounded-lg text-white placeholder-light/50 focus:border-glow/60 focus:outline-none focus:ring-2 focus:ring-glow/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-glow/30 rounded-lg text-white placeholder-light/50 focus:border-glow/60 focus:outline-none focus:ring-2 focus:ring-glow/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-light/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark/50 border border-glow/30 rounded-lg text-white placeholder-light/50 focus:border-glow/60 focus:outline-none focus:ring-2 focus:ring-glow/20 transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark/50 border border-glow/30 rounded-lg text-white placeholder-light/50 focus:border-glow/60 focus:outline-none focus:ring-2 focus:ring-glow/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-glow to-secondary rounded-lg text-dark font-medium hover:shadow-lg hover:shadow-glow/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Success Message */}
              <div className="success-message fixed top-20 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg opacity-0 transform translate-y-[-20px] z-50">
                Message sent successfully! I'll get back to you soon.
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold font-orbitron text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center group hover:text-glow transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-glow/20 to-secondary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-glow" />
                    </div>
                    <div>
                      <p className="text-sm text-light/60">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-dark/80 to-dark/40 backdrop-blur-sm border border-glow/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-orbitron text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-glow/20 to-secondary/20 flex items-center justify-center hover:scale-110 hover:from-glow/30 hover:to-secondary/30 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-glow group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-glow/10 to-secondary/10 border border-glow/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-orbitron text-white mb-4">Availability</h3>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-light">Available for new projects</span>
              </div>
              <p className="text-light/80 text-sm">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;