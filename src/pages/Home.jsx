import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { loanPrograms } from '../data/mortgages'
import MortgageCalculatorWidget from '../components/MortgageCalculatorWidget'
import SEO from '../components/SEO'
import { getBrokerageSchema } from '../config/schemas'

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body text-base">
      <SEO 
        title="Where Your Home Story Shines"
        description="Explore Colorado mortgage options with licensed broker Sathya R Narayan (NMLS #2042475). Conventional, FHA, VA, Jumbo loans, and refinancing."
        canonicalUrl="/"
        schema={getBrokerageSchema()}
      />
      {/* HERO SECTION WITH 40/60 SPLIT FOR CALCULATOR */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0d101d] text-white overflow-hidden pt-24 pb-16">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#fac536]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1d3465]/35 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Headline (40% Split: lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left min-w-0">
              <h1 className="text-[34px] sm:text-[42px] lg:text-[44px] xl:text-[56px] font-heading font-black tracking-tight leading-[1.1]">
                Where Your <br />
                Home Story{' '}
                <span className="relative inline-block group cursor-default">
                  <span className="text-shiny-amber-hover transition-transform duration-300 group-hover:scale-105 inline-block">
                    Shines.
                  </span>

                  {/* Primary Twinkling Sparkle - Top Right */}
                  <svg 
                    className="absolute -top-3.5 -right-6 sm:-top-5 sm:-right-8 w-6 h-6 sm:w-8 sm:h-8 text-[#fac536] pointer-events-none sparkle-hover-target sparkle-hover-target-1" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>

                  {/* Secondary Twinkling Sparkle - Top Left */}
                  <svg 
                    className="absolute -top-2.5 -left-3 sm:-top-3 sm:-left-4 w-4 h-4 sm:w-5 sm:h-5 text-[#fabe22] pointer-events-none sparkle-hover-target sparkle-hover-target-2" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>

                  {/* Subtle Accent Sparkle - Bottom */}
                  <svg 
                    className="absolute -bottom-2 right-4 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fac536]/80 pointer-events-none sparkle-hover-target sparkle-hover-target-3" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </span>
              </h1>

              <p className="text-[#738fc6] text-base font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {siteConfig.welcomeText}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] text-[#0d101d] font-black text-sm uppercase tracking-wider rounded-xl hover:from-[#fabe22] hover:to-[#fac536] transition-all shadow-xl shadow-[#f39c0a]/25 hover:scale-[1.02]"
                >
                  Get Pre-Approved
                </Link>
                <Link
                  to="/mortgages"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#0d1629] border border-[#1d3465] text-slate-200 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-[#1d3465] hover:text-[#fac536] transition-all"
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
      <section className="bg-[#0d1629] text-white py-20 border-b border-[#1d3465] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-heading font-black tracking-tight text-white leading-tight">
                Welcome to Co Star Mortgages
              </h2>

              <p className="text-[#738fc6] text-base leading-relaxed max-w-lg">
                Watch our quick introduction. Learn how Co Star Mortgages helps you secure the best financing with zero hassle.
              </p>

              <div className="space-y-3.5 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f39c0a]/20 text-[#fac536] flex items-center justify-center font-bold text-xs">✓</span>
                  <span>New Home Purchase Loans</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f39c0a]/20 text-[#fac536] flex items-center justify-center font-bold text-xs">✓</span>
                  <span>Real Estate Investor Financing</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f39c0a]/20 text-[#fac536] flex items-center justify-center font-bold text-xs">✓</span>
                  <span>Refinance &amp; Cash-Out Options</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a 
                  href={siteConfig.socials.featuredReel} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] text-[#0d101d] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Watch Reel on Facebook
                </a>
              </div>
            </div>

            {/* Right Video Embed Column - Enlarged Showcase */}
            <div className="lg:col-span-7 flex justify-center w-full">
              <div className="w-full max-w-3xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1d3465] bg-[#0d101d] relative group flex items-center justify-center">
                <video 
                  controls 
                  playsInline 
                  preload="metadata"
                  className="w-full h-full object-contain bg-[#0d101d]"
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
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-heading font-black text-[#0d101d] tracking-tight">
            Mortgage Solutions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
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
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="text-[19px] font-heading font-extrabold text-[#0d101d] group-hover:text-[#f39c0a] transition-colors mb-2">
                  {svc.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed mb-4">
                  {svc.desc}
                </p>
              </div>

              <Link
                to="/contact"
                className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 group-hover:bg-[#f39c0a] group-hover:text-[#0d101d] rounded-xl transition-all"
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CORE LOAN PROGRAMS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-heading font-black text-[#0d101d] tracking-tight">
            Explore Loan Programs
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
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
                <h3 className="text-[19px] font-heading font-bold text-[#0d101d] group-hover:text-[#f39c0a] transition-colors mb-2">
                  {program.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  {program.tagline}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <Link
                  to={`/mortgages/${program.id}`}
                  className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 group-hover:bg-[#f39c0a] group-hover:text-[#0d101d] rounded-xl transition-all"
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
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0d1629] hover:bg-[#1d3465] text-[#fac536] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <span>Compare All Loan Programs</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="bg-[#0d101d] text-white py-20 relative overflow-hidden">
        {/* Glow Accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#fac536]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#1d3465]/35 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-[#0d1629] rounded-3xl p-8 sm:p-14 border border-[#1d3465] shadow-2xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f39c0a]/10 border border-[#f39c0a]/30 text-[#fac536] text-xs font-bold uppercase tracking-wider">
              <span>Licensed Colorado Mortgage Brokerage</span>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-heading font-black tracking-tight text-white leading-tight">
                Ready to Start Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fac536] via-[#fabe22] to-[#f39c0a]">
                  Home Story?
                </span>
              </h2>
              <p className="text-[#738fc6] text-base leading-relaxed">
                Connect directly with licensed broker Sathya R Narayan for custom rate quotes, fast pre-approval letters, and personalized guidance across Denver Metro, Colorado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] text-[#0d101d] font-black text-sm uppercase tracking-wider rounded-xl hover:from-[#fabe22] hover:to-[#fac536] transition-all shadow-xl shadow-[#f39c0a]/25 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Get Pre-Approved</span>
                <span>→</span>
              </Link>
              <a
                href="tel:+13038863621"
                className="w-full sm:w-auto px-8 py-4 bg-[#0d101d] hover:bg-[#1d3465] border border-[#1d3465] text-[#fac536] font-bold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-[#fac536]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call (303) 886-3621</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#1d3465] flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#738fc6] font-medium">
              <span>✓ NMLS ID: {siteConfig.nmlsId}</span>
              <span>✓ Equal Housing Lender</span>
              <span>✓ Fast Turnaround &amp; Zero Obligation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
