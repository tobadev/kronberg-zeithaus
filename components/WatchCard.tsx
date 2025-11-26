import React from 'react';
import { Watch } from '../types';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WatchCardProps {
  watch: Watch;
}

export const WatchCard: React.FC<WatchCardProps> = ({ watch }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/watches/${watch.id}`)}
      className="group flex flex-col bg-charcoal-950/50 border border-zinc-800 hover:border-gold-500/50 transition-all duration-500 ease-out cursor-pointer h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img 
          src={watch.imageUrl} 
          alt={`${watch.brand} ${watch.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-60" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] uppercase tracking-widest text-gold-500 bg-charcoal-950/80 backdrop-blur-sm px-3 py-1 inline-block border border-gold-500/20">
            {watch.status}
          </p>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <span className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-2 font-medium">
          {watch.brand}
        </span>
        <h3 className="text-xl text-white font-serif mb-1 tracking-wide">
          {watch.model}
        </h3>
        <p className="text-zinc-500 text-xs mb-4 font-mono">
          Ref. {watch.reference}
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-2">
          {watch.description}
        </p>
        
        <div className="mt-auto flex items-center text-xs tracking-widest uppercase text-white hover:text-gold-500 transition-colors group/btn">
          View Details
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-gold-500" />
        </div>
      </div>
    </div>
  );
};