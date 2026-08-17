import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  const services = [
    {
      id: 'pre-approval',
      title: 'Digital Home Loan Pre-Approvals',
      description: 'Fast, verified pre-approval letters in as little as 24 hours to help you make strong offers.',
      features: ['24-Hour turnaround', '100% Digital document portal', 'Verified pre-approval letter'],
      link: '/contact',
      buttonText: 'Get Pre-Approved'
    },
    {
      id: 'rate-lock',
      title: 'Rate Lock Protection',
      description: 'Protect your interest rate against market fluctuations while you shop for homes.',
      features: ['Up to 90-day rate lock options', 'Float-down options available', 'Transparent rate advisory'],
      link: '/mortgages',
      buttonText: 'Explore Rates'
    },
    {
      id: 'refinance-advisory',
      title: 'Refinance & Debt Consolidation',
      description: 'Lower your monthly payment, adjust your loan terms, or tap into home equity.',
      features: ['Rate & term refinancing', 'Cash-out equity options', 'PMI removal assessment'],
      link: '/refinance',
      buttonText: 'Calculate Savings'
    },
    {
      id: 'first-time-buyer',
      title: 'First-Time Homebuyer Guidance',
      description: 'Low down payment options starting at 3.5% with personalized guidance.',
      features: ['Low down payment options', 'Flexible credit guidelines', 'Step-by-step loan walkthroughs'],
      link: '/mortgages/fha-loans',
      buttonText: 'Explore FHA Loans'
    },
    {
      id: 'va-military',
      title: 'VA Military Home Loans',
      description: 'Exclusive 0% down payment financing and zero monthly PMI for military families.',
      features: ['0% Down payment options', 'No monthly PMI fee', 'Assistance with COE verification'],
      link: '/mortgages/va-loans',
      buttonText: 'Explore VA Loans'
    },
    {
      id: 'custom-advisory',
      title: 'Dedicated Loan Consultation',
      description: 'One-on-one consultation to compare loan structures and find the right strategy.',
      features: ['Side-by-side loan comparisons', 'Credit & DTI optimization', 'Personalized rate analysis'],
      link: '/contact',
      buttonText: 'Book Consultation'
    }
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Mortgage Services
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Personalized, transparent home loan advisory in Colorado.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div>
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
