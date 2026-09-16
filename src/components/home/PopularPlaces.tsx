import React from 'react';
import { POPULAR_DESTINATIONS } from '../../constants/homeSections';
import { ArrowRight, Compass } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1">
            <Compass className="h-3.5 w-3.5" /> Trending Worldwide
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Where to next?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Top curated destinations with secret flight deals and direct passes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {POPULAR_DESTINATIONS.map((dest) => (
          <a
            key={dest.id}
            href={dest.partnerUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-end p-4 border border-slate-200"
          >
            {/* সিটি ইমেজ */}
            <img
              src={dest.bgImage}
              alt={dest.city}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-500"
            />
            {/* ডার্ক গ্রেডিয়েন্ট */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

            <div className="relative z-10 space-y-0.5">
              <span className="text-[10px] font-bold text-slate-300 block">
                {dest.activitiesCount}
              </span>
              <h3 className="text-lg font-black text-white group-hover:text-blue-400 transition">
                {dest.city}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-1">
                {dest.country}
              </p>

              <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-emerald-300">
                <span>Fares from {dest.fareFrom}</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

