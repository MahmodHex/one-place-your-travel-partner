export type PartnerProvider = 'kiwi' | 'airalo' | 'klook' | 'tiqets';

export interface PartnerBrand {
  id: string;
  name: string;
  category: string;
  offerBadge: string;
  brandBgColor: string;
  brandLogo: string;
  partnerUrl: string;
  provider: PartnerProvider;
}

export interface TravelPackage {
  id: string;
  category: 'flights' | 'esims' | 'tours' | 'stays';
  title: string;
  subtitle: string;
  location: string;
  badge: string;
  price: string;
  rating: number;
  reviews: string;
  imageUrl: string;
  partnerUrl: string;
  provider: PartnerProvider;
}

export interface PromoCodeItem {
  id: string;
  provider: PartnerProvider;
  code: string;
  discount: string;
  title: string;
  desc: string;
  validUntil: string;
  partnerUrl: string;
}

export interface VisaItem {
  id: string;
  country: string;
  flag: string;
  visaStatus: string;
  stayDuration: string;
  requirements: string;
  badgeBg: string;
}
