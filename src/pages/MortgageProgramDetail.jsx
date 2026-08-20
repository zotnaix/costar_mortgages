import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getLoanProgramById } from '../data/mortgages'

export default function MortgageProgramDetailPage() {
  const { id } = useParams()
  const program = getLoanProgramById(id)

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-body text-base">
      {/* Top Back Link */}
      <div className="mb-6">
        <Link to="/mortgages" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#f39c0a] uppercase tracking-wider transition-colors">
          ← Back to All Loan Programs
        </Link>
      </div>

      {/* Program Header Banner */}
      <section className="bg-[#0d1629] text-white rounded-3xl p-8 sm:p-12 border border-[#1d3465] shadow-xl mb-10 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#fac536]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-heading font-black tracking-tight text-white leading-tight mb-4">
            {program.title}
          </h1>

          <p className="text-[#738fc6] text-base leading-relaxed">
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
            <h2 className="text-[22px] sm:text-[24px] font-heading font-black text-[#0d101d] pb-3 border-b border-slate-100">
              Program Highlights &amp; Benefits
            </h2>

            <div className="space-y-4">
              {program.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-[#f39c0a]/20 text-[#f39c0a] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-[14px] font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros vs Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-[18px] font-heading font-bold text-emerald-700 flex items-center gap-2">
                <span>👍</span> Program Pros
              </h3>
              <ul className="space-y-2.5 text-[14px] text-slate-700">
                {program.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-[18px] font-heading font-bold text-slate-700 flex items-center gap-2">
                <span>⚖️</span> Considerations
              </h3>
              <ul className="space-y-2.5 text-[14px] text-slate-700">
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
            <h2 className="text-[22px] sm:text-[24px] font-heading font-black text-[#0d101d] pb-3 border-b border-slate-100">
              Required Documents Checklist
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.requiredDocs.map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-[14px] font-semibold text-slate-800 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0d1629] text-[#fac536] flex items-center justify-center font-bold text-[11px]">
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
          <div className="sticky top-28 bg-[#0d1629] text-white rounded-3xl p-8 border border-[#1d3465] shadow-xl space-y-6">
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-heading font-black text-white">Get Pre-Approved for {program.title}</h3>
              <p className="text-[14px] text-[#738fc6] mt-2 leading-relaxed">
                Connect with a Co Star Mortgages loan officer today. Fast response, zero lender obligation.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full block text-center py-4 bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] text-[#0d101d] font-black text-sm uppercase tracking-wider rounded-xl hover:from-[#fabe22] hover:to-[#fac536] transition-all shadow-xl shadow-[#f39c0a]/25 cursor-pointer hover:scale-[1.02]"
            >
              Get Pre-Approved
            </Link>
          </div>
        </aside>
      </div>
    </main>
  )
}
