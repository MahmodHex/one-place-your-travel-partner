import React, { useState } from 'react';
import { MONETIZED_BRANDS } from '../../constants/partners';
import { Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const PartnerSpotlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All 26+ Partners' },
    { id: 'esim', label: '📱 5G eSIMs (18%)' },
    { id: 'transfer', label: '🚕 Airport Rides' },
    { id: 'stays', label: '🏨 Hotels & Stays' },
    { id: 'tours', label: '🎟️ Attractions' },
    { id: 'insurance', label: '🛡️ Travel Insurance' },
  ];

  const filteredBrands = activeTab === 'all' 
    ? MONETIZED_BRANDS 
    : MONETIZED_BRANDS.filter((b) => b.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-600 border border-blue-200 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Official Verified Network
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Direct Booking Gateways
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Book directly via authorized platforms with zero markup and 100% price protection
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBrands.map((brand) => (
          <a
            key={brand.id}
            href={brand.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-mono font-black text-sm text-slate-900 tracking-wide bg-slate-100 px-3 py-1 rounded-xl border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
                  {brand.logoText}
                </span>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  {brand.commissionBadge}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition">
                {brand.tagline}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {brand.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span className="flex items-center gap-1 text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Verified Gateway
              </span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                Book on {brand.name}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
