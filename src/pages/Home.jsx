import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { loanPrograms } from '../data/mortgages'
import { blogPosts } from '../data/blogPosts'
import MortgageCalculatorWidget from '../components/MortgageCalculatorWidget'
import { useMortgagesContext } from '../context/MortgagesContext'
import SEO from '../components/SEO'
import { getBrokerageSchema } from '../config/schemas'

export default function Home() {
  const { submitLead } = useMortgagesContext()

  // Pre-approval consultation form state
  const [formState, setFormState] = useState({
    loanPurpose: 'New Home Purchase',
    propertyType: 'Single Family',
    creditScore: 'Good (680-739)',
    estimatedPrice: '$450,000',
    fullName: '',
    email: '',
    phone: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.fullName || !formState.email) return
    submitLead(formState)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SEO 
        title="Denver Metro, Colorado Mortgage Broker"
        description="Explore Colorado mortgage options with licensed broker Sathya R Narayan (NMLS #2042475). Conventional, FHA, VA, Jumbo loans, and refinancing."
        canonicalUrl="/"
        schema={getBrokerageSchema()}
      />
      {/* HERO SECTION WITH 40/60 SPLIT FOR CALCULATOR */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-24 pb-16">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Headline (40% Split: lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left min-w-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Explore Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  Mortgage Options.
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
                {siteConfig.welcomeText}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl hover:from-amber-300 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/25 hover:scale-[1.02]"
                >
                  Get Pre-Approved
                </Link>
                <Link
                  to="/mortgages"
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 hover:text-white transition-all"
                >
                  Explore Loan Programs
                </Link>
              </div>
            </div>

            {/* Right Hero Quick Loan Calculator Widget (60% Split: lg:col-span-7) */}
            <div className="lg:col-span-7 w-full min-w-0 max-w-full">
              <MortgageCalculatorWidget title="Quick Rate Calculator" darkTheme={true} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION VIDEO SECTION */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Welcome to Co Star Mortgages
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Watch our quick introduction. Learn how Co Star Mortgages helps you secure the best financing with zero hassle.
              </p>

              <div className="space-y-3 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">✓</span>
                  <span>🏠 New Home Purchase Loans</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">✓</span>
                  <span>🏘️ Real Estate Investor Financing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">✓</span>
                  <span>🔄 Refinance &amp; Cash-Out Options</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a 
                  href={siteConfig.socials.featuredReel} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Watch Reel on Facebook
                </a>
              </div>
            </div>

            {/* Right Video Embed Column - Enlarged, Uncropped Showcase */}
            <div className="lg:col-span-7 flex justify-center w-full">
              <div className="w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/40 bg-black relative group flex items-center justify-center">
                <video 
                  controls 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src="/media/intro_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Mortgage Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Simple, transparent financing options tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.officialServices.map((svc, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {svc.desc}
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 rounded-xl transition-all"
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED MORTGAGE BLOG ARTICLES (Temporarily hidden - uncomment when activating blog) */}
      {/* 
      <section className="py-20 bg-slate-100 max-w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Homebuying &amp; Financing Guides
              </h2>
            </div>
            <Link to="/blog" className="text-xs font-extrabold uppercase tracking-wider text-amber-600 hover:text-amber-700">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-bold text-slate-400">{post.date} • {post.readTime}</div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.snippet}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to={`/blog/${post.id}`} className="text-xs font-extrabold text-slate-900 hover:text-amber-600">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CORE LOAN PROGRAMS SECTION - SUMMARIZED */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore Loan Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Find the right mortgage structure for your purchase or refinance goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                  {program.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {program.tagline}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <Link
                  to={`/mortgages/${program.id}`}
                  className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 rounded-xl transition-all"
                >
                  <span>View Program Details</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/mortgages"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <span>Compare All Loan Programs</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* COMPLIANT CONSULTATION FORM SECTION */}
      <section id="pre-approval" className="bg-slate-950 text-white py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <h2 className="text-3xl font-black tracking-tight">Request a Custom Rate Quote</h2>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                <p className="text-xs text-slate-300">
                  Thank you, <strong className="text-amber-400">{formState.fullName}</strong>. A licensed Co Star Mortgages loan professional will contact you shortly to discuss your options.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Service Needed</label>
                    <select 
                      value={formState.loanPurpose}
                      onChange={(e) => setFormState({...formState, loanPurpose: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="New Home Purchase">🏠 New Home Purchase</option>
                      <option value="Investor Purchase">🏘️ Investor Purchase</option>
                      <option value="Refinancing">🔄 Refinancing</option>
                      <option value="Home Equity Loan">💰 Home Equity Loan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Property Type</label>
                    <select 
                      value={formState.propertyType}
                      onChange={(e) => setFormState({...formState, propertyType: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Single Family">Single Family Home</option>
                      <option value="Townhome">Townhome / Condominium</option>
                      <option value="MultiFamily">Multi-Family / Investment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Estimated Home Price</label>
                    <input 
                      type="text"
                      value={formState.estimatedPrice}
                      onChange={(e) => setFormState({...formState, estimatedPrice: e.target.value})}
                      placeholder="e.g. $450,000"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Credit Score Range</label>
                    <select 
                      value={formState.creditScore}
                      onChange={(e) => setFormState({...formState, creditScore: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Excellent (740+)">Excellent (740+)</option>
                      <option value="Good (680-739)">Good (680-739)</option>
                      <option value="Fair (620-679)">Fair (620-679)</option>
                      <option value="Building (580-619)">Building Credit (580-619)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Full Name *</label>
                    <input 
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({...formState, fullName: e.target.value})}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Email Address *</label>
                    <input 
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      placeholder="(303) 886-3621"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
                >
                  Connect with a Mortgage Professional
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
