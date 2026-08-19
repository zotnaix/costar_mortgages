import { createClient } from '@supabase/supabase-js'

// Clean and sanitize env strings
const cleanEnv = (val) => {
  if (!val) return ''
  return String(val).trim().replace(/^["']|["']$/g, '')
}

let rawUrl = cleanEnv(import.meta.env.VITE_SUPABASE_URL)
const rawKey = cleanEnv(import.meta.env.VITE_SUPABASE_ANON_KEY)

export const SITE_ID = 'costar_mortgages'

// If user enters just project ID (e.g. kzexgjhjnogeknvgpgvl), convert to full URL
if (rawUrl && !rawUrl.startsWith('http://') && !rawUrl.startsWith('https://')) {
  rawUrl = `https://${rawUrl}.supabase.co`
}

const isValidUrl = (str) => {
  try {
    const url = new URL(str)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

let client = null
let configured = false

if (
  rawUrl && 
  rawKey && 
  isValidUrl(rawUrl) && 
  !rawUrl.includes('your-project-id') &&
  !rawKey.includes('your-anon-public-key')
) {
  try {
    client = createClient(rawUrl, rawKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    })
    configured = true
  } catch (err) {
    console.error('Supabase client initialization warning:', err)
    client = null
    configured = false
  }
}

export const supabase = client
export const isSupabaseConfigured = configured
