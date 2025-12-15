import React, { useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Impressum" subtitle="Rechtliche Hinweise" />
        
        <div className="prose prose-invert prose-zinc text-zinc-300 space-y-8">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Angaben gemaess Paragraph 5 TMG</h3>
            <p>
              Kronberg Zeithaus GmbH<br />
              Maximilianstrasse 14<br />
              80539 Muenchen<br />
              Deutschland
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Vertreten durch</h3>
            <p>
              Friedrich von Kronberg<br />
              Geschaeftsfuehrer
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Kontakt</h3>
            <p>
              Telefon: +49 (0) 89 1234 5678<br />
              E-Mail: concierge@kronbergzeithaus.de
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Muenchen<br />
              Registernummer: HRB 123456
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemaess Paragraph 27a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-8 mt-8">
             <h3 className="text-white font-serif text-xl mb-4">Streitschlichtung</h3>
             <p className="text-sm text-zinc-400">
               Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br/>
               Unsere E-Mail-Adresse finden Sie oben im Impressum.<br/>
               Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
