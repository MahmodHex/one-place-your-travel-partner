import React, { useEffect, useRef } from 'react';
import { Compass, Sparkles } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetContainerRef.current) return;

    widgetContainerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src =
      'https://tpembd.com/content?currency=usd&trs=574545&shmarker=706724&locale=en&powered_by=true&limit=4&primary_color=00AE98&results_background_color=FFFFFF&form_background_color=FFFFFF&promo_id=4563&campaign_id=111';
    script.async = true;
    script.charset = 'utf-8';

    widgetContainerRef.current.appendChild(script);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
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

      {/* Full-width Widget Box with Responsive Grid Overrides */}
      <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6">
        <style>{`
          /* Travelpayouts widget layout fix for grid */
          #travelpayouts-tpembd-box,
          #travelpayouts-tpembd-box > div,
          #travelpayouts-tpembd-box iframe {
            width: 100% !important;
            max-width: 100% !important;
          }
          #travelpayouts-tpembd-box .tp-widget-cards,
          #travelpayouts-tpembd-box [class*="cards"],
          #travelpayouts-tpembd-box [class*="list"] {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
            gap: 16px !important;
          }
        `}</style>

        <div
          id="travelpayouts-tpembd-box"
          ref={widgetContainerRef}
          className="w-full flex justify-center min-h-[280px]"
        />
      </div>
    </section>
  );
};
