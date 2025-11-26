import React from 'react';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Philosophy" subtitle="The Kronberg Standard" />
        
        <div className="prose prose-invert prose-lg mx-auto font-light text-zinc-300 space-y-8 leading-loose">
          <p>
            <span className="text-gold-500 font-serif text-5xl float-left mr-4 mt-[-10px] opacity-80">Z</span>
            eithaus Kronberg was founded on a singular conviction: that a watch is not merely an instrument of time, but a vessel of history. In Munich, a city where tradition meets precision, we have established a sanctuary for the serious collector.
          </p>
          <p>
            We operate outside the rhythms of conventional retail. Our inventory is not determined by market trends, but by strict criteria of horological significance, condition, and provenance. We view ourselves not as merchants, but as stewards of mechanical art, passing masterpieces from one custodian to the next.
          </p>
          
          <div className="my-16 border-l-2 border-gold-500 pl-8 py-2 bg-charcoal-950/50 rounded-r-sm">
            <p className="font-serif text-2xl italic text-white mb-4 leading-normal">
              "We do not sell watches. We curate time, history, and engineering excellence for the next generation. A collection is a legacy."
            </p>
            <cite className="text-xs uppercase tracking-widest text-zinc-500 not-italic font-medium">
              — Friedrich von Kronberg, Founder
            </cite>
          </div>

          <p>
            Our "request-only" sourcing service allows our clients to bypass the volatility of the open market. Through decades of cultivating relationships with private sellers, auction houses, and authorized partners across Europe, we access references that never appear in public listings.
          </p>
        </div>

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