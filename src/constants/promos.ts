import type { PromoCodeItem } from '../types';

export interface ExtendedPromo extends PromoCodeItem {
  category: 'flights' | 'esims' | 'tours';
  badge: string;
  bgImage: string;
}

export const ACTIVE_PROMOS: ExtendedPromo[] = [
  {
    id: 'promo-1',
    provider: 'airalo',
    category: 'esims',
    code: 'ONEPLACE15',
    discount: '15% OFF',
    badge: 'Trending Promo',
    title: 'Global & Regional 5G eSIM Plans',
    desc: 'Valid on all regional eSIM data packages across 200+ countries.',
    validUntil: '31 Dec 2026',
    bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://airalo.tp.st/',
  },
  {
    id: 'promo-2',
    provider: 'kiwi',
    category: 'flights',
    code: 'NOMADFLY40',
    discount: '$40 FLAT OFF',
    badge: 'Flight Exclusive',
    title: 'Kiwi Secret Connected Flights',
    desc: 'Save $40 on multi-city flight bookings over $300 with Kiwi Guarantee.',
    validUntil: 'Limited Quota',
    bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/',
  },
  {
    id: 'promo-3',
    provider: 'klook',
    category: 'tours',
    code: 'KLKEXPLORE10',
    discount: '10% OFF',
    badge: 'Theme Parks',
    title: 'Disneyland & Universal Passes',
    desc: 'Instant discount voucher on premium global theme park and safari tickets.',
    validUntil: '30 Nov 2026',
    bgImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://klook.tp.st/',
  },
  {
    id: 'promo-4',
    provider: 'tiqets',
    category: 'tours',
    code: 'CULTUREPASS',
    discount: '8% OFF',
    badge: 'Direct Pass',
    title: 'European Historic Museums & Landmarks',
    desc: 'Direct priority entry barcode for Louvre, Colosseum and Sagrada Familia.',
    validUntil: 'Active Now',
    bgImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://tiqets.tp.st/',
  },
  {
    id: 'promo-5',
    provider: 'airalo',
    category: 'esims',
    code: 'FIRSTFLY5',
    discount: 'EXTRA $5 OFF',
    badge: 'First Purchase',
    title: 'New User Travel Data Starter Pack',
    desc: 'Applicable for any local 3GB/5GB high-speed eSIM data bundle.',
    validUntil: 'Ongoing',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://airalo.tp.st/',
  },
  {
    id: 'promo-6',
    provider: 'klook',
    category: 'tours',
    code: 'DUBAISPECIAL',
    discount: '12% OFF',
    badge: 'Desert Safari',
    title: 'Dubai Skyline & Red Dune Adventures',
    desc: 'Exclusive voucher for Burj Khalifa Observatory & 4x4 desert safari dinner.',
    validUntil: '31 Oct 2026',
    bgImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://klook.tp.st/',
  },
];

