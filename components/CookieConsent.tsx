import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kronberg_cookie_consent');
    if (!consent) {
      // Delayed entrance for quieter UX
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kronberg_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kronberg_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] px-6 py-4 bg-charcoal-950/90 backdrop-blur-md border border-zinc-800 rounded-sm shadow-xl animate-fade-in">

      <p className="text-zinc-300 text-xs tracking-wide leading-relaxed mb-4">
        We use functional and analytical cookies to ensure an optimal browsing experience.{' '}
        <NavLink to="/privacy" className="text-gold-500 hover:underline">
          Privacy Policy
        </NavLink>
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={handleDecline}
          className="px-4 py-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
        >
          Decline
        </button>

        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-gold-500 text-charcoal-950 text-[10px] uppercase tracking-widest font-medium hover:bg-gold-400 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
};