import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loanPrograms } from '../data/mortgages'

export default function MortgageProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPrograms = loanPrograms.filter(program => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return true
    return (
      program.title.toLowerCase().includes(q) ||
      program.tagline.toLowerCase().includes(q) ||
      program.intro.toLowerCase().includes(q)
    )
  })

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Explore Home Loan Programs
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl text-base">
          Find the ideal mortgage program for your purchase or refinance goals.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search loan products (e.g. FHA, VA, Conventional)..."
            className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
        <div className="hidden sm:block text-xs font-bold text-slate-400">
          Showing {filteredPrograms.length} of {loanPrograms.length} programs
        </div>
      </div>

      {/* Grid of Loan Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{program.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{program.intro}</p>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">Key Highlights</div>
                {program.keyFeatures.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/mortgages/${program.id}`}
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                View Details
              </Link>
              <Link
                to="/contact"
                className="flex-1 py-3 text-center text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02]"
              >
                Get Pre-Approved
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
