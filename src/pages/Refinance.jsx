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
      question: 'When is the right time to refinance?',
      answer: 'Generally, if you can reduce your rate by 0.5% or more, shorten your term, remove monthly PMI, or tap into home equity, refinancing can be a smart move.'
    },
    {
      id: 'break-even',
      question: 'What is the break-even point?',
      answer: 'The break-even point is how long it takes for monthly savings to cover closing costs. For example, saving $200/month on $3,000 closing costs breaks even in 15 months.'
    },
    {
      id: 'cash-out',
      question: 'How does a Cash-Out Refinance work?',
      answer: 'A cash-out refinance replaces your current mortgage with a larger loan, giving you the difference in cash for renovations, investments, or debt payoff.'
    }
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Title */}
      <section className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Refinance Your Mortgage
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Lower your monthly payments, access equity, or shorten your loan term.
        </p>
      </section>

      {/* Refinance Inquiry Form */}
      <section id="refi-form" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg max-w-3xl mx-auto mb-20">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Request a Refinance Quote</h2>
          <p className="text-xs text-slate-600 mt-2">Get custom rate and closing cost options in 24 hours.</p>
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
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
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
