import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles, PlaneTakeoff } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  const destinationsBoxRef = useRef<HTMLDivElement>(null);
  const aviasalesRoutesBoxRef = useRef<HTMLDivElement>(null);

  // ১. Trending Destinations Widget (Kiwi - promo_id=4563)
  useEffect(() => {
    if (!destinationsBoxRef.current) return;
    destinationsBoxRef.current.innerHTML = '';

    const scriptDest = document.createElement('script');
    scriptDest.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111';
    scriptDest.async = true;
    scriptDest.charset = 'utf-8';

    destinationsBoxRef.current.appendChild(scriptDest);
  }, []);

  // ২. Aviasales Popular Routes Widget (promo_id=4044)
  useEffect(() => {
    if (!aviasalesRoutesBoxRef.current) return;
    aviasalesRoutesBoxRef.current.innerHTML = '';

    const scriptRoutes = document.createElement('script');
    scriptRoutes.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&primary=%230085FF&promo_id=4044&campaign_id=100';
    scriptRoutes.async = true;
    scriptRoutes.charset = 'utf-8';

    aviasalesRoutesBoxRef.current.appendChild(scriptRoutes);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      <style>{`
        .tp-widget-container,
        .tp-widget-container > div,
        .tp-widget-container iframe {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 100% !important;
          border: none !important;
        }
      `}</style>

      {/* ১. Trending Destinations (Kiwi.com) */}
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-blue-600" /> Worldwide Fares
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Trending Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Real-time lowest flight deals to world top travel spots
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Live Rates
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 overflow-x-auto min-h-[300px]">
          <div ref={destinationsBoxRef} className="tp-widget-container w-full" />
        </div>
      </div>

      {/* ২. Popular Flight Routes (Aviasales Widget) */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <PlaneTakeoff className="h-4 w-4 text-blue-600" /> Aviasales Route Deals
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Popular Flight Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Real-time direct flight rates, lowest fares, and route schedules
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 overflow-x-auto min-h-[360px]">
          <div ref={aviasalesRoutesBoxRef} className="tp-widget-container w-full" />
        </div>
      </div>
    </section>
  );
};
