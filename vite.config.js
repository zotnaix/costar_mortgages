import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import https from 'https'

// Copy uploaded cover photo & download property photos & clean mock media
try {
  const uploadedCover = 'C:\\Users\\Marlo Santos\\.gemini\\antigravity\\brain\\b042d431-4533-4f02-bf45-0b3c6af2d819\\.user_uploaded\\media_1786590779312.jpg'
  const targetCover = path.resolve(__dirname, 'public/media/suj-cover-photo.jpg')
  if (fs.existsSync(uploadedCover)) {
    fs.copyFileSync(uploadedCover, targetCover)
  }

  const uploadedHero = 'C:\\Users\\Marlo Santos\\.gemini\\antigravity\\brain\\b042d431-4533-4f02-bf45-0b3c6af2d819\\.user_uploaded\\media_1786594256113.jpg'
  const targetHero = path.resolve(__dirname, 'public/media/landing.png')
  if (fs.existsSync(uploadedHero)) {
    fs.copyFileSync(uploadedHero, targetHero)
  }

  // Remove unused mock media files and directories
  const unusedFiles = [
    'public/media/Modern House for Sale.png',
    'public/media/Modern Two-Story House.png',
    'public/media/cliffiside.png',
    'public/media/landing page.avif',
    'public/media/apt1.svg',
    'public/media/apt2.svg',
    'public/media/house1.svg',
    'public/media/house2.svg',
    'public/media/house3.svg',
    'public/media/package-lock.json'
  ]

  unusedFiles.forEach(rel => {
    const file = path.resolve(__dirname, rel)
    if (fs.existsSync(file)) {
      fs.rmSync(file, { force: true })
    }
  })

  const unusedDirs = [
    'public/media/evergreen_estate',
    'public/media/willow_bend'
  ]

  unusedDirs.forEach(rel => {
    const dir = path.resolve(__dirname, rel)
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true })
    }
  })

  // Create clarke_farms folder
  const clarkeDir = path.resolve(__dirname, 'public/media/clarke_farms')
  if (!fs.existsSync(clarkeDir)) {
    fs.mkdirSync(clarkeDir, { recursive: true })
  }

  const clarkePhotos = [
    "https://photos.zillowstatic.com/fp/5faba3a8e62cf4284a21389eff3ee95c-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/fb149d313b919abe2897b33966d45776-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/5620f251d4a65a2d83e6fe8091330e1d-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/99c48535fb26e7e8977ecf5aa337c925-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/c5ecebb84bce7b107f278afc243b47bc-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/8abd160cc3e95123addc92645383a5ae-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/dea97e9a2eac46a229b667a5468e187f-cc_ft_1536.jpg",
    "https://photos.zillowstatic.com/fp/80c2b641af3c3f2bd60cdc5291bfa525-cc_ft_1536.jpg"
  ]

  clarkePhotos.forEach((url, idx) => {
    const dest = path.join(clarkeDir, `${idx + 1}.jpg`)
    if (!fs.existsSync(dest)) {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const stream = fs.createWriteStream(dest)
          res.pipe(stream)
        }
      }).on('error', () => {})
    }
  })

  // Extract photos for sky_pilot
  const skyDir = path.resolve(__dirname, 'public/media/sky_pilot')
  if (!fs.existsSync(skyDir)) {
    fs.mkdirSync(skyDir, { recursive: true })
  }

  const contentFile = 'C:\\Users\\Marlo Santos\\.gemini\\antigravity\\brain\\b042d431-4533-4f02-bf45-0b3c6af2d819\\.system_generated\\steps\\346\\content.md'
  if (fs.existsSync(contentFile)) {
    const raw = fs.readFileSync(contentFile, 'utf8')
    const matches = Array.from(new Set(raw.match(/https:\/\/photos\.zillowstatic\.com\/fp\/[a-f0-9]+-cc_ft_1536\.jpg/g) || []))
    matches.slice(0, 10).forEach((url, idx) => {
      const dest = path.join(skyDir, `${idx + 1}.jpg`)
      if (!fs.existsSync(dest)) {
        https.get(url, (res) => {
          if (res.statusCode === 200) {
            const stream = fs.createWriteStream(dest)
            res.pipe(stream)
          }
        }).on('error', () => {})
      }
    })
  }

  // Extract photos for red_bud
  const redBudDir = path.resolve(__dirname, 'public/media/red_bud')
  if (!fs.existsSync(redBudDir)) {
    fs.mkdirSync(redBudDir, { recursive: true })
  }

  const redBudContentFile = 'C:\\Users\\Marlo Santos\\.gemini\\antigravity\\brain\\b042d431-4533-4f02-bf45-0b3c6af2d819\\.system_generated\\steps\\473\\content.md'
  if (fs.existsSync(redBudContentFile)) {
    const raw = fs.readFileSync(redBudContentFile, 'utf8')
    const matches = Array.from(new Set(raw.match(/https:\/\/photos\.zillowstatic\.com\/fp\/[a-f0-9]+-cc_ft_1536\.jpg/g) || []))
    matches.slice(0, 10).forEach((url, idx) => {
      const dest = path.join(redBudDir, `${idx + 1}.jpg`)
      if (!fs.existsSync(dest)) {
        https.get(url, (res) => {
          if (res.statusCode === 200) {
            const stream = fs.createWriteStream(dest)
            res.pipe(stream)
          }
        }).on('error', () => {})
      }
    })
  }
} catch (e) {
  console.error('File cleanup / download error:', e)
}

// Dynamically import ESM-only plugins to avoid CJS/ESM resolution errors in some environments.
export default defineConfig(async () => {
  const plugin = await import('@vitejs/plugin-react-swc')
  return {
    plugins: [plugin.default()],
  }
})
