import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

export default function AboutPage(){
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
      <section className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          About Co Star Mortgages
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
          Friendly guidance, clear rate options, and 20+ years of Colorado real estate experience.
        </p>
      </section>

      {/* SATHYA R NARAYAN OFFICIAL PROFILE CARD */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Broker Bio & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 shadow-xl shrink-0 relative flex items-center justify-center">
                <img 
                  src="/media/profile_pic.jpg" 
                  alt={siteConfig.brokerName}
                  className="w-full h-full object-cover object-top"
                />
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
                className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>BNM</span>
                <span>BrokerNearMe Profile ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: "Get to know me" & "My experience" Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Get to know me Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900">Get to know me</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "With 20+ years in Colorado real estate investing and 5+ years as a licensed mortgage broker, I take pride in providing personal care, clear communication, and tailored loan solutions for every client."
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
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-black text-slate-900">Why Work With Co Star Mortgages</h2>
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
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Mission</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Co Star Mortgages makes home financing simple, transparent, and stress-free. Whether you're purchasing or refinancing, we provide clear loan options and personal support every step of the way.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <Link to="/contact" className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
