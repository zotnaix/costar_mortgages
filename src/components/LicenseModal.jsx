import React from 'react'
import { siteConfig } from '../config/siteConfig'

export default function LicenseModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#0d101d]/80 backdrop-blur-md animate-in fade-in duration-200 font-body text-base"
      onClick={onClose}
    >
      <div 
        className="bg-[#0d1629] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-[#1d3465] transform transition-all animate-in zoom-in-95 duration-200 my-auto text-white"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="license-modal-title"
      >
        {/* Modal Header */}
        <div className="relative px-6 py-5 border-b border-[#1d3465] flex items-center justify-center">
          <h2 id="license-modal-title" className="text-[20px] sm:text-[22px] font-heading font-black text-white text-center">
            NMLS Licensing &amp; Broker Info
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#738fc6] hover:text-white p-1.5 rounded-full hover:bg-[#1d3465] transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <div className="bg-[#0d101d] border border-[#1d3465] rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-[14px]">
              <span className="text-[#738fc6] font-semibold">Licensed Broker:</span>
              <span className="text-white font-extrabold">{siteConfig.brokerName}</span>
            </div>

            <div className="flex items-center justify-between text-[14px]">
              <span className="text-[#738fc6] font-semibold">NMLS Unique ID:</span>
              <span className="text-[#fac536] font-extrabold text-[16px]">2042475</span>
            </div>

            <div className="flex items-center justify-between text-[14px]">
              <span className="text-[#738fc6] font-semibold">Brokerage Name:</span>
              <span className="text-white font-bold">{siteConfig.companyName}</span>
            </div>

            <div className="flex items-center justify-between text-[14px]">
              <span className="text-[#738fc6] font-semibold">Location:</span>
              <span className="text-slate-200 font-medium">{siteConfig.contact.fullAddress}</span>
            </div>

            <div className="flex items-center justify-between text-[14px]">
              <span className="text-[#738fc6] font-semibold">Phone:</span>
              <span className="text-slate-200 font-bold">{siteConfig.contact.phone}</span>
            </div>
          </div>

          <p className="text-[14px] text-[#738fc6] leading-relaxed">
            Sathya R Narayan (NMLS Unique ID: 2042475) operates in full compliance with state and federal lending regulations, providing equal housing opportunity financing in Denver Metro, Colorado.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.socials.brokerNearMe}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] text-[#0d101d] font-black py-3 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>BNM</span>
              <span>View BrokerNearMe Profile ↗</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 bg-[#0d101d] hover:bg-[#1d3465] border border-[#1d3465] text-[#fac536] font-extrabold py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
