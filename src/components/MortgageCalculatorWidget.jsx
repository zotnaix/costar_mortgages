import React, { useState } from 'react'

export default function MortgageCalculatorWidget({ title = "Interactive Mortgage Calculator", darkTheme = false }) {
  const [homePrice, setHomePrice] = useState(450000)
  const [downPercent, setDownPercent] = useState(10)
  const [interestRate, setInterestRate] = useState(6.375)
  const [loanTermYears, setLoanTermYears] = useState(30)
  const [propertyTaxAnnual, setPropertyTaxAnnual] = useState(4500)
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(1800)
  const [hoaMonthly, setHoaMonthly] = useState(0)

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
  const monthlyHoa = Math.max(0, Math.round(Number(hoaMonthly) || 0))
  const totalMonthlyPayment = Math.round(monthlyPrincipalInterest + monthlyTax + monthlyInsurance + monthlyHoa)
  const piAmount = Math.round(monthlyPrincipalInterest)

  // Chart percentages
  const piPercent = Math.round((piAmount / (totalMonthlyPayment || 1)) * 100)
  const taxPercent = Math.round((monthlyTax / (totalMonthlyPayment || 1)) * 100)
  const insPercent = Math.round((monthlyInsurance / (totalMonthlyPayment || 1)) * 100)
  const hoaPercent = Math.max(0, 100 - piPercent - taxPercent - insPercent)

  return (
    <div className={`p-5 sm:p-7 rounded-3xl w-full max-w-full overflow-hidden ${darkTheme ? 'bg-slate-900/95 text-white border border-slate-800 shadow-2xl backdrop-blur-md' : 'bg-white text-slate-900 border border-slate-200/80 shadow-xl'}`}>
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-slate-700/60 gap-3 min-w-0">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">{title}</h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button 
            type="button"
            onClick={() => setLoanTermYears(30)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanTermYears === 30 ? 'bg-amber-500 text-slate-950 shadow-md font-black' : darkTheme ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            30-Yr Fixed
          </button>
          <button 
            type="button"
            onClick={() => setLoanTermYears(15)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${loanTermYears === 15 ? 'bg-amber-500 text-slate-950 shadow-md font-black' : darkTheme ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            15-Yr Fixed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start min-w-0">
        {/* Controls Column */}
        <div className="md:col-span-7 space-y-5 min-w-0 w-full">
          {/* Home Price */}
          <div className="min-w-0">
            <div className="flex justify-between items-center text-xs mb-2">
              <label className="font-semibold text-slate-300">Home Purchase Price</label>
              <span className="font-black text-amber-400 text-sm tracking-wide">${homePrice.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="100000" 
              max="2000000" 
              step="5000" 
              value={homePrice} 
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>

          {/* Down Payment */}
          <div className="min-w-0">
            <div className="flex justify-between items-center text-xs mb-2">
              <label className="font-semibold text-slate-300">Down Payment ({downPercent}%)</label>
              <span className="font-black text-amber-400 text-sm tracking-wide">${downPaymentAmount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50" 
              step="1" 
              value={downPercent} 
              onChange={(e) => setDownPercent(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>

          {/* Interest Rate */}
          <div className="min-w-0">
            <div className="flex justify-between items-center text-xs mb-2">
              <label className="font-semibold text-slate-300">Interest Rate</label>
              <span className="font-black text-amber-400 text-sm tracking-wide">{interestRate.toFixed(3)}%</span>
            </div>
            <input 
              type="range" 
              min="3.5" 
              max="10.0" 
              step="0.125" 
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>

          {/* Taxes, Insurance & HOA Input Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="min-w-0 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/60">
              <label className="block text-[11px] font-bold text-slate-300 mb-1">Annual Tax ($)</label>
              <input 
                type="number" 
                min="0"
                value={propertyTaxAnnual}
                onChange={(e) => setPropertyTaxAnnual(Number(e.target.value))}
                className="w-full px-2.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="min-w-0 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/60">
              <label className="block text-[11px] font-bold text-slate-300 mb-1">Annual Ins. ($)</label>
              <input 
                type="number" 
                min="0"
                value={homeInsuranceAnnual}
                onChange={(e) => setHomeInsuranceAnnual(Number(e.target.value))}
                className="w-full px-2.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="min-w-0 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/60">
              <label className="block text-[11px] font-bold text-slate-300 mb-1">Monthly HOA ($)</label>
              <input 
                type="number" 
                min="0"
                value={hoaMonthly}
                onChange={(e) => setHoaMonthly(Number(e.target.value))}
                placeholder="0"
                className="w-full px-2.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        </div>

        {/* Payment Summary Box */}
        <div className="md:col-span-5 w-full max-w-full min-w-0 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-950 text-white border border-amber-500/30 shadow-2xl overflow-hidden space-y-4">
          {/* Total Monthly Payment Header */}
          <div className="text-center pb-4 border-b border-slate-800 min-w-0">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Total Monthly Payment</span>
            
            <div className="mt-1.5 flex items-baseline justify-center gap-1.5 flex-wrap min-w-0">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight whitespace-nowrap">
                ${totalMonthlyPayment.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-slate-400 shrink-0">/mo</span>
            </div>

            <p className="text-[11px] text-slate-400 mt-1">
              Loan Amount: <strong className="text-slate-200">${loanAmount.toLocaleString()}</strong>
            </p>
          </div>

          {/* Breakdown Progress Bar */}
          <div className="min-w-0 space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-400">
              <span>Payment Breakdown</span>
              <span>100%</span>
            </div>
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div style={{ width: `${piPercent}%` }} className="bg-amber-500 h-full" title="Principal & Interest"></div>
              <div style={{ width: `${taxPercent}%` }} className="bg-blue-500 h-full" title="Property Taxes"></div>
              <div style={{ width: `${insPercent}%` }} className="bg-emerald-500 h-full" title="Homeowners Insurance"></div>
              {monthlyHoa > 0 && (
                <div style={{ width: `${hoaPercent}%` }} className="bg-indigo-500 h-full" title="HOA Fees"></div>
              )}
            </div>
          </div>

          {/* Breakdown Items List */}
          <div className="space-y-3 text-xs min-w-0 pt-1">
            <div className="grid grid-cols-[1fr_auto] items-center gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                <span className="text-slate-300 font-medium truncate">Principal &amp; Interest</span>
              </div>
              <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">${piAmount.toLocaleString()}/mo</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-slate-300 font-medium truncate">Property Taxes</span>
              </div>
              <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">${monthlyTax.toLocaleString()}/mo</span>
            </div>

            <div className="grid grid-cols-[1fr_auto] items-center gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="text-slate-300 font-medium truncate">Home Insurance</span>
              </div>
              <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">${monthlyInsurance.toLocaleString()}/mo</span>
            </div>

            {monthlyHoa > 0 && (
              <div className="grid grid-cols-[1fr_auto] items-center gap-2 min-w-0">
                <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0"></span>
                  <span className="text-slate-300 font-medium truncate">HOA Dues</span>
                </div>
                <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">${monthlyHoa.toLocaleString()}/mo</span>
              </div>
            )}
          </div>

          {/* Connect CTA Button */}
          <a 
            href="/contact" 
            className="w-full py-3.5 px-3 text-center text-xs font-black tracking-wider uppercase rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md leading-snug block cursor-pointer"
          >
            Get Pre-Approved
          </a>
        </div>
      </div>
    </div>
  )
}
