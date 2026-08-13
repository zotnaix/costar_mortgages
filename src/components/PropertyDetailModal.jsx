import React from 'react'
import StoryHero from './StoryHero'
import StoryBlockRenderer from './StoryBlockRenderer'

export default function PropertyDetailModal({ property, isOpen, onClose }){
  if(!isOpen || !property) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <button onClick={onClose} className="absolute right-4 top-4 bg-white rounded-full p-2 shadow">✕</button>
        <StoryHero headline={property.storyHeadline} intro={property.storyIntro} hero={property.images && property.images[0]} />
        <StoryBlockRenderer blocks={property.storyBlocks} />
        <div className="p-6 border-t">
          <a href={property.externalLinks?.zillow} target="_blank" rel="noreferrer" className="text-sm text-gray-500 underline">View on Zillow</a>
        </div>
      </div>
    </div>
  )
}
