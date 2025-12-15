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
          title="Partnerschaften & Institutionelle Anfragen"
          subtitle="Strategische Allianzen, Allokationsmandate und beratende Kooperationen"
        />

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Kronberg Zeithaus arbeitet ausgewaehlt mit Privatbanken, Family Offices, unabhaengigen Uhrmachern und kulturellen Institutionen zusammen. Wir priorisieren Partnerschaften, die auf Geduld, Transparenz und einem gemeinsamen Respekt fuer mechanisches Erbe basieren. Wenn Ihr Mandat unserem entspricht, freuen wir uns ueber eine Vorstellung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left Column - Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Wer dieses Formular nutzen sollte</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Family Offices & Privatbanken</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Vermoegensverwalter & Investment-Desks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Auktionshaeuser & spezialisierte Haendler</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">Manufakturen & unabhaengige Uhrmacher mit Repraesentationsbedarf</p>
                </div>
              </div>
              <div className="mt-6 p-4 border-l-2 border-gold-500 bg-charcoal-950/50">
                <p className="text-zinc-500 text-xs leading-relaxed">
                  <strong className="text-zinc-400">Private Sammlerinnen und Sammler:</strong> Fuer individuelle Ankaufanfragen besuchen Sie bitte unsere Kollektion und nutzen das Anfragefeld auf der jeweiligen Uhrenseite.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-6">Boutique-Standort</h3>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <address className="not-italic text-zinc-400 leading-relaxed">
                  Maximilianstrasse 14<br />
                  80539 Muenchen<br />
                  Deutschland
                </address>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <a href="tel:+498912345678" className="text-zinc-400 hover:text-white transition-colors text-sm">+49 89 1234 5678</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <a href="mailto:partnerships@kronbergzeithaus.de" className="text-zinc-400 hover:text-white transition-colors text-sm">partnerships@kronbergzeithaus.de</a>
                </div>
              </div>
            </div>

            <div className="p-8 border border-zinc-800 bg-charcoal-950">
              <p className="text-xs uppercase tracking-widest text-gold-500 mb-4">Oeffnungszeiten</p>
              <div className="flex justify-between text-zinc-400 text-sm mb-2">
                <span>Mo - Fr</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Sa</span>
                <span>10:00 - 14:00 (nur nach Termin)</span>
              </div>
            </div>
          </div>

          {/* Right Column - Partnership Form */}
          <div className="bg-charcoal-950 p-8 border border-zinc-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="w-16 h-16 text-gold-500 mb-6" />
                <h3 className="font-serif text-2xl text-white mb-2">Partnerschaftsanfrage eingegangen</h3>
                <p className="text-zinc-400 max-w-sm mb-2">
                  Vielen Dank fuer Ihr Interesse. Unser institutionelles Team prueft Ihr Anliegen und antwortet auf qualifizierte Anfragen innerhalb eines Geschaeftstages (CET).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs uppercase tracking-widest text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">Partnerschaftsanfrage</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">
                    Strategische Kooperationen, Allokationsmoeglichkeiten und institutionelle Mandate.
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
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Funktion / Titel</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Organisation</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">E-Mail</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Land / Region</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Art der Partnerschaft</label>
                  <select
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="">Bitte waehlen...</option>
                    <option value="family-office">Family Office / Privatbank</option>
                    <option value="asset-manager">Vermoegensverwalter / Advisor</option>
                    <option value="auction-house">Auktionshaus / Haendler</option>
                    <option value="brand">Marke / Unabhaengiger Uhrmacher</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Nachricht</label>
                  <textarea
                    rows={5}
                    placeholder="Intent, Portfoliogroesse, Mandatsumfang, konkrete Kooperationswuensche..."
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 text-charcoal-950 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300"
                >
                  Anfrage absenden
                </button>

                <p className="text-center text-zinc-600 text-[10px] leading-relaxed">
                  Unser Team beantwortet qualifizierte institutionelle Anfragen innerhalb eines Geschaeftstages (CET).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
