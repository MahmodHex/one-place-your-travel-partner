export interface PartnerBrand {
  id: string;
  name: string;
  category: 'esim' | 'transfer' | 'stays' | 'tours' | 'insurance' | 'flights';
  logoText: string;
  tagline: string;
  commissionBadge: string;
  url: string;
  description: string;
  bgImage: string;
}

export const MONETIZED_BRANDS: PartnerBrand[] = [
  // 1. eSIM Deals
  {
    id: 'yesim',
    name: 'Yesim',
    category: 'esim',
    logoText: 'YESIM',
    tagline: 'Global Unlimited 5G eSIM',
    commissionBadge: '18% High Yield',
    url: 'https://yesim.tpm.lv/iV7xxxWO',
    description: 'Instant eSIM activation with unlimited high-speed data across 150+ countries. 90-day cookie warranty.',
    bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'airalo',
    name: 'Airalo',
    category: 'esim',
    logoText: 'AIRALO',
    tagline: 'World Leading eSIM Store',
    commissionBadge: 'Top Trending',
    url: 'https://www.airalo.com',
    description: 'Local and regional prepaid eSIM packages starting from just $4.50 with zero roaming fees.',
    bgImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop',
  },
  // 2. Airport Transfers & Car Rentals
  {
    id: 'kiwitaxi',
    name: 'Kiwitaxi',
    category: 'transfer',
    logoText: 'KIWITAXI',
    tagline: 'Global Airport Transfers',
    commissionBadge: '11% Commission',
    url: 'https://kiwitaxi.com',
    description: 'Pre-booked private airport pickups in 100+ countries with professional drivers meeting you at arrivals.',
    bgImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gettransfer',
    name: 'GetTransfer',
    category: 'transfer',
    logoText: 'GETTRANSFER',
    tagline: 'Best Price Car Transfers',
    commissionBadge: 'Top Converter',
    url: 'https://gettransfer.com',
    description: 'Compare bids from certified drivers for long-distance and airport transfers at discount rates.',
    bgImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
  },
  // 3. Stays & Accommodations
  {
    id: 'hostelworld',
    name: 'Hostelworld',
    category: 'stays',
    logoText: 'HOSTELWORLD',
    tagline: 'Social Stays & Budget Beds',
    commissionBadge: 'Verified Partner',
    url: 'https://www.hostelworld.com',
    description: 'The premier booking portal for solo travelers, youth hostels, and boutique backpacker accommodations.',
    bgImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'tripcom',
    name: 'Trip.com',
    category: 'stays',
    logoText: 'TRIP.COM',
    tagline: 'Hotels, Trains & Flights',
    commissionBadge: 'Global Giant',
    url: 'https://www.trip.com',
    description: 'Over 1.4 million hotels and high-speed rail tickets across Asia, Europe, and the Americas.',
    bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
  },
  // 4. Tours & Experiences
  {
    id: 'klook',
    name: 'Klook',
    category: 'tours',
    logoText: 'KLOOK',
    tagline: 'Attractions & Tour Passes',
    commissionBadge: 'Best Seller',
    url: 'https://www.klook.com',
    description: 'Skip-the-line theme park tickets, JR Passes, and curated island tours with instant mobile QR voucher.',
    bgImage: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'tiqets',
    name: 'Tiqets',
    category: 'tours',
    logoText: 'TIQETS',
    tagline: 'Museums & Landmarks',
    commissionBadge: 'Direct Entry',
    url: 'https://www.tiqets.com',
    description: 'Direct mobile access to the Louvre, Colosseum, Burj Khalifa, and top global cultural landmarks.',
    bgImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
  },
  // 5. Travel Insurance & Safety
  {
    id: 'visitorscoverage',
    name: 'VisitorsCoverage',
    category: 'insurance',
    logoText: 'VISITORS COVERAGE',
    tagline: 'International Travel Medical',
    commissionBadge: 'Crucial Essential',
    url: 'https://www.visitorscoverage.com',
    description: 'Schengen and US compliant travel insurance policies covering emergency medical and trip delays.',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
  },
];
