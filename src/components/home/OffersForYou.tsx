import React from 'react';
import { OFFERS_FOR_YOU } from '../../constants/homeSections';
import { ArrowRight, Sparkles } from 'lucide-react';

export const OffersForYou: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-orange-600 flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" /> Exclusive Discounts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Offers for you
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OFFERS_FOR_YOU.map((offer) => (
          <a
            key={offer.id}
            href={offer.partnerUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative h-52 sm:h-56 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between p-6 border border-slate-200"
          >
            {/* ব্যাকগ্রাউন্ড রিয়েল ইমেজ */}
            <img
              src={offer.bgImage}
              alt={offer.title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500"
            />
            {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30"></div>

            <div className="relative z-10">
              <span className={`inline-block text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-sm ${offer.tagColor}`}>
                {offer.badge}
              </span>
            </div>

            <div className="relative z-10 space-y-1">
              <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition">
                {offer.title}
              </h3>
              <p className="text-xs text-slate-200 font-medium">
                {offer.subtitle}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-white transition">
                <span>{offer.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
