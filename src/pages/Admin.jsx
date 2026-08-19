import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { useMortgagesContext } from '../context/MortgagesContext'
import SEO from '../components/SEO'

export default function AdminPage() {
  const {
    leads,
    isAdminLoggedIn,
    login,
    logout,
    clearAllLeads,
    deleteLead,
    updateLeadStatus,
    fetchLeads,
    isLoadingLeads,
    leadsError,
    isSupabaseConnected
  } = useMortgagesContext()

  // Login form state
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loginError, setLoginError] = useState('')

  // Filter state: 'all', 'Not Done Yet', 'In Progress', 'Done'
  const [statusFilter, setStatusFilter] = useState('all')

  // Export Leads to CSV (Compatible with Excel & Google Sheets)
  const exportToCSV = () => {
    if (leads.length === 0) {
      alert('No inquiries available to export.')
      return
    }

    const headers = [
      'Submission Date',
      'Borrower Name',
      'Email Address',
      'Phone Number',
      'Loan Goal / Purpose',
      'Property Type',
      'Estimated Loan Amount',
      'Credit Score Tier',
      'CRM Status',
      'Borrower Notes / Message'
    ]

    const rows = leads.map(lead => [
      lead.date || '',
      lead.fullName || lead.name || '',
      lead.email || '',
      lead.phone || '',
      lead.loanPurpose || lead.refiGoal || 'Purchase',
      lead.propertyType || 'Single Family',
      lead.estimatedPrice || lead.targetAmount || lead.estimatedBalance || '',
      lead.creditScore || '',
      lead.status || 'Not Done Yet',
      lead.message || ''
    ])

    const csvContent = [
      headers.map(h => `"${h.replace(/"/g, '""')}"`).join(','),
      ...rows.map(row => row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
    ].join('\r\n')

    // Include UTF-8 Byte Order Mark (BOM) so Excel & Google Sheets decode UTF-8 cleanly
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    const dateStr = new Date().toISOString().split('T')[0]
    link.setAttribute('href', url)
    link.setAttribute('download', `costar_mortgages_leads_${dateStr}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setLoginError('')
    const success = login(usernameInput, passwordInput)
    if (!success) {
      setLoginError('Invalid credentials. Access is restricted to authorized mortgage administrators.')
    }
  }

  // Count lead statuses
  const notDoneCount = leads.filter(l => (l.status === 'Not Done Yet' || l.status === 'New Inquiry' || !l.status)).length
  const inProgressCount = leads.filter(l => l.status === 'In Progress').length
  const doneCount = leads.filter(l => l.status === 'Done').length

  // Filtered leads
  const filteredLeads = leads.filter(lead => {
    if (statusFilter === 'all') return true
    if (statusFilter === 'Not Done Yet') {
      return lead.status === 'Not Done Yet' || lead.status === 'New Inquiry' || !lead.status
    }
    return lead.status === statusFilter
  })

  // 1. Unauthenticated Login Screen
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12">
        <SEO title="Admin Portal" noIndex={true} canonicalUrl="/admin" />
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 mb-4 shadow-lg p-2">
              <img src={siteConfig.logoWhite} alt="Co Star Mortgages" className="w-10 h-10 object-contain" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Co Star Mortgages Admin</h1>
            <p className="text-xs text-slate-500 mt-1">Sign in to manage borrower leads &amp; rate quotes</p>
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
                placeholder="Enter username"
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
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={siteConfig.logoWhite} alt="Logo" className="h-8 w-auto object-contain" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight leading-none">Co Star Mortgages Admin</h1>
                {isSupabaseConnected ? (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" title="Connected to Supabase cloud database">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Supabase Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30" title="Running in Local Storage fallback mode">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Local Mode
                  </span>
                )}
              </div>
              <span className="text-[10px] text-slate-400">Borrower Leads &amp; Inquiries CRM (Site ID: costar_mortgages)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            {isSupabaseConnected && (
              <button 
                onClick={fetchLeads}
                disabled={isLoadingLeads}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-pointer disabled:opacity-50"
                title="Refresh leads from Supabase"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 ${isLoadingLeads ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>{isLoadingLeads ? 'Refreshing...' : 'Refresh'}</span>
              </button>
            )}
            <Link to="/" target="_blank" className="px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700">
              View Public Website ↗
            </Link>
            <button onClick={logout} className="px-3.5 py-2 rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 cursor-pointer">
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8">
        {leadsError && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold">Database Notice:</span> {leadsError}
            </div>
            <button onClick={fetchLeads} className="font-bold underline cursor-pointer hover:text-amber-950">
              Retry Connection
            </button>
          </div>
        )}

        {/* Dynamic Lead Status Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div 
            onClick={() => setStatusFilter('all')}
            className={`bg-white p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${statusFilter === 'all' ? 'border-slate-900 ring-2 ring-slate-900/10' : 'border-slate-200'}`}
          >
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Inquiries</div>
            <div className="text-3xl font-black text-slate-900">{leads.length}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">All website submissions</div>
          </div>

          <div 
            onClick={() => setStatusFilter('Not Done Yet')}
            className={`bg-white p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${statusFilter === 'Not Done Yet' ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-200'}`}
          >
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Not Done Yet</div>
            <div className="text-3xl font-black text-amber-600">{notDoneCount}</div>
            <div className="text-[11px] text-amber-700/80 font-medium mt-1">Awaiting review &amp; contact</div>
          </div>

          <div 
            onClick={() => setStatusFilter('In Progress')}
            className={`bg-white p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${statusFilter === 'In Progress' ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200'}`}
          >
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">In Progress</div>
            <div className="text-3xl font-black text-blue-600">{inProgressCount}</div>
            <div className="text-[11px] text-blue-700/80 font-medium mt-1">Under review / contacted</div>
          </div>

          <div 
            onClick={() => setStatusFilter('Done')}
            className={`bg-white p-5 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${statusFilter === 'Done' ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-200'}`}
          >
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Done</div>
            <div className="text-3xl font-black text-emerald-600">{doneCount}</div>
            <div className="text-[11px] text-emerald-700/80 font-medium mt-1">Pre-approved / completed</div>
          </div>
        </div>

        {/* Inquiries Table Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-black text-slate-900">
                Incoming Pre-Approval &amp; Rate Quotes ({filteredLeads.length})
              </h2>
              <p className="text-xs text-slate-500">Manage lead statuses, contact details, and loan requirements.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {leads.length > 0 && (
                <>
                  <button
                    onClick={exportToCSV}
                    title="Download CSV spreadsheet file compatible with Excel and Google Sheets"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download CSV</span>
                  </button>

                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to clear all inquiries?')) {
                        clearAllLeads()
                      }
                    }}
                    className="px-3.5 py-2 bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-bold rounded-xl transition-all border border-rose-200 cursor-pointer"
                  >
                    Clear All
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 mr-1">Filter:</span>
            {[
              { id: 'all', label: `All (${leads.length})` },
              { id: 'Not Done Yet', label: `Not Done (${notDoneCount})` },
              { id: 'In Progress', label: `In Progress (${inProgressCount})` },
              { id: 'Done', label: `Done (${doneCount})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${statusFilter === tab.id ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-slate-400 text-xs space-y-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <div className="font-bold text-slate-600">No Inquiries Found</div>
              <p className="text-slate-400">
                {statusFilter === 'all' 
                  ? 'Borrower leads submitted through the landing page, quote calculator, or contact forms will appear here.'
                  : `No inquiries currently marked as "${statusFilter}".`}
              </p>
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
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  {filteredLeads.map((lead) => {
                    const currentStatus = lead.status || 'Not Done Yet'
                    return (
                      <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">{lead.date}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{lead.fullName || lead.name}</td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-800">{lead.email}</div>
                          <div className="text-slate-400">{lead.phone || 'No phone'}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold">
                            {lead.loanPurpose || lead.refiGoal || 'Purchase'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {lead.estimatedPrice || lead.targetAmount || lead.estimatedBalance || 'N/A'}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">{lead.creditScore || 'N/A'}</td>
                        <td className="py-3.5 px-4">
                          <select
                            value={currentStatus === 'New Inquiry' ? 'Not Done Yet' : currentStatus}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border cursor-pointer focus:outline-none transition-all ${
                              currentStatus === 'Done'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                : currentStatus === 'In Progress'
                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                : 'bg-amber-50 text-amber-700 border-amber-300'
                            }`}
                          >
                            <option value="Not Done Yet">Not Done Yet</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => deleteLead(lead.id)}
                            title="Delete Lead"
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
