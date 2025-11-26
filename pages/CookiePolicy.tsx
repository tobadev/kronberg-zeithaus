import React, { useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Cookie-Richtlinie" subtitle="Usage & Preferences" />
        
        <div className="prose prose-invert prose-zinc text-zinc-300 space-y-8 text-sm leading-relaxed">
          
          <div>
            <h3 className="text-white font-serif text-lg mb-2">What are Cookies?</h3>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">How We Use Cookies</h3>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the operation of the website (e.g., security, network management).</li>
              <li><strong>Functional Cookies:</strong> Enhance the performance and functionality of our website (e.g., remembering your language settings).</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website by collecting and reporting information anonymously.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-2">Managing Your Preferences</h3>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
          </div>

          <div className="bg-charcoal-950 border border-zinc-800 p-6 rounded-sm mt-8">
            <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-2">Current Status</h4>
            <p>
              Your current consent state: <span className="text-white font-mono">{localStorage.getItem('kronberg_cookie_consent') || 'Not Set'}</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};