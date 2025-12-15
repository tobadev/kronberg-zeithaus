import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TeamSection } from '../components/TeamSection';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Ueber uns" subtitle="Der Kronberg Standard" />
        
        <div className="prose prose-invert prose-lg mx-auto font-light text-zinc-300 space-y-8 leading-loose">
          <p>
            <span className="text-gold-500 font-serif text-5xl float-left mr-4 mt-[-10px] opacity-80">K</span>
            ronberg Zeithaus entstand aus einer sehr lokalen Haltung - dem leisen bayerischen Vertrauen darauf, dass sich Wert im Lauf der Zeit zeigt, nicht im Gespraech. In einer Region, in der Ingenieurskunst, Zurueckhaltung und generationenuebergreifende Planung gelebte Gewohnheiten sind, ist unsere Aufgabe schlicht: das zu bewahren, was Bestand hat.
          </p>
          <p>
            Statt als oeffentlicher Haendler aufzutreten, dienen wir als privater Bezugspunkt fuer Sammlerinnen und Sammler, die Provenienz, Zustandstreue und langfristige Verwahrung priorisieren. Jede Uhr wurde bereits mehreren Ebenen aus Pruefung, Kontext und leiser Beobachtung unterzogen. Nichts wird ueberstuerzt. Nichts erfolgt spekulativ.
          </p>

          <div className="my-16 border-l-2 border-gold-500 pl-8 py-2 bg-charcoal-950/50 rounded-r-sm">
            <p className="font-serif text-2xl italic text-white mb-4 leading-normal">
              "Diskretion ist der erste angebotene Service. Geduld bleibt unser Wettbewerbsvorteil."
            </p>
            <cite className="text-xs uppercase tracking-widest text-zinc-500 not-italic font-medium">
              - Handwerk, Verwahrung, Kontinuitaet
            </cite>
          </div>

          <p>
            Unser Netzwerk bleibt bewusst kompakt - gewachsen durch persoenliche Empfehlungen, nicht durch Werbung. Diskretion schuetzt sowohl die Uhren als auch die Menschen, die sie suchen. Jede Anfrage erhaelt persoenliche Aufmerksamkeit. Erfolg messen wir nicht in Transaktionen, sondern in gelebter Verantwortung ueber Generationen hinweg.
          </p>
        </div>

        <TeamSection />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/5] bg-zinc-900 relative group overflow-hidden border border-zinc-800">
             <img src="https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&w=800&q=80" alt="Uhrmacher bei der Arbeit" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 grayscale" />
             <div className="absolute bottom-6 left-6">
                <p className="text-white font-serif text-xl">Die Werkstatt</p>
                <p className="text-gold-500 text-xs tracking-widest uppercase">Praezision & Sorgfalt</p>
             </div>
          </div>
          <div className="aspect-[4/5] bg-zinc-900 relative group overflow-hidden border border-zinc-800 mt-12 md:mt-0">
             <img src="https://images.unsplash.com/photo-1617317376997-8748e6862c01?auto=format&fit=crop&w=800&q=80" alt="Salon fuer Beratungen" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 grayscale" />
             <div className="absolute bottom-6 left-6">
                <p className="text-white font-serif text-xl">Der Salon</p>
                <p className="text-gold-500 text-xs tracking-widest uppercase">Maximilianstrasse</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
