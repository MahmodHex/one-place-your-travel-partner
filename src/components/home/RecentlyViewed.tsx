import React from 'react';
import { RECENTLY_VIEWED } from '../../constants/homeSections';
import { Star, MapPin, ExternalLink } from 'lucide-react';

export const RecentlyViewed: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-16">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-blue-600">
            Pick Up Where You Left Off
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Recently viewed
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RECENTLY_VIEWED.map((item) => (
          <a
            key={item.id}
            href={item.partnerUrl}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200 flex flex-col"
          >
            {/* থাম্বনেইল ইমেজ */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-100">
              <img
                src={item.bgImage}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-bold flex items-center gap-1">
                <MapPin className="h-3 w-3 text-blue-400" /> {item.location}
              </div>
            </div>

            {/* কার্ড বডি */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1 font-bold text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-current" /> {item.rating}
                  </div>
                  <span>•</span>
                  <span className="text-slate-400">{item.reviews}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">From</span>
                  <span className="text-base font-black text-blue-600">{item.price}</span>
                </div>
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

