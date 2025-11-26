import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { MapPin, Phone, Mail, CheckCircle, Building2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in bg-charcoal-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Partnership & Institutional Contact"
          subtitle="Strategic alliances, allocation mandates, and advisory relationships"
        />

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Kronberg Zeithaus collaborates selectively with private banks, family offices, independent watchmakers, and cultural institutions. We prioritize partnerships grounded in patience, transparency, and a shared respect for mechanical heritage. If your mandate aligns with ours, we welcome an introduction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left Column - Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Who Should Use This Form</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Family offices & private banks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Asset managers & investment desks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Auction houses & specialist dealers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Manufacturers & independents exploring representation</p>
                </div>
              </div>
              <div className="mt-6 p-4 border-l-2 border-gold-500 bg-charcoal-950/50">
                <p className="text-zinc-500 text-xs leading-relaxed">
                  <strong className="text-zinc-400">Private collectors:</strong> For individual watch acquisition requests, please browse our collection and use the dedicated inquiry form on each timepiece page.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Boutique Location</h3>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <address className="not-italic text-zinc-400 leading-relaxed">
                  Maximilianstraße 14<br />
                  80539 München<br />
                  Germany
                </address>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <a href="tel:+498912345678" className="text-zinc-400 hover:text-white transition-colors text-sm">+49 89 1234 5678</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <a href="mailto:partnerships@kronberg-zeithaus.de" className="text-zinc-400 hover:text-white transition-colors text-sm">partnerships@kronberg-zeithaus.de</a>
                </div>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 bg-charcoal-950">
              <p className="text-xs uppercase tracking-widest text-gold-500 mb-4">Opening Hours</p>
              <div className="flex justify-between text-zinc-400 text-sm mb-2">
                <span>Mon - Fri</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Sat</span>
                <span>10:00 - 14:00 (By appointment)</span>
              </div>
            </div>
          </div>

          {/* Right Column - Partnership Form */}
          <div className="bg-charcoal-950 p-8 border border-zinc-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="w-16 h-16 text-gold-500 mb-6" />
                <h3 className="font-serif text-2xl text-white mb-2">Partnership Inquiry Received</h3>
                <p className="text-zinc-400 max-w-sm mb-2">
                  Thank you for your interest. Our institutional team will review your proposal and respond to qualified requests within one business day (CET).
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
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Partnership Inquiry</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                    Strategic collaborations, allocation opportunities, and institutional mandates.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Role / Title</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Organization</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Country / Region</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Type of Partnership</label>
                  <select
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="family-office">Family Office / Private Bank</option>
                    <option value="asset-manager">Asset Manager / Advisor</option>
                    <option value="auction-house">Auction House / Dealer</option>
                    <option value="brand">Brand / Independent Watchmaker</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Intent, portfolio size, mandate scope, specific collaboration interests..."
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 text-charcoal-950 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300"
                >
                  Submit Partnership Inquiry
                </button>

                <p className="text-center text-zinc-600 text-[10px] leading-relaxed">
                  Our team responds to qualified institutional requests within one business day (CET).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};