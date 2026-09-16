import React from 'react';
import { RECENTLY_VIEWED } from '../../constants/homeSections';
import { Star, ArrowUpRight } from 'lucide-react';

export const RecentlyViewed: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
      <div className="mb-6">
        <span className="text-xs font-bold text-slate-400">Pick Up Where You Left Off</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Recently viewed</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {RECENTLY_VIEWED.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-40 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <p className="text-[11px] font-bold text-slate-400">{item.location}</p>
                <h3 className="text-sm font-extrabold text-slate-800 line-clamp-2 leading-snug group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-700">{item.rating}</span>
                  <span>•</span>
                  <span>{item.reviews}</span>
                </div>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">From</span>
                <span className="text-base font-black text-slate-900">{item.price}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition">
                Book <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
