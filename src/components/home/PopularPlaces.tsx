import React, { useEffect, useRef, useState } from 'react';
import { Compass, Sparkles, PlaneTakeoff, Search, ArrowRight } from 'lucide-react';

export const PopularPlaces: React.FC = () => {
  const destinationsBoxRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState('DAC');
  const [destination, setDestination] = useState('DXB');

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

  const handleRouteSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const from = origin.trim() || 'DAC';
    const to = destination.trim() || 'DXB';
    // ০ সেকেন্ড লোডিং টাইম - সরাসরি Kiwi/Aviasales লাইভ রুট রেজাল্টে চলে যাবে
    window.open(`https://www.kiwi.com/en/search/results/${encodeURIComponent(from)}/${encodeURIComponent(to)}`, '_blank');
  };

  const quickRoutes = [
    { from: 'DAC', to: 'DXB', label: 'Dhaka ⇄ Dubai', price: 'from $210' },
    { from: 'DAC', to: 'BKK', label: 'Dhaka ⇄ Bangkok', price: 'from $140' },
    { from: 'DAC', to: 'SIN', label: 'Dhaka ⇄ Singapore', price: 'from $230' },
    { from: 'DAC', to: 'KUL', label: 'Dhaka ⇄ Kuala Lumpur', price: 'from $165' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      <style>{`
        .kiwi-dest-fix {
          width: 100% !important;
          min-height: 260px !important;
          display: block !important;
          overflow-x: auto !important;
        }
        .kiwi-dest-fix iframe {
          width: 100% !important;
          min-height: 260px !important;
          border: none !important;
        }
      `}</style>

      {/* ১. Trending Destinations (কেটে যাওয়া ফিক্স সহ) */}
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
              Real-time lowest flight deals powered by Kiwi.com
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Live Lowest Fares
          </div>
        </div>

        {/* কার্ডের হাইট ফিক্স করা হয়েছে যাতে আর কেটে না যায় */}
        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-4 sm:p-6 overflow-hidden">
          <div ref={destinationsBoxRef} className="kiwi-dest-fix" />
        </div>
      </div>

      {/* ২. Popular Flight Routes - সুপারফাস্ট ইনস্ট্যান্ট সার্চ ইঞ্জিন */}
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
              Instant multi-carrier routing with 0 second load time
            </p>
          </div>
        </div>

        {/* ফাস্ট ইন্টারঅ্যাক্টিভ সার্চ বক্স */}
        <div className="w-full rounded-3xl bg-white shadow-xs border border-slate-200/80 p-6 sm:p-8">
          <form onSubmit={handleRouteSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-extrabold uppercase text-slate-400 block mb-1">
                Departure City / Airport (From)
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="e.g. Dhaka (DAC)"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="text-[11px] font-extrabold uppercase text-slate-400 block mb-1">
                Destination City / Airport (To)
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Dubai (DXB)"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-blue-600 transition"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="h-4 w-4" /> Search Live Routes
              </button>
            </div>
          </form>

          {/* জনপ্রিয় রুটের কুইক ট্যাগস */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 block mb-3">
              Instant Direct Fares:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickRoutes.map((r, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setOrigin(r.from);
                    setDestination(r.to);
                    window.open(`https://www.kiwi.com/en/search/results/${r.from}/${r.to}`, '_blank');
                  }}
                  className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 p-3 rounded-xl text-left transition group cursor-pointer"
                >
                  <div className="text-xs font-black text-slate-800 group-hover:text-blue-600 flex items-center justify-between">
                    {r.label}
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="text-[11px] font-extrabold text-emerald-600 mt-1">
                    {r.price}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
