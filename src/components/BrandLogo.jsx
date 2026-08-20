import React from 'react'
import { siteConfig } from '../config/siteConfig'

/**
 * BrandLogo component
 * Renders the Co Star Mortgages logo with the exact bounding box (10 160 480 190)
 * to remove large transparent whitespace in the original 1:1 image canvas.
 * This allows the logo and its embedded title to expand horizontally across its natural
 * ~2.5:1 aspect ratio while maintaining a clean, fixed navbar height.
 */
export default function BrandLogo({ 
  isWhite = false, 
  className = "h-11 sm:h-13 md:h-14 w-auto", 
  alt = "Co Star Mortgages LLC" 
}) {
  const logoSrc = isWhite ? siteConfig.logoWhite : siteConfig.logoDark

  return (
    <svg 
      viewBox="10 160 480 190" 
      className={`${className} transition-all duration-200 block select-none`}
      role="img"
      aria-label={alt}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>{alt}</title>
      <image 
        href={logoSrc} 
        xlinkHref={logoSrc} 
        x="0" 
        y="0" 
        width="500" 
        height="500" 
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  )
}
