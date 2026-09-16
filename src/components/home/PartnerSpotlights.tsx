import React, { useState, useMemo } from 'react';
import { MONETIZED_BRANDS } from '../../constants/partners';
import { Sparkles, ArrowUpRight, Clock } from 'lucide-react';
import { TrustModal } from '../common/TrustModal';

export const PartnerSpotlights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<{ name: string; url: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All 26 Partners' },
    { id: 'flights', label: '✈️ Flights (Up to 40%)' },
    { id: 'esim', label: '📱 5G eSIMs (Up to 20%)' },
    { id: 'rental', label: '🚗 Car & Bike Hire' },
    { id: 'transfer', label: '🚕 Airport Rides' },
    { id: 'tours', label: '🎟️ Attractions (Up to 41%)' },
    { id: 'insurance', label: '🛡️ Insurance (25%)' },
    { id: 'compensation', label: '⚖️ Delay Claims ($650)' },
    { id: 'services', label: '🧳 Luggage Storage' },
  ];

  const filteredBrands = useMemo(() => {
    if (activeCategory === 'all') return MONETIZED_BRANDS;
    return MONETIZED_BRANDS.filter((b) => b.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-600 border border-blue-200 mb-2.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              26 Verified Official Booking Gateways
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Direct Travel Services & Booking Gateways
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Book directly through certified global networks with 0% markups and instant voucher confirmation.
            </p>
          </div>

          <div className="text-xs font-bold text-slate-400 shrink-0">
            Showing <span className="text-blue-600 font-extrabold">{filteredBrands.length}</span> verified platforms
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrand({ name: brand.name, url: brand.url })}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between min-h-[310px] cursor-pointer"
            >
              <img
                src={brand.bgImage}
                alt={brand.name}
                className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-108 transition duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40 group-hover:via-slate-950/65 transition duration-300"></div>

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
                <p className="text-xs text-slate-200/90 leading-relaxed font-medium line-clamp-2">
                  {brand.description}
                </p>
              </div>

              <div className="relative z-10 p-6 pt-3 border-t border-white/10 bg-slate-950/40 backdrop-blur-xs flex items-center justify-between text-xs font-bold text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-medium">
                  <Clock className="h-3.5 w-3.5 text-blue-400" />
                  <span>{brand.cookieLifetime} cookie</span>
                </div>
                <span className="inline-flex items-center gap-1 bg-blue-600 group-hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-xl shadow-md transition group-hover:scale-105">
                  Book on {brand.name}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Transition Modal */}
      {selectedBrand && (
        <TrustModal
          isOpen={!!selectedBrand}
          brandName={selectedBrand.name}
          targetUrl={selectedBrand.url}
          onClose={() => setSelectedBrand(null)}
        />
      )}
    </>
  );
};

