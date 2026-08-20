import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import PageHeader from '../components/PageHeader'

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
    <div>
      <PageHeader 
        title="About Co Star Mortgages"
        subtitle="Licensed independent mortgage brokerage providing fast, transparent residential home loan guidance across Denver Metro, Colorado."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <main className="max-w-7xl mx-auto px-6 py-12 font-body text-base">

      {/* SATHYA R NARAYAN OFFICIAL PROFILE CARD */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Broker Bio & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-[#0d101d] border-2 border-[#1d3465] shadow-xl shrink-0 relative flex items-center justify-center">
                <img 
                  src="/media/profile_pic.jpg" 
                  alt={siteConfig.brokerName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-[22px] sm:text-[24px] font-heading font-black text-[#0d101d]">{siteConfig.brokerName}</h2>
                <div className="text-[13px] font-bold text-[#f39c0a] mt-1">Licensed Mortgage Broker</div>
                <div className="text-[13px] text-slate-500 font-semibold">NMLS Unique ID: {siteConfig.nmlsId}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-[14px]">
              <div className="text-slate-600 font-medium">📍 {siteConfig.contact.fullAddress}</div>
              <div className="text-slate-600 font-medium">📞 {siteConfig.contact.phone}</div>
              <div className="text-slate-600 font-medium">✉️ {siteConfig.contact.email}</div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.socials.brokerNearMe}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] text-[#0d101d] text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
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
              <h3 className="text-[19px] sm:text-[20px] font-heading font-extrabold text-[#0d101d]">Get to know me</h3>
              <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed font-normal">
                "With 20+ years in Colorado real estate investing and 5+ years as a licensed mortgage broker, I take pride in providing personal care, clear communication, and tailored loan solutions for every client."
              </p>
            </div>

            {/* My experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1629] text-white border border-[#1d3465] shadow-xl space-y-4">
              <h3 className="text-[19px] sm:text-[20px] font-heading font-extrabold text-[#fac536]">My Experience &amp; Loan Products</h3>
              
              <div>
                <span className="text-[13px] font-bold text-[#738fc6] block mb-2">Supported Loan Products:</span>
                <div className="flex flex-wrap gap-2">
                  {brokerProducts.map((prod, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0d101d] text-slate-200 border border-[#1d3465] hover:border-[#f39c0a] transition-colors"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1d3465] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#738fc6] block">Mortgage Broker Experience:</span>
                  <span className="text-lg font-heading font-black text-[#fac536]">5+ Years</span>
                </div>
                <div>
                  <span className="text-[#738fc6] block">Real Estate Investing:</span>
                  <span className="text-lg font-heading font-black text-white">20+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-[26px] sm:text-[32px] font-heading font-black text-[#0d101d]">Why Work With Co Star Mortgages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((v) => (
            <div key={v.number} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
              <div className="text-4xl font-heading font-black text-[#f39c0a]/30 mb-4">{v.number}</div>
              <h3 className="text-[19px] font-heading font-bold text-[#0d101d] mb-3">{v.title}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Card */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <h2 className="text-[24px] sm:text-[28px] font-heading font-black text-[#0d101d]">Our Mission</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Co Star Mortgages makes home financing simple, transparent, and stress-free. Whether you're purchasing or refinancing, we provide clear loan options and personal support every step of the way.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center justify-center">
            <Link to="/contact" className="px-7 py-3.5 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] text-[#0d101d] rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-md">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}
