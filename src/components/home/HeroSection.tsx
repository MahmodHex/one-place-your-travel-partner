import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim() || 'Dubai';
    // সরাসরি Aviasales বা Kiwi এর আসল সার্চ পোর্টালে নিয়ে যাবে কোনো রিডাইরেক্ট এরর ছাড়া
    window.open(`https://www.aviasales.com/search?origin=DAC&destination=${encodeURIComponent(query)}`, '_blank');
  };

  const handleQuickSearch = (city: string) => {
    setSearchQuery(city);
    window.open(`https://www.aviasales.com/search?origin=DAC&destination=${encodeURIComponent(city)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden min-h-[460px] sm:min-h-[500px] flex items-center justify-center py-8 px-4 sm:px-8">
      {/* Background Graphic */}
      <img
        src="/hero-banner.png"
        alt="World Travel Landmarks"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Transparent Glass Filter Box */}
      <div className="relative z-10 max-w-2xl mx-auto w-full text-center px-6 py-5 sm:px-8 sm:py-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 shadow-lg space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
              Welcome to <span className="text-blue-600">Your Travel Partner</span>
             </h1>

        <p className="max-w-lg mx-auto text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
          Compare verified flights, instant 5G eSIMs, airport transfers, and museum tickets with zero extra fees.
        </p>

        {/* Working Search Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white/95 p-1.5 sm:p-2 rounded-xl sm:rounded-full shadow-md max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-1.5 border border-slate-200"
        >
          <div className="flex items-center gap-2 flex-1 px-3 py-1.5 w-full text-slate-800">
            <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Where are you traveling? (e.g. Dubai, Bangkok)"
              className="w-full text-xs sm:text-sm font-semibold outline-none placeholder:text-slate-400 bg-transparent text-slate-900"
            />
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border-l border-slate-200 text-slate-500 text-xs font-semibold shrink-0">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            Flexible Dates
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg sm:rounded-full transition shadow-sm shrink-0 cursor-pointer"
          >
            <Search className="h-3.5 w-3.5" />
            Search Deals
          </button>
        </form>

        {/* Quick Trending Destinations */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5 text-[11px]">
          <span className="font-extrabold text-slate-800">Trending:</span>
          {['Dubai', 'Bangkok', 'Singapore', 'Kuala Lumpur', 'Istanbul'].map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => handleQuickSearch(city)}
              className="px-2.5 py-0.5 rounded-full bg-white/85 hover:bg-blue-600 hover:text-white text-slate-700 font-bold border border-slate-200 shadow-2xs transition cursor-pointer"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
