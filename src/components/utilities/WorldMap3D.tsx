import React, { useState } from 'react';
import { Plane, Radio, ExternalLink, Navigation, Compass, Globe } from 'lucide-react';

interface FlightItem {
  flight: string;
  airline: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  progress: number;
  altitude: string;
  speed: string;
  status: 'En Route' | 'Cruising' | 'Descending';
  // মানচিত্রে পার্সেন্টেজ অনুযায়ী সঠিক ভৌগোলিক পজিশন
  pinFrom: { top: string; left: string };
  pinTo: { top: string; left: string };
  currentPlane: { top: string; left: string; angle: string };
}

const ACTIVE_RADAR_FLIGHTS: FlightItem[] = [
  {
    flight: 'EK585',
    airline: 'Emirates',
    from: 'Dubai',
    fromCode: 'DXB',
    to: 'London Heathrow',
    toCode: 'LHR',
    progress: 68,
    altitude: '38,000 ft',
    speed: '540 kts',
    status: 'Cruising',
    pinFrom: { top: '44%', left: '63%' },
    pinTo: { top: '30%', left: '48%' },
    currentPlane: { top: '35%', left: '53%', angle: '-35deg' },
  },
  {
    flight: 'SQ402',
    airline: 'Singapore Airlines',
    from: 'Singapore',
    fromCode: 'SIN',
    to: 'Bangkok',
    toCode: 'BKK',
    progress: 75,
    altitude: '33,000 ft',
    speed: '485 kts',
    status: 'Descending',
    pinFrom: { top: '59%', left: '77%' },
    pinTo: { top: '48%', left: '74%' },
    currentPlane: { top: '51%', left: '75%', angle: '-20deg' },
  },
  {
    flight: 'BA178',
    airline: 'British Airways',
    from: 'New York',
    fromCode: 'JFK',
    to: 'London',
    toCode: 'LHR',
    progress: 85,
    altitude: '39,000 ft',
    speed: '565 kts',
    status: 'Cruising',
    pinFrom: { top: '36%', left: '28%' },
    pinTo: { top: '30%', left: '48%' },
    currentPlane: { top: '31%', left: '43%', angle: '15deg' },
  },
  {
    flight: 'TG322',
    airline: 'Thai Airways',
    from: 'Bangkok',
    fromCode: 'BKK',
    to: 'Tokyo Haneda',
    toCode: 'HND',
    progress: 52,
    altitude: '36,000 ft',
    speed: '520 kts',
    status: 'En Route',
    pinFrom: { top: '48%', left: '74%' },
    pinTo: { top: '38%', left: '85%' },
    currentPlane: { top: '43%', left: '79%', angle: '30deg' },
  },
];

const GLOBAL_AIRPORTS = [
  { code: 'JFK', name: 'New York', top: '36%', left: '28%' },
  { code: 'LHR', name: 'London', top: '30%', left: '48%' },
  { code: 'DXB', name: 'Dubai', top: '44%', left: '63%' },
  { code: 'BKK', name: 'Bangkok', top: '48%', left: '74%' },
  { code: 'SIN', name: 'Singapore', top: '59%', left: '77%' },
  { code: 'HND', name: 'Tokyo', top: '38%', left: '85%' },
  { code: 'SYD', name: 'Sydney', top: '78%', left: '89%' },
];

export const WorldMap3D: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState<FlightItem>(ACTIVE_RADAR_FLIGHTS[0]);

  return (
    <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* টপ রাডার ইনফো স্ট্রিপ */}
      <div className="px-6 sm:px-8 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Globe className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-white tracking-tight">Interactive Global Flight Radar</h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <Radio className="h-3 w-3 animate-ping" /> Real-time Radar
              </span>
            </div>
            <p className="text-xs text-slate-400">Satellite flight tracking across major intercontinental corridors</p>
          </div>
        </div>

        <a
          href="https://www.flightradar24.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-lg shadow-blue-600/25"
        >
          <span>Open Full Radar</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* রিয়েল স্যাটেলাইট ডার্ক ওয়ার্ল্ড ম্যাপ ডিসপ্লে */}
      <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden bg-slate-950">
        {/* হাই-রেজোলিউশন ডার্ক আর্থ স্যাটেলাইট ম্যাপ */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop"
          alt="Satellite World Map"
          className="absolute inset-0 w-full h-full object-cover opacity-70 filter contrast-125"
        />

        {/* সাইবার ডার্ক ও স্ক্যানলাইন ওভারলে */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        {/* গ্লোবাল হাব এয়ারপোর্ট মার্কার */}
        {GLOBAL_AIRPORTS.map((hub) => (
          <div
            key={hub.code}
            style={{ top: hub.top, left: hub.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 group z-10"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-blue-400 border border-white shadow-[0_0_8px_#38bdf8]"></div>
            <span className="text-[10px] font-black font-mono text-white/90 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-700 backdrop-blur-xs">
              {hub.code}
            </span>
          </div>
        ))}

        {/* সিলেক্টেড ফ্লাইটের রুট মার্কার ও প্লেন */}
        <div
          style={{ top: selectedFlight.pinFrom.top, left: selectedFlight.pinFrom.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-[0_0_12px_#10b981] animate-ping"></div>
        </div>

        <div
          style={{ top: selectedFlight.pinTo.top, left: selectedFlight.pinTo.left }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="h-3.5 w-3.5 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_12px_#f59e0b]"></div>
        </div>

        {/* প্লেনের লাইভ পজিশন আইকন */}
        <div
          style={{
            top: selectedFlight.currentPlane.top,
            left: selectedFlight.currentPlane.left,
            transform: `translate(-50%, -50%) rotate(${selectedFlight.currentPlane.angle})`,
          }}
          className="absolute z-30 transition-all duration-700 drop-shadow-[0_0_10px_#38bdf8]"
        >
          <div className="p-2 rounded-full bg-blue-600 text-white border border-blue-300 shadow-xl animate-bounce">
            <Plane className="h-4 w-4 fill-current" />
          </div>
        </div>

        {/* ফ্লোটিং HUD ইনফো কার্ড */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 sm:p-5 rounded-2xl shadow-2xl max-w-xs sm:max-w-sm">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-[10px] uppercase font-black tracking-widest text-blue-400 flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5" /> Active Telemetry
            </span>
            <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              {selectedFlight.status}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <h4 className="text-xl font-black text-white font-mono">{selectedFlight.flight}</h4>
            <span className="text-xs text-slate-400 font-medium">({selectedFlight.airline})</span>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-bold text-slate-200">
            <span>{selectedFlight.from} ({selectedFlight.fromCode})</span>
            <Navigation className="h-3.5 w-3.5 text-blue-400 rotate-90" />
            <span>{selectedFlight.to} ({selectedFlight.toCode})</span>
          </div>

          <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-teal-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${selectedFlight.progress}%` }}
            ></div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800">
            <div>ALT: <strong className="text-white font-bold">{selectedFlight.altitude}</strong></div>
            <div>SPEED: <strong className="text-white font-bold">{selectedFlight.speed}</strong></div>
          </div>
        </div>
      </div>

      {/* ক্লিকযোগ্য লাইভ ফ্লাইট লিস্ট */}
      <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center gap-3 overflow-x-auto">
        <span className="text-xs font-bold text-slate-400 whitespace-nowrap mr-1">
          Active Flights:
        </span>
        {ACTIVE_RADAR_FLIGHTS.map((fl) => (
          <button
            key={fl.flight}
            onClick={() => setSelectedFlight(fl)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-2 ${
              selectedFlight.flight === fl.flight
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <Plane className="h-3.5 w-3.5" />
            <span>{fl.flight} ({fl.fromCode} ➔ {fl.toCode})</span>
          </button>
        ))}
      </div>
    </div>
  );
};
