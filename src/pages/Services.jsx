import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  const services = [
    {
      id: 'pre-approval',
      title: 'Digital Home Loan Pre-Approvals',
      badge: 'Fast Origination',
      description: 'Get verified pre-approval letters in as little as 24 hours. Present a rock-solid financing offer to home sellers with zero delays.',
      features: ['24-Hour turnaround time', '100% Digital document portal', 'Verified pre-approval certificate'],
      link: '/contact',
      buttonText: 'Get Pre-Approved'
    },
    {
      id: 'rate-lock',
      title: 'Rate Lock Guarantee',
      badge: 'Protected Rates',
      description: 'Protect your mortgage rate against market fluctuations while you shop for homes or finalize contract closing details.',
      features: ['Up to 90-day rate lock options', 'Float-down options if rates drop', 'Zero surprise rate increases'],
      link: '/mortgages',
      buttonText: 'View Current Rates'
    },
    {
      id: 'refinance-advisory',
      title: 'Refinance & Debt Consolidation',
      badge: 'Lower Payments',
      description: 'Lower your monthly payment, adjust your loan terms, or cash out built-up home equity to consolidate high-interest credit debt.',
      features: ['Rate & term refinancing', 'Cash-out equity access', 'PMI cancellation assessments'],
      link: '/refinance',
      buttonText: 'Calculate Refinance Savings'
    },
    {
      id: 'first-time-buyer',
      title: 'First-Time Homebuyer Assistance',
      badge: 'Low Down Payment',
      description: 'Specialized financing guidance for first-time buyers leveraging FHA 3.5% down payment options and local down payment assistance.',
      features: ['Down payment grant guidance', 'Flexible credit guidelines', 'Educational home loan walkthroughs'],
      link: '/mortgages/fha-loans',
      buttonText: 'Explore FHA Loans'
    },
    {
      id: 'va-military',
      title: 'VA Military Home Loans',
      badge: '0% Down Payment',
      description: 'Honoring active military and veterans with $0 down payment financing, reduced fees, and zero monthly mortgage insurance.',
      features: ['0% Down payment options', 'No monthly PMI fee', 'Assistance with Certificate of Eligibility (COE)'],
      link: '/mortgages/va-loans',
      buttonText: 'Explore VA Loans'
    },
    {
      id: 'custom-advisory',
      title: 'Dedicated Loan Consultation',
      badge: 'Personalized',
      description: 'One-on-one consultation with experienced mortgage advisors to compare loan structures, interest rates, and long-term wealth strategies.',
      features: ['Side-by-side loan comparisons', 'Debt-to-Income optimization', 'Personalized rate analysis'],
      link: '/contact',
      buttonText: 'Book Loan Consultation'
    }
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">Co Star Mortgages Advisory</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Mortgage & Financial Origination Services
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          From fast pre-approval certificates to custom refinance strategies, Co Star Mortgages provides transparent home loan advisory.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-700 px-3 py-1 rounded-full border border-amber-500/20">
                  {s.badge}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">{s.description}</p>
              
              <ul className="space-y-2.5 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-700">
                {s.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link 
                to={s.link}
                className="w-full inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-sm transition-all"
              >
                {s.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Callout Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-10 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800 space-y-6">
        <h2 className="text-3xl font-black text-white">Have questions about your mortgage qualification?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
          Speak directly with a Co Star Mortgages Specialist today to explore interest rate locks, down payment minimums, and pre-approvals.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link to="/contact" className="bg-amber-500 text-slate-950 px-8 py-4 rounded-xl font-extrabold hover:bg-amber-400 transition-all text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20">
            Start Pre-Approval Form
          </Link>
        </div>
      </div>
    </main>
  )
}
