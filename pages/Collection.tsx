import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { WatchCard } from '../components/WatchCard';
import { watches } from '../data/watches';
import { useLocation } from 'react-router-dom';

export const Collection: React.FC = () => {
  const [filter, setFilter] = useState('Alle');
  const location = useLocation();

  // Reset filter when returning to collection page
  useEffect(() => {
    setFilter('Alle');
  }, [location.pathname]);

  // Define available filters
  const filters = [
    'Alle',
    'F.P. Journe',
    'A. Lange & Soehne',
    'Patek Philippe',
    'Vacheron Constantin',
    'Richard Mille',
    'Unabhaengige Ateliers'
  ];

  // Filtering logic
  const filteredWatches = watches.filter((watch) => {
    if (filter === 'Alle') return true;
    if (filter === 'Unabhaengige Ateliers') {
      return ![
        'F.P. Journe',
        'A. Lange & Soehne',
        'Patek Philippe',
        'Vacheron Constantin',
        'Richard Mille'
      ].includes(watch.brand);
    }
    return watch.brand === filter;
  });

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Die Kollektion" 
          subtitle="Verfuegbar fuer sofortige Vermittlung oder Beratung" 
        />
        
        <div className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-b border-zinc-800 pb-4">
            {filters.map((item) => (
              <button 
                key={item}
                onClick={() => setFilter(item)}
                className={`text-xs uppercase tracking-widest pb-4 transition-colors relative ${
                  filter === item 
                    ? 'text-gold-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gold-500' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {item === 'Alle' ? 'Alle Uhren' : item}
              </button>
            ))}
        </div>

        {filteredWatches.length > 0 ? (
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredWatches.map(watch => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24 border border-zinc-800/50 rounded-sm">
            <p className="text-zinc-500 font-serif italic text-lg">Keine Uhren fuer diese Auswahl sichtbar.</p>
            <p className="text-zinc-600 text-xs mt-2 uppercase tracking-widest">Fuer Off-Katalog-Bestand bitte anfragen</p>
          </div>
        )}

        <div className="mt-24 p-12 border border-zinc-800 bg-charcoal-950 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-white mb-4">Sie suchen eine bestimmte Referenz?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Unser Sourcing-Team findet schwer zugangliche Modelle ueber ein vertrauliches Netzwerk. Beschreiben Sie Ihre Wunschreferenz, wir uebernehmen die diskrete Beschaffung.
          </p>
          <a href="#/contact" className="inline-block bg-zinc-100 text-charcoal-950 px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold-500 hover:text-white transition-colors">
            Anfrage senden
          </a>
        </div>
      </div>
    </div>
  );
};
