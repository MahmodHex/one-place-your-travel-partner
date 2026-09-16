import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryDock } from '../components/home/CategoryDock';
import { PopularPlaces } from '../components/home/PopularPlaces';
import { PartnerSpotlights } from '../components/home/PartnerSpotlights';
import { OffersForYou } from '../components/home/OffersForYou';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 space-y-6">
      {/* 1. Hero Search Section */}
      <HeroSection />

      {/* 2. Quick Category Filter Dock */}
      <CategoryDock />

      {/* 3. Live Travelpayouts Popular Destinations (Replacing Limited Time Offer) */}
      <PopularPlaces />

      {/* 4. 26 Direct Partner Gateways */}
      <PartnerSpotlights />

      {/* 5. Recommended Deals */}
      <OffersForYou />
    </div>
  );
};
