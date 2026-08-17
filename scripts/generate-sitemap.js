/**
 * Automated XML Sitemap Generator with Stage-Gate Robots.txt Conflict Checking
 * 
 * Part of the Multi-Website Framework Platform Tools.
 * Run via: node scripts/generate-sitemap.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DOMAIN = 'https://costarmortgages.com'
const TODAY = new Date().toISOString().split('T')[0]

// 1. Define all production routes in the application
const ALL_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/mortgages', changefreq: 'weekly', priority: '0.9' },
  { path: '/mortgages/conventional-loans', changefreq: 'monthly', priority: '0.8' },
  { path: '/mortgages/fha-loans', changefreq: 'monthly', priority: '0.8' },
  { path: '/mortgages/va-loans', changefreq: 'monthly', priority: '0.8' },
  { path: '/mortgages/jumbo-loans', changefreq: 'monthly', priority: '0.8' },
  { path: '/mortgages/arm-loans', changefreq: 'monthly', priority: '0.8' },
  { path: '/mortgages/refinance-cashout', changefreq: 'monthly', priority: '0.8' },
  { path: '/refinance', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  // Internal / Disallowed routes for testing stage gate:
  { path: '/admin', changefreq: 'never', priority: '0.0' },
  { path: '/admin/login', changefreq: 'never', priority: '0.0' }
]

// 2. Read robots.txt to extract Disallow rules for stage-gate checking
const robotsTxtPath = path.resolve(__dirname, '../public/robots.txt')
let disallowedPrefixes = ['/admin']

if (fs.existsSync(robotsTxtPath)) {
  const robotsContent = fs.readFileSync(robotsTxtPath, 'utf8')
  const disallowLines = robotsContent
    .split('\n')
    .filter(line => line.trim().startsWith('Disallow:'))
    .map(line => line.replace('Disallow:', '').trim().replace('/*', ''))
  
  if (disallowLines.length > 0) {
    disallowedPrefixes = disallowLines
  }
}

// 3. STAGE-GATE CONFLICT CHECK: Filter out any URL that matches a disallowed path
const eligibleRoutes = ALL_ROUTES.filter(route => {
  const isBlocked = disallowedPrefixes.some(prefix => route.path.startsWith(prefix))
  if (isBlocked) {
    console.log(`[STAGE-GATE FILTER] Excluded blocked route from sitemap: ${route.path}`)
    return false
  }
  return true
})

// 4. Generate XML content
const xmlLines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

eligibleRoutes.forEach(r => {
  xmlLines.push('  <url>')
  xmlLines.push(`    <loc>${DOMAIN}${r.path === '/' ? '/' : r.path}</loc>`)
  xmlLines.push(`    <lastmod>${TODAY}</lastmod>`)
  xmlLines.push(`    <changefreq>${r.changefreq}</changefreq>`)
  xmlLines.push(`    <priority>${r.priority}</priority>`)
  xmlLines.push('  </url>')
})

xmlLines.push('</urlset>')
xmlLines.push('')

// 5. Write sitemap.xml to public directory
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml')
fs.writeFileSync(sitemapPath, xmlLines.join('\n'), 'utf8')

console.log(`\n[SUCCESS] Generated sitemap.xml with ${eligibleRoutes.length} valid URLs. Blocked routes excluded.\n`)
