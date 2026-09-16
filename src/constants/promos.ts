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
  // 1. Aviasales
  {
    id: 'p-aviasales',
    category: 'flights',
    title: 'Secret Route Hacker Fares',
    desc: 'Up to 40% discount on worldwide intercontinental connections and multi-city tickets.',
    discount: '40% OFF',
    badge: 'Mega Deal',
    provider: 'Aviasales',
    code: 'AVIA40GLOBAL',
    partnerUrl: 'https://aviasales.tpm.lv/Ku6jysJy',
    validUntil: 'Dec 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
  },
  // 2. Airalo
  {
    id: 'p-airalo',
    category: 'esims',
    title: 'Global 5G Unlimited Travel eSIM',
    desc: 'Instant 15% discount on high-speed internet in 200+ countries with zero physical SIM swaps.',
    discount: '15% OFF',
    badge: 'Trending',
    provider: 'Airalo',
    code: 'AIRALO15NEW',
    partnerUrl: 'https://airalo.tpm.lv/VFoS8l4O',
    validUntil: 'Nov 30, 2026',
    bgImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop',
  },
  // 3. Yesim
  {
    id: 'p-yesim',
    category: 'esims',
    title: 'Unlimited Pay-As-You-Go eSIM',
    desc: 'Exclusive €5 coupon on first-time reloadable global packages across 150+ countries.',
    discount: '€5 BONUS',
    badge: '18% Yield',
    provider: 'Yesim',
    code: 'YESIM5BONUS',
    partnerUrl: 'https://yesim.tpm.lv/iV7xxxWO',
    validUntil: 'Dec 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
  },
  // 4. WeGoTrip
  {
    id: 'p-wegotrip',
    category: 'tours',
    title: 'Self-Guided Audio Museum Tours',
    desc: 'Skip ticket queues and get 20% discount on personalized audio guide museum tours.',
    discount: '20% OFF',
    badge: 'Audio Pass',
    provider: 'WeGoTrip',
    code: 'WEGOAUDIO20',
    partnerUrl: 'https://wegotrip.tpm.lv/XHAJvX8I',
    validUntil: 'Oct 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop',
  },
  // 5. QEEQ
  {
    id: 'p-qeeq',
    category: 'rentals',
    title: 'Price-Drop Guaranteed Car Hire',
    desc: 'Save $25 on luxury and family vehicle rentals worldwide with automatic price drop adjustments.',
    discount: '$25 OFF',
    badge: 'Car Rental',
    provider: 'QEEQ',
    code: 'QEEQDRIVE25',
    partnerUrl: 'https://qeeq.tpm.lv/74r6KKCl',
    validUntil: 'Nov 15, 2026',
    bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
  },
  // 6. AirHelp
  {
    id: 'p-airhelp',
    category: 'claims',
    title: 'Up to $650 Flight Delay Claim',
    desc: 'File flight compensation claims with 0 upfront cost for delayed or canceled flights within 3 years.',
    discount: '$650 RECOVERY',
    badge: 'Delay Shield',
    provider: 'AirHelp',
    code: 'AIRCLAIM650',
    partnerUrl: 'https://airhelp.tpm.lv/epi3jZ5Y',
    validUntil: 'Ongoing 2026',
    bgImage: 'https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=800&auto=format&fit=crop',
  },
  // 7. EKTA
  {
    id: 'p-ekta',
    category: 'claims',
    title: 'Schengen & US Travel Insurance',
    desc: 'Comprehensive medical protection covering emergency hospital care and lost baggage.',
    discount: '25% VALUE',
    badge: 'Medical Cover',
    provider: 'EKTA',
    code: 'EKTASAFE25',
    partnerUrl: 'https://ektatraveling.tpm.lv/rMJ2GOQx',
    validUntil: 'Dec 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
  },
  // 8. Compensair
  {
    id: 'p-compensair',
    category: 'claims',
    title: 'Instant Flight Disruption Settlement',
    desc: 'Check flight eligibility in under 2 minutes under European Union Regulation (EC) 261/2004.',
    discount: '€600 REFUND',
    badge: 'EU Protected',
    provider: 'Compensair',
    code: 'COMPENSEUR600',
    partnerUrl: 'https://compensair.tpm.lv/ka8qEeoG',
    validUntil: 'Dec 31, 2026',
    bgImage: 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?q=80&w=800&auto=format&fit=crop',
  },
];
