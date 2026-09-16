import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles, Route } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  const destinationsWidgetRef = useRef<HTMLDivElement>(null);
  const routesWidgetRef = useRef<HTMLDivElement>(null);

  // 1. Trending Destinations Widget (promo_id=4563)
  useEffect(() => {
    if (!destinationsWidgetRef.current) return;

    destinationsWidgetRef.current.innerHTML = '';

    const scriptDest = document.createElement('script');
    scriptDest.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111';
    scriptDest.async = true;
    scriptDest.charset = 'utf-8';

    destinationsWidgetRef.current.appendChild(scriptDest);
  }, []);

  // 2. Popular Routes Search & Booking Widget (promo_id=3411)
  useEffect(() => {
    if (!routesWidgetRef.current) return;

    routesWidgetRef.current.innerHTML = '';

    const scriptRoute = document.createElement('script');
    scriptRoute.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=3411';
    scriptRoute.async = true;
    scriptRoute.charset = 'utf-8';

    routesWidgetRef.current.appendChild(scriptRoute);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      {/* ১. Trending Destinations Widget Box */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-blue-600" /> Trending Worldwide
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Trending Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Real-time lowest flight fares and top routes powered by Kiwi.com
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Live Fares
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 min-h-[220px]">
          <div ref={destinationsWidgetRef} className="w-full flex justify-center" />
        </div>
      </div>

      {/* ২. Popular Routes Search Widget Box */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Route className="h-4 w-4 text-emerald-600" /> Direct Route Finder
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Popular Flight Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Filter by stops, transport mode, and customized travel dates
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 min-h-[300px]">
          <div ref={routesWidgetRef} className="w-full flex justify-center" />
        </div>
      </div>
    </section>
  );
};
