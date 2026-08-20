import React from 'react'
import MortgageCalculatorWidget from '../components/MortgageCalculatorWidget'

export default function MortgageCalculatorPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 font-body text-base">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-heading font-black text-[#0d101d] tracking-tight leading-tight">
          Interactive Payment &amp; Amortization Calculator
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Adjust home price, down payment, interest rates, property taxes, insurance, and HOA dues to calculate your precise monthly payment breakdown.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <MortgageCalculatorWidget title="Full Loan Payment Estimator" darkTheme={false} />
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#f39c0a]/15 text-[#f39c0a] flex items-center justify-center font-bold mx-auto text-lg">💰</div>
          <h3 className="text-[17px] sm:text-[18px] font-heading font-extrabold text-[#0d101d]">Principal &amp; Interest</h3>
          <p className="text-[14px] text-slate-600 leading-relaxed">The core portion of your monthly payment going towards paying down loan balance and interest.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#738fc6]/15 text-[#738fc6] flex items-center justify-center font-bold mx-auto text-lg">🏛️</div>
          <h3 className="text-[17px] sm:text-[18px] font-heading font-extrabold text-[#0d101d]">Property Taxes</h3>
          <p className="text-[14px] text-slate-600 leading-relaxed">Local county and city property tax assessments collected monthly into an escrow account.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#1d3465]/15 text-[#1d3465] flex items-center justify-center font-bold mx-auto text-lg">🛡️</div>
          <h3 className="text-[17px] sm:text-[18px] font-heading font-extrabold text-[#0d101d]">Homeowners Insurance</h3>
          <p className="text-[14px] text-slate-600 leading-relaxed">Hazard and property insurance coverage protecting your home structure and belongings.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#fabe22]/20 text-[#d97707] flex items-center justify-center font-bold mx-auto text-lg">🏢</div>
          <h3 className="text-[17px] sm:text-[18px] font-heading font-extrabold text-[#0d101d]">Monthly HOA Dues</h3>
          <p className="text-[14px] text-slate-600 leading-relaxed">Homeowners association fees for condo, townhouse, or planned community amenities and upkeep.</p>
        </div>
      </div>
    </main>
  )
}
