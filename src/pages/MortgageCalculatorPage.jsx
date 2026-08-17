import React from 'react'
import MortgageCalculatorWidget from '../components/MortgageCalculatorWidget'

export default function MortgageCalculatorPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Interactive Payment & Amortization Calculator
        </h1>
        <p className="text-slate-600 text-base">
          Adjust home price, down payment, interest rates, property taxes, insurance, and HOA dues to calculate your precise monthly payment breakdown.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <MortgageCalculatorWidget title="Full Loan Payment Estimator" darkTheme={false} />
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mx-auto text-lg">💰</div>
          <h3 className="text-base font-extrabold text-slate-900">Principal & Interest</h3>
          <p className="text-xs text-slate-600 leading-relaxed">The core portion of your monthly payment going towards paying down loan balance and interest.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold mx-auto text-lg">🏛️</div>
          <h3 className="text-base font-extrabold text-slate-900">Property Taxes</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Local county and city property tax assessments collected monthly into an escrow account.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold mx-auto text-lg">🛡️</div>
          <h3 className="text-base font-extrabold text-slate-900">Homeowners Insurance</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Hazard and property insurance coverage protecting your home structure and belongings.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold mx-auto text-lg">🏢</div>
          <h3 className="text-base font-extrabold text-slate-900">Monthly HOA Dues</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Homeowners association fees for condo, townhouse, or planned community amenities and upkeep.</p>
        </div>
      </div>
    </main>
  )
}
