import React, { useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Impressum" subtitle="Legal Information" />
        
        <div className="prose prose-invert prose-zinc text-zinc-300 space-y-8">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Angaben gemäß § 5 TMG</h3>
            <p>
              Kronberg Zeithaus GmbH<br />
              Maximilianstraße 14<br />
              80539 München<br />
              Deutschland
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Vertreten durch</h3>
            <p>
              Friedrich von Kronberg<br />
              Geschäftsführer
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
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 123456
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-8 mt-8">
             <h3 className="text-white font-serif text-xl mb-4">Streitschlichtung</h3>
             <p className="text-sm text-zinc-400">
               Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br/>
               Unsere E-Mail-Adresse finden Sie oben im Impressum.<br/>
               Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};