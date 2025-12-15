import React, { useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Datenschutzerklaerung" subtitle="Datenschutz & Vertraulichkeit" />
        
        <div className="prose prose-invert prose-zinc text-zinc-300 space-y-8 text-sm leading-relaxed">
          <p className="font-serif italic text-lg text-zinc-400">
            Der Schutz Ihrer persoenlichen Daten hat fuer Kronberg Zeithaus oberste Prioritaet. Nachfolgend erlaeutern wir, welche Informationen wir erheben, wie wir sie verarbeiten und welche Rechte Ihnen zustehen.
          </p>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">1. Datenschutz auf einen Blick</h3>
            <p>
              <strong>Allgemeine Hinweise:</strong> Wenn Sie diese Website besuchen, werden unterschiedliche personenbezogene Daten erhoben. Personenbezogene Daten sind Informationen, mit denen Sie persoenlich identifiziert werden koennen. Die vorliegenden Hinweise geben einen ueberblick darueber, was mit Ihren Daten geschieht.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">2. Verantwortliche Stelle & Kontakt</h3>
            <p>
              <strong>Verantwortlich:</strong><br/>
              Kronberg Zeithaus GmbH<br/>
              Maximilianstrasse 14<br/>
              80539 Muenchen<br/>
              E-Mail: privacy@kronbergzeithaus.de
            </p>
            <p className="mt-4">
              Wir behandeln Ihre personenbezogenen Daten vertraulich und gemaess den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">3. Datenerfassung auf unserer Website</h3>
            <p>
              <strong>Server-Logs:</strong> Unser Hosting-Anbieter erhebt automatisch technische Daten (z. B. Browsertyp, Betriebssystem, Zeitpunkt des Seitenaufrufs). Diese Daten dienen ausschliesslich der Gewaehrleistung eines stoerungsfreien Betriebs und werden nicht mit anderen Datenquellen zusammengefuehrt.
            </p>
            <p className="mt-4">
              <strong>Cookies:</strong> Naehere Informationen finden Sie in unserer Cookie-Richtlinie. Sie haben jederzeit die Moeglichkeit, Ihre Einwilligungen anzupassen oder Cookies zu deaktivieren.
            </p>
            <p className="mt-4">
              <strong>Kontaktformulare:</strong> Wenn Sie uns Anfragen uebermitteln, nutzen wir die angegebenen Daten (Name, Kontakt, Inhalt der Nachricht) ausschliesslich zur Bearbeitung Ihres Anliegens sowie fuer moegliche Rueckfragen. Eine Weitergabe findet ohne Ihre Einwilligung nicht statt.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">4. Vertraulichkeit der Mandate</h3>
            <p>
              Als diskreter Handelspartner fuer hochwertige Uhren beschraenken wir den Zugriff auf sensible Informationen auf einen engen Kreis fuehrender Mitarbeitender. Daten zu Transaktionen, Ankaufswuenschen oder Sammlungsdetails werden nicht zu Marketingzwecken weitergegeben und ausschliesslich auf Servern innerhalb der EU verarbeitet.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">5. Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft ueber Herkunft, Empfaenger und Zweck Ihrer gespeicherten personenbezogenen Daten. Zudem koennen Sie die Berichtigung, Sperrung oder Loeschung dieser Daten verlangen. Hierzu sowie zu weiteren Fragen zum Datenschutz koennen Sie sich jederzeit an uns wenden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
