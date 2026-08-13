import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loanPrograms } from '../data/mortgages'

export default function MortgageProgramsPage() {
  const [filterCategory, setFilterCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Loan Products' },
    { id: 'Standard Purchase', label: 'Standard Purchase' },
    { id: 'Government Backed', label: 'Government Backed' },
    { id: 'Veterans & Military', label: 'Veterans & Military' },
    { id: 'Refinancing', label: 'Refinancing' }
  ]

  const filteredPrograms = loanPrograms.filter(program => {
    const matchesCat = filterCategory === 'all' || program.category === filterCategory
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch = !q || 
      program.title.toLowerCase().includes(q) ||
      program.tagline.toLowerCase().includes(q) ||
      program.category.toLowerCase().includes(q)

    return matchesCat && matchesSearch
  })

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest">Co Star Mortgages Products</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2">
          Explore Home Loan Programs
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl text-base">
          Find the ideal mortgage tailored to your credit profile, down payment budget, and homeownership goals.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <div className="relative flex-1 max-w-md">
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
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${filterCategory === cat.id ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Loan Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  {program.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">{program.category}</span>
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{program.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{program.intro}</p>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center mb-6">
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Est. Rate</div>
                  <div className="text-lg font-black text-slate-900">{program.estRate}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Down Payment</div>
                  <div className="text-xs font-extrabold text-amber-600 truncate">{program.minDown}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Min Credit</div>
                  <div className="text-lg font-black text-slate-700">{program.minCreditScore}+</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">Key Highlights</div>
                {program.keyFeatures.slice(0, 3).map((feat, i) => (
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
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all"
              >
                Full Loan Specs
              </Link>
              <Link
                to="/contact"
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all"
              >
                Apply for {program.title.split(' ')[0]}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
