import React from 'react'
import { Link } from 'react-router-dom'
import { recentFundedLoans } from '../data/mortgages'
import { useMortgagesContext } from '../context/MortgagesContext'
import PageHeader from '../components/PageHeader'

export default function RecentFundingsPage() {
  const { testimonials } = useMortgagesContext()

  return (
    <div>
      <PageHeader 
        title="Recent Funded Loans & Track Record"
        subtitle="Browse real funded loan transactions, rate savings metrics, and verified borrower experiences across Colorado."
        breadcrumbs={[{ label: 'Track Record' }]}
      />

      <main className="max-w-7xl mx-auto px-6 py-12 font-body text-base">

      {/* Funded Loans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {recentFundedLoans.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[13px] font-extrabold">
                <span className="text-[#738fc6] font-bold">{item.loanType}</span>
                <span className="text-emerald-600 font-extrabold">{item.turnaroundDays}</span>
              </div>

              <h2 className="text-[19px] sm:text-[20px] font-heading font-extrabold text-[#0d101d]">{item.title}</h2>
              <div className="text-[28px] sm:text-[32px] font-heading font-black text-[#f39c0a]">{item.monthlySavings}</div>
              
              <div className="pt-2 text-[13px] text-slate-500 font-medium border-t border-slate-100 flex justify-between">
                <span>Location: {item.cityState}</span>
                <span>Amount: {item.loanAmount}</span>
              </div>

              <p className="text-[14px] text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                "{item.story}"
              </p>
            </div>

            <Link
              to="/contact"
              className="block w-full py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0d101d] bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] rounded-xl transition-all shadow-md mt-4"
            >
              Get Matching Rate Quote
            </Link>
          </div>
        ))}
      </div>

      {/* Verified Borrower Reviews Grid */}
      <section className="bg-[#0d1629] text-white rounded-3xl p-8 sm:p-12 border border-[#1d3465] shadow-xl mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-[24px] sm:text-[28px] font-heading font-black text-white">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#0d101d] p-6 rounded-2xl border border-[#1d3465] space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${t.bgColor}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[15px] font-bold text-white">{t.author}</div>
                  <div className="text-[12px] text-[#738fc6]">{t.role}</div>
                </div>
              </div>

              <p className="text-[14px] text-[#738fc6] italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center bg-white border border-slate-200 rounded-3xl p-10 max-w-2xl mx-auto shadow-sm space-y-3">
        <h3 className="text-[22px] sm:text-[24px] font-heading font-black text-[#0d101d]">Ready to start your home purchase or refinance?</h3>
        <Link to="/contact" className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] text-[#0d101d] text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#f39c0a]/20">
          Start Pre-Approval Inquiry
        </Link>
      </div>
    </main>
    </div>
  )
}
