import React from 'react';
import { ArrowUpRight, Plane, Sparkles } from 'lucide-react';

export const OfferCarousel: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-6">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
            alt="Airlines"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            Limited Time Offers • Featured Partner Drops
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Fly Worldwide with Secret Combinations
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Save up to 45% on smart flight connections powered by Aviasales and Kiwi.com multi-carrier search algorithm.
          </p>

          <div className="pt-2">
            <a
              href="https://www.aviasales.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <Plane className="h-4 w-4" />
              <span>Explore Flight Fares</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
