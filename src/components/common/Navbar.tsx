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
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top Micro Strip */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-slate-200 text-xs sm:text-sm">Official Partner Network</span>
              <span className="hidden sm:inline text-slate-400 text-xs sm:text-sm">• Kiwi • Airalo • Klook • Tiqets</span>
            </div>

            <div className="flex items-center gap-5 text-xs sm:text-sm">
              <span className="hidden md:inline font-bold text-emerald-400">Zero Commission Booking</span>
              <span className="text-slate-400">
                Currency: <strong className="text-white font-bold">USD ($)</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition">
              <Plane className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 block leading-tight">
                One Place
              </span>
              <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase block">
                Your Travel Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                    active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* AI Chatbot Button (WhatsApp সম্পূর্ণ সরানো হয়েছে) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl transition shadow-md shadow-blue-600/25 cursor-pointer"
            >
              <Bot className="h-4 w-4" />
              <span>AI Chatbot</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 pt-4 pb-6 space-y-2.5 shadow-xl">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold ${
                    active ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
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
              className="flex items-center justify-center gap-2 w-full mt-3 text-sm font-bold text-white bg-blue-600 py-3 rounded-xl shadow-md cursor-pointer"
            >
              <Bot className="h-4 w-4" /> Open AI Chatbot
            </button>
          </div>
        )}
      </header>

      {/* স্ক্রিনের নিচের ফ্লোটিং চ্যাট বাটন */}
      <button
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-blue-700 transition cursor-pointer border-2 border-white"
        title="Open AI Travel Assistant"
      >
        <MessageSquareCode className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse"></span>
      </button>

      {/* ট্রাভেল চ্যাটবট ডায়ালগ */}
      <TravelChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};
