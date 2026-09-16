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

  const filteredBrands =
    activeTab === 'all'
      ? MONETIZED_BRANDS
      : MONETIZED_BRANDS.filter((b) => b.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
      {/* হেডার */}
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

        {/* ফিল্টার ট্যাব */}
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

      {/* রিয়েল ইমেজ ব্যাকগ্রাউন্ড কার্ড গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <a
            key={brand.id}
            href={brand.url}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-700/30 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
          >
            {/* ব্যাকগ্রাউন্ড রিয়েল ইমেজ */}
            <img
              src={brand.bgImage}
              alt={brand.name}
              className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-110 transition duration-700 ease-out"
            />

            {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 group-hover:via-slate-950/60 transition duration-300"></div>

            {/* কার্ডের উপরের অংশ */}
            <div className="relative z-10 p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-mono font-black text-xs text-white tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl border border-white/30 shadow-xs">
                  {brand.logoText}
                </span>
                <span className="text-[10px] font-black text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 px-2.5 py-1 rounded-full shadow-xs">
                  {brand.commissionBadge}
                </span>
              </div>

              <h3 className="text-lg font-black text-white mb-1.5 group-hover:text-blue-300 transition drop-shadow-md">
                {brand.tagline}
              </h3>
              <p className="text-xs text-slate-200/90 leading-relaxed font-medium drop-shadow-sm">
                {brand.description}
              </p>
            </div>

            {/* কার্ডের নিচের ফুটার অংশ */}
            <div className="relative z-10 p-6 pt-4 border-t border-white/10 bg-black/30 backdrop-blur-xs flex items-center justify-between text-xs font-bold text-white">
              <span className="flex items-center gap-1.5 text-[11px] text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Verified Gateway
              </span>
              <span className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-xl shadow-md transition group-hover:scale-105">
                Book on {brand.name}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
