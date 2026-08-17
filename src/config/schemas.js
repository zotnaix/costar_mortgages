import { siteConfig } from './siteConfig'

/**
 * Pre-configured, Reusable Schema.org JSON-LD Generators
 * Compliant with Google Search Rich Results guidelines
 */

export const getBrokerageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'MortgageBroker',
  '@id': `${siteConfig.domain || 'https://costarmortgages.com'}/#brokerage`,
  name: siteConfig.brandName,
  legalName: siteConfig.companyName || siteConfig.brandName,
  url: siteConfig.domain || 'https://costarmortgages.com',
  logo: `${siteConfig.domain || 'https://costarmortgages.com'}/logo.svg`,
  image: `${siteConfig.domain || 'https://costarmortgages.com'}/logo-white.svg`,
  description: siteConfig.welcomeText,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: '$$',
  founder: {
    '@type': 'Person',
    name: siteConfig.broker.name,
    jobTitle: siteConfig.broker.title,
    identifier: siteConfig.broker.nmls
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address,
    addressLocality: 'Highlands Ranch',
    addressRegion: 'CO',
    postalCode: '80126',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.5436',
    longitude: '-104.9961'
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Denver, Colorado' },
    { '@type': 'AdministrativeArea', name: 'Highlands Ranch, Colorado' },
    { '@type': 'State', name: 'Colorado' }
  ],
  sameAs: [
    siteConfig.socials.facebook,
    siteConfig.socials.instagram,
    siteConfig.socials.brokerNearMe
  ].filter(Boolean)
})

export const getArticleSchema = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt || article.summary,
  image: article.coverImage || `${siteConfig.domain || 'https://costarmortgages.com'}/logo-white.svg`,
  author: {
    '@type': 'Person',
    name: article.author || siteConfig.broker.name
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.brandName,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.domain || 'https://costarmortgages.com'}/logo.svg`
    }
  },
  datePublished: article.date,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteConfig.domain || 'https://costarmortgages.com'}/blog/${article.id}`
  }
})

export const getServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: service.title,
  description: service.tagline || service.description,
  provider: {
    '@type': 'MortgageBroker',
    name: siteConfig.brandName,
    url: siteConfig.domain || 'https://costarmortgages.com'
  },
  areaServed: 'Colorado',
  serviceType: 'Mortgage Loan Origination'
})
