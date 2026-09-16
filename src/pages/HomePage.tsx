import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PartnerSpotlights } from '../components/home/PartnerSpotlights';
import { CategoryDock } from '../components/home/CategoryDock';
import { OfferCarousel } from '../components/home/OfferCarousel';
import { OffersForYou } from '../components/home/OffersForYou';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 space-y-6">
      {/* 1. Hero Section With Working Direct Search Engine */}
      <HeroSection />

      {/* 2. Quick Category Access Dock */}
      <CategoryDock />

      {/* 3. Flash Offers & Discount Codes Carousel */}
      <OfferCarousel />

      {/* 4. 26 Direct Partner Gateways (Fully Clickable) */}
      <PartnerSpotlights />

      {/* 5. Recommended Destinations */}
      <OffersForYou />
    </div>
  );
};
