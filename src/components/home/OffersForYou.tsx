import React from 'react';
import { SPECIAL_OFFERS, type SpecialOffer } from '../../constants/homeSections';
import { ArrowUpRight } from 'lucide-react';

export const OffersForYou: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
      <div className="mb-6">
        <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
          Exclusive Discounts
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
          Offers for you
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SPECIAL_OFFERS.map((offer: SpecialOffer) => (
          <a
            key={offer.id}
            href={offer.url}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl overflow-hidden min-h-[220px] p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={offer.bgImage}
              alt={offer.title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30"></div>

            <div className="relative z-10">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 mb-2">
                {offer.badge}
              </span>
              <h3 className="text-lg font-black text-white leading-tight">
                {offer.title}
              </h3>
              <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                {offer.subtitle}
              </p>
            </div>

            <div className="relative z-10 mt-4">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-blue-600 px-3 py-1.5 rounded-lg group-hover:bg-blue-500 transition">
                {offer.actionText}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
