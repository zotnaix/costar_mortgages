import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader({ 
  title, 
  subtitle, 
  breadcrumbs = [], 
  action 
}) {
  return (
    <section className="relative bg-[#0d101d] text-white pt-28 sm:pt-32 pb-14 sm:pb-16 border-b border-[#1d3465] overflow-hidden">
      {/* Subtle Navy Ambient Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#1d3465]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#738fc6]">
              <li>
                <Link to="/" className="hover:text-[#fac536] transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <li className="text-slate-600">/</li>
                  <li>
                    {crumb.path ? (
                      <Link to={crumb.path} className="hover:text-[#fac536] transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-slate-200 font-bold">{crumb.label}</span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-heading font-black tracking-tight text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[#738fc6] text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {action && (
            <div className="shrink-0 pt-2 md:pt-0">
              {action}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
