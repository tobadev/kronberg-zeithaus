import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kz-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleDecline();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem('kz-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kz-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-8 right-8 z-50 w-full max-w-[360px] px-6 py-5 bg-[#121212]/90 backdrop-blur-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)] opacity-0 translate-y-1 animate-[cookie-fade-in_0.4s_ease-out_forwards]"
      style={{
        animationDelay: '0s'
      }}
    >
      <p className="text-zinc-400 text-[11px] leading-relaxed mb-4">
        To ensure optimal functionality, this website uses essential cookies. See our{' '}
        <NavLink to="/privacy" className="text-[#D4AF37] hover:underline">
          Privacy Policy
        </NavLink>
        {' '}for details.
      </p>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleDecline}
          className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 hover:text-zinc-300 transition-colors px-3 py-2"
          tabIndex={0}
        >
          Decline
        </button>

        <button
          onClick={handleAccept}
          className="text-[10px] uppercase tracking-[0.15em] text-[#D4AF37] hover:text-white transition-colors px-3 py-2"
          tabIndex={0}
        >
          Accept
        </button>
      </div>
    </div>
  );
};