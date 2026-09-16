export interface KnowledgeTopic {
  keywords: string[];
  response: string;
  quickLink?: { label: string; url: string };
}

export const BOT_KNOWLEDGE: KnowledgeTopic[] = [
  // 1. eSIM & Global Mobile Data (Airalo)
  {
    keywords: ['esim', 'airalo', 'internet', 'data', 'sim', 'roaming', 'wifi', '5g', 'cellular'],
    response: 'Airalo 5G eSIM is a 100% digital SIM card. Upon booking, your installation QR code is sent directly to your email. Simply scan it in your smartphone settings to connect to high-speed local data in over 200+ countries with zero roaming fees.',
    quickLink: { label: 'Explore 5G eSIM Deals', url: '/explore?cat=esims' }
  },

  // 2. Flight Search & Smart Route Combinations (Kiwi.com)
  {
    keywords: ['flight', 'kiwi', 'ticket', 'airline', 'plane', 'fare', 'cheap flight', 'secret deal', 'book flight'],
    response: 'One Place connects directly to Kiwi.com’s advanced virtual interlining algorithm. It finds hidden combinations across unconnected airlines, saving you between 35% to 45% on worldwide airfares, backed by Kiwi Guarantee flight protection.',
    quickLink: { label: 'Browse Flight Deals', url: '/explore?cat=flights' }
  },

  // 3. Live Flight Radar & ADS-B Tracking
  {
    keywords: ['radar', 'track', 'flight status', 'live flight', 'delay', 'gate', 'schedule', 'tracking', 'aircraft'],
    response: 'You can track real-time commercial flights via satellite ADS-B feeds on our Travel Utilities page. Just enter your flight number (e.g. EK585, SQ402, or TG322) to monitor its live vector, altitude, speed, and gate arrival.',
    quickLink: { label: 'Open Flight Radar', url: '/utilities' }
  },

  // 4. Attractions, Passes & Museum Tickets (Klook & Tiqets)
  {
    keywords: ['klook', 'tour', 'ticket', 'burj khalifa', 'disneyland', 'universal', 'pass', 'attraction', 'tiqets', 'museum'],
    response: 'Through our authorized partner gateways (Klook & Tiqets), you can book official skip-the-line museum passes, theme park entries (Disneyland, Universal Studios), and city tours with instant digital barcode vouchers sent to your email.',
    quickLink: { label: 'View Attraction Passes', url: '/explore?cat=tours' }
  },

  // 5. Global Visa & Entry Requirements
  {
    keywords: ['visa', 'passport', 'dubai visa', 'thailand visa', 'entry', 'arrival', 'on arrival', 'evisa', 'checklist', 'schengen'],
    response: 'We provide updated visa exemptions, electronic arrival cards (SG Arrival Card, Malaysia MDAC), and eVisa requirements for major transit destinations on our Utilities page. Ensure your passport has at least 6 months validity before departure.',
    quickLink: { label: 'Check Visa Guidelines', url: '/utilities' }
  },

  // 6. Discount Coupons & Flash Promos
  {
    keywords: ['coupon', 'promo', 'discount', 'code', 'offer', 'voucher', 'save', 'deal'],
    response: 'Use promo code "ONEPLACE15" for 15% off Airalo global 5G eSIMs, or "NOMADFLY40" for a $40 discount on Kiwi secret multi-city flights. Browse our Flash Promos page to copy verified discount codes with one click.',
    quickLink: { label: 'Open Promo Code Locker', url: '/offers' }
  },

  // 7. Live Currency Converter
  {
    keywords: ['currency', 'dollar', 'euro', 'exchange rate', 'usd', 'convert', 'rate', 'money', 'bdt', 'aed', 'thb'],
    response: 'Our Live Currency Converter provides real-time interbank foreign exchange rates for USD, EUR, GBP, AED, SGD, THB, MYR, and BDT with zero added margins.',
    quickLink: { label: 'Launch Currency Converter', url: '/utilities' }
  },

  // 8. Payment Security, Direct Booking & Refunds
  {
    keywords: ['refund', 'cancel', 'guarantee', 'money back', 'safe', 'security', 'trust', 'payment', 'card', 'checkout'],
    response: 'One Place never charges booking fees or markups. All checkout transactions are executed directly on official partner payment gateways protected with bank-grade 256-bit SSL encryption. Cancellations and refunds follow each operator’s official policy.',
  },

  // 9. Baggage & Luggage Guidelines
  {
    keywords: ['baggage', 'luggage', 'carry on', 'weight', 'cabin bag', 'liquid'],
    response: 'Standard international flights generally permit 7kg of cabin luggage and 20kg to 30kg of checked baggage depending on your airline and fare class. Remember to carry liquids in containers of 100ml or less in your carry-on bag.',
  },

  // 10. Customer Care & Contact
  {
    keywords: ['help', 'contact', 'support', 'agent', 'call', 'email', 'number', 'human'],
    response: 'I am available 24/7 to help you discover the best travel deals and utilities! For urgent reservation modifications on confirmed tickets, please access your direct booking reference link sent via Kiwi, Airalo, or Klook.',
  }
];

export const DEFAULT_FALLBACK_REPLY = 
  'I am your One Place AI Travel Partner. I can assist you with flight deals, Airalo 5G eSIM setup, Klook tickets, live flight radar, visa requirements, or discount coupons. How can I help you today?';
  