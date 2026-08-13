const listings = [
  {
    id: '17951-sky-pilot',
    title: '17951 Sky Pilot Ln',
    address: '17951 Sky Pilot Ln',
    neighborhood: 'Trails at Crowfoot',
    cityState: 'Parker, CO',
    zipCode: '80134',
    price: 3795,
    priceFrequency: 'monthly',
    transactionType: 'lease',
    beds: 5,
    baths: 3,
    sqft: 3761,
    propertyType: 'Single Family Residence',
    petPolicy: 'Cats, small dogs OK',
    availability: 'Available Now',
    images: [
      '/media/sky_pilot/1.jpg',
      '/media/sky_pilot/2.jpg',
      '/media/sky_pilot/3.jpg',
      '/media/sky_pilot/4.jpg',
      '/media/sky_pilot/5.jpg',
      '/media/sky_pilot/6.jpg',
      '/media/sky_pilot/7.jpg',
      '/media/sky_pilot/8.jpg',
      '/media/sky_pilot/9.jpg',
      '/media/sky_pilot/10.jpg'
    ],
    features: [
      "Full unfinished walkout basement",
      "Spacious primary suite",
      "Great room with fireplace",
      "Stainless steel appliances",
      "Large pantry",
      "Quartz countertops",
      "Dining area"
    ],
    externalLinks: { zillow: 'https://www.zillow.com/homedetails/17951-Sky-Pilot-Ln-Parker-CO-80134/2060942682_zpid/' },
    storyHeadline: '17951 Sky Pilot Ln, Parker, CO 80134',
    storyIntro: `Beautiful 5-bedroom, 3-bath D.R. Horton home in Trails at Crowfoot featuring an open floor plan, flex room/office, main-floor bedroom with full bath, and a great room with a cozy fireplace.

The gourmet kitchen boasts white cabinets, quartz countertops, stainless steel appliances, large pantry, and dining area. Upstairs includes a spacious primary suite, 3 additional bedrooms, a loft, and a full bath.

Additional features include a full unfinished walkout basement, 2-car garage, deck, in-unit laundry, and central A/C. Enjoy community pool, park, tennis, and basketball courts—minutes to DTC and award-winning Douglas County schools.`
  },
  {
    id: '8924-red-bud',
    title: '8924 Red Bud Street',
    address: '8924 Red Bud St',
    neighborhood: 'Alder Village',
    cityState: 'Parker, CO',
    zipCode: '80134',
    price: 619900,
    priceFrequency: 'one-time',
    transactionType: 'buy',
    beds: 4,
    baths: 4,
    sqft: 2838,
    yearBuilt: '2020',
    propertyType: 'Townhouse',
    images: [
      '/media/red_bud/1.jpg',
      '/media/red_bud/2.jpg',
      '/media/red_bud/3.jpg',
      '/media/red_bud/4.jpg',
      '/media/red_bud/5.jpg',
      '/media/red_bud/6.jpg',
      '/media/red_bud/7.jpg',
      '/media/red_bud/8.jpg',
      '/media/red_bud/9.jpg',
      '/media/red_bud/10.jpg'
    ],
    features: [
      "Soaring vaulted ceilings",
      "Cozy roman clay fireplace",
      "Gourmet kitchen with GE Cafe appliances & quartz countertops",
      "Primary suite with dual sinks & walk-in closet",
      "Fully finished walkout basement with wet bar & soaking tub",
      "New LVP flooring, designer paint & modern lighting",
      "New roof, gutters & exterior paint",
      "Private dining deck & back patio yard"
    ],
    externalLinks: { zillow: 'https://www.zillow.com/homedetails/8924-Red-Bud-St-Parker-CO-80134/249983175_zpid/' },
    storyHeadline: '8924 Red Bud Street, Parker, CO 80134',
    storyIntro: `Located in desirable Alder Village, Parker, this home features soaring vaulted ceilings, new LVP flooring, and a spacious great room with a cozy roman clay fireplace that opens to a private dining deck.

The well-appointed kitchen showcases modern GE Cafe appliances, backsplash, elegant quartz countertops, and a pantry. Upstairs, the primary suite offers a private retreat with dual sinks and a walk-in closet, alongside two additional bedrooms and a full bath.

The fully finished walkout basement provides a large recreation room, wet bar, additional bedroom, and a luxurious bath with soaking tub. Major recent upgrades include new LVP flooring, designer paint, updated faucets, new roof, gutters, and fresh exterior paint.`
  }
]

export const recentlySoldListings = [
  {
    id: 'clarke-farms-10617',
    title: '10617 Clarke Farms Drive',
    address: '10617 Clarke Farms Dr',
    neighborhood: 'Clarke Farms',
    cityState: 'Parker, CO',
    zipCode: '80134',
    price: 785000,
    soldPrice: 785000,
    soldDate: '',
    isSold: true,
    transactionType: 'buy',
    beds: 5,
    baths: 4,
    sqft: 4309,
    yearBuilt: '1997',
    lotSize: '10,454 Square Feet Lot',
    propertyType: 'Single Family Residence',
    images: [
      '/media/clarke_farms/1.jpg',
      '/media/clarke_farms/2.jpg',
      '/media/clarke_farms/3.jpg',
      '/media/clarke_farms/4.jpg',
      '/media/clarke_farms/5.jpg',
      '/media/clarke_farms/6.jpg',
      '/media/clarke_farms/7.jpg',
      '/media/clarke_farms/8.jpg'
    ],
    features: [
      "Gas fireplace",
      "Custom-framed glass entry",
      "Open space views",
      "Large lot (10,454 Sq Ft)",
      "Corner lot overlooking neighborhood park",
      "Primary suite with dual walk-in closets & 5-piece bath",
      "Large kitchen island & granite countertops",
      "Finished basement with wet bar, rec room & full bath",
      "Smart home features (Rachio, Honeywell, myQ, Ring)",
      "Private backyard with basketball court & shaded deck"
    ],
    externalLinks: { zillow: 'https://www.zillow.com/homedetails/10617-Clarke-Farms-Dr-Parker-CO-80134/13468019_zpid/' },
    storyHeadline: '10617 Clarke Farms Drive, Parker, CO 80134',
    storyIntro: `Situated on a 10,000+ sq ft corner lot overlooking open space and neighborhood parks, this 5-bed, 4-bath Clarke Farms home combines space, luxury updates, and an unbeatable Parker location.

Step through the custom-framed glass entry into cathedral-ceiling living spaces and a renovated kitchen featuring a large island, granite countertops, and a gas-fireplace family room.

The upper primary suite offers a bay window, dual walk-in closets, and a 5-piece bath. Downstairs, a finished basement adds a wet bar, rec room, full bath, and extra bedroom.

Enjoy smart home upgrades and a private backyard with a shaded deck and basketball court—just 2 miles from downtown Parker.`
  }
]

export function getPropertyById(id) {
  return listings.find(p => p.id === id) || recentlySoldListings.find(p => p.id === id)
}

export default listings
