export interface SpecialOffer {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  actionText: string;
  url: string;
  bgImage: string;
}

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'klookout',
    badge: 'KLOOKOUT PASS',
    title: 'Autumn Global Sale',
    subtitle: 'Up to 50% off passes, rail & activities',
    actionText: 'Claim Voucher',
    url: 'https://www.klook.com',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dubai-special',
    badge: 'DISCOVER UNIMAGINED',
    title: 'Arabian Wonders & Dubai',
    subtitle: 'Desert safari, Burj Khalifa & museum tours',
    actionText: 'Book Now',
    url: 'https://www.tiqets.com/en/dubai-attractions-c60005/',
    bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'oneplace-deal',
    badge: 'EXCLUSIVE DROP',
    title: 'Top Travel Deals',
    subtitle: 'Airalo 5G eSIM & Kiwi secret flight routes',
    actionText: 'Explore 15% Off',
    url: 'https://www.airalo.com',
    bgImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
  },
];

export interface RecentItem {
  id: string;
  location: string;
  title: string;
  rating: number;
  reviews: string;
  price: string;
  url: string;
  bgImage: string;
}

export const RECENTLY_VIEWED: RecentItem[] = [
  {
    id: 'disney-ca',
    location: 'Anaheim, United States',
    title: 'Disneyland California Resort Ticket',
    rating: 4.8,
    reviews: '42K+ booked',
    price: '$104.50',
    url: 'https://www.klook.com/activity/4100-disneyland-resort-california/',
    bgImage: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'uss-sg',
    location: 'Sentosa, Singapore',
    title: 'Universal Studios Singapore 1-Day Pass',
    rating: 4.9,
    reviews: '78K+ booked',
    price: '$62.00',
    url: 'https://www.klook.com/activity/117-universal-studios-singapore/',
    bgImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'burj-dxb',
    location: 'Downtown, Dubai',
    title: 'Burj Khalifa Top Floor Observatory',
    rating: 4.9,
    reviews: '120K+ booked',
    price: '$45.00',
    url: 'https://www.tiqets.com/en/dubai-attractions-c60005/tickets-for-burj-khalifa-at-the-top-p974143/',
    bgImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'bangkok-tour',
    location: 'Bangkok, Thailand',
    title: 'Bangkok Floating Market & Grand Palace Tour',
    rating: 4.7,
    reviews: '28K+ booked',
    price: '$32.00',
    url: 'https://www.klook.com/activity/16553-damnoen-saduak-floating-market-bangkok/',
    bgImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=600&auto=format&fit=crop',
  },
];
