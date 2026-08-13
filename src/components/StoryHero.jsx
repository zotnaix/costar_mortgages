import React from 'react'

export default function StoryHero({ headline, intro, hero }){
  return (
    <header className="w-full bg-white rounded-t-lg overflow-hidden">
      {hero && <img src={hero} alt="hero" className="w-full h-64 object-cover" />}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">{headline}</h2>
        <p className="mt-2 text-gray-600">{intro}</p>
      </div>
    </header>
  )
}
