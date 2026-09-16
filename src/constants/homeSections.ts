export interface PromoVoucher {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  bgImage: string;
  tagColor: string;
  partnerUrl: string;
}

export interface RecentItem {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: string;
  bgImage: string;
  partnerUrl: string;
}

export interface DestinationItem {
  id: string;
  city: string;
  country: string;
  activitiesCount: string;
  fareFrom: string;
  bgImage: string;
  partnerUrl: string;
}

export const OFFERS_FOR_YOU: PromoVoucher[] = [
  {
    id: 'ov-1',
    badge: 'KLOOKOUT PASS',
    title: 'Autumn Global Sale',
    subtitle: 'Up to 50% off passes, rail & activities',
    ctaText: 'Claim Voucher',
    bgImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-orange-500 text-white',
    partnerUrl: 'https://klook.tp.st/',
  },
  {
    id: 'ov-2',
    badge: 'DISCOVER UNIMAGINED',
    title: 'Arabian Wonders & Dubai',
    subtitle: 'Desert safari, Burj Khalifa & museum tours',
    ctaText: 'Book Now',
    bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-amber-600 text-white',
    partnerUrl: 'https://tiqets.tp.st/?search=Dubai',
  },
  {
    id: 'ov-3',
    badge: 'ONEPLACE EXCLUSIVE',
    title: 'Top Travel Deals 2026',
    subtitle: 'Airalo 5G eSIM & Kiwi secret flight routes',
    ctaText: 'Explore 15% Off',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-blue-600 text-white',
    partnerUrl: 'https://airalo.tp.st/',
  },
];

export const RECENTLY_VIEWED: RecentItem[] = [
  {
    id: 'rv-1',
    title: 'Disneyland California Resort Ticket',
    location: 'Anaheim, United States',
    price: '$104.50',
    rating: 4.8,
    reviews: '42K+ booked',
    bgImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://klook.tp.st/',
  },
  {
    id: 'rv-2',
    title: 'Universal Studios Singapore 1-Day Pass',
    location: 'Sentosa, Singapore',
    price: '$62.00',
    rating: 4.9,
    reviews: '78K+ booked',
    bgImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://klook.tp.st/',
  },
  {
    id: 'rv-3',
    title: 'Burj Khalifa Top Floor Observatory',
    location: 'Downtown, Dubai',
    price: '$45.00',
    rating: 4.9,
    reviews: '120K+ booked',
    bgImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://tiqets.tp.st/?search=Dubai',
  },
  {
    id: 'rv-4',
    title: 'Bangkok Floating Market & Grand Palace Tour',
    location: 'Bangkok, Thailand',
    price: '$32.00',
    rating: 4.7,
    reviews: '28K+ booked',
    bgImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://klook.tp.st/',
  },
];

export const POPULAR_DESTINATIONS: DestinationItem[] = [
  {
    id: 'pd-1',
    city: 'Dubai',
    country: 'United Arab Emirates',
    activitiesCount: '620+ activities',
    fareFrom: '$210',
    bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/?search=Dubai',
  },
  {
    id: 'pd-2',
    city: 'Bangkok',
    country: 'Thailand',
    activitiesCount: '480+ activities',
    fareFrom: '$140',
    bgImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/?search=Bangkok',
  },
  {
    id: 'pd-3',
    city: 'Singapore',
    country: 'Singapore',
    activitiesCount: '390+ activities',
    fareFrom: '$230',
    bgImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/?search=Singapore',
  },
  {
    id: 'pd-4',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    activitiesCount: '310+ activities',
    fareFrom: '$165',
    bgImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/?search=Kuala%20Lumpur',
  },
  {
    id: 'pd-5',
    city: 'Istanbul',
    country: 'Turkey',
    activitiesCount: '540+ activities',
    fareFrom: '$280',
    bgImage: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=600&auto=format&fit=crop',
    partnerUrl: 'https://kiwi.tp.st/?search=Istanbul',
  },
];
