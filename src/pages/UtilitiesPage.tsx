import React, { useState } from 'react';
import { POPULAR_CURRENCIES, VISA_GUIDELINES } from '../constants/utilities';
import { WorldMap3D } from '../components/utilities/WorldMap3D';
import {
  ArrowRightLeft,
  Plane,
  FileCheck2,
  ExternalLink,
  ShieldCheck,
  Search,
  Radar,
  Info,
} from 'lucide-react';

export const UtilitiesPage: React.FC = () => {
  // Currency Converter State
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('AED');

  // Flight Tracker State
  const [flightNumber, setFlightNumber] = useState<string>('');

  // Visa Search State
  const [visaSearch, setVisaSearch] = useState<string>('');

  // Currency Calculations
  const fromRate = POPULAR_CURRENCIES.find((c) => c.code === fromCurrency)?.rate || 1.0;
  const toRate = POPULAR_CURRENCIES.find((c) => c.code === toCurrency)?.rate || 1.0;
  const convertedAmount = ((amount / fromRate) * toRate).toFixed(2);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleTrackFlight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flightNumber.trim()) return;
    window.open(`https://www.flightradar24.com/data/flights/${encodeURIComponent(flightNumber.trim())}`, '_blank');
  };

  const filteredVisaList = VISA_GUIDELINES.filter((item) =>
    item.country.toLowerCase().includes(visaSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-14 px-6 sm:px-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-400" /> Travel Intelligence Suite
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Travel Essential Utilities
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Real-time multi-currency exchange rates, live radar flight route lookup, international entry requirements, and 3D globe telemetry.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 sm:px-10 -mt-8 space-y-12">
        {/* নতুন: ৩ডি ওয়ার্ল্ড ফ্লাইট রাডার ম্যাপ */}
        <WorldMap3D />

        {/* কারেন্সি কনভার্টার ও ফ্লাইট ট্র্যাকার */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* কারেন্সি ইঞ্জিন */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ArrowRightLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Currency Engine</h3>
                    <p className="text-xs text-slate-500">Live interbank exchange rates</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Live Rates
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min={1}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base font-black outline-none focus:border-blue-600 focus:bg-white transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">From</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold outline-none cursor-pointer"
                    >
                      {POPULAR_CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} - {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-center sm:col-span-1 pt-5">
                    <button
                      onClick={swapCurrencies}
                      className="p-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 transition shadow-xs"
                      title="Swap Currencies"
                    >
                      <ArrowRightLeft className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">To</label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold outline-none cursor-pointer"
                    >
                      {POPULAR_CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} - {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase block">Estimated Conversion</span>
                <span className="text-2xl font-black text-slate-900">
                  {convertedAmount} {toCurrency}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 text-right">
                1 {fromCurrency} = {((1 / fromRate) * toRate).toFixed(4)} {toCurrency}
              </span>
            </div>
          </div>

          {/* ফ্লাইট ট্র্যাকার */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Radar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Live Flight Radar</h3>
                    <p className="text-xs text-slate-500">Track flight route, altitude & ETA</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                  Global Coverage
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Enter any commercial airline flight number (e.g., <strong>EK585</strong>, <strong>SQ402</strong>, or <strong>TG322</strong>) to view active positions and schedules.
              </p>

              <form onSubmit={handleTrackFlight} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">
                    Flight Number
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                      placeholder="e.g. EK585 or BG084"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-black tracking-wider uppercase outline-none focus:border-blue-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl transition shadow-md shadow-slate-900/20"
                >
                  <Radar className="h-4 w-4" />
                  Track Live on Radar
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
              <Info className="h-4 w-4 text-blue-500 shrink-0" />
              <span>Real-time satellite ADS-B flight feeds provided via FlightRadar24 network.</span>
            </div>
          </div>
        </div>

        {/* গ্লোবাল ভিসা চেকার */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">International Visa Guidelines</h3>
                <p className="text-xs text-slate-500">Quick entry prerequisites for top transit hubs and destinations</p>
              </div>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={visaSearch}
                onChange={(e) => setVisaSearch(e.target.value)}
                placeholder="Search destination country..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold outline-none focus:border-blue-600 focus:bg-white transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {filteredVisaList.map((visa) => (
              <div
                key={visa.id}
                className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between hover:bg-white hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{visa.flag}</span>
                      <h4 className="font-extrabold text-slate-900 text-sm">{visa.country}</h4>
                    </div>
                  </div>

                  <div className="space-y-2 mt-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Type:</span>
                      <span className={`font-bold px-2.5 py-0.5 rounded-full border text-[11px] ${visa.badgeBg}`}>
                        {visa.visaStatus}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Allowed Stay:</span>
                      <span className="font-bold text-slate-800">{visa.stayDuration}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 mt-3 pt-3 border-t border-slate-200/70 leading-relaxed">
                    <strong>Key Checklist:</strong> {visa.requirements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
