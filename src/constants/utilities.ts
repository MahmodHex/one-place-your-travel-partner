import type { VisaItem } from '../types';

export const POPULAR_CURRENCIES = [
  { code: 'USD', name: 'US Dollar', rate: 1.0, symbol: '$' },
  { code: 'EUR', name: 'Euro', rate: 0.92, symbol: '€' },
  { code: 'GBP', name: 'British Pound', rate: 0.79, symbol: '£' },
  { code: 'AED', name: 'UAE Dirham', rate: 3.67, symbol: 'AED' },
  { code: 'SGD', name: 'Singapore Dollar', rate: 1.34, symbol: 'S$' },
  { code: 'THB', name: 'Thai Baht', rate: 35.8, symbol: '฿' },
  { code: 'MYR', name: 'Malaysian Ringgit', rate: 4.72, symbol: 'RM' },
  { code: 'BDT', name: 'Bangladeshi Taka', rate: 118.5, symbol: '৳' },
];

export const VISA_GUIDELINES: VisaItem[] = [
  {
    id: 'visa-1',
    country: 'United Arab Emirates (Dubai)',
    flag: '🇦🇪',
    visaStatus: 'eVisa / On Arrival',
    stayDuration: '30 - 60 Days',
    requirements: 'Valid Passport (6+ months), Return Flight Ticket & Hotel Booking.',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'visa-2',
    country: 'Thailand',
    flag: '🇹🇭',
    visaStatus: 'Visa Exemption / VoA',
    stayDuration: '30 - 60 Days',
    requirements: 'Proof of onward travel, 10,000 THB per person equivalent cash/card.',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'visa-3',
    country: 'Singapore',
    flag: '🇸🇬',
    visaStatus: 'SG Arrival Card (Electronic)',
    stayDuration: '30 Days',
    requirements: 'Submit online SG Arrival Card within 3 days before travel. Confirmed flights.',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    id: 'visa-4',
    country: 'Malaysia',
    flag: '🇲🇾',
    visaStatus: 'MDAC Digital Card',
    stayDuration: '30 Days',
    requirements: 'Complete MDAC registration online prior to arrival. Valid return ticket.',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'visa-5',
    country: 'United Kingdom',
    flag: '🇬🇧',
    visaStatus: 'Standard Visitor Visa / ETA',
    stayDuration: '6 Months',
    requirements: 'Biometrics appointment, financial statements, travel history and itinerary.',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    id: 'visa-6',
    country: 'Schengen (Europe)',
    flag: '🇪🇺',
    visaStatus: 'Schengen Short-Stay Visa',
    stayDuration: '90 Days in 180 Days',
    requirements: 'Travel medical insurance (min €30,000 cover), bank statements & flight itinerary.',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
];

