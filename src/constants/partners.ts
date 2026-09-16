export interface PartnerBrand {
  id: string;
  name: string;
  category: 'esim' | 'transfer' | 'stays' | 'tours' | 'insurance' | 'flights';
  logoText: string;
  tagline: string;
  commissionBadge: string;
  url: string;
  description: string;
}

export const MONETIZED_BRANDS: PartnerBrand[] = [
  // 1. eSIM Deals
  {
    id: 'yesim',
    name: 'Yesim',
    category: 'esim',
    logoText: '📱 YESIM',
    tagline: 'Global Unlimited 5G eSIM',
    commissionBadge: '18% High Yield',
    url: 'https://yesim.tpm.lv/iV7xxxWO',
    description: 'Instant eSIM activation with unlimited high-speed data across 150+ countries. 90-day cookie warranty.',
  },
  {
    id: 'airalo',
    name: 'Airalo',
    category: 'esim',
    logoText: '📶 AIRALO',
    tagline: 'World Leading eSIM Store',
    commissionBadge: 'Top Trending',
    url: 'https://www.airalo.com',
    description: 'Local and regional prepaid eSIM packages starting from just $4.50 with zero roaming fees.',
  },
  // 2. Airport Transfers & Car Rentals
  {
    id: 'kiwitaxi',
    name: 'Kiwitaxi',
    category: 'transfer',
    logoText: '🚕 KIWITAXI',
    tagline: 'Global Airport Transfers',
    commissionBadge: '11% Commission',
    url: 'https://kiwitaxi.com',
    description: 'Pre-booked private airport pickups in 100+ countries with professional drivers meeting you at arrivals.',
  },
  {
    id: 'gettransfer',
    name: 'GetTransfer',
    category: 'transfer',
    logoText: '🚘 GETTRANSFER',
    tagline: 'Best Price Car Transfers',
    commissionBadge: 'Top Converter',
    url: 'https://gettransfer.com',
    description: 'Compare bids from certified drivers for long-distance and airport transfers at discount rates.',
  },
  // 3. Stays & Accommodations
  {
    id: 'hostelworld',
    name: 'Hostelworld',
    category: 'stays',
    logoText: '🏨 HOSTELWORLD',
    tagline: 'Social Stays & Budget Beds',
    commissionBadge: 'Verified Partner',
    url: 'https://www.hostelworld.com',
    description: 'The premier booking portal for solo travelers, youth hostels, and boutique backpacker accommodations.',
  },
  {
    id: 'tripcom',
    name: 'Trip.com',
    category: 'stays',
    logoText: '✈️ TRIP.COM',
    tagline: 'Hotels, Trains & Worldwide Flights',
    commissionBadge: 'Global Giant',
    url: 'https://www.trip.com',
    description: 'Over 1.4 million hotels and high-speed rail tickets across Asia, Europe, and the Americas.',
  },
  // 4. Tours & Experiences
  {
    id: 'klook',
    name: 'Klook',
    category: 'tours',
    logoText: '🎟️ KLOOK',
    tagline: 'Attractions, Rail Passes & Tours',
    commissionBadge: 'Best Seller',
    url: 'https://www.klook.com',
    description: 'Skip-the-line theme park tickets, JR Passes, and curated island tours with instant mobile QR voucher.',
  },
  {
    id: 'tiqets',
    name: 'Tiqets',
    category: 'tours',
    logoText: '🏛️ TIQETS',
    tagline: 'Museums & Cultural Landmarks',
    commissionBadge: 'Direct Entry',
    url: 'https://www.tiqets.com',
    description: 'Direct mobile access to the Louvre, Colosseum, Burj Khalifa, and top global cultural landmarks.',
  },
  // 5. Travel Insurance & Safety
  {
    id: 'visitorscoverage',
    name: 'VisitorsCoverage',
    category: 'insurance',
    logoText: '🛡️ VISITORS COVERAGE',
    tagline: 'International Travel Medical',
    commissionBadge: 'Crucial Travel Essential',
    url: 'https://www.visitorscoverage.com',
    description: 'Schengen and US compliant travel insurance policies covering emergency medical, evacuation, and trip delays.',
  },
];
