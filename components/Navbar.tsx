import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Watch } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Collection', path: '/watches' },
    { name: 'Philosophy', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-sm border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="p-2 border border-zinc-700 group-hover:border-gold-500 transition-colors rounded-sm">
            <Watch className="w-6 h-6 text-gold-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider text-white">KRONBERG</span>
            <span className="font-sans text-[0.6rem] tracking-[0.3em] text-zinc-400 uppercase">Zeithaus München</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-gold-500 ${isActive ? 'text-gold-500' : 'text-zinc-300'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-300 hover:text-gold-500 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-charcoal-900 z-40 flex flex-col justify-center items-center transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-serif text-2xl transition-colors ${isActive ? 'text-gold-500' : 'text-zinc-300'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};