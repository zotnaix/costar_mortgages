import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { useMortgagesContext } from '../context/MortgagesContext'

export default function ContactPage() {
  const navigate = useNavigate()
  const { submitLead } = useMortgagesContext()

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanPurpose: 'Purchase',
    creditScore: 'Good (680-739)',
    targetAmount: '$450,000',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    submitLead(formData)
    setSubmitted(true)
  }

  const mapSrc = siteConfig.contact.googleMapsEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.fullAddress)}&output=embed`

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 sm:p-10 md:p-14 flex flex-col justify-between relative">
      {/* Floating Close Button */}
      <button
        onClick={() => navigate('/')}
        aria-label="Close Contact Page"
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all shadow-2xl group cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <main className="max-w-6xl mx-auto w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                Connect With Us
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Get custom rate quotes and mortgage guidance in Denver Metro, Colorado.
              </p>

              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Office Location</div>
                    <div className="text-white mt-0.5 font-semibold text-base">{siteConfig.contact.fullAddress}</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Phone</div>
                    <div className="text-white mt-0.5 font-semibold text-base">{siteConfig.contact.phone}</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Email &amp; Registry</div>
                    <div className="text-white mt-0.5 font-semibold text-base">{siteConfig.contact.email}</div>
                    <div className="text-slate-300 text-xs mt-0.5">NMLS Unique ID: {siteConfig.nmlsId}</div>
                  </div>
                </li>
              </ul>

              <div className="pt-4">
                <a 
                  href={siteConfig.socials.brokerNearMe} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg"
                >
                  <span>BNM</span>
                  <span>View BrokerNearMe Profile ↗</span>
                </a>
              </div>
            </div>

            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <iframe title="office-map" src={mapSrc} className="w-full h-full border-0"></iframe>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1 self-stretch flex justify-center">
            <div className="w-[1px] h-full bg-white/15"></div>
          </div>

          {/* Right Column: Pre-Approval Form */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-black text-white tracking-tight mb-6">Pre-Approval &amp; Rate Consultation</h2>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-8 rounded-2xl text-center my-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                <h3 className="text-xl font-bold text-white">Consultation Request Received</h3>
                <p className="text-xs text-slate-200">
                  Thank you, <strong className="text-amber-400">{formData.name}</strong>. Sathya R Narayan will review your details and send rate guidance to <strong className="text-amber-400">{formData.email}</strong>.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', loanPurpose: 'Purchase', creditScore: 'Good (680-739)', targetAmount: '$450,000', message: '' }) }}
                  className="px-6 py-2.5 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Full Name *</label>
                    <input 
                      type="text" required placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Email Address *</label>
                    <input 
                      type="email" required placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Phone Number</label>
                    <input 
                      type="tel" placeholder="(303) 886-3621"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Loan Goal</label>
                    <select 
                      value={formData.loanPurpose}
                      onChange={(e) => setFormData({...formData, loanPurpose: e.target.value})}
                      className="w-full p-3.5 bg-slate-900 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Purchase">Home Purchase</option>
                      <option value="Refinance">Rate-and-Term Refinance</option>
                      <option value="CashOut">Cash-Out Equity Refinance</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Est. Loan Amount</label>
                    <input 
                      type="text" placeholder="$450,000"
                      value={formData.targetAmount}
                      onChange={(e) => setFormData({...formData, targetAmount: e.target.value})}
                      className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Est. Credit Score</label>
                    <select 
                      value={formData.creditScore}
                      onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
                      className="w-full p-3.5 bg-slate-900 border border-white/20 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Excellent (740+)">Excellent (740+)</option>
                      <option value="Good (680-739)">Good (680-739)</option>
                      <option value="Fair (620-679)">Fair (620-679)</option>
                      <option value="Building (580-619)">Building (580-619)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Additional Notes / Questions</label>
                  <textarea 
                    rows="3" placeholder="Tell us about desired timeframe, target monthly payment, or down payment savings…"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Request Rate Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
