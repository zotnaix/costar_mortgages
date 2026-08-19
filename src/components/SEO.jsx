import React, { useEffect } from 'react'
import { siteConfig } from '../config/siteConfig'

/**
 * Reusable, Modular SEO Component for the Multi-Website Framework
 * 
 * Supports dynamic title, description, canonical, robots directives (index/noindex),
 * OpenGraph, Twitter Cards, and structured JSON-LD schemas.
 * Includes automated dev-mode length guards (Title <= 60 chars, Desc <= 160 chars).
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  noIndex = false,
  ogType = 'website',
  ogImage,
  schema
}) {
  const finalTitle = title 
    ? (title.startsWith('Co Star Mortgages LLC | ') ? title : `Co Star Mortgages LLC | ${title}`)
    : `Co Star Mortgages LLC | ${siteConfig.tagline || 'Where Your Home Story Shines'}`

  const finalDescription = description || siteConfig.seo?.defaultDescription || `${siteConfig.brandName} offers professional mortgage and refinancing solutions in Colorado.`
  const domain = siteConfig.domain || 'https://costarmortgages.com'
  const finalCanonical = canonicalUrl ? `${domain}${canonicalUrl}` : domain
  const finalImage = ogImage || `${domain}${siteConfig.logoWhite}`
  const robotsDirective = noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

  // Development warnings for SEO best practice length enforcement
  if (import.meta.env?.DEV) {
    if (finalTitle.length > 60) {
      console.warn(`[SEO Warning] Document Title exceeds recommended 60 chars (${finalTitle.length} chars): "${finalTitle}"`)
    }
    if (finalDescription.length > 160) {
      console.warn(`[SEO Warning] Meta Description exceeds recommended 160 chars (${finalDescription.length} chars): "${finalDescription}"`)
    }
  }

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle

    // 2. Helper to set or update meta tag by name or property
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 3. Helper for Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', finalCanonical)

    // 4. Update Meta Tags
    setMetaTag('name', 'description', finalDescription)
    setMetaTag('name', 'robots', robotsDirective)

    // OpenGraph
    setMetaTag('property', 'og:title', finalTitle)
    setMetaTag('property', 'og:description', finalDescription)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', finalCanonical)
    setMetaTag('property', 'og:image', finalImage)
    setMetaTag('property', 'og:site_name', siteConfig.brandName)

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', finalTitle)
    setMetaTag('name', 'twitter:description', finalDescription)
    setMetaTag('name', 'twitter:image', finalImage)

    // 5. Injected JSON-LD Structured Data
    let schemaScript = document.getElementById('dynamic-jsonld-schema')
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script')
        schemaScript.id = 'dynamic-jsonld-schema'
        schemaScript.type = 'application/ld+json'
        document.head.appendChild(schemaScript)
      }
      schemaScript.textContent = JSON.stringify(schema)
    } else if (schemaScript) {
      schemaScript.remove()
    }
  }, [finalTitle, finalDescription, finalCanonical, robotsDirective, ogType, finalImage, schema])

  return null
}
