import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMortgagesContext } from '../context/MortgagesContext'

export default function RefinancePage() {
  const { submitLead } = useMortgagesContext()

  // Interactive Refinance Calculator state
  const [currentBalance, setCurrentBalance] = useState(400000)
  const [currentRate, setCurrentRate] = useState(7.25)
  const [newRate, setNewRate] = useState(5.875)
  const [estimatedClosingCosts, setEstimatedClosingCosts] = useState(3500)
  
  const [cashOutAmount, setCashOutAmount] = useState(0)

  // Calculations
  const currentMonthlyPI = (currentBalance * ((currentRate / 100 / 12) * Math.pow(1 + currentRate / 100 / 12, 360))) / (Math.pow(1 + currentRate / 100 / 12, 360) - 1)
  
  const newLoanTotal = currentBalance + cashOutAmount + estimatedClosingCosts
  const newMonthlyPI = (newLoanTotal * ((newRate / 100 / 12) * Math.pow(1 + newRate / 100 / 12, 360))) / (Math.pow(1 + newRate / 100 / 12, 360) - 1)

  const monthlySavings = Math.round(currentMonthlyPI - newMonthlyPI)
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(estimatedClosingCosts / monthlySavings) : 0

  const [openFaq, setOpenFaq] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [leadData, setLeadData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRate: '7.0%+',
    refiGoal: 'Lower Monthly Payment',
    estimatedBalance: '$400,000'
  })

  const handleRefiSubmit = (e) => {
    e.preventDefault()
    submitLead({
      loanPurpose: 'Refinance',
      ...leadData
    })
    setFormSubmitted(true)
  }

  const faqs = [
    {
      id: 'when-to-refi',
      question: 'When is the right time to refinance your mortgage?',
      answer: 'A general rule of thumb is if you can lower your interest rate by 0.50% to 0.75% or more, refinancing is usually worthwhile. It is also beneficial if you want to eliminate monthly PMI, switch from an ARM to a fixed-rate loan, or cash out built-up equity.'
    },
    {
      id: 'break-even',
      question: 'What is the refinancing break-even point?',
      answer: 'Your break-even point is the number of months it takes for your monthly interest savings to exceed the total closing costs of your new loan. For example, if closing costs are $3,000 and you save $200/month, your break-even point is 15 months.'
    },
    {
      id: 'cash-out',
      question: 'How does a Cash-Out Refinance work?',
      answer: 'A cash-out refinance replaces your existing mortgage with a new, larger loan. You receive the difference in lump-sum cash at closing, which can be used to pay off high-interest credit debt, complete home renovations, or invest.'
    }
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Title */}
      <section className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">Co Star Mortgages Refinance Portal</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Refinance Your Mortgage & Save
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Lower your monthly mortgage payments, access cash equity, or shorten your loan term with Co Star Mortgages.
        </p>
      </section>

      {/* Interactive Refinance Savings Calculator (Commented out per user request) */}
      {/*
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Instant Refinance Calculator</span>
          <h2 className="text-3xl font-black mt-1">See How Much You Could Save Monthly</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Current Mortgage Balance</span>
                <span className="text-amber-400">${currentBalance.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="100000" max="1500000" step="10000"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Current Interest Rate</span>
                  <span className="text-slate-300">{currentRate.toFixed(3)}%</span>
                </div>
                <input 
                  type="range" min="4.0" max="10.0" step="0.125"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>New Refinance Rate</span>
                  <span className="text-amber-400">{newRate.toFixed(3)}%</span>
                </div>
                <input 
                  type="range" min="4.0" max="9.0" step="0.125"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Optional Cash-Out Amount</span>
                <span className="text-amber-400">${cashOutAmount.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="0" max="200000" step="5000"
                value={cashOutAmount}
                onChange={(e) => setCashOutAmount(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="lg:col-span-5 w-full min-w-0 max-w-full overflow-hidden bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-800 text-center space-y-5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Monthly Savings</span>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight break-all px-2">
              {monthlySavings > 0 ? `$${monthlySavings}/mo` : '$0/mo'}
            </div>
            <p className="text-xs text-slate-400">
              Break-even timeline: <strong className="text-white">{breakEvenMonths} months</strong>
            </p>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-left min-w-0">
              <div className="flex flex-wrap justify-between items-center text-slate-400 gap-1">
                <span>Current Monthly P&I:</span>
                <span className="font-bold text-white">${Math.round(currentMonthlyPI).toLocaleString()}/mo</span>
              </div>
              <div className="flex flex-wrap justify-between items-center text-slate-400 gap-1">
                <span>New Monthly P&I:</span>
                <span className="font-bold text-amber-400">${Math.round(newMonthlyPI).toLocaleString()}/mo</span>
              </div>
            </div>

            <a 
              href="#refi-form"
              className="block w-full py-3.5 bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-all shadow-lg"
            >
              Connect with a Mortgage Professional
            </a>
          </div>
        </div>
      </section>
      */}

      {/* Refinance Inquiry Form */}
      <section id="refi-form" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg max-w-3xl mx-auto mb-20">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Request Official Refinance Quote</h2>
          <p className="text-xs text-slate-600 mt-2">Get a custom rate lock quote &amp; closing cost estimate in 24 hours.</p>
        </div>

        {formSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
            <h3 className="text-xl font-extrabold text-slate-900">Refinance Request Received!</h3>
            <p className="text-xs text-slate-600">A Co Star Mortgages specialist will review your property details and contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleRefiSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" required placeholder="John Smith"
                  value={leadData.fullName}
                  onChange={(e) => setLeadData({...leadData, fullName: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input 
                  type="email" required placeholder="john@example.com"
                  value={leadData.email}
                  onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" placeholder="(555) 000-0000"
                  value={leadData.phone}
                  onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Goal</label>
                <select 
                  value={leadData.refiGoal}
                  onChange={(e) => setLeadData({...leadData, refiGoal: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                >
                  <option value="Lower Monthly Payment">Lower Monthly Payment</option>
                  <option value="Cash-Out Equity">Cash-Out Equity</option>
                  <option value="Shorten Loan Term">Shorten Loan Term (e.g. 30yr to 15yr)</option>
                  <option value="Cancel PMI">Cancel Monthly PMI</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-all shadow-md"
            >
              Get Custom Refinance Quote
            </button>
          </form>
        )}
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900">Refinance FAQ</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id
            return (
              <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:text-amber-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-amber-500 font-bold">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
