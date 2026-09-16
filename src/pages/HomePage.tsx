import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryDock } from '../components/home/CategoryDock';
import { OffersForYou } from '../components/home/OffersForYou';
import { RecentlyViewed } from '../components/home/RecentlyViewed';
import { PopularPlaces } from '../components/home/PopularPlaces';
import { OfferCarousel } from '../components/home/OfferCarousel';
import { PartnerSpotlights } from '../components/home/PartnerSpotlights';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 pb-12">
      {/* ১. হিরো ব্যানার ও সার্চ পিল */}
      <HeroSection />

      {/* ২. ক্যাটাগরি ডক */}
      <CategoryDock />

      {/* ৩. Offers For You (Klook কুপন ব্যানার গ্রিড) */}
      <OffersForYou />

      {/* ৪. Recently Viewed (লাইভ প্যাকেজ কার্ডস) */}
      <RecentlyViewed />

      {/* ৫. Where to Next? (জনপ্রিয় শহরের ছবি সহ কার্ডস) */}
      <PopularPlaces />

      {/* ৬. লাইভ পার্টনার ফ্ল্যাশ অফার স্লাইডার */}
      <OfferCarousel />

      {/* ৭. ভেরিফাইড পার্টনার স্পটলাইটস */}
      <PartnerSpotlights />
    </div>
  );
};
