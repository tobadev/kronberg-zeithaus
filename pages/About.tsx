import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TeamSection } from '../components/TeamSection';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Philosophy" subtitle="The Kronberg Standard" />
        
        <div className="prose prose-invert prose-lg mx-auto font-light text-zinc-300 space-y-8 leading-loose">
          <p>
            <span className="text-gold-500 font-serif text-5xl float-left mr-4 mt-[-10px] opacity-80">K</span>
            ronberg Zeithaus was shaped by a very local philosophy — the quiet Bavarian belief that value reveals itself over time, not in conversation. In a region where engineering, restraint, and multigenerational planning are cultural habits rather than strategies, our role is simple: to safeguard what endures.
          </p>
          <p>
            Rather than operating as a public retailer, we function as a private point of reference for collectors who prioritize provenance, condition integrity, and long-term stewardship. Every timepiece we handle has already passed through layers of verification, context, and quiet observation. Nothing is rushed. Nothing is speculative.
          </p>

          <div className="my-16 border-l-2 border-gold-500 pl-8 py-2 bg-charcoal-950/50 rounded-r-sm">
            <p className="font-serif text-2xl italic text-white mb-4 leading-normal">
              "Discretion is the first service offered. Patience is a competitive advantage."
            </p>
            <cite className="text-xs uppercase tracking-widest text-zinc-500 not-italic font-medium">
              — Craft, custody, continuity
            </cite>
          </div>

          <p>
            Our network remains intentionally compact — founded on introductions, not marketing. Discretion protects both the watches and the people who pursue them. Every request receives personal attention. We measure success not in transactions, but in trusted custodianship across generations.
          </p>
        </div>

        <TeamSection />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/5] bg-zinc-900 relative group overflow-hidden border border-zinc-800">
             <img src="https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&w=800&q=80" alt="Watchmaker at work" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 grayscale" />
             <div className="absolute bottom-6 left-6">
                <p className="text-white font-serif text-xl">The Workshop</p>
                <p className="text-gold-500 text-xs tracking-widest uppercase">Precision & Care</p>
             </div>
          </div>
          <div className="aspect-[4/5] bg-zinc-900 relative group overflow-hidden border border-zinc-800 mt-12 md:mt-0">
             <img src="https://images.unsplash.com/photo-1617317376997-8748e6862c01?auto=format&fit=crop&w=800&q=80" alt="Consultation room" className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 grayscale" />
             <div className="absolute bottom-6 left-6">
                <p className="text-white font-serif text-xl">The Showroom</p>
                <p className="text-gold-500 text-xs tracking-widest uppercase">Maximilianstraße</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};