// Site Configuration & Platform Foundation
// Customized for Co Star Mortgages Inc. — Denver, Colorado (Sathya R Narayan, NMLS ID: 2042475)

export const siteConfig = {
  // Brand & Broker Identity
  brandName: 'Co Star Mortgages',
  companyName: 'Co Star Mortgages Inc.',
  brokerName: 'Sathya R Narayan',
  tagline: 'Explore Your Mortgage Options in Denver, CO',
  welcomeText: "Fast, transparent home loans and friendly mortgage guidance across Denver, Colorado.",
  logoDark: '/logo.svg',
  logoWhite: '/logo-white.svg',
  nmlsId: '2042475',
  
  // NMLS & State Mortgage Licensing Disclosures
  licenses: [
    { number: 'NMLS Unique ID: 2042475', issuedBy: 'Sathya R Narayan — Nationwide Multistate Licensing System & Colorado Division of Real Estate' },
    { number: 'Equal Housing Lender', issuedBy: 'Federal Housing Administration & Consumer Financial Protection Bureau' }
  ],
  
  // Official Contact & Office Information (Sathya R Narayan)
  contact: {
    brokerName: 'Sathya R Narayan',
    address: '10296 South Dowling Way',
    cityStateZip: 'Highlands Ranch (Denver Metro), CO 80126',
    fullAddress: '10296 South Dowling Way, Highlands Ranch, Denver Metro, CO 80126',
    phone: '+1 303-886-3621',
    email: 'costarmortgages@gmail.com',
    hours: 'Mon – Sat, 8:00 AM – 7:00 PM MST',
    googleMapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent('10296 South Dowling Way Highlands Ranch Denver CO 80126')}&output=embed`
  },

  // Service Areas (Denver Colorado Metro)
  serviceAreas: [
    'Denver', 'Highlands Ranch', 'Englewood', 'Lone Tree', 'Parker', 
    'Castle Pines', 'Castle Rock', 'Greenwood Village', 
    'Centennial', 'Aurora', 'Thornton', 'Broomfield', 'Denver Metro Area'
  ],

  // Accurate Service Descriptions (Compliant)
  officialServices: [
    { title: 'New Home Purchases', icon: '🏠', desc: 'First-time homebuyer loans & residential purchase options.' },
    { title: 'Investor Purchases', icon: '🏘️', desc: 'Investment property & rental portfolio financing.' },
    { title: 'Refinancing', icon: '🔄', desc: 'Lower your payment or adjust your loan term.' },
    { title: 'Home Equity Loans', icon: '💰', desc: 'Access your home equity with flexible cash-out options.' }
  ],

  // Market Rate Benchmarks
  rateBenchmarks: [
    { term: '30-Year Fixed', rate: 6.375, apr: 6.450, trend: 'down', change: '-0.125%' },
    { term: '15-Year Fixed', rate: 5.625, apr: 5.720, trend: 'stable', change: '0.000%' },
    { term: 'FHA 30-Year Fixed', rate: 5.750, apr: 6.320, trend: 'down', change: '-0.250%' },
    { term: 'VA 30-Year Fixed', rate: 5.750, apr: 5.890, trend: 'down', change: '-0.125%' },
    { term: 'Cash-Out Refinance', rate: 6.500, apr: 6.610, trend: 'stable', change: '0.000%' }
  ],

  // Navigation Links
  navLinks: [
    { label: 'Loan Programs', path: '/mortgages' },
    { label: 'Refinance', path: '/refinance' },
    { label: 'Blog', path: '/blog' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ],

  // Official Social Media & Broker Near Me Profile Channels
  socials: {
    facebook: 'https://www.facebook.com/CoStarMortgages',
    instagram: 'https://www.instagram.com/costarmortgages',
    brokerNearMe: 'https://www.brokernearme.com/profile/sathya-r-narayan-2042475',
    featuredReel: 'https://www.facebook.com/reel/1064034102828155'
  },

  // Disclosures & Privacy
  disclosures: {
    privacyNotice: 'Co Star Mortgages Inc. respects your privacy. Information submitted is handled securely and used exclusively for mortgage estimation purposes.',
    rateDisclaimer: 'Interest rates and APR estimates displayed are for educational and informational purposes only and subject to market changes and underwriting approval in Colorado.',
    equalHousing: 'Co Star Mortgages Inc. is an Equal Housing Lender.'
  },

  // Third-Party Webhooks & CRM Integration
  integrations: {
    crmWebhookUrl: import.meta.env?.VITE_CRM_WEBHOOK_URL || '',
    ga4TrackingId: import.meta.env?.VITE_GA4_TRACKING_ID || 'G-XXXXXXXXXX'
  }
}

export default siteConfig
