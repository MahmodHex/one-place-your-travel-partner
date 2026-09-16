import React, { useState, useMemo } from 'react';
import { ACTIVE_PROMOS } from '../constants/promos';
import {
  Tag,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Clock,
  ShieldCheck,
  Compass,
  Plane,
  Wifi,
  Ticket,
} from 'lucide-react';

export const OffersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'flights' | 'esims' | 'tours'>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Promotions', icon: Compass },
    { id: 'flights', label: 'Flight Fares', icon: Plane },
    { id: 'esims', label: '5G eSIM Data', icon: Wifi },
    { id: 'tours', label: 'Attractions & Passes', icon: Ticket },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const filteredPromos = useMemo(() => {
    if (selectedCategory === 'all') return ACTIVE_PROMOS;
    return ACTIVE_PROMOS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* ১. টপ ব্যানার */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-14 px-6 sm:px-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-400/30">
            <Sparkles className="h-3.5 w-3.5 text-orange-400" /> Direct Partner Voucher Locker
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Flash Travel Deals & Promo Codes
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Copy exclusive voucher codes and activate real-time discounts directly on official airline, eSIM, and ticketing gateways.
          </p>
        </div>
      </section>

      {/* ২. ক্যাটাগরি ফিল্টার ডক */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-6">
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-slate-200 flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ৩. কুপন গ্রিড */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 mt-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900 font-extrabold">{filteredPromos.length}</span> verified vouchers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromos.map((promo) => (
            <div
              key={promo.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* কার্ড হেডার রিয়েল ইমেজ */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={promo.bgImage}
                    alt={promo.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                  {/* ব্যাজ */}
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                    {promo.badge}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg">
                    {promo.provider}
                  </div>

                  {/* অফার ডিসকাউন্ট */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-black text-amber-300 block drop-shadow">
                        {promo.discount}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <Clock className="h-3.5 w-3.5 text-orange-400" />
                      <span>{promo.validUntil}</span>
                    </div>
                  </div>
                </div>

                {/* কার্ড বডি */}
                <div className="p-5 space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition">
                    {promo.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {promo.desc}
                  </p>
                </div>
              </div>

              {/* কুপন কপি ও ডিরেক্ট বুকিং বার */}
              <div className="p-5 pt-3 border-t border-dashed border-slate-200 bg-slate-50/60 space-y-3">
                {/* কোড বক্স */}
                <div className="flex items-center justify-between bg-white border border-blue-200 rounded-xl p-2 px-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-blue-600" />
                    <span className="font-mono font-black text-slate-800 text-sm tracking-wide">
                      {promo.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(promo.code)}
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                  >
                    {copiedCode === promo.code ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                {/* ডিরেক্ট পার্টনার বাটন */}
                <a
                  href={promo.partnerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs py-2.5 rounded-xl transition shadow-sm"
                >
                  <span>Redeem on {promo.provider.toUpperCase()}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

