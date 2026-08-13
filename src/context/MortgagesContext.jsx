import React, { createContext, useContext, useState, useEffect } from 'react'
import { loanPrograms as defaultLoans, recentFundedLoans as defaultFunded } from '../data/mortgages'

const MortgagesContext = createContext()

const STORAGE_KEY_LOANS = 'costar_loan_programs_v1'
const STORAGE_KEY_FUNDED = 'costar_funded_loans_v1'
const STORAGE_KEY_LEADS = 'costar_borrower_leads_v1'
const STORAGE_KEY_AUTH = 'costar_admin_auth'

const defaultTestimonials = [
  {
    id: 't-1',
    quote: "Co Star Mortgages got us locked into a 5.75% rate when other lenders were offering over 6.5%. The entire digital pre-approval took less than 24 hours!",
    author: "Marcus & Elena Vance",
    role: "Bought a Single Family Home in Englewood, CO • Verified Borrower",
    initials: "MV",
    bgColor: "bg-amber-500/10 text-amber-500 border-amber-500/20"
  },
  {
    id: 't-2',
    quote: "We refinanced our home with Co Star Mortgages and saved $410 per month while dropping our debt. The team made the closing process completely effortless.",
    author: "David & Sarah Jenkins",
    role: "Cash-Out Refinance in Highlands Ranch, CO • Verified Borrower",
    initials: "DJ",
    bgColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: 't-3',
    quote: "As a veteran, getting a 0% down VA loan with zero monthly mortgage insurance through Co Star Mortgages was the smoothest financial decision I've ever made.",
    author: "Captain Robert H. (Ret.)",
    role: "VA Home Loan in Parker, CO • Verified Veteran Borrower",
    initials: "RH",
    bgColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
]

export function MortgagesProvider({ children }) {
  const [loanPrograms, setLoanPrograms] = useState(() => defaultLoans)
  const [recentFundedLoans, setRecentFundedLoans] = useState(() => defaultFunded)
  const [testimonials, setTestimonials] = useState(() => defaultTestimonials)
  const [leads, setLeads] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEADS)
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  // Admin Auth state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem(STORAGE_KEY_AUTH) === 'true'
  })

  // Save leads to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads))
    } catch (e) {
      console.error('Failed to save leads:', e)
    }
  }, [leads])

  // Auth actions
  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAdminLoggedIn(true)
      sessionStorage.setItem(STORAGE_KEY_AUTH, 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdminLoggedIn(false)
    sessionStorage.removeItem(STORAGE_KEY_AUTH)
  }

  // Lead Submission
  const submitLead = (leadData) => {
    const newLead = {
      id: `lead-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: 'New Inquiry',
      ...leadData
    }
    setLeads(prev => [newLead, ...prev])
    return newLead
  }

  const getLoanProgramById = (id) => {
    return loanPrograms.find(p => p.id === id) || loanPrograms[0]
  }

  return (
    <MortgagesContext.Provider
      value={{
        loanPrograms,
        recentFundedLoans,
        testimonials,
        leads,
        submitLead,
        isAdminLoggedIn,
        login,
        logout,
        getLoanProgramById,
        // Legacy aliases for backward compatibility
        listings: loanPrograms,
        recentlySoldListings: recentFundedLoans,
        allListings: [...loanPrograms, ...recentFundedLoans]
      }}
    >
      {children}
    </MortgagesContext.Provider>
  )
}

export function useMortgagesContext() {
  const context = useContext(MortgagesContext)
  if (!context) {
    throw new Error('useMortgagesContext must be used within a MortgagesProvider')
  }
  return context
}

// Re-export aliases for seamless integration with existing codebase
export const ListingsProvider = MortgagesProvider
export const useListingsContext = useMortgagesContext
export default MortgagesContext
