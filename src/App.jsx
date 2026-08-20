import React from 'react'
import { Link, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import MortgageProgramsPage from './pages/MortgagePrograms'
import MortgageProgramDetailPage from './pages/MortgageProgramDetail'
import RefinancePage from './pages/Refinance'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
// import BlogPage from './pages/Blog'
// import BlogPostDetailPage from './pages/BlogPostDetail'
// import ServicesPage from './pages/Services'
import RecentFundingsPage from './pages/RecentFundings'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import AdminPage from './pages/Admin'
import Footer from './components/Footer'
import { MortgagesProvider } from './context/MortgagesContext'
import { siteConfig } from './config/siteConfig'

export default function App(){
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isContact = location.pathname === '/contact'
  const isAdmin = location.pathname.startsWith('/admin')
  const navClass = `site-nav${isHome ? '' : ' solid'}`
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // Enforce tab name to start with "Co Star Mortgages LLC | " across all pages
  React.useEffect(() => {
    const pageTitles = {
      '/': siteConfig.tagline || 'Where Your Home Story Shines',
      '/mortgages': 'Mortgage Loan Programs',
      '/mortgages/conventional-loans': 'Conventional Home Loans',
      '/mortgages/fha-loans': 'FHA Home Loans',
      '/mortgages/va-loans': 'VA Military Loans',
      '/mortgages/jumbo-loans': 'Jumbo & Non-Conforming Loans',
      '/mortgages/arm-loans': 'Adjustable-Rate Mortgages (ARM)',
      '/mortgages/refinance-cashout': 'Refinance & Cash-Out Loans',
      '/refinance': 'Refinance & Lower Your Rate',
      '/calculator': 'Interactive Mortgage Calculator',
      '/blog': 'Mortgage Blog & Guides',
      '/services': 'Mortgage Advisory Services',
      '/track-record': 'Recent Fundings & Track Record',
      '/about': 'About Our Brokerage',
      '/contact': 'Get Pre-Approved',
      '/admin': 'Admin Portal'
    }

    const subTitle = pageTitles[location.pathname] || (location.pathname.startsWith('/mortgages/') ? 'Loan Program Details' : location.pathname.startsWith('/blog/') ? 'Mortgage Blog' : 'Home Loans')

    document.title = `Co Star Mortgages LLC | ${subTitle}`
    setMobileOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  if (isAdmin) {
    return (
      <MortgagesProvider>
        <Routes location={location}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MortgagesProvider>
    )
  }

  if (isContact) {
    return (
      <MortgagesProvider>
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </MortgagesProvider>
    )
  }

  return (
    <MortgagesProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
        <div>
          <header className={navClass}>
            <div className="inner">
              <div className="brand">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className="flex items-center gap-3 sm:gap-4">
                  <img 
                    src={isHome ? siteConfig.logoWhite : siteConfig.logoDark} 
                    alt="Co Star Mortgages Logo" 
                    className="h-11 sm:h-14 w-auto object-contain transition-all duration-200" 
                  />
                  <span className="brand-title hidden sm:block text-2xl sm:text-3xl font-heading font-black tracking-tight">Co Star Mortgages</span>
                </Link>
              </div>

              <nav className="nav-links hidden lg:flex items-center">
                {/* Loan Programs Dropdown */}
                <div className="relative nav-group">
                  <Link to="/mortgages" className="inline-flex items-center gap-1.5 py-2">
                    <span>Loan Programs</span>
                    <svg className="w-3.5 h-3.5 text-current opacity-70 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  <div className="nav-dropdown">
                    <div className="nav-dropdown-content">
                      <Link to="/mortgages/conventional-loans">Conventional Home Loans</Link>
                      <Link to="/mortgages/fha-loans">FHA Home Loans</Link>
                      <Link to="/mortgages/va-loans">VA Military Loans</Link>
                      <Link to="/mortgages/jumbo-loans">Jumbo &amp; Non-Conforming</Link>
                      <Link to="/mortgages/arm-loans">Adjustable-Rate (ARM)</Link>
                      <Link to="/mortgages/refinance-cashout">Refinance &amp; Cash-Out</Link>
                      <div className="border-t border-[#1d3465] mt-1 pt-1">
                        <Link to="/mortgages" className="text-[#fac536] font-bold hover:text-[#f39c0a]">
                          <span>View All Programs</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/refinance">Refinance</Link>
                {/* <Link to="/calculator">Calculator</Link> */}
                {/* <Link to="/blog">Blog</Link> */}
                {/* <Link to="/services">Services</Link> */}
                <Link to="/about">About Us</Link>
                <Link to="/contact" className="nav-cta-btn">Get Started</Link>
              </nav>

              <div className="lg:hidden flex items-center">
                <button
                  aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen(v => !v)}
                  className="nav-toggle-btn"
                >
                  {mobileOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </header>

          <div style={{ paddingTop: isHome ? 0 : 76 }}>
            <div key={location.pathname} className="page-transition">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/mortgages" element={<MortgageProgramsPage />} />
                <Route path="/mortgages/:id" element={<MortgageProgramDetailPage />} />
                <Route path="/refinance" element={<RefinancePage />} />
                {/* <Route path="/calculator" element={<MortgageCalculatorPage />} /> */}
                {/* <Route path="/blog" element={<BlogPage />} /> */}
                {/* <Route path="/blog/:id" element={<BlogPostDetailPage />} /> */}
                {/* <Route path="/services" element={<ServicesPage />} /> */}
                <Route path="/track-record" element={<RecentFundingsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Auto-redirect deactivated/unknown pages to Home to prevent white screens */}
                <Route path="/blog/*" element={<Navigate to="/" replace />} />
                <Route path="/services" element={<Navigate to="/" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet navigation overlay drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-[#0d101d]/70 backdrop-blur-md lg:hidden" onClick={() => setMobileOpen(false)}>
            <div 
              className="bg-[#0d1629] text-white shadow-2xl border-b border-[#1d3465] p-6 absolute top-[68px] left-0 right-0 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200" 
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-3 text-center">
                <div>
                  <div className="text-xs font-bold text-[#fac536] uppercase tracking-wider mb-2 font-heading">Loan Programs</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <Link to="/mortgages/conventional-loans" onClick={() => setMobileOpen(false)} className="p-2 bg-[#0d101d] border border-[#1d3465] rounded-lg hover:border-[#f39c0a] text-slate-200">Conventional</Link>
                    <Link to="/mortgages/fha-loans" onClick={() => setMobileOpen(false)} className="p-2 bg-[#0d101d] border border-[#1d3465] rounded-lg hover:border-[#f39c0a] text-slate-200">FHA Loans</Link>
                    <Link to="/mortgages/va-loans" onClick={() => setMobileOpen(false)} className="p-2 bg-[#0d101d] border border-[#1d3465] rounded-lg hover:border-[#f39c0a] text-slate-200">VA Loans</Link>
                    <Link to="/mortgages/jumbo-loans" onClick={() => setMobileOpen(false)} className="p-2 bg-[#0d101d] border border-[#1d3465] rounded-lg hover:border-[#f39c0a] text-slate-200">Jumbo Loans</Link>
                    <Link to="/mortgages/arm-loans" onClick={() => setMobileOpen(false)} className="p-2 bg-[#0d101d] border border-[#1d3465] rounded-lg hover:border-[#f39c0a] text-slate-200">ARM Loans</Link>
                    <Link to="/mortgages/refinance-cashout" onClick={() => setMobileOpen(false)} className="p-2 bg-[#0d101d] border border-[#1d3465] rounded-lg hover:border-[#f39c0a] text-slate-200">Refinance</Link>
                  </div>
                  <Link to="/mortgages" onClick={() => setMobileOpen(false)} className="text-xs font-bold text-[#fac536] hover:underline">View All Programs →</Link>
                </div>

                <div className="border-t border-[#1d3465] my-1"></div>

                <Link to="/refinance" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-[#f39c0a] transition-colors">Refinance Portal</Link>
                {/* <Link to="/blog" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-[#f39c0a] transition-colors">Mortgage Blog</Link> */}
                {/* <Link to="/services" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-[#f39c0a] transition-colors">Services</Link> */}
                <Link to="/about" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-[#f39c0a] transition-colors">About Us</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-3 py-3.5 px-6 text-[#0d101d] font-black uppercase text-xs tracking-wider bg-gradient-to-r from-[#fac536] via-[#f39c0a] to-[#d97707] hover:from-[#fabe22] hover:to-[#fac536] rounded-xl shadow-lg shadow-[#f39c0a]/30 active:scale-95 transition-all text-center">Get Started</Link>
              </nav>
            </div>
          </div>
        )}

        {/* Universal Footer across all pages */}
        {!isContact && <Footer />}
      </div>
    </MortgagesProvider>
  )
}
