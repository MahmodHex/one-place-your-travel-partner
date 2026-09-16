import React, { useEffect, useRef } from 'react';
import { POPULAR_DESTINATIONS, type DestinationItem } from '../../constants/homeSections';
import { Compass, ArrowUpRight, Sparkles } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetContainerRef.current) return;

    // পুরানো কোনো স্ক্রিপ্ট থাকলে ক্লিয়ার করা
    widgetContainerRef.current.innerHTML = '';

    // আপনার আসল Travelpayouts Popular Destinations স্ক্রিপ্ট লোড করা
    const script = document.createElement('script');
    script.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111';
    script.async = true;
    script.charset = 'utf-8';

    widgetContainerRef.current.appendChild(script);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Compass className="h-4 w-4 text-blue-600" /> Trending Worldwide
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Popular Flight Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Real-time lowest flight fares and trending routes powered by Kiwi.com
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Live Rates
        </div>
      </div>

      {/* Travelpayouts Live Popular Destinations Widget */}
      <div className="mb-12 w-full overflow-x-auto rounded-3xl bg-white shadow-sm border border-slate-200/80 p-4 sm:p-6 min-h-[220px]">
        <div ref={widgetContainerRef} className="w-full flex justify-center">
          {/* স্ক্রিপ্টটি এখানে লাইভ কার্ডগুলো রেন্ডার করবে */}
        </div>
      </div>

      {/* Backup Curated City Cards */}
      <div className="mt-8">
        <h3 className="text-lg font-black text-slate-800 mb-4">
          Featured Travel Hotspots
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {POPULAR_DESTINATIONS.map((dest: DestinationItem) => (
            <a
              key={dest.id}
              href={dest.url}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl overflow-hidden min-h-[200px] p-4 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

              <div className="relative z-10">
                <span className="text-[10px] font-black text-white/90 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">
                  {dest.activities}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="font-extrabold text-base leading-tight group-hover:text-blue-300 transition">
                  {dest.name}
                </h3>
                <p className="text-[11px] text-slate-300">{dest.country}</p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-amber-300 font-bold">
                    Fares from {dest.fareFrom}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

