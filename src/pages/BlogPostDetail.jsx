import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogPostById } from '../data/blogPosts'
import { siteConfig } from '../config/siteConfig'

export default function BlogPostDetailPage() {
  const { id } = useParams()
  const post = getBlogPostById(id)

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider">
          ← Back to Mortgage Blog
        </Link>
      </div>

      <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg space-y-8">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/10 text-amber-700 border border-amber-500/20 mb-4 uppercase">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs font-bold text-slate-400 pb-6 border-b border-slate-100">
            <span>Co Star Mortgages Advisory</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md max-h-96">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line">
          {post.content}
        </div>

        <div className="pt-8 border-t border-slate-100 bg-slate-50 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Have Questions About Your Mortgage Options?</h3>
            <p className="text-xs text-slate-500 mt-1">Connect with a licensed loan professional (NMLS ID: {siteConfig.nmlsId})</p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-all shadow-md shrink-0"
          >
            Connect With Professional
          </Link>
        </div>
      </article>
    </main>
  )
}
