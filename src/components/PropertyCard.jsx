import React from 'react'
import formatPrice from '../lib/price'
import { Link } from 'react-router-dom'

function renderCategoryTag(property) {
  if (property.isSold) {
    return (
      <span className="absolute left-3 top-3 bg-rose-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1.5 border border-white/20">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        <span>CLOSED • SOLD</span>
      </span>
    )
  }

  if (property.transactionType === 'lease') {
    return (
      <span className="absolute left-3 top-3 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
        FOR LEASE
      </span>
    )
  }

  return (
    <span className="absolute left-3 top-3 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
      FOR SALE
    </span>
  )
}

export default function PropertyCard({ property }){
  const img = property.images && property.images[0]
  const isSold = property.isSold || !!property.soldDate

  return (
    <article className={`group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border ${isSold ? 'border-rose-100' : 'border-gray-100'}`}>
      <div className="relative">
        <Link to={`/listings/${property.id}`} className="block overflow-hidden">
          <img 
            src={img || '/media/house1.svg'} 
            alt={property.title} 
            loading="lazy" 
            className={`w-full h-52 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105 ${isSold ? 'brightness-95 contrast-105' : ''}`} 
          />
        </Link>

        {renderCategoryTag(property)}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <Link to={`/listings/${property.id}`} className="text-sm font-bold text-gray-900 leading-snug hover:text-primary transition-colors block">
              {property.title || property.address}
            </Link>
            <div className="text-xs text-gray-500 mt-1">{property.neighborhood}, {property.cityState || 'Parker, CO'}</div>
          </div>
          <div className="text-right shrink-0">
            <div className={`text-lg font-extrabold ${isSold ? 'text-rose-600' : 'text-gray-900'}`}>
              {formatPrice(property.soldPrice || property.price, property.priceFrequency)}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">{property.beds} bd • {property.baths} ba • {property.sqft?.toLocaleString()} sqft</div>
          </div>
        </div>

        {isSold && (
          <div className="mt-3 bg-rose-50 text-rose-800 text-xs font-semibold px-3 py-1.5 rounded-md flex items-center justify-between">
            <span>Closed Transaction</span>
            <span>{property.soldDate}</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <a href={property.externalLinks?.zillow || '#'} target="_blank" rel="noreferrer" className="text-xs text-gray-500 underline hover:text-gray-800">View on Zillow</a>
          <Link 
            to={`/listings/${property.id}`} 
            className={`px-4 py-2 rounded-md text-xs font-semibold transition-colors ${isSold ? 'bg-rose-600 hover:bg-rose-700 text-white' : 'bg-primary hover:bg-primary/90 text-white'}`}
          >
            {isSold ? 'View Sold Story' : 'View Details'}
          </Link>
        </div>
      </div>
    </article>
  )
}
