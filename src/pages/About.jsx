import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import LicenseModal from '../components/LicenseModal'

export default function AboutPage(){
  const [isLicenseOpen, setIsLicenseOpen] = useState(false)

  const brokerProducts = [
    'Adjustable-Rate Mortgages (ARM)',
    'Conforming Loans',
    'Conventional Loans',
    'Fannie Mae Programs',
    'Freddie Mac Programs',
    'Jumbo Loans',
    'Non-Conforming Loans',
    'VA Military Loans',
    'FHA Home Loans'
  ]

  const pillars = [
    {
      number: '01',
      title: 'Clear Rate Transparency',
      description: 'No hidden fees or surprises. We deliver straightforward, side-by-side loan program breakdowns so you understand your options and monthly costs.'
    },
    {
      number: '02',
      title: 'Streamlined Digital Process',
      description: 'Our digital process helps simplify document checks and communications so you stay informed from application through closing.'
    },
    {
      number: '03',
      title: 'Personalized Support & Care',
      description: 'You get dedicated guidance directly from a licensed mortgage professional taking care of your needs with personal attention.'
    }
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-700 font-extrabold text-xs rounded-full uppercase tracking-wider">
          Co Star Mortgages Inc. • NMLS ID: {siteConfig.nmlsId}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          About Sathya R Narayan &amp; Co Star Mortgages
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Dedicated to helping home buyers and homeowners across Denver, Colorado find clear loan options, friendly guidance, and rate transparency.
        </p>
      </section>

      {/* SATHYA R NARAYAN OFFICIAL PROFILE CARD */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Broker Bio & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-3xl bg-slate-950 text-amber-400 font-black text-2xl flex items-center justify-center border-2 border-amber-500/30 shadow-lg shrink-0">
                SN
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">{siteConfig.brokerName}</h2>
                <div className="text-xs font-bold text-amber-600 mt-1">Licensed Mortgage Broker</div>
                <div className="text-xs text-slate-500">NMLS Unique ID: {siteConfig.nmlsId}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
              <div className="text-slate-600 font-medium">📍 {siteConfig.contact.fullAddress}</div>
              <div className="text-slate-600 font-medium">📞 {siteConfig.contact.phone}</div>
              <div className="text-slate-600 font-medium">✉️ {siteConfig.contact.email}</div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.socials.brokerNearMe}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-all shadow-md flex items-center gap-2"
              >
                <span>BNM</span>
                <span>BrokerNearMe Profile ↗</span>
              </a>
              <button
                onClick={() => setIsLicenseOpen(true)}
                className="px-5 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all cursor-pointer"
              >
                Verify NMLS License
              </button>
            </div>
          </div>

          {/* Right Column: "Get to know me" & "My experience" Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Get to know me Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900">Get to know me</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "Started my career in mortgages, been a real estate investor for 20+ years, run an end-to-end property services company, have been a lender/broker for 5+ years, and would love to earn your business with the promise of taking care of your needs with personal care and attention."
              </p>
            </div>

            {/* My experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-extrabold text-amber-400">My Experience &amp; Loan Products</h3>
              
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-2">Supported Loan Products:</span>
                <div className="flex flex-wrap gap-2">
                  {brokerProducts.map((prod, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 transition-colors"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Mortgage Broker Experience:</span>
                  <span className="text-lg font-black text-amber-400">5+ Years</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Real Estate Investing:</span>
                  <span className="text-lg font-black text-white">20+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-slate-900">Why Work With Co Star Mortgages</h2>
          <p className="mt-2 text-xs text-slate-500">Built around clarity, personal support, and borrower guidance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((v) => (
            <div key={v.number} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
              <div className="text-4xl font-black text-amber-500/30 mb-4">{v.number}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Card */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Mission</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The traditional mortgage process can feel confusing and overwhelming. Co Star Mortgages was created to make home financing simpler, more transparent, and easier to navigate.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether you are purchasing your first home or looking into refinancing, our goal is to provide honest communication and clear mortgage options tailored to your needs.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setIsLicenseOpen(true)}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer"
            >
              Verify NMLS ID: {siteConfig.nmlsId}
            </button>
            <Link to="/contact" className="px-6 py-3 bg-amber-500 text-slate-950 rounded-xl text-xs font-extrabold uppercase tracking-wider hover:bg-amber-400 transition-all shadow-md">
              Connect with Sathya R Narayan
            </Link>
          </div>
        </div>
      </section>

      {/* License Modal */}
      <LicenseModal 
        isOpen={isLicenseOpen}
        onClose={() => setIsLicenseOpen(false)}
      />
    </main>
  )
}
