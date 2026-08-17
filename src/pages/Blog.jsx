import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogPage() {
  const [filterCategory, setFilterCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Homebuying Preparation', label: 'Homebuying Preparation' },
    { id: 'Mortgage Basics', label: 'Mortgage Basics' },
    { id: 'Loan Comparison', label: 'Loan Comparison' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCat = filterCategory === 'all' || post.category === filterCategory
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch = !q || 
      post.title.toLowerCase().includes(q) ||
      post.snippet.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q)

    return matchesCat && matchesSearch
  })

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Mortgage Education &amp; Insights
        </h1>
        <p className="text-slate-600 text-base">
          Compliant, educational guides to help you understand home financing, pre-approvals, and loan options.
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
            placeholder="Search mortgage articles..."
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

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-[11px] font-bold text-slate-400 flex items-center gap-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {post.snippet}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to={`/blog/${post.id}`}
                className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900 bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 rounded-xl transition-all"
              >
                Read Full Article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
