import React, { useState } from 'react'

export default function MortgageCalculatorWidget({ title = "Interactive Mortgage Calculator", darkTheme = false }) {
  const [homePrice, setHomePrice] = useState(450000)
  const [downPercent, setDownPercent] = useState(10)
  const [interestRate, setInterestRate] = useState(6.375)
  const [loanTermYears, setLoanTermYears] = useState(30)
  const [propertyTaxAnnual, setPropertyTaxAnnual] = useState(4500)
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(1800)

  // Financial calculations
  const downPaymentAmount = Math.round((homePrice * downPercent) / 100)
  const loanAmount = Math.max(0, homePrice - downPaymentAmount)
  
  const monthlyInterestRate = interestRate / 100 / 12
  const numberOfPayments = loanTermYears * 12

  let monthlyPrincipalInterest = 0
  if (monthlyInterestRate > 0 && numberOfPayments > 0) {
    monthlyPrincipalInterest = 
      (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
  } else {
    monthlyPrincipalInterest = loanAmount / (numberOfPayments || 1)
  }

  const monthlyTax = Math.round(propertyTaxAnnual / 12)
  const monthlyInsurance = Math.round(homeInsuranceAnnual / 12)
  const totalMonthlyPayment = Math.round(monthlyPrincipalInterest + monthlyTax + monthlyInsurance)
  const piAmount = Math.round(monthlyPrincipalInterest)

  // Chart percentages
  const piPercent = Math.round((piAmount / (totalMonthlyPayment || 1)) * 100)
  const taxPercent = Math.round((monthlyTax / (totalMonthlyPayment || 1)) * 100)
  const insPercent = Math.max(0, 100 - piPercent - taxPercent)

  return (
    <div className={`p-4 sm:p-6 rounded-2xl w-full max-w-full overflow-hidden ${darkTheme ? 'bg-slate-900/95 text-white border border-slate-800 shadow-2xl backdrop-blur-md' : 'bg-white text-slate-900 border border-slate-200/80 shadow-xl'}`}>
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-slate-200/20 gap-3 min-w-0">
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Instant Estimate
          </span>
          <h3 className="text-lg sm:text-xl font-black tracking-tight text-white leading-snug">{title}</h3>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button 
            type="button"
            onClick={() => setLoanTermYears(30)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${loanTermYears === 30 ? 'bg-amber-500 text-slate-950 shadow-md' : darkTheme ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            30-Yr Fixed
          </button>
          <button 
            type="button"
            onClick={() => setLoanTermYears(15)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${loanTermYears === 15 ? 'bg-amber-500 text-slate-950 shadow-md' : darkTheme ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            15-Yr Fixed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start min-w-0">
        {/* Controls Column */}
        <div className="md:col-span-7 space-y-4 min-w-0 w-full">
          {/* Home Price */}
          <div className="min-w-0">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label className="font-semibold text-slate-300">Home Purchase Price</label>
              <span className="font-extrabold text-amber-400 text-sm">${homePrice.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="100000" 
              max="2000000" 
              step="5000" 
              value={homePrice} 
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Down Payment */}
          <div className="min-w-0">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label className="font-semibold text-slate-300">Down Payment ({downPercent}%)</label>
              <span className="font-extrabold text-amber-400 text-sm">${downPaymentAmount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50" 
              step="1" 
              value={downPercent} 
              onChange={(e) => setDownPercent(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Interest Rate */}
          <div className="min-w-0">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <label className="font-semibold text-slate-300">Interest Rate</label>
              <span className="font-extrabold text-amber-400 text-sm">{interestRate.toFixed(3)}%</span>
            </div>
            <input 
              type="range" 
              min="3.5" 
              max="10.0" 
              step="0.125" 
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Taxes & Insurance Input Row */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="min-w-0">
              <label className="block text-[11px] font-semibold mb-1 text-slate-400">Annual Tax ($)</label>
              <input 
                type="number" 
                value={propertyTaxAnnual}
                onChange={(e) => setPropertyTaxAnnual(Number(e.target.value))}
                className={`w-full px-2.5 py-1.5 text-xs rounded-lg border focus:outline-none focus:border-amber-500 ${darkTheme ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
              />
            </div>
            <div className="min-w-0">
              <label className="block text-[11px] font-semibold mb-1 text-slate-400">Annual Insurance ($)</label>
              <input 
                type="number" 
                value={homeInsuranceAnnual}
                onChange={(e) => setHomeInsuranceAnnual(Number(e.target.value))}
                className={`w-full px-2.5 py-1.5 text-xs rounded-lg border focus:outline-none focus:border-amber-500 ${darkTheme ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
              />
            </div>
          </div>
        </div>

        {/* Payment Summary Box (Card) */}
        <div className="md:col-span-5 w-full max-w-full min-w-0 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-slate-950 text-white border border-amber-500/30 shadow-2xl overflow-hidden">
          {/* Total Monthly Payment Header */}
          <div className="text-center pb-4 border-b border-slate-800/80 min-w-0">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Total Monthly Payment</span>
            
            {/* Price Display */}
            <div className="mt-1 flex items-baseline justify-center gap-1 flex-wrap min-w-0">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight whitespace-nowrap">
                ${totalMonthlyPayment.toLocaleString()}
              </span>
              <span className="text-xs font-medium text-slate-400 shrink-0">/mo</span>
            </div>

            <p className="text-[10px] text-slate-400 mt-0.5 truncate">
              For ${loanAmount.toLocaleString()} loan amount
            </p>
          </div>

          {/* Breakdown Progress Bar */}
          <div className="my-4 min-w-0">
            <div className="flex justify-between text-[11px] font-medium text-slate-400 mb-1.5">
              <span>Payment Breakdown</span>
              <span>100%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div style={{ width: `${piPercent}%` }} className="bg-amber-500 h-full" title="Principal & Interest"></div>
              <div style={{ width: `${taxPercent}%` }} className="bg-blue-500 h-full" title="Property Taxes"></div>
              <div style={{ width: `${insPercent}%` }} className="bg-emerald-500 h-full" title="Homeowners Insurance"></div>
            </div>
          </div>

          {/* Breakdown Items List */}
          <div className="space-y-2 text-[11px] min-w-0">
            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className="flex items-center gap-1.5 min-w-0 shrink">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                <span className="text-slate-300 font-medium whitespace-nowrap">Principal &amp; Interest</span>
              </span>
              <span className="font-extrabold text-slate-100 shrink-0">${piAmount.toLocaleString()}/mo</span>
            </div>

            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className="flex items-center gap-1.5 min-w-0 shrink">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-slate-300 font-medium whitespace-nowrap">Property Taxes</span>
              </span>
              <span className="font-extrabold text-slate-100 shrink-0">${monthlyTax.toLocaleString()}/mo</span>
            </div>

            <div className="flex items-center justify-between gap-1.5 min-w-0">
              <span className="flex items-center gap-1.5 min-w-0 shrink">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="text-slate-300 font-medium whitespace-nowrap">Homeowners Insurance</span>
              </span>
              <span className="font-extrabold text-slate-100 shrink-0">${monthlyInsurance.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Connect CTA Button */}
          <a 
            href="/contact" 
            className="mt-5 w-full py-3 px-2 text-center text-[11px] font-extrabold tracking-wider uppercase rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md leading-snug block"
          >
            Connect With Professional
          </a>
        </div>
      </div>
    </div>
  )
}
