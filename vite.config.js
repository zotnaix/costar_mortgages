import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Automatically purge unused legacy and empty files
try {
  const legacyPaths = [
    'src/components/PropertyCard.jsx',
    'src/components/PropertyDetailModal.jsx',
    'src/components/PropertyGrid.jsx',
    'src/components/StoryBlockRenderer.jsx',
    'src/components/StoryHero.jsx',
    'src/pages/Listings.jsx',
    'src/pages/ListingDetail.jsx',
    'src/pages/Sell.jsx',
    'src/pages/RecentlySold.jsx',
    'src/data/listings.js',
    'scratch_property.json',
    'public/media/clarke_farms',
    'public/media/red_bud',
    'public/media/sky_pilot',
    'public/media/evergreen_estate',
    'public/media/willow_bend',
    'public/media/suj-cover-photo.jpg',
    'public/media/Modern House for Sale.png',
    'public/media/Modern Two-Story House.png',
    'public/media/cliffiside.png',
    'public/media/landing page.avif',
    'public/media/apt1.svg',
    'public/media/apt2.svg',
    'public/media/house1.svg',
    'public/media/house2.svg',
    'public/media/house3.svg'
  ]

  legacyPaths.forEach(rel => {
    const fullPath = path.resolve(__dirname, rel)
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        fs.rmSync(fullPath, { recursive: true, force: true })
      } else {
        fs.rmSync(fullPath, { force: true })
      }
    }
  })
} catch (e) {
  // Ignore cleanup errors
}

// Dynamically import ESM-only plugins to avoid CJS/ESM resolution errors in some environments.
export default defineConfig(async () => {
  const plugin = await import('@vitejs/plugin-react-swc')
  return {
    plugins: [plugin.default()],
  }
})
