import React from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MortgageProgramsPage from './pages/MortgagePrograms'
import MortgageProgramDetailPage from './pages/MortgageProgramDetail'
import RefinancePage from './pages/Refinance'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
import BlogPage from './pages/Blog'
import BlogPostDetailPage from './pages/BlogPostDetail'
import ServicesPage from './pages/Services'
import RecentFundingsPage from './pages/RecentFundings'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import AdminPage from './pages/Admin'
import Footer from './components/Footer'
import { MortgagesProvider } from './context/MortgagesContext'

export default function App(){
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isContact = location.pathname === '/contact'
  const isAdmin = location.pathname.startsWith('/admin')
  const navClass = `site-nav${isHome ? '' : ' solid'}`
  const [mobileOpen, setMobileOpen] = React.useState(false)

  // Enforce tab name to Co Star Mortgages only across all pages
  React.useEffect(() => {
    document.title = "Co Star Mortgages"
    setMobileOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  if (isAdmin) {
    return (
      <MortgagesProvider>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </MortgagesProvider>
    )
  }

  if (isContact) {
    return (
      <MortgagesProvider>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
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
                    src={isHome ? "/logo-white.svg" : "/logo.svg"} 
                    alt="Co Star Mortgages Logo" 
                    className="h-11 sm:h-14 w-auto transition-all duration-200" 
                  />
                  <span className="brand-title hidden sm:block text-2xl sm:text-3xl font-black tracking-tight">Co Star Mortgages</span>
                </Link>
              </div>

              <nav className="nav-links hidden lg:flex items-center">
                <Link to="/mortgages">Loan Programs</Link>
                <Link to="/refinance">Refinance</Link>
                {/* <Link to="/calculator">Calculator</Link> */}
                <Link to="/blog">Blog</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact" className="ml-4 px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors shadow-md">Get Started</Link>
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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mortgages" element={<MortgageProgramsPage />} />
                <Route path="/mortgages/:id" element={<MortgageProgramDetailPage />} />
                <Route path="/refinance" element={<RefinancePage />} />
                {/* <Route path="/calculator" element={<MortgageCalculatorPage />} /> */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/track-record" element={<RecentFundingsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet navigation overlay drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
            <div 
              className="bg-slate-900 text-white shadow-2xl border-b border-slate-800 p-6 absolute top-[68px] left-0 right-0 animate-in slide-in-from-top duration-200" 
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-4 text-center">
                <Link to="/mortgages" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-amber-400 transition-colors">Loan Programs</Link>
                <Link to="/refinance" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-amber-400 transition-colors">Refinance</Link>
                {/* <Link to="/calculator" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-amber-400 transition-colors">Interactive Calculator</Link> */}
                <Link to="/blog" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-amber-400 transition-colors">Mortgage Blog</Link>
                <Link to="/services" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-amber-400 transition-colors">Services</Link>
                <Link to="/about" onClick={() => setMobileOpen(false)} className="py-2 text-slate-200 font-semibold hover:text-amber-400 transition-colors">About Us</Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 py-3 text-slate-950 font-extrabold bg-amber-500 rounded-xl hover:bg-amber-400 transition-colors">Get Started</Link>
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
