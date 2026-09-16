import React, { useState, useEffect } from 'react';
import { LIVE_CAROUSEL_OFFERS } from '../../constants/offers';
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

export const OfferCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LIVE_CAROUSEL_OFFERS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % LIVE_CAROUSEL_OFFERS.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + LIVE_CAROUSEL_OFFERS.length) % LIVE_CAROUSEL_OFFERS.length);

  const current = LIVE_CAROUSEL_OFFERS[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600">
            Limited Time Offers
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Featured Partner Drops
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm transition"
            aria-label="Previous Offer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm transition"
            aria-label="Next Offer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* রিয়েল ব্যাকগ্রাউন্ড ইমেজ সহ ব্যানার */}
      <div className="relative overflow-hidden rounded-3xl min-h-[300px] sm:min-h-[340px] flex items-center p-8 sm:p-14 text-white shadow-2xl border border-slate-700/50">
        <img
          src={current.bgImage}
          alt={current.title}
          className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 scale-105"
        />
        {/* টেক্সট স্পষ্ট রাখার ডার্ক গ্রেডিয়েন্ট ওভারলে */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-xl space-y-4">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border backdrop-blur-md ${current.accentColor}`}>
            <Zap className="h-3.5 w-3.5 fill-current" /> {current.tag}
          </span>
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug drop-shadow-md">
            {current.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow">
            {current.description}
          </p>
          <div className="pt-2">
            <a
              href={current.partnerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/30"
            >
              {current.ctaText} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* স্লাইডার ডটস */}
        <div className="absolute bottom-5 right-8 z-10 flex items-center gap-2">
          {LIVE_CAROUSEL_OFFERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-white shadow' : 'w-2 bg-white/40'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
