import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const [interest, setInterest] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const model = params.get('model');
    if (model) {
      setInterest(`Inquiry: ${model}`);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in bg-charcoal-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Inquire" subtitle="Begin the conversation" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Visit Our Boutique</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <address className="not-italic text-zinc-400 leading-relaxed">
                  Maximilianstraße 14<br />
                  80539 München<br />
                  Germany
                </address>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <a href="tel:+498912345678" className="text-zinc-400 hover:text-white transition-colors">+49 89 1234 5678</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <a href="mailto:concierge@kronberg-zeithaus.de" className="text-zinc-400 hover:text-white transition-colors">concierge@kronberg-zeithaus.de</a>
                </div>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 bg-charcoal-950">
              <p className="text-xs uppercase tracking-widest text-gold-500 mb-2">Opening Hours</p>
              <div className="flex justify-between text-zinc-400 text-sm mb-2">
                <span>Mon - Fri</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Sat</span>
                <span>10:00 - 14:00 (Appt. only)</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-charcoal-950 p-8 border border-zinc-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="w-16 h-16 text-gold-500 mb-6" />
                <h3 className="font-serif text-2xl text-white mb-2">Inquiry Received</h3>
                <p className="text-zinc-400 max-w-sm">
                  Thank you for your interest. A Kronberg advisor will review your request and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs uppercase tracking-widest text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Interest (Model/Reference)</label>
                  <input 
                    type="text" 
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. Rolex Submariner 126610LN"
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold-500 text-charcoal-950 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};