import React, { useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Datenschutzerklärung" subtitle="Privacy Policy" />
        
        <div className="prose prose-invert prose-zinc text-zinc-300 space-y-8 text-sm leading-relaxed">
          <p className="font-serif italic text-lg text-zinc-400">
            The privacy of our clients is paramount. Below outlines how Kronberg Zeithaus collects and protects your data.
          </p>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">1. Datenschutz auf einen Blick</h3>
            <p>
              <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h3>
            <p>
              <strong>Datenschutz:</strong> Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-4">
              <strong>Hinweis zur verantwortlichen Stelle:</strong><br/>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/><br/>
              Kronberg Zeithaus GmbH<br/>
              Maximilianstraße 14<br/>
              80539 München<br/>
              E-Mail: concierge@kronberg-zeithaus.de
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">3. Datenerfassung auf unserer Website</h3>
            <p>
              <strong>Cookies:</strong> Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className="mt-4">
              <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">4. Client Confidentiality</h3>
            <p>
              As a purveyor of high-value assets, we adhere to strict confidentiality protocols. Information shared regarding specific acquisitions or sales is accessible only to senior management and is never shared with third-party marketing entities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};