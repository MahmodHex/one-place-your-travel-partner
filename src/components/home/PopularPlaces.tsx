import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles, PlaneTakeoff } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  const destinationsBoxRef = useRef<HTMLDivElement>(null);
  const routesBoxRef = useRef<HTMLDivElement>(null);

  // ১. Trending Destinations (promo_id=4563)
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

  // ২. Popular Routes Finder (promo_id=3411)
  useEffect(() => {
    if (!routesBoxRef.current) return;
    routesBoxRef.current.innerHTML = '';

    const scriptRoute = document.createElement('script');
    scriptRoute.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&campaign_id=111&promo_id=3411';
    scriptRoute.async = true;
    scriptRoute.charset = 'utf-8';

    routesBoxRef.current.appendChild(scriptRoute);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      {/* Kiwi iframe স্বয়ংক্রিয়ভাবে যাতে পুরো স্ক্রিনে পাশাপাশি স্প্রেড হয় */}
      <style>{`
        .kiwi-widget-wrapper {
          width: 100% !important;
          min-width: 100% !important;
          display: flex !important;
          justify-content: center !important;
        }
        .kiwi-widget-wrapper iframe,
        .kiwi-widget-wrapper > div,
        .kiwi-widget-wrapper form {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 100% !important;
        }
      `}</style>

      {/* ১. Trending Destinations (উপরে) */}
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
              Real-time lowest flight deals to world top travel spots powered by Kiwi.com
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Live Lowest Fares
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 overflow-x-auto">
          <div ref={destinationsBoxRef} className="kiwi-widget-wrapper min-h-[300px]" />
        </div>
      </div>

      {/* ২. Popular Flight Routes (নিচে) */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <PlaneTakeoff className="h-4 w-4 text-emerald-600" /> Direct Route Finder
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Popular Flight Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Search non-stop, flexible date, and multi-carrier connections
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 overflow-x-auto">
          <div ref={routesBoxRef} className="kiwi-widget-wrapper min-h-[350px]" />
        </div>
      </div>
    </section>
  );
};
