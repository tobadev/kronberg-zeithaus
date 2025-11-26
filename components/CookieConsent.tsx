import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Shield } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kronberg_cookie_consent');
    if (!consent) {
      // Small delay for better UX on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
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
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-[320px] w-full">
      <div className="bg-charcoal-900 border border-zinc-800 shadow-2xl p-5 rounded-sm relative">
        <button 
          onClick={handleDecline}
          className="absolute top-2 right-2 text-zinc-600 hover:text-zinc-400"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
            <div>
                <h4 className="text-white font-serif text-sm">Privacy & Cookies</h4>
                <p className="text-zinc-400 text-[10px] leading-relaxed mt-1">
                    We use cookies for analytics and functionality. 
                    <NavLink to="/privacy" className="text-gold-500 hover:underline ml-1">Privacy Policy</NavLink>
                </p>
            </div>
        </div>

        <div className="flex gap-2 mt-2 justify-end">
          <button 
            onClick={handleDecline}
            className="text-zinc-500 text-[10px] uppercase tracking-widest px-3 py-2 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="bg-gold-500 text-charcoal-950 px-4 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};