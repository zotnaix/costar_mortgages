import React, { useState } from 'react'

export default function MortgageCalculatorWidget({ title = "Interactive Mortgage Calculator", darkTheme = false }) {
  // State Variables & Initial Defaults
  const [loanTermYears, setLoanTermYears] = useState(30)
  const [homePrice, setHomePrice] = useState(450000)
  const [homePriceStr, setHomePriceStr] = useState("450,000")
  const [downPercent, setDownPercent] = useState(10)
  const [interestRate, setInterestRate] = useState(6.375)
  const [propertyTaxAnnual, setPropertyTaxAnnual] = useState(4500)
  const [taxStr, setTaxStr] = useState("4,500")
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(1800)
  const [insStr, setInsStr] = useState("1,800")
  const [hoaMonthly, setHoaMonthly] = useState(0)
  const [hoaStr, setHoaStr] = useState("0")

  // Handlers for Home Purchase Price
  const handleHomePriceSliderChange = (val) => {
    const num = Math.max(0, Number(val) || 0)
    setHomePrice(num)
    setHomePriceStr(num.toLocaleString('en-US'))
  }

  const handleHomePriceTextChange = (str) => {
    setHomePriceStr(str)
    const cleanDigits = str.replace(/[^0-9]/g, '')
    const num = Math.max(0, Number(cleanDigits) || 0)
    setHomePrice(num)
  }

  const handleHomePriceBlur = () => {
    setHomePriceStr(homePrice.toLocaleString('en-US'))
  }

  // Handlers for Down Payment
  const handleDownPercentChange = (val) => {
    const num = val === '' ? 0 : Math.max(0, Math.min(50, Number(val)))
    setDownPercent(num)
  }

  // Handlers for Interest Rate
  const handleInterestRateChange = (val) => {
    const num = val === '' ? 0 : Math.max(0, Math.min(15, Number(val)))
    setInterestRate(num)
  }

  // Handlers for Property Tax
  const handleTaxTextChange = (str) => {
    setTaxStr(str)
    const cleanDigits = str.replace(/[^0-9]/g, '')
    const num = Math.max(0, Number(cleanDigits) || 0)
    setPropertyTaxAnnual(num)
  }

  const handleTaxBlur = () => {
    setTaxStr(propertyTaxAnnual.toLocaleString('en-US'))
  }

  // Handlers for Home Insurance
  const handleInsTextChange = (str) => {
    setInsStr(str)
    const cleanDigits = str.replace(/[^0-9]/g, '')
    const num = Math.max(0, Number(cleanDigits) || 0)
    setHomeInsuranceAnnual(num)
  }

  const handleInsBlur = () => {
    setInsStr(homeInsuranceAnnual.toLocaleString('en-US'))
  }

  // Handlers for HOA
  const handleHoaTextChange = (str) => {
    setHoaStr(str)
    const cleanDigits = str.replace(/[^0-9]/g, '')
    const num = Math.max(0, Number(cleanDigits) || 0)
    setHoaMonthly(num)
  }

  const handleHoaBlur = () => {
    setHoaStr(hoaMonthly.toLocaleString('en-US'))
  }

  // 1. Loan Amount (P) = Home Price - Down Payment Dollar Amount
  const downPaymentAmount = Math.round((homePrice * downPercent) / 100)
  const loanAmount = Math.max(0, homePrice - downPaymentAmount)

  // 2. Monthly Principal & Interest (M)
  const r = (Number(interestRate) || 0) / 100 / 12
  const n = (Number(loanTermYears) || 30) * 12

  let monthlyPrincipalInterest = 0
  if (loanAmount <= 0 || n <= 0) {
    monthlyPrincipalInterest = 0
  } else if (r <= 0) {
    monthlyPrincipalInterest = loanAmount / n
  } else {
    monthlyPrincipalInterest = (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)
  }

  if (isNaN(monthlyPrincipalInterest) || !isFinite(monthlyPrincipalInterest)) {
    monthlyPrincipalInterest = 0
  }

  // 3. Monthly Breakdown Elements
  const monthlyTax = (Number(propertyTaxAnnual) || 0) / 12
  const monthlyInsurance = (Number(homeInsuranceAnnual) || 0) / 12
  const monthlyHoa = Number(hoaMonthly) || 0

  // 4. Total Monthly Payment
  const totalMonthlyPayment = monthlyPrincipalInterest + monthlyTax + monthlyInsurance + monthlyHoa

  const displayPi = Math.round(monthlyPrincipalInterest)
  const displayTax = Math.round(monthlyTax)
  const displayInsurance = Math.round(monthlyInsurance)
  const displayHoa = Math.round(monthlyHoa)
  const displayTotal = Math.round(totalMonthlyPayment)

  // 5. Payment Breakdown Percentages
  const piShare = totalMonthlyPayment > 0 ? (monthlyPrincipalInterest / totalMonthlyPayment) * 100 : 0
  const taxShare = totalMonthlyPayment > 0 ? (monthlyTax / totalMonthlyPayment) * 100 : 0
  const insShare = totalMonthlyPayment > 0 ? (monthlyInsurance / totalMonthlyPayment) * 100 : 0
  const hoaShare = totalMonthlyPayment > 0 ? (monthlyHoa / totalMonthlyPayment) * 100 : 0

  // Format currency helper
  const formatCurrency = (val) => Number(val).toLocaleString('en-US')

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 font-body">
      {/* Main Calculator Card */}
      <div className={`p-5 sm:p-7 rounded-3xl w-full overflow-hidden transition-colors ${
        darkTheme 
          ? 'bg-[#0d1629] text-white border border-[#1d3465] shadow-2xl backdrop-blur-md' 
          : 'bg-white text-slate-900 border border-slate-200/80 shadow-xl'
      }`}>
        {/* Header Bar */}
        <div className={`flex flex-wrap items-center justify-between pb-4 mb-6 border-b gap-3 min-w-0 ${
          darkTheme ? 'border-[#1d3465]' : 'border-slate-200'
        }`}>
          <div className="min-w-0 flex-1">
            <h3 className={`text-[19px] sm:text-[22px] font-heading font-bold tracking-tight leading-snug ${
              darkTheme ? 'text-white' : 'text-[#0d101d]'
            }`}>
              {title}
            </h3>
          </div>

          {/* Loan Term Toggle: 30-Yr Fixed vs 15-Yr Fixed */}
          <div className={`flex items-center gap-1.5 p-1 rounded-2xl shrink-0 ${
            darkTheme ? 'bg-[#0d101d] border border-[#1d3465]' : 'bg-slate-100 border border-slate-200'
          }`}>
            <button 
              type="button"
              id="calc-term-30"
              onClick={() => setLoanTermYears(30)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                loanTermYears === 30 
                  ? 'bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] text-[#0d101d] shadow-md font-black' 
                  : darkTheme 
                    ? 'text-[#738fc6] hover:text-white hover:bg-[#1d3465]/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              30-Yr Fixed
            </button>
            <button 
              type="button"
              id="calc-term-15"
              onClick={() => setLoanTermYears(15)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                loanTermYears === 15 
                  ? 'bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] text-[#0d101d] shadow-md font-black' 
                  : darkTheme 
                    ? 'text-[#738fc6] hover:text-white hover:bg-[#1d3465]/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              15-Yr Fixed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr] gap-6 sm:gap-7 items-stretch min-w-0">
          {/* Controls Column (~60%) */}
          <div className="space-y-5 min-w-0 w-full">
            {/* Home Purchase Price */}
            <div className="min-w-0">
              <div className="flex items-center justify-between text-[14px] mb-2 gap-2">
                <label htmlFor="home-price-input" className={`font-semibold ${darkTheme ? 'text-slate-200' : 'text-slate-700'}`}>
                  Home Purchase Price
                </label>
                <div className={`inline-flex items-center px-3 py-1.5 rounded-xl border transition-all ${
                  darkTheme 
                    ? 'bg-[#0d101d] border-[#1d3465] focus-within:border-[#f39c0a] focus-within:ring-1 focus-within:ring-[#f39c0a]/25' 
                    : 'bg-slate-50 border-slate-300 focus-within:border-[#f39c0a] shadow-sm'
                }`}>
                  <span className="font-bold text-[#fac536] text-[16px] mr-1 select-none">$</span>
                  <input 
                    id="home-price-input"
                    type="text"
                    inputMode="numeric"
                    value={homePriceStr}
                    onChange={(e) => handleHomePriceTextChange(e.target.value)}
                    onBlur={handleHomePriceBlur}
                    className="w-32 sm:w-36 bg-transparent text-right font-black text-[#fac536] text-[16px] focus:outline-none tracking-tight pr-0.5"
                  />
                </div>
              </div>
              <input 
                id="home-price-slider"
                type="range" 
                min="50000" 
                max="2500000" 
                step="5000" 
                value={homePrice} 
                onChange={(e) => handleHomePriceSliderChange(e.target.value)}
                className="w-full cursor-pointer accent-[#f39c0a] h-2 bg-[#1d3465] rounded-lg"
              />
              <div className={`flex justify-between text-[12px] mt-1.5 font-medium ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>
                <span>$50k</span>
                <span>$1.25M</span>
                <span>$2.5M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="min-w-0">
              <div className="flex items-center justify-between text-[14px] mb-2 gap-2">
                <label htmlFor="down-percent-input" className={`font-semibold truncate ${darkTheme ? 'text-slate-200' : 'text-slate-700'}`}>
                  Down Payment
                </label>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className={`text-[14px] font-semibold ${darkTheme ? 'text-slate-300' : 'text-slate-600'}`}>
                    ${formatCurrency(downPaymentAmount)}
                  </span>
                  <div className={`inline-flex items-center px-2.5 py-1 rounded-xl border transition-all ${
                    darkTheme 
                      ? 'bg-[#0d101d] border-[#1d3465] focus-within:border-[#f39c0a] focus-within:ring-1 focus-within:ring-[#f39c0a]/25' 
                      : 'bg-slate-50 border-slate-300 focus-within:border-[#f39c0a] shadow-sm'
                  }`}>
                    <input 
                      id="down-percent-input"
                      type="number" 
                      min="0" 
                      max="50" 
                      step="1" 
                      value={downPercent === 0 ? '0' : (downPercent || '')} 
                      onChange={(e) => handleDownPercentChange(e.target.value)}
                      className="w-12 bg-transparent text-right font-black text-[#fac536] text-[16px] focus:outline-none"
                    />
                    <span className="font-bold text-[#fac536] text-[16px] ml-0.5 select-none">%</span>
                  </div>
                </div>
              </div>
              <input 
                id="down-payment-slider"
                type="range" 
                min="0" 
                max="50" 
                step="1" 
                value={downPercent} 
                onChange={(e) => handleDownPercentChange(e.target.value)}
                className="w-full cursor-pointer accent-[#f39c0a] h-2 bg-[#1d3465] rounded-lg"
              />
              <div className={`flex justify-between text-[12px] mt-1.5 font-medium ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>
                <span>0% ($0)</span>
                <span>20% (${formatCurrency(Math.round(homePrice * 0.2))})</span>
                <span>50% (${formatCurrency(Math.round(homePrice * 0.5))})</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="min-w-0">
              <div className="flex items-center justify-between text-[14px] mb-2 gap-2">
                <label htmlFor="interest-rate-input" className={`font-semibold ${darkTheme ? 'text-slate-200' : 'text-slate-700'}`}>
                  Interest Rate
                </label>
                <div className={`inline-flex items-center px-3 py-1 rounded-xl border transition-all ${
                  darkTheme 
                    ? 'bg-[#0d101d] border-[#1d3465] focus-within:border-[#f39c0a] focus-within:ring-1 focus-within:ring-[#f39c0a]/25' 
                    : 'bg-slate-50 border-slate-300 focus-within:border-[#f39c0a] shadow-sm'
                }`}>
                  <input 
                    id="interest-rate-input"
                    type="number" 
                    min="1.0" 
                    max="15.0" 
                    step="0.125" 
                    value={interestRate === 0 ? '0' : (interestRate || '')} 
                    onChange={(e) => handleInterestRateChange(e.target.value)}
                    className="w-16 bg-transparent text-right font-black text-[#fac536] text-[16px] focus:outline-none"
                  />
                  <span className="font-bold text-[#fac536] text-[16px] ml-0.5 select-none">%</span>
                </div>
              </div>
              <input 
                id="interest-rate-slider"
                type="range" 
                min="1.0" 
                max="15.0" 
                step="0.125" 
                value={interestRate} 
                onChange={(e) => handleInterestRateChange(e.target.value)}
                className="w-full cursor-pointer accent-[#f39c0a] h-2 bg-[#1d3465] rounded-lg"
              />
              <div className={`flex justify-between text-[12px] mt-1.5 font-medium ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>
                <span>1.000%</span>
                <span>7.500%</span>
                <span>15.000%</span>
              </div>
            </div>

            {/* Taxes, Insurance & HOA Input Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 min-w-0">
              {/* Annual Tax */}
              <div className={`min-w-0 p-3 sm:p-3.5 rounded-2xl border flex flex-col justify-between ${
                darkTheme ? 'bg-[#0d101d] border-[#1d3465]' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="min-w-0">
                  <label htmlFor="calc-annual-tax" className={`block text-[13px] font-bold mb-1.5 truncate ${
                    darkTheme ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Annual Tax
                  </label>
                  <div className={`flex items-center justify-between px-2 sm:px-2.5 py-1.5 rounded-xl border transition-all min-w-0 ${
                    darkTheme 
                      ? 'bg-[#0d1629] border-[#1d3465] focus-within:border-[#f39c0a] focus-within:ring-1 focus-within:ring-[#f39c0a]/25' 
                      : 'bg-white border-slate-300 focus-within:border-[#f39c0a] shadow-sm'
                  }`}>
                    <span className={`text-[14px] sm:text-[15px] font-semibold select-none shrink-0 ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>$</span>
                    <input 
                      id="calc-annual-tax"
                      type="text" 
                      inputMode="numeric"
                      value={taxStr}
                      onChange={(e) => handleTaxTextChange(e.target.value)}
                      onBlur={handleTaxBlur}
                      className={`w-full min-w-0 bg-transparent text-[15px] sm:text-[16px] font-bold text-right focus:outline-none pl-1 ${
                        darkTheme ? 'text-white' : 'text-slate-900'
                      }`}
                    />
                  </div>
                </div>
                <span className={`block text-[12px] mt-2 font-medium ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>
                  ${formatCurrency(displayTax)}/mo
                </span>
              </div>

              {/* Annual Ins. */}
              <div className={`min-w-0 p-3 sm:p-3.5 rounded-2xl border flex flex-col justify-between ${
                darkTheme ? 'bg-[#0d101d] border-[#1d3465]' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="min-w-0">
                  <label htmlFor="calc-annual-ins" className={`block text-[13px] font-bold mb-1.5 truncate ${
                    darkTheme ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Annual Ins.
                  </label>
                  <div className={`flex items-center justify-between px-2 sm:px-2.5 py-1.5 rounded-xl border transition-all min-w-0 ${
                    darkTheme 
                      ? 'bg-[#0d1629] border-[#1d3465] focus-within:border-[#f39c0a] focus-within:ring-1 focus-within:ring-[#f39c0a]/25' 
                      : 'bg-white border-slate-300 focus-within:border-[#f39c0a] shadow-sm'
                  }`}>
                    <span className={`text-[14px] sm:text-[15px] font-semibold select-none shrink-0 ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>$</span>
                    <input 
                      id="calc-annual-ins"
                      type="text" 
                      inputMode="numeric"
                      value={insStr}
                      onChange={(e) => handleInsTextChange(e.target.value)}
                      onBlur={handleInsBlur}
                      className={`w-full min-w-0 bg-transparent text-[15px] sm:text-[16px] font-bold text-right focus:outline-none pl-1 ${
                        darkTheme ? 'text-white' : 'text-slate-900'
                      }`}
                    />
                  </div>
                </div>
                <span className={`block text-[12px] mt-2 font-medium ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>
                  ${formatCurrency(displayInsurance)}/mo
                </span>
              </div>

              {/* Monthly HOA */}
              <div className={`min-w-0 p-3 sm:p-3.5 rounded-2xl border flex flex-col justify-between ${
                darkTheme ? 'bg-[#0d101d] border-[#1d3465]' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="min-w-0">
                  <label htmlFor="calc-monthly-hoa" className={`block text-[13px] font-bold mb-1.5 truncate ${
                    darkTheme ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Monthly HOA
                  </label>
                  <div className={`flex items-center justify-between px-2 sm:px-2.5 py-1.5 rounded-xl border transition-all min-w-0 ${
                    darkTheme 
                      ? 'bg-[#0d1629] border-[#1d3465] focus-within:border-[#f39c0a] focus-within:ring-1 focus-within:ring-[#f39c0a]/25' 
                      : 'bg-white border-slate-300 focus-within:border-[#f39c0a] shadow-sm'
                  }`}>
                    <span className={`text-[14px] sm:text-[15px] font-semibold select-none shrink-0 ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>$</span>
                    <input 
                      id="calc-monthly-hoa"
                      type="text" 
                      inputMode="numeric"
                      value={hoaStr}
                      onChange={(e) => handleHoaTextChange(e.target.value)}
                      onBlur={handleHoaBlur}
                      placeholder="0"
                      className={`w-full min-w-0 bg-transparent text-[15px] sm:text-[16px] font-bold text-right focus:outline-none pl-1 ${
                        darkTheme ? 'text-white' : 'text-slate-900'
                      }`}
                    />
                  </div>
                </div>
                <span className={`block text-[12px] mt-2 font-medium ${darkTheme ? 'text-[#738fc6]' : 'text-slate-500'}`}>
                  ${formatCurrency(displayHoa)}/mo
                </span>
              </div>
            </div>
          </div>

          {/* Payment Summary Box (~40%) */}
          <div className="w-full max-w-full min-w-0 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0d101d] text-white border border-[#1d3465] shadow-2xl space-y-5">
            {/* Total Monthly Payment Header */}
            <div className="text-center pb-4 border-b border-[#1d3465] min-w-0">
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#738fc6]">
                Total Monthly Payment
              </span>
              
              <div className="mt-1.5 flex items-baseline justify-center gap-1.5 flex-wrap min-w-0">
                <span className="text-[32px] sm:text-[38px] font-heading font-black text-[#fac536] tracking-tight whitespace-nowrap">
                  ${formatCurrency(displayTotal)}
                </span>
                <span className="text-[14px] font-bold text-[#738fc6] shrink-0">/mo</span>
              </div>

              <p className="text-[13px] text-[#738fc6] mt-1.5">
                Loan Amount: <strong className="text-slate-200 font-semibold">${formatCurrency(loanAmount)}</strong>
              </p>
            </div>

            {/* Breakdown Progress Bar */}
            <div className="min-w-0 space-y-2">
              <div className="flex justify-between text-[13px] font-semibold text-[#738fc6]">
                <span>Payment Breakdown</span>
                <span>100%</span>
              </div>
              <div className="h-3.5 w-full bg-[#0d1629] border border-[#1d3465] rounded-full overflow-hidden flex shadow-inner">
                <div 
                  style={{ width: `${piShare}%` }} 
                  className="bg-[#f39c0a] h-full transition-all duration-300 ease-out" 
                  title={`Principal & Interest: ${piShare.toFixed(1)}%`}
                ></div>
                <div 
                  style={{ width: `${taxShare}%` }} 
                  className="bg-[#738fc6] h-full transition-all duration-300 ease-out" 
                  title={`Property Taxes: ${taxShare.toFixed(1)}%`}
                ></div>
                <div 
                  style={{ width: `${insShare}%` }} 
                  className="bg-[#1d3465] h-full transition-all duration-300 ease-out" 
                  title={`Home Insurance: ${insShare.toFixed(1)}%`}
                ></div>
                {monthlyHoa > 0 && (
                  <div 
                    style={{ width: `${hoaShare}%` }} 
                    className="bg-[#fabe22] h-full transition-all duration-300 ease-out" 
                    title={`HOA Fees: ${hoaShare.toFixed(1)}%`}
                  ></div>
                )}
              </div>
            </div>

            {/* Breakdown Items List */}
            <div className="space-y-3 text-[13px] min-w-0 pt-1">
              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f39c0a] shrink-0"></span>
                  <span className="text-slate-300 font-medium whitespace-normal">Principal &amp; Interest ({piShare.toFixed(0)}%)</span>
                </div>
                <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">
                  ${formatCurrency(displayPi)}/mo
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#738fc6] shrink-0"></span>
                  <span className="text-slate-300 font-medium whitespace-normal">Property Taxes ({taxShare.toFixed(0)}%)</span>
                </div>
                <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">
                  ${formatCurrency(displayTax)}/mo
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1d3465] border border-[#738fc6]/40 shrink-0"></span>
                  <span className="text-slate-300 font-medium whitespace-normal">Home Insurance ({insShare.toFixed(0)}%)</span>
                </div>
                <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">
                  ${formatCurrency(displayInsurance)}/mo
                </span>
              </div>

              {monthlyHoa > 0 && (
                <div className="flex items-center justify-between gap-3 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fabe22] shrink-0"></span>
                    <span className="text-slate-300 font-medium whitespace-normal">HOA Dues ({hoaShare.toFixed(0)}%)</span>
                  </div>
                  <span className="font-extrabold text-white text-right shrink-0 whitespace-nowrap">
                    ${formatCurrency(displayHoa)}/mo
                  </span>
                </div>
              )}
            </div>

            {/* Connect CTA Button */}
            <a 
              href="/contact" 
              className="w-full py-3.5 px-3 text-center text-[13px] font-black tracking-wider uppercase rounded-xl bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] text-[#0d101d] hover:from-[#fabe22] hover:to-[#fac536] transition-all shadow-md leading-snug block cursor-pointer"
            >
              Get Pre-Approved
            </a>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer Text */}
      <p className={`mt-3 text-[12px] leading-relaxed text-center px-4 max-w-2xl mx-auto ${
        darkTheme ? 'text-[#738fc6]' : 'text-slate-500'
      }`}>
        Disclaimer: Calculations are estimates for illustrative purposes only and do not constitute a loan commitment. Actual interest rates, payments, and fees may vary based on creditworthiness, loan program, and final underwriting.
      </p>
    </div>
  )
}
