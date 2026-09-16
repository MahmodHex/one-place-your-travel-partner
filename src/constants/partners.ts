export interface PartnerBrandCard {
  id: string;
  name: string;
  category: string;
  offerBadge: string;
  bgImage: string;
  partnerUrl: string;
}

export const PARTNERS_DATA: PartnerBrandCard[] = [
  {
    id: 'kiwi',
    name: 'Kiwi.com',
    category: 'Flight Search & Secret Combinations',
    offerBadge: 'Up to 45% Off',
    bgImage: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/',
  },
  {
    id: 'airalo',
    name: 'Airalo eSIM',
    category: 'Global & Local 5G Data Passes',
    offerBadge: '15% Rebate',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://airalo.tp.st/',
  },
  {
    id: 'klook',
    name: 'Klook Tours',
    category: 'Theme Parks, Passes & Attractions',
    offerBadge: 'Instant Voucher',
    bgImage: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://klook.tp.st/',
  },
  {
    id: 'tiqets',
    name: 'Tiqets Culture',
    category: 'World Museums & Monuments Direct',
    offerBadge: 'Direct Access',
    bgImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
    partnerUrl: 'https://tiqets.tp.st/',
  },
];
