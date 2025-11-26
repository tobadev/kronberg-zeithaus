import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';

export const TeamSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-24 border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">The Team</h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Our team reflects the mindset of the region — specialists who prefer rigor over noise. Each member focuses on a single discipline: acquisition, provenance research, authentication, or institutional coordination. No assistants, no offshore routing, no volume targets. Every request receives senior attention from the beginning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="border-l border-zinc-800 pl-6"
            >
              <h3 className="font-serif text-xl text-white mb-1">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.15em] text-gold-500 mb-2">
                {member.role}
              </p>
              {member.focus && (
                <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                  {member.focus}
                </p>
              )}
              {member.location && (
                <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                  {member.location}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-500 italic">
            For confidential introductions, please use the contact form.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
