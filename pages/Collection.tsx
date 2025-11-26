import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { WatchCard } from '../components/WatchCard';
import { watches } from '../data/watches';

export const Collection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  // Define available filters
  const filters = [
    'All',
    'F.P. Journe',
    'A. Lange & Söhne',
    'Patek Philippe',
    'Vacheron Constantin',
    'Richard Mille',
    'Independent Ateliers'
  ];

  // Filtering logic
  const filteredWatches = watches.filter((watch) => {
    if (filter === 'All') return true;
    if (filter === 'Independent Ateliers') {
      return ![
        'F.P. Journe',
        'A. Lange & Söhne',
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
          title="The Collection" 
          subtitle="Available for immediate acquisition or consultation" 
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
                {item === 'All' ? 'All Timepieces' : item}
              </button>
            ))}
        </div>

        {filteredWatches.length > 0 ? (
          <motion.div
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
            <p className="text-zinc-500 font-serif italic text-lg">No timepieces currently displayed for this selection.</p>
            <p className="text-zinc-600 text-xs mt-2 uppercase tracking-widest">Please inquire for off-catalog inventory</p>
          </div>
        )}

        <div className="mt-24 p-12 border border-zinc-800 bg-charcoal-950 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-white mb-4">Seeking a Specific Reference?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Our sourcing team specializes in locating hard-to-find models. Submit a request detailing your desired reference, and we will utilize our network to procure it for you.
          </p>
          <a href="#/contact" className="inline-block bg-zinc-100 text-charcoal-950 px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold-500 hover:text-white transition-colors">
            Submit Sourcing Request
          </a>
        </div>
      </div>
    </div>
  );
};