import React from 'react';
import { PARTNERS_DATA } from '../../constants/partners';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const PartnerSpotlights: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-14">
      <div className="mb-6">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600">
          Official Direct Gateways
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Partner Spotlights
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Zero price markup. Direct booking through authorized platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PARTNERS_DATA.map((partner) => (
          <a
            key={partner.id}
            href={partner.partnerUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative h-64 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-5 border border-slate-200"
          >
            {/* ব্যাকগ্রাউন্ড রিয়েল ইমেজ */}
            <img
              src={partner.bgImage}
              alt={partner.name}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-500"
            />
            {/* ডার্ক গ্রেডিয়েন্ট যাতে টেক্সট ক্রিস্প ও রিডেবল থাকে */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40"></div>

            {/* টপ ব্যাজেস */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-block text-[11px] font-black uppercase text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-amber-300/30">
                {partner.offerBadge}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-400/30">
                <ShieldCheck className="h-3 w-3" /> Verified
              </span>
            </div>

            {/* বটম ইনফো */}
            <div className="relative z-10 space-y-1">
              <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {partner.category}
              </p>
              
              <div className="pt-3 flex items-center justify-between text-xs font-extrabold text-blue-300 group-hover:text-white transition">
                <span>Browse Direct Rates</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
