import React from 'react'
import PropertyCard from './PropertyCard'

export default function PropertyGrid({ listings, onViewProperty }){
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {listings.map(l => (
        <PropertyCard key={l.id} property={l} />
      ))}
    </section>
  )
}
