import React, { useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Cookie-Richtlinie" subtitle="Nutzung & Praeferenzen" />
        
        <div className="prose prose-invert prose-zinc text-zinc-300 space-y-8 text-sm leading-relaxed">
          
          <div>
            <h3 className="text-white font-serif text-lg mb-2">Was sind Cookies?</h3>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Endgeraet gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Seite, sich an Ihre Aktionen und Einstellungen zu erinnern - etwa Login, Sprache, Schriftgroesse oder Anzeigeoptionen - damit Sie diese nicht bei jedem Besuch erneut eingeben muessen.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">Wie wir Cookies verwenden</h3>
            <p>
              Wir setzen Cookies fuer folgende Zwecke ein:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Essenzielle Cookies:</strong> Fuer den Betrieb der Website erforderlich (z. B. Sicherheit, Sitzungssteuerung).</li>
              <li><strong>Funktionale Cookies:</strong> Verbessern Leistung und Komfort, indem sie Einstellungen wie Sprache oder Ansicht merken.</li>
              <li><strong>Analyse-Cookies:</strong> Ermoeglichen uns zu verstehen, wie Besuchende mit der Seite interagieren, indem Informationen anonym ausgewertet werden.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">Ihre Praeferenzen verwalten</h3>
            <p>
              Sie koennen Cookies nach Belieben kontrollieren und/oder loeschen. Sie koennen saemtliche Cookies auf Ihrem Geraet entfernen und viele Browser so konfigurieren, dass keine neuen Cookies gesetzt werden. In diesem Fall muessen Sie jedoch moeglicherweise bestimmte Einstellungen bei jedem Besuch erneut vornehmen und manche Dienste funktionieren moeglicherweise eingeschraenkt.
            </p>
          </div>

          <div className="bg-charcoal-950 border border-zinc-800 p-6 rounded-sm mt-8">
            <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-2">Aktueller Status</h4>
            <p>
              Ihr aktueller Einwilligungsstatus: <span className="text-white font-mono">{localStorage.getItem('kronberg_cookie_consent') || 'Nicht gesetzt'}</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
