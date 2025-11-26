import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Watch } from '../types';

interface RequestInformationFormProps {
  watch: Watch;
}

export const RequestInformationForm: React.FC<RequestInformationFormProps> = ({ watch }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - just show success state
    setTimeout(() => setSubmitted(true), 500);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6" />
        <h3 className="font-serif text-2xl text-white mb-3">Request Received</h3>
        <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
          Thank you for your interest. A Kronberg advisor will review your confidential inquiry and respond within 24 hours (CET).
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
        <h2 className="font-serif text-3xl text-white mb-2">Confidential Acquisition Inquiry</h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          A confidential request does not initiate a transaction — it begins a dialogue. Share your objectives, horizon, and reference of interest, and a curator will respond personally.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Watch of Interest - Read Only */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
            Watch of Interest
          </label>
          <div className="bg-zinc-900/50 border border-zinc-800 px-4 py-3 text-zinc-400 text-sm">
            {watch.brand} {watch.model} — Ref. {watch.reference}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
            Region / City (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. München, Zürich, London"
            className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-600"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Acquisition goals, budget considerations, timing expectations..."
            className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-zinc-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gold-500 text-charcoal-950 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300"
        >
          Request Briefing
        </button>
      </form>
    </div>
  );
};
