import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <div className="w-24 h-0.5 bg-gold-500 mb-6 mx-auto opacity-80" style={{ marginLeft: alignment === 'left' ? '0' : 'auto' }} />
      )}
      {subtitle && (
        <p className="font-sans text-zinc-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base tracking-wide uppercase">
          {subtitle}
        </p>
      )}
    </div>
  );
};