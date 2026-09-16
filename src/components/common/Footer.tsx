import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Compass,
  Sparkles,
  HeartHandshake,
  CreditCard,
  ChevronRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-20">
      {/* ১. "Why Choose Your Travel Partner" ট্রাস্ট সেকশন */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-10">
          Why Choose Your Travel Partner
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ফিচার ১ */}
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-500 shadow-sm">
              <Compass className="h-6 w-6" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              Discover the possibilities
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Explore millions of direct flight combinations, 5G eSIM connectivity, and curated tours across 26+ global partners.
            </p>
          </div>

          {/* ফিচার ২ */}
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-500 shadow-sm">
              <Sparkles className="h-6 w-6" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              Enjoy zero markup
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Book at official wholesale partner rates. Zero hidden booking fees and 100% transparent pricing.
            </p>
          </div>

          {/* ফিচার ৩ */}
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-500 shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              Direct official passes
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instant mobile vouchers, skip-the-line QR tickets, and digital eSIM profiles delivered immediately to your device.
            </p>
          </div>

          {/* ফিচার ৪ */}
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-500 shadow-sm">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              Travel you can trust
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Transactions processed directly via verified global networks (Aviasales, Airalo, Klook, Tiqets) with 256-bit encryption.
            </p>
          </div>
        </div>
      </section>

      {/* ২. মূল ফুটার মেনু ও পার্টনার লিঙ্কস */}
      <div className="border-t border-slate-100 bg-slate-50/70 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ব্র্যান্ড ইনফো এবং আসল লোগো */}
          <div className="space-y-3.5 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Your Travel Partner"
                className="h-11 w-auto object-contain"
              />
              <div>
                <span className="text-lg font-black tracking-tight text-slate-900 block leading-tight">
                  Your Travel Partner
                </span>
                <span className="text-[10px] font-extrabold text-blue-600 tracking-wider uppercase">
                  All in One Gateway
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              An intelligent meta-travel gateway aggregating 26+ verified global travel brands into one seamless experience.
            </p>
          </div>

          {/* পার্টনার চ্যানেল (ক্লিন সরাসরি লিংক যা Drive স্ক্রিপ্টে স্বয়ংক্রিয় ট্র্যাক হবে) */}
          <div>
            <h5 className="font-extrabold text-slate-900 text-xs tracking-wider uppercase mb-4">
              Official Portals
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="https://www.aviasales.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Aviasales Flight Search
                </a>
              </li>
              <li>
                <a href="https://www.airalo.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Airalo 5G Travel eSIM
                </a>
              </li>
              <li>
                <a href="https://yesim.app" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Yesim Unlimited Data
                </a>
              </li>
              <li>
                <a href="https://www.klook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Klook Tours & Attractions
                </a>
              </li>
              <li>
                <a href="https://www.tiqets.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Tiqets Museums & Passes
                </a>
              </li>
            </ul>
          </div>

          {/* ইউটিলিটি টুলস */}
          <div>
            <h5 className="font-extrabold text-slate-900 text-xs tracking-wider uppercase mb-4">
              Travel Utilities
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link to="/utilities" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Live Currency Converter
                </Link>
              </li>
              <li>
                <Link to="/utilities" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Flight Radar Tracking
                </Link>
              </li>
              <li>
                <Link to="/utilities" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Global Visa Requirements
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-blue-600 flex items-center gap-1.5 transition">
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" /> Flash Promo Codes
                </Link>
              </li>
            </ul>
          </div>

          {/* পেমেন্ট পার্টনারস */}
          <div>
            <h5 className="font-extrabold text-slate-900 text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <CreditCard className="h-4 w-4 text-slate-700" /> Verified Payment Channels
            </h5>
            <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">
              Official partner gateways support instant encrypted checkout methods:
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-black text-slate-700">
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-xs">VISA</span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-xs">MasterCard</span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-xs">Apple Pay</span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-xs">Google Pay</span>
              <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-xs">PayPal</span>
            </div>
          </div>
        </div>
      </div>

      {/* ৩. কপিরাইট স্ট্রিপ */}
      <div className="border-t border-slate-200 bg-white py-6 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs font-medium">
          <p>© {new Date().getFullYear()} Your Travel Partner. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer transition">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer transition">Terms of Use</span>
            <span>•</span>
            <span className="hover:text-slate-900 cursor-pointer transition">Partner Network Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
