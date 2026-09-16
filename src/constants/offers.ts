export interface CarouselOffer {
  id: string;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  partnerUrl: string;
  bgImage: string;
  accentColor: string;
}

export const LIVE_CAROUSEL_OFFERS: CarouselOffer[] = [
  {
    id: 'offer-1',
    tag: 'FLASH FARE DROP',
    title: 'Fly Worldwide with Secret Combinations',
    description: 'Save up to 45% on smart flight connections powered by Kiwi.com algorithm.',
    ctaText: 'Check Fares',
    partnerUrl: 'https://kiwi.tp.st/',
    bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop',
    accentColor: 'text-emerald-400 border-emerald-400/40 bg-emerald-950/60',
  },
  {
    id: 'offer-2',
    tag: 'GLOBAL CONNECTIVITY',
    title: 'Instant 5G eSIM for 200+ Destinations',
    description: 'No physical SIM swapping required. Activate your high-speed regional travel data instantly.',
    ctaText: 'Get Travel Data',
    partnerUrl: 'https://airalo.tp.st/',
    bgImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
    accentColor: 'text-rose-400 border-rose-400/40 bg-rose-950/60',
  },
  {
    id: 'offer-3',
    tag: 'EXCLUSIVE PASSES',
    title: 'Skip-the-Line Entry for Global Wonders',
    description: 'Direct mobile vouchers for Burj Khalifa, Louvre Museum & Universal Studios.',
    ctaText: 'Browse Passes',
    partnerUrl: 'https://klook.tp.st/',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    accentColor: 'text-orange-400 border-orange-400/40 bg-orange-950/60',
  },
];
