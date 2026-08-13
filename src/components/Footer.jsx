import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import LicenseModal from './LicenseModal'

export default function Footer() {
  const [isLicenseOpen, setIsLicenseOpen] = useState(false)

  return (
    <>
      <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand & Broker Disclosure Column */}
            <div className="md:col-span-1">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className="flex items-center gap-3 mb-4">
                <img src="/logo-white.svg" alt="Co Star Mortgages Logo" className="h-10 w-auto" />
                <span className="text-2xl font-extrabold tracking-tight text-white">{siteConfig.brandName}</span>
              </Link>
              
              <div className="mb-3 text-xs text-slate-300">
                <span className="font-bold text-amber-400">{siteConfig.brokerName}</span>
                <span className="block text-[11px] text-slate-400">Licensed Mortgage Broker • NMLS ID: {siteConfig.nmlsId}</span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {siteConfig.welcomeText}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-8 h-8 rounded border border-slate-700 flex items-center justify-center bg-slate-900 text-amber-400" title="Equal Housing Opportunity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.5L18.5 11H17v7H7v-7H5.5L12 5.5zM9 13h6v4H9v-4z"/>
                  </svg>
                </div>
                <button 
                  onClick={() => setIsLicenseOpen(true)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2 transition-colors cursor-pointer text-left"
                >
                  NMLS Unique ID: {siteConfig.nmlsId}
                </button>
              </div>
            </div>

            {/* Quick Loan Links */}
            <div>
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Loan Services</h3>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                <li><Link to="/mortgages" className="hover:text-white transition-colors">🏠 New Home Purchases</Link></li>
                <li><Link to="/mortgages" className="hover:text-white transition-colors">🏘️ Investor Purchases</Link></li>
                <li><Link to="/refinance" className="hover:text-white transition-colors">🔄 Refinancing</Link></li>
                <li><Link to="/refinance" className="hover:text-white transition-colors">💰 Home Equity Loans</Link></li>
              </ul>
            </div>

            {/* Advisory & Company */}
            <div>
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Company &amp; Media</h3>
              <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
                <li><Link to="/blog" className="hover:text-white transition-colors">Mortgage Blog &amp; Tips</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Mortgage Advisory Services</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Sathya R Narayan</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Book a Consultation</Link></li>
                <li><Link to="/admin" className="hover:text-amber-400 font-semibold transition-colors">Admin Portal</Link></li>
              </ul>
            </div>

            {/* Social & Broker Profiles */}
            <div>
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mb-4">Connect &amp; Profiles</h3>
              <div className="flex items-center gap-3 mb-5">
                {/* Facebook Button */}
                <a 
                  href={siteConfig.socials.facebook}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all shadow-md"
                  aria-label="Facebook Page"
                  title="Co Star Mortgages Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram Button */}
                <a 
                  href={siteConfig.socials.instagram}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-all shadow-md"
                  aria-label="Instagram Profile"
                  title="Co Star Mortgages Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Broker Near Me Button */}
                <a 
                  href={siteConfig.socials.brokerNearMe}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black hover:bg-amber-400 flex items-center justify-center transition-all shadow-md"
                  aria-label="Broker Near Me Profile"
                  title="Sathya R Narayan on Broker Near Me"
                >
                  <span className="text-[11px] font-black tracking-tighter">BNM</span>
                </a>
              </div>

              <ul className="space-y-2 text-xs text-slate-400">
                <li>📍 {siteConfig.contact.fullAddress}</li>
                <li>📞 {siteConfig.contact.phone}</li>
                <li>✉️ {siteConfig.contact.email}</li>
              </ul>
            </div>
          </div>

          {/* Rate Disclaimer & Copyright */}
          <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 space-y-3">
            <p>
              * Interest rates and annual percentage rates (APR) displayed are for informational purposes only and subject to market changes. Sathya R Narayan (NMLS Unique ID: {siteConfig.nmlsId}). Equal Housing Opportunity lender.
            </p>
            <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
              <div>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</div>
              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.socials.brokerNearMe} target="_blank" rel="noreferrer" className="hover:text-amber-400 font-bold">BrokerNearMe Profile ↗</a>
                <button onClick={() => setIsLicenseOpen(true)} className="underline hover:text-amber-400">NMLS ID: {siteConfig.nmlsId}</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <LicenseModal isOpen={isLicenseOpen} onClose={() => setIsLicenseOpen(false)} />
    </>
  )
}
