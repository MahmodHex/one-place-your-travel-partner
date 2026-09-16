export interface PromoItem {
  id: string;
  category: 'flights' | 'esims' | 'tours' | 'rentals' | 'claims';
  title: string;
  desc: string;
  discount: string;
  badge: string;
  provider: string;
  code: string;
  partnerUrl: string;
  validUntil: string;
  bgImage: string;
}

export const ACTIVE_PROMOS: PromoItem[] = [
  {
    id: 'p-aviasales',
    category: 'flights',
    title: 'Secret Route Hacker Fares',
    desc: 'Up to 40% discount on worldwide intercontinental connections and multi-city tickets.',
    discount: '40% OFF',
    badge: 'Mega Deal',
    provider: 'Aviasales',
    code: 'AVIA40GLOBAL',
    partnerUrl: 'https://www.aviasales.com',
    validUntil: 'Dec 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p-airalo',
    category: 'esims',
    title: 'Global 5G Unlimited Travel eSIM',
    desc: 'Instant 15% discount on high-speed internet in 200+ countries with zero physical SIM swaps.',
    discount: '15% OFF',
    badge: 'Trending',
    provider: 'Airalo',
    code: 'AIRALO15NEW',
    partnerUrl: 'https://www.airalo.com',
    validUntil: 'Nov 30, 2026',
    bgImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p-yesim',
    category: 'esims',
    title: 'Unlimited Pay-As-You-Go eSIM',
    desc: 'Exclusive €5 coupon on first-time reloadable global packages across 150+ countries.',
    discount: '€5 BONUS',
    badge: '18% Yield',
    provider: 'Yesim',
    code: 'YESIM5BONUS',
    partnerUrl: 'https://yesim.app',
    validUntil: 'Dec 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p-wegotrip',
    category: 'tours',
    title: 'Self-Guided Audio Museum Tours',
    desc: 'Skip ticket queues and get 20% discount on personalized audio guide museum tours.',
    discount: '20% OFF',
    badge: 'Audio Pass',
    provider: 'WeGoTrip',
    code: 'WEGOAUDIO20',
    partnerUrl: 'https://wegotrip.com',
    validUntil: 'Oct 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p-qeeq',
    category: 'rentals',
    title: 'Price-Drop Guaranteed Car Hire',
    desc: 'Save $25 on vehicle rentals worldwide with automatic price drop adjustments.',
    discount: '$25 OFF',
    badge: 'Car Rental',
    provider: 'QEEQ',
    code: 'QEEQDRIVE25',
    partnerUrl: 'https://www.qeeq.com',
    validUntil: 'Nov 15, 2026',
    bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'p-airhelp',
    category: 'claims',
    title: 'Up to $650 Flight Delay Claim',
    desc: 'File flight compensation claims with 0 upfront cost for delayed or canceled flights.',
    discount: '$650 RECOVERY',
    badge: 'Delay Shield',
    provider: 'AirHelp',
    code: 'AIRCLAIM650',
    partnerUrl: 'https://www.airhelp.com',
    validUntil: 'Ongoing 2026',
    bgImage: 'https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=800&auto=format&fit=crop',
  },
];
