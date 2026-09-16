import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, ExternalLink, Loader2 } from 'lucide-react';

interface TrustModalProps {
  isOpen: boolean;
  brandName: string;
  targetUrl: string;
  onClose: () => void;
}

export const TrustModal: React.FC<TrustModalProps> = ({
  isOpen,
  brandName,
  targetUrl,
  onClose,
}) => {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    if (!isOpen) return;
    setCountdown(2);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, targetUrl, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center space-y-5">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> 100% Verified Gateway
          </span>
          <h3 className="text-xl font-black text-slate-900 mt-2.5">
            Connecting to {brandName}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
            Connecting through secure 256-bit encrypted gateway with official wholesale rates and zero extra fees.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-emerald-600" />
            <span>SSL End-to-End Protected</span>
          </div>
          <span className="text-blue-600 font-black">in {countdown}s...</span>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-100 transition cursor-pointer"
          >
            Cancel
          </button>
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white flex items-center justify-center gap-1 transition shadow-sm cursor-pointer"
          >
            <span>Go Direct</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
