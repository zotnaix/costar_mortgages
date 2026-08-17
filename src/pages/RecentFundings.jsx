import React from 'react'
import { Link } from 'react-router-dom'
import { recentFundedLoans } from '../data/mortgages'
import { useMortgagesContext } from '../context/MortgagesContext'

export default function RecentFundingsPage() {
  const { testimonials } = useMortgagesContext()

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Recent Funded Loans & Borrower Savings
        </h1>
        <p className="text-slate-600 text-base">
          Browse real funded loan transactions, rate savings metrics, and verified borrower experiences across Colorado.
        </p>
      </div>

      {/* Funded Loans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {recentFundedLoans.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-extrabold">
                <span className="text-slate-500 font-bold">{item.loanType}</span>
                <span className="text-emerald-600 font-extrabold">{item.turnaroundDays}</span>
              </div>

              <h2 className="text-xl font-extrabold text-slate-900">{item.title}</h2>
              <div className="text-3xl font-black text-amber-600">{item.monthlySavings}</div>
              
              <div className="pt-2 text-xs text-slate-500 font-medium border-t border-slate-100 flex justify-between">
                <span>Location: {item.cityState}</span>
                <span>Amount: {item.loanAmount}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                "{item.story}"
              </p>
            </div>

            <Link
              to="/contact"
              className="block w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-md mt-4"
            >
              Get Matching Rate Quote
            </Link>
          </div>
        ))}
      </div>

      {/* Verified Borrower Reviews Grid */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-black text-white">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-850 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${t.bgColor}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center bg-white border border-slate-200 rounded-3xl p-10 max-w-3xl mx-auto shadow-sm">
        <h3 className="text-2xl font-black text-slate-900">Ready to start your home purchase or refinance?</h3>
        <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">Get pre-approved digitally in as little as 2 minutes with Co Star Mortgages.</p>
        <Link to="/contact" className="inline-block mt-6 px-8 py-4 bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
          Start Pre-Approval Inquiry
        </Link>
      </div>
    </main>
  )
}
