import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { WatchCard } from '../components/WatchCard';
import { watches } from '../data/watches';
import { ShieldCheck, Lock, Eye, MapPin, ExternalLink, Compass, Globe, Clock } from 'lucide-react';

export const Home: React.FC = () => {
  // Select only 3 watches for featured section
  const featuredWatches = watches.slice(0, 3);

  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      checkShopStatus(now);
    }, 1000);

    // Initial check
    checkShopStatus(new Date());

    return () => clearInterval(timer);
  }, []);

  const checkShopStatus = (date: Date) => {
    // Get current Munich time parts to determine logic regardless of user timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin',
      weekday: 'short',
      hour: 'numeric',
      hour12: false
    });

    const parts = formatter.formatToParts(date);
    const getPart = (type: string) => parts.find(p => p.type === type)?.value;
    
    const day = getPart('weekday'); // "Mon", "Tue", ...
    const hour = parseInt(getPart('hour') || '0', 10);

    let open = false;

    // Logic: Mon-Fri 10-18, Sat 10-14, Sun Closed
    if (day === 'Sun') {
      open = false;
    } else if (day === 'Sat') {
      open = hour >= 10 && hour < 14;
    } else {
      // Mon-Fri
      open = hour >= 10 && hour < 18;
    }

    setIsOpen(open);
  };

  // Format Munich time string for display
  const munichTimeStr = time.toLocaleTimeString('de-DE', { 
    timeZone: 'Europe/Berlin', 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-charcoal-900/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent z-10" />
          <img 
            src="https://hodinkee.imgix.net/uploads/images/9da0c002-aadc-4363-a3de-3f82be4b1e0b/PTK-KY6TP7-lifestyle-landscape.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt" 
            alt="Macro detail of luxury timepiece movement" 
            className="w-full h-full object-cover animate-[subtle-zoom_20s_ease-in-out_infinite]"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-5xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gold-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          >
            Muenchen &gt; Private Beschaffung &gt; Investment-Grade
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
          >
            Werte von <br/><span className="italic text-zinc-400">Bestand</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Wir verkaufen nicht, wir kuratieren horologische Geschichte fuer anspruchsvolle Anlegerinnen und Anleger.
            Termine nur nach Absprache in der Maximilianstrasse.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <NavLink
              to="/watches"
              className="px-8 py-4 bg-gold-500 text-charcoal-950 text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 font-medium min-w-[200px]"
            >
              Kollektion ansehen
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-4 border border-zinc-600 text-white text-sm tracking-widest uppercase hover:border-gold-500 hover:text-gold-500 transition-colors duration-300 min-w-[200px]"
            >
              Jetzt anfragen
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-charcoal-950 border-b border-zinc-900"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-8"></div>
          <p className="font-serif text-3xl md:text-4xl text-zinc-300 leading-relaxed italic">
            Fuer Menschen, die Besitz in Jahrzehnten statt in Saisons messen.
          </p>
          <p className="text-zinc-500 text-sm mt-8 uppercase tracking-widest">
            Diskretion &gt; Geduld &gt; Kontinuitaet
          </p>
        </div>
      </motion.section>

      {/* Featured Collection */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-24 bg-charcoal-900 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Kuratiert Ausgewaehlt"
            subtitle="Neueste Zugaenge aus unserem privaten Netzwerk"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredWatches.map(watch => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </motion.div>
          <div className="mt-16 text-center">
            <NavLink
              to="/watches"
              className="inline-block border-b border-gold-500 pb-1 text-gold-500 uppercase tracking-widest text-xs hover:text-white hover:border-white transition-colors"
            >
              Gesamten Bestand ansehen
            </NavLink>
          </div>
        </div>
      </motion.section>

      {/* Trust & Value - "Why Collectors Choose Us" */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-24 bg-charcoal-950 px-6 border-y border-zinc-900"
      >
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="px-4 group">
              <div className="w-12 h-12 mb-6 text-gold-500 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white mb-4">Kompromisslose Authentizitaet</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Jeder Zeitmesser wird in Muenchen anhand einer 24-Punkte-Pruefung durch unsere Uhrmachermeister bewertet. Wir garantieren die Herkunft jeder Komponente.
              </p>
            </div>
            <div className="px-4 group">
              <div className="w-12 h-12 mb-6 text-gold-500 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white mb-4">Diskreter Ankauf</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Unsere Mandantenliste bleibt vertraulich. Wir agieren mit der Diskretion, die hochkaraetige Sammler erwarten, und wickeln Transfers auf Wunsch ohne oeffentliche Listung ab.
              </p>
            </div>
            <div className="px-4 group">
              <div className="w-12 h-12 mb-6 text-gold-500 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white mb-4">Investment-Strategie</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Wir beraten nicht nur zur Aesthetik, sondern zur nachhaltigen Wertentwicklung. Unser Team verfolgt weltweite Auktionsergebnisse, um Portfolioentscheidungen zu untermauern.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Boutique Location - Hybrid Interactive Map */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-24 bg-charcoal-950 border-t border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <SectionHeading title="Die Boutique" subtitle="Maximilianstrasse, Muenchen" alignment="left" />
                <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8 max-w-md">
                    Im Herzen der renommiertesten Strasse Muenchens bietet unser Salon ein diskretes Umfeld fuer Beratung und Uebergabe.
                </p>
                
                <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-gold-500 w-5 h-5 mt-1 flex-shrink-0" />
                        <address className="not-italic text-zinc-400 leading-relaxed">
                            Kronberg Zeithaus<br/>
                            Maximilianstrasse 14<br/>
                            80539 Muenchen<br/>
                            Deutschland
                        </address>
                    </div>
                    <div className="flex items-start gap-4">
                        <Compass className="text-gold-500 w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-zinc-400">
                            Nur nach Termin<br/>
                            <span className="text-xs uppercase tracking-widest text-zinc-600">Streng private Termine</span>
                        </p>
                    </div>
                </div>

                <NavLink 
                  to="/contact" 
                  className="inline-block px-8 py-4 bg-transparent border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-charcoal-950 transition-colors"
                >
                  Termin anfragen
                </NavLink>
            </div>

            {/* Right Visual - Layered Interactive Map */}
            <div className="relative aspect-square md:aspect-[4/3] w-full bg-zinc-900 rounded-sm border border-zinc-800 overflow-hidden shadow-2xl group">
               
               {/* 1. Live Google Map Iframe (Bottom Layer) */}
               {/* Note: Invert filter turns Google's white UI elements into dark themed elements */}
               <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.399564639918!2d11.58022791582885!3d48.13936277922378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758ca61e38e1%3A0x627376044716913!2sMaximilianstra%C3%9Fe%2014%2C%2080539%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1647856789012!5m2!1sen!2sus"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                   allowFullScreen={true} 
                   loading="lazy"
                   title="Boutique Standort"
                   className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
               ></iframe>

               {/* 2. Tech-Luxury Overlay (Top Layer) - Pointer Events None to allow map dragging */}
               <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
                  
                  {/* Top Area */}
                  <div className="flex justify-between items-start">
                    {/* Empty left side to allow Google's 'Directions' card to be visible (now dark themed) */}
                    <div></div>
                    
                    {/* Top Right: Coordinates Display */}
                    <div className="flex items-center gap-2 bg-charcoal-950/90 backdrop-blur-md px-4 py-3 border border-zinc-800/80 rounded-sm shadow-lg">
                       <Globe className="w-3 h-3 text-gold-500 animate-pulse" />
                       <div className="text-[10px] font-mono text-gold-500 tracking-widest">
                          48.139 N / 11.579 E
                       </div>
                    </div>
                  </div>

                  {/* Center: Targeting Beacon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                     <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-gold-400' : 'bg-zinc-400'}`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 shadow-[0_0_15px_rgba(212,175,55,0.6)] ${isOpen ? 'bg-gold-500' : 'bg-zinc-500'}`}></span>
                     </span>
                  </div>

                  {/* Bottom Area */}
                  <div className="flex justify-between items-end mt-auto">
                     
                     {/* Bottom Left: Live Status - Styled to match Top Right */}
                     <div className="bg-charcoal-950/90 backdrop-blur-md border border-zinc-800/80 p-3 rounded-sm shadow-lg">
                        <div className="flex items-center gap-2 mb-1.5">
                           <span className="relative flex h-2 w-2">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
                              <span className={`relative inline-flex rounded-full h-2 w-2 shadow-lg ${isOpen ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'}`}></span>
                           </span>
                           <span className={`text-[10px] uppercase tracking-widest font-bold ${isOpen ? 'text-zinc-200' : 'text-zinc-400'}`}>
                              {isOpen ? 'Salon offen' : 'Salon geschlossen'}
                           </span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-[9px] font-mono text-zinc-500 border-t border-zinc-800 pt-1.5 mt-0.5">
                           <Clock className="w-3 h-3" />
                           <span>Ortszeit: {munichTimeStr}</span>
                        </div>
                     </div>

                     {/* Bottom Right: Action Button (Pointer Events Auto to be clickable) */}
                     <a 
                        href="https://www.google.com/maps/search/?api=1&query=Maximilianstrasse+14+Muenchen" 
                        target="_blank" 
                        rel="noreferrer"
                        className="pointer-events-auto flex items-center gap-2 text-charcoal-950 text-[10px] uppercase tracking-widest border border-transparent px-4 py-3 bg-gold-500 hover:bg-white transition-colors shadow-lg font-bold rounded-sm"
                      >
                         <span>Karte oeffnen</span>
                         <ExternalLink className="w-3 h-3" />
                      </a>
                  </div>
               </div>
            </div>
        </div>
      </motion.section>
    </div>
  );
};
