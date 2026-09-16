import React from 'react';
import { Plane, Wifi, Ticket, Compass, Hotel, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { label: 'Flights', sub: 'Kiwi.com', icon: Plane, path: '/explore?cat=flights', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  { label: '5G eSIMs', sub: 'Airalo', icon: Wifi, path: '/explore?cat=esims', color: 'bg-rose-50 text-rose-600 border-rose-200' },
  { label: 'Theme Parks', sub: 'Klook', icon: Ticket, path: '/explore?cat=tours', color: 'bg-orange-50 text-orange-600 border-orange-200' },
  { label: 'Museum Passes', sub: 'Tiqets', icon: Compass, path: '/explore?cat=tours', color: 'bg-teal-50 text-teal-600 border-teal-200' },
  { label: 'Hotels & Stays', sub: 'Direct Fares', icon: Hotel, path: '/explore?cat=stays', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { label: 'Flash Offers', sub: 'Up to 45% Off', icon: Sparkles, path: '/offers', color: 'bg-amber-50 text-amber-600 border-amber-200' },
];

export const CategoryDock: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {CATEGORIES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.path}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 flex flex-col items-center text-center group"
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-2.5 border ${item.color} group-hover:scale-110 transition`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-800 block">
                {item.label}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                {item.sub}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
