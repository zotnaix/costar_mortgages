import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLoanProgramById } from '../data/mortgages'

export default function MortgageProgramDetailPage() {
  const { id } = useParams()
  const program = getLoanProgramById(id)

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Top Back Link */}
      <div className="mb-6">
        <Link to="/mortgages" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider">
          ← Back to All Loan Programs
        </Link>
      </div>

      {/* Program Header Banner */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl mb-10 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {program.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {program.intro}
          </p>
        </div>
      </section>

      {/* Program Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2-Column: Key Features, Pros/Cons, Documents */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Features */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-black text-slate-900 pb-3 border-b border-slate-100">
              Program Highlights & Benefits
            </h2>

            <div className="space-y-4">
              {program.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros vs Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-emerald-700 flex items-center gap-2">
                <span>👍</span> Program Pros
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {program.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2">
                <span>⚖️</span> Considerations
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {program.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-black text-slate-900 pb-3 border-b border-slate-100">
              Required Documents Checklist
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.requiredDocs.map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar CTA */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white">Get Pre-Approved for {program.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Connect with a Co Star Mortgages loan officer today. Fast response, zero lender obligation.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full block text-center py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl hover:from-amber-300 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/25 cursor-pointer hover:scale-[1.02]"
            >
              Get Pre-Approved
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}
