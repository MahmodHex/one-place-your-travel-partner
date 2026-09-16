import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Plane,
  Compass,
  Tag,
  Briefcase,
  Bot,
  Menu,
  X,
  MessageSquareCode,
  ShieldCheck,
} from 'lucide-react';
import { TravelChatbot } from './TravelChatbot';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: Plane },
    { label: 'Explore Deals', path: '/explore', icon: Compass },
    { label: 'Flash Promos', path: '/offers', icon: Tag },
    { label: 'Travel Utilities', path: '/utilities', icon: Briefcase },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        {/* Top Micro Strip - Updated with 26+ Verified Networks */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 sm:px-10 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-white tracking-wide">
                26+ Verified Partner Networks
              </span>
              <span className="hidden lg:inline text-slate-400">
                • Aviasales • Airalo • Yesim • Kiwi • Klook • QEEQ • AirHelp • EKTA
              </span>
            </div>

            <div className="flex items-center gap-5 text-xs">
              <span className="hidden md:inline-flex items-center gap-1 font-semibold text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" /> 100% Direct Gateway Booking
              </span>
              <span className="text-slate-400">
                Currency: <strong className="text-white font-bold">USD ($)</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3.5 sm:py-4 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 block leading-tight">
                One Place
              </span>
              <span className="text-[10px] font-extrabold text-blue-600 tracking-wider uppercase block">
                Your Travel Partner
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                    active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* AI Chatbot Toggle Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition shadow-md shadow-blue-600/25 cursor-pointer"
            >
              <Bot className="h-4 w-4" />
              <span>AI Chatbot</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 pt-3 pb-5 space-y-2 shadow-xl">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold ${
                    active ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsChatOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full mt-2 text-xs font-bold text-white bg-blue-600 py-2.5 rounded-xl shadow-md cursor-pointer"
            >
              <Bot className="h-4 w-4" /> Open AI Chatbot
            </button>
          </div>
        )}
      </header>

      {/* Floating Bottom AI Bot Trigger */}
      <button
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 h-13 w-13 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-105 hover:bg-blue-700 transition cursor-pointer border-2 border-white"
        title="Open AI Travel Assistant"
      >
        <MessageSquareCode className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse"></span>
      </button>

      {/* Persistent AI Travel Chatbot */}
      <TravelChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};
