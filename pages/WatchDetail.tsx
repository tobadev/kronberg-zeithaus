import React, { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { watches } from '../data/watches';
import { ArrowLeft, CheckCircle2, Shield, TrendingUp } from 'lucide-react';

export const WatchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const watch = watches.find(w => w.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!watch) {
    return (
      <div className="h-screen flex items-center justify-center bg-charcoal-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Timepiece Not Found</h2>
          <NavLink to="/watches" className="text-gold-500 border-b border-gold-500 pb-1 uppercase tracking-widest text-xs">Return to Collection</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal-900 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/watches')}
          className="flex items-center text-zinc-500 hover:text-white transition-colors mb-8 text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="space-y-4">
             <div className="aspect-[4/5] bg-zinc-950 overflow-hidden border border-zinc-800">
                <img 
                  src={watch.imageUrl} 
                  alt={`${watch.brand} ${watch.model}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
             </div>
             <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-700 text-xs tracking-widest uppercase">
                    Detail Shot 1
                 </div>
                 <div className="aspect-square bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-700 text-xs tracking-widest uppercase">
                    Detail Shot 2
                 </div>
             </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
             <div className="mb-2">
                <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-bold">{watch.brand}</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">{watch.model}</h1>
             <p className="text-zinc-400 font-mono text-sm mb-8">Ref. {watch.reference}</p>

             <div className="bg-charcoal-950 p-6 border border-zinc-800 mb-8">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Status</p>
                <div className="flex items-center text-gold-500 gap-2">
                    <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium tracking-wide">{watch.status}</span>
                </div>
             </div>

             <div className="prose prose-invert prose-sm text-zinc-300 leading-loose mb-10">
                <p>{watch.description}</p>
             </div>

             {/* Specs Grid */}
             <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-zinc-800 py-8 mb-8">
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Year</p>
                    <p className="text-white font-serif">{watch.year}</p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Case Size</p>
                    <p className="text-white font-serif">{watch.caseSize}</p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Movement</p>
                    <p className="text-white font-serif">{watch.movement}</p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Condition</p>
                    <p className="text-white font-serif">{watch.condition}</p>
                </div>
                <div className="col-span-2">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Scope of Delivery</p>
                    <p className="text-white font-serif flex items-center gap-2">
                        {watch.boxPapers} <CheckCircle2 className="w-4 h-4 text-gold-500" />
                    </p>
                </div>
             </div>

             {/* Investment Note */}
             <div className="bg-charcoal-950/50 p-6 border-l-2 border-gold-500 mb-10">
                <div className="flex items-center gap-2 mb-2 text-gold-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest">Investment Note</span>
                </div>
                <p className="text-zinc-400 text-sm italic font-serif">
                   "{watch.investmentNote}"
                </p>
             </div>

             {/* CTA */}
             <div className="mt-auto">
                 <NavLink 
                    to={`/contact?model=${encodeURIComponent(`${watch.brand} ${watch.model}`)}`}
                    className="block w-full text-center bg-white text-charcoal-950 py-4 text-sm uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors duration-300"
                 >
                    Request Information
                 </NavLink>
                 <p className="text-center text-zinc-600 text-xs mt-4">
                    <Shield className="w-3 h-3 inline mr-1" />
                    Insured worldwide shipping available
                 </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};