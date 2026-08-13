import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { useMortgagesContext } from '../context/MortgagesContext'

export default function AdminPage() {
  const {
    loanPrograms,
    recentFundedLoans,
    leads,
    testimonials,
    isAdminLoggedIn,
    login,
    logout
  } = useMortgagesContext()

  // Login form state
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loginError, setLoginError] = useState('')

  // Active tab: 'rates', 'leads', 'programs'
  const [activeTab, setActiveTab] = useState('leads')

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setLoginError('')
    const success = login(usernameInput, passwordInput)
    if (!success) {
      setLoginError('Invalid username or password. Use admin / admin.')
    }
  }

  // 1. Unauthenticated Login Screen
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 mb-4 shadow-lg">
              <img src="/logo.svg" alt="Co Star Mortgages" className="w-10 h-10 object-contain" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Co Star Mortgages Admin</h1>
            <p className="text-xs text-slate-500 mt-1">Sign in to manage interest rates, borrower leads, &amp; loan products</p>
          </div>

          {loginError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Username
              </label>
              <input
                type="text"
                required
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="admin"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="admin"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              Sign In to Control Panel
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-slate-100">
            <Link to="/" className="text-xs text-slate-500 hover:text-slate-900 font-medium">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-slate-950 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-white.svg" alt="Logo" className="h-8 w-auto" />
            <div>
              <h1 className="text-lg font-black tracking-tight leading-none">Co Star Mortgages Admin</h1>
              <span className="text-[10px] text-slate-400">Origination &amp; Rate Control Panel</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link to="/" target="_blank" className="px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700">
              View Public Website ↗
            </Link>
            <button onClick={logout} className="px-3.5 py-2 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30">
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Borrower Leads</div>
            <div className="text-2xl font-black text-slate-900">{leads.length}</div>
            <div className="text-[11px] text-amber-600 font-medium mt-1">Pre-Approval Requests</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Loan Products</div>
            <div className="text-2xl font-black text-slate-900">{loanPrograms.length}</div>
            <div className="text-[11px] text-emerald-600 font-medium mt-1">Core 4 Active</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Funded Track Record</div>
            <div className="text-2xl font-black text-slate-900">{recentFundedLoans.length}</div>
            <div className="text-[11px] text-blue-600 font-medium mt-1">Closed Deals</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">NMLS Status</div>
            <div className="text-sm font-black text-emerald-600">Active #100025421</div>
            <div className="text-[11px] text-slate-400 mt-1">Equal Housing Lender</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 mb-6 flex gap-4">
          <button
            onClick={() => setActiveTab('leads')}
            className={`pb-3 px-4 text-xs font-extrabold uppercase tracking-wider border-b-2 ${activeTab === 'leads' ? 'border-amber-500 text-amber-600' : 'border-transparent text-slate-500'}`}
          >
            Borrower Pre-Approval Leads ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('rates')}
            className={`pb-3 px-4 text-xs font-extrabold uppercase tracking-wider border-b-2 ${activeTab === 'rates' ? 'border-amber-500 text-amber-600' : 'border-transparent text-slate-500'}`}
          >
            Daily Rate Benchmarks
          </button>
          <button
            onClick={() => setActiveTab('programs')}
            className={`pb-3 px-4 text-xs font-extrabold uppercase tracking-wider border-b-2 ${activeTab === 'programs' ? 'border-amber-500 text-amber-600' : 'border-transparent text-slate-500'}`}
          >
            Loan Programs ({loanPrograms.length})
          </button>
        </div>

        {/* Tab Content: Borrower Leads */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-black text-slate-900 mb-4">Incoming Pre-Approval &amp; Rate Quotes</h2>

            {leads.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs">
                No borrower lead inquiries received yet. Leads submitted through `/contact` and `/` pre-approval forms will appear here.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Borrower Name</th>
                      <th className="py-3 px-4">Contact Info</th>
                      <th className="py-3 px-4">Goal / Purpose</th>
                      <th className="py-3 px-4">Est. Amount</th>
                      <th className="py-3 px-4">Credit Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 text-slate-500">{lead.date}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{lead.fullName || lead.name}</td>
                        <td className="py-3.5 px-4">
                          <div>{lead.email}</div>
                          <div className="text-slate-400">{lead.phone || 'No phone'}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 font-bold">{lead.loanPurpose || lead.refiGoal}</span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{lead.estimatedPrice || lead.targetAmount || lead.estimatedBalance}</td>
                        <td className="py-3.5 px-4 text-slate-600">{lead.creditScore || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Daily Rate Benchmarks */}
        {activeTab === 'rates' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-black text-slate-900">Live Interest Rate Ticker Data</h2>
                <p className="text-xs text-slate-500">Configured in `src/config/siteConfig.js`</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.rateBenchmarks.map((rate, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 text-white space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{rate.term}</div>
                  <div className="text-3xl font-black text-amber-400">{rate.rate.toFixed(3)}%</div>
                  <div className="text-xs text-slate-300">Est. APR: {rate.apr.toFixed(3)}%</div>
                  <span className="inline-block text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                    Daily Change: {rate.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Loan Programs */}
        {activeTab === 'programs' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-lg font-black text-slate-900">Active Core 4 Loan Offerings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {loanPrograms.map((prog) => (
                <div key={prog.id} className="p-6 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-amber-600">{prog.badge}</span>
                    <span className="text-xs text-slate-400">{prog.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{prog.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{prog.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
