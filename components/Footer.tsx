import React from 'react';
import { NavLink } from 'react-router-dom';
import { Watch } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 border-t border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <NavLink to="/" className="flex items-center gap-3 group mb-6 w-fit">
              <div className="p-2 border border-zinc-700 group-hover:border-gold-500 transition-colors rounded-sm">
                <Watch className="w-6 h-6 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider text-white">KRONBERG</span>
                <span className="font-sans text-[0.6rem] tracking-[0.3em] text-zinc-400 uppercase">Zeithaus Muenchen</span>
              </div>
            </NavLink>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-4">
              Sammler, nicht Kunden. Geprueft, bevor etwas sichtbar wird.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              Maximilianstrasse, Muenchen
            </p>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium">Navigation</h4>
            <ul className="space-y-4">
              <li><NavLink to="/watches" className="text-zinc-400 text-sm hover:text-white transition-colors">Kollektion</NavLink></li>
              <li><NavLink to="/about" className="text-zinc-400 text-sm hover:text-white transition-colors">Ueber uns</NavLink></li>
              <li><NavLink to="/contact" className="text-zinc-400 text-sm hover:text-white transition-colors">Kontakt</NavLink></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium">Rechtliches</h4>
            <ul className="space-y-4">
              <li><NavLink to="/impressum" className="text-zinc-400 text-sm hover:text-white transition-colors">Impressum</NavLink></li>
              <li><NavLink to="/privacy" className="text-zinc-400 text-sm hover:text-white transition-colors">Datenschutz</NavLink></li>
              <li><NavLink to="/cookies" className="text-zinc-400 text-sm hover:text-white transition-colors">Cookie-Hinweise</NavLink></li>
            </ul>
          </div>

          {/* Visit Us Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-6 font-medium">Besuchen Sie uns</h4>
            <address className="text-zinc-400 text-sm not-italic leading-relaxed">
              Maximilianstrasse 14<br />
              80539 Muenchen<br />
              Deutschland<br />
              <br />
              <span className="text-xs uppercase tracking-wider text-zinc-500">Nur nach Termin</span>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">
            (c) {new Date().getFullYear()} Kronberg Zeithaus. Alle Rechte vorbehalten. | Entwickelt von <a href="https://amdigital.agency/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors">AM Digital Agency</a>
          </p>
          <p className="text-zinc-600 text-xs max-w-md text-center md:text-right">
            Kronberg Zeithaus ist ein unabhaengiger Spezialist fuer seltene Zeitmesser. Keine Verbindung zu Herstellern oder autorisierten Haendlern.
          </p>
        </div>
      </div>
    </footer>
  );
};
