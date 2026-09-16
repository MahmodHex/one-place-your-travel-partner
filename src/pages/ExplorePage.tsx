import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EXPLORE_PACKAGES } from '../constants/packages';
import {
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Plane,
  Wifi,
  Ticket,
  Hotel,
  Compass,
} from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'priceLow' | 'rating'>('recommended');

  const filterTabs = [
    { id: 'all', label: 'All Deals', icon: Compass },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'esims', label: '5G eSIMs', icon: Wifi },
    { id: 'tours', label: 'Tours & Passes', icon: Ticket },
    { id: 'stays', label: 'Hotels & Stays', icon: Hotel },
  ];

  const handleTabChange = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: catId });
    }
  };

  // ফিল্টারিং এবং সর্টিং লজিক
  const filteredPackages = useMemo(() => {
    let list = [...EXPLORE_PACKAGES];

    // ক্যাটাগরি অনুযায়ী ফিল্টার
    if (activeCategory !== 'all') {
      list = list.filter((item) => item.category === activeCategory);
    }

    // সার্চ কিউরি অনুযায়ী ফিল্টার
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q)
      );
    }

    // সর্টিং
    if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'priceLow') {
      list.sort(
        (a, b) =>
          parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
      );
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* ১. টপ হেডার ব্যানার */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-12 px-6 sm:px-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Direct Partner Inventory
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Explore Curated Travel Deals
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Discover wholesale flight routes, instant 5G eSIM connectivity profiles, and skip-the-line passes verified by official global operators.
          </p>
        </div>
      </section>

      {/* ২. ফিল্টার ও সার্চ কন্ট্রোল বার */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 -mt-6">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* সার্চ বক্স */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, deal or tour..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium outline-none focus:border-blue-600 focus:bg-white transition"
            />
          </div>

          {/* ক্যাটাগরি চিপস */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* সর্টিং ড্রপডাউন */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <SlidersHorizontal className="h-4 w-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl px-3 py-2 outline-none cursor-pointer"
            >
              <option value="recommended">Recommended</option>
              <option value="priceLow">Lowest Price</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* ৩. প্যাকেজ গ্রিড */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 mt-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900 font-extrabold">{filteredPackages.length}</span> verified deals
          </p>
        </div>

        {filteredPackages.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto my-12">
            <Compass className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-extrabold text-slate-800">No deals matched your criteria</h3>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleTabChange('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPackages.map((pkg) => (
              <a
                key={pkg.id}
                href={pkg.partnerUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* কার্ড ইমেজ ও ব্যাজেস */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pkg.imageUrl}
                      alt={pkg.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-sm">
                      {pkg.badge}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase">
                      {pkg.provider}
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1.5 max-w-[90%] truncate">
                      <MapPin className="h-3 w-3 text-blue-400 shrink-0" />
                      <span className="truncate">{pkg.location}</span>
                    </div>
                  </div>

                  {/* কার্ড বডি */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {pkg.subtitle}
                    </p>

                    <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1 font-bold text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current" /> {pkg.rating}
                      </div>
                      <span>•</span>
                      <span className="text-slate-400 text-[11px]">{pkg.reviews}</span>
                    </div>
                  </div>
                </div>

                {/* প্রাইসিং ও অ্যাকশন ফুটার */}
                <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Direct Rate</span>
                    <span className="text-lg font-black text-blue-600">{pkg.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-blue-600 group-hover:translate-x-0.5 transition">
                    <span>Book Direct</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
