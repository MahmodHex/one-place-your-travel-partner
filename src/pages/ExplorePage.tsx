import React, { useState, useMemo } from 'react';
import { MONETIZED_BRANDS } from '../constants/partners';
import {
  Compass,
  Plane,
  Wifi,
  Ticket,
  Car,
  Shield,
  Clock,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Gateways (26)', icon: Compass },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'esim', label: '5G eSIMs', icon: Wifi },
    { id: 'rental', label: 'Car & Bike Hire', icon: Car },
    { id: 'tours', label: 'Attractions & Tours', icon: Ticket },
    { id: 'insurance', label: 'Travel Insurance', icon: Shield },
    { id: 'compensation', label: 'Delay Claims', icon: Shield },
  ];

  const items = useMemo(() => {
    if (selectedFilter === 'all') return MONETIZED_BRANDS;
    return MONETIZED_BRANDS.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-14 px-6 sm:px-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" /> Authorized Aggregator Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Explore Verified Booking Partners
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Search rates across 26 premier global platforms for flights, mobile internet, self-guided audio excursions, car hires, and flight compensation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-6">
        <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-lg border border-slate-200 flex items-center gap-2 overflow-x-auto">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={brand.bgImage}
                    alt={brand.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg">
                    {brand.logoText}
                  </div>

                  <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                    {brand.commissionBadge}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-black text-white drop-shadow">
                      {brand.tagline}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <Clock className="h-3.5 w-3.5 text-blue-500" /> {brand.cookieLifetime}
                </span>

                <a
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-xs"
                >
                  <span>Book on {brand.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
