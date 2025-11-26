import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 border-t border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="font-serif text-2xl text-white mb-6">KRONBERG <span className="text-gold-500 italic">Zeithaus</span></h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-4">
              Collectors, not customers. Verified before visible.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              Maximilianstraße, München
            </p>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium">Navigation</h4>
            <ul className="space-y-4">
              <li><NavLink to="/watches" className="text-zinc-400 text-sm hover:text-white transition-colors">Collection</NavLink></li>
              <li><NavLink to="/about" className="text-zinc-400 text-sm hover:text-white transition-colors">Philosophy</NavLink></li>
              <li><NavLink to="/contact" className="text-zinc-400 text-sm hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium">Legal</h4>
            <ul className="space-y-4">
              <li><NavLink to="/impressum" className="text-zinc-400 text-sm hover:text-white transition-colors">Impressum</NavLink></li>
              <li><NavLink to="/privacy" className="text-zinc-400 text-sm hover:text-white transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/cookies" className="text-zinc-400 text-sm hover:text-white transition-colors">Cookie Policy</NavLink></li>
            </ul>
          </div>

          {/* Visit Us Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium">Visit Us</h4>
            <address className="text-zinc-400 text-sm not-italic leading-relaxed">
              Maximilianstraße 14<br />
              80539 München<br />
              Germany<br />
              <br />
              <span className="text-xs uppercase tracking-wider text-zinc-500">By Appointment Only</span>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Kronberg Zeithaus. All rights reserved. | Built by <a href="https://amdigital.agency/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors">AM Digital Agency</a>
          </p>
          <p className="text-zinc-600 text-xs max-w-md text-center md:text-right">
            Kronberg Zeithaus is an independent specialist dealer in rare timepieces. Not affiliated with watch manufacturers or authorized retailers.
          </p>
        </div>
      </div>
    </footer>
  );
};