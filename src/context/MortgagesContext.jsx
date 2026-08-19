import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { loanPrograms as defaultLoans, recentFundedLoans as defaultFunded } from '../data/mortgages'
import { supabase, isSupabaseConfigured, SITE_ID } from '../lib/supabase'

const MortgagesContext = createContext()

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
    role: "Cash-Out Refinance in Denver Metro, CO • Verified Borrower",
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

// Helper to format Supabase lead rows into consistent app objects
const mapRowToLead = (row) => ({
  id: row.id,
  date: row.created_at ? new Date(row.created_at).toLocaleString() : new Date().toLocaleString(),
  fullName: row.full_name || '',
  name: row.full_name || '',
  email: row.email || '',
  phone: row.phone || '',
  loanPurpose: row.loan_purpose || 'Purchase',
  propertyType: row.property_type || 'Single Family',
  estimatedPrice: row.estimated_price || '',
  targetAmount: row.estimated_price || '',
  estimatedBalance: row.estimated_price || '',
  creditScore: row.credit_score || '',
  refiGoal: row.refi_goal || '',
  currentRate: row.current_rate || '',
  message: row.message || '',
  status: row.status || 'Not Done Yet',
  siteId: row.site_id || SITE_ID
})

export function MortgagesProvider({ children }) {
  const [loanPrograms] = useState(() => defaultLoans)
  const [recentFundedLoans] = useState(() => defaultFunded)
  const [testimonials] = useState(() => defaultTestimonials)
  const [isLoadingLeads, setIsLoadingLeads] = useState(false)
  const [leadsError, setLeadsError] = useState(null)

  // Local storage fallback for leads
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
    try {
      return sessionStorage.getItem(STORAGE_KEY_AUTH) === 'true'
    } catch (e) {
      return false
    }
  })

  // Fetch leads from Supabase (scoped to SITE_ID)
  const fetchLeads = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) return

    setIsLoadingLeads(true)
    setLeadsError(null)
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('site_id', SITE_ID)
        .order('created_at', { ascending: false })

      if (error) throw error

      if (data) {
        const formatted = data.map(mapRowToLead)
        setLeads(formatted)
        try {
          localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(formatted))
        } catch (e) {}
      }
    } catch (err) {
      console.warn('Supabase leads fetch notice:', err.message || err)
      setLeadsError(err.message)
    } finally {
      setIsLoadingLeads(false)
    }
  }, [])

  // Auto fetch when Supabase is configured or when Admin logs in
  useEffect(() => {
    if (isSupabaseConfigured) {
      fetchLeads()
    }
  }, [fetchLeads, isAdminLoggedIn])

  // Lead Actions
  const submitLead = async (leadData) => {
    const formattedPayload = {
      site_id: SITE_ID,
      full_name: leadData.fullName || leadData.name || '',
      email: leadData.email || '',
      phone: leadData.phone || '',
      loan_purpose: leadData.loanPurpose || leadData.refiGoal || 'Purchase',
      property_type: leadData.propertyType || 'Single Family',
      estimated_price: leadData.estimatedPrice || leadData.targetAmount || leadData.estimatedBalance || '',
      credit_score: leadData.creditScore || '',
      refi_goal: leadData.refiGoal || '',
      current_rate: leadData.currentRate || '',
      message: leadData.message || '',
      status: 'Not Done Yet'
    }

    // Optimistic / Local creation
    const localLead = {
      id: `lead-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: 'Not Done Yet',
      ...leadData,
      siteId: SITE_ID
    }

    setLeads(prev => [localLead, ...prev])

    // Save to Supabase if configured
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('leads')
          .insert([formattedPayload])
          .select()
          .single()

        if (error) {
          console.error('Supabase lead submission error:', error)
        } else if (data) {
          const inserted = mapRowToLead(data)
          setLeads(prev => prev.map(l => (l.id === localLead.id ? inserted : l)))
          return inserted
        }
      } catch (err) {
        console.error('Supabase lead submit network error:', err)
      }
    } else {
      // Local storage fallback persistence
      try {
        const current = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADS) || '[]')
        localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify([localLead, ...current]))
      } catch (e) {}
    }

    return localLead
  }

  const updateLeadStatus = async (id, newStatus) => {
    setLeads(prev => prev.map(lead => (lead.id === id ? { ...lead, status: newStatus } : lead)))

    if (isSupabaseConfigured && supabase && !String(id).startsWith('lead-')) {
      try {
        const { error } = await supabase
          .from('leads')
          .update({ status: newStatus })
          .eq('id', id)
          .eq('site_id', SITE_ID)

        if (error) console.error('Supabase update status error:', error)
      } catch (err) {
        console.error('Supabase update status error:', err)
      }
    } else {
      try {
        const current = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADS) || '[]')
        const updated = current.map(l => (l.id === id ? { ...l, status: newStatus } : l))
        localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(updated))
      } catch (e) {}
    }
  }

  const deleteLead = async (id) => {
    setLeads(prev => prev.filter(l => l.id !== id))

    if (isSupabaseConfigured && supabase && !String(id).startsWith('lead-')) {
      try {
        const { error } = await supabase
          .from('leads')
          .delete()
          .eq('id', id)
          .eq('site_id', SITE_ID)

        if (error) console.error('Supabase delete lead error:', error)
      } catch (err) {
        console.error('Supabase delete lead error:', err)
      }
    } else {
      try {
        const current = JSON.parse(localStorage.getItem(STORAGE_KEY_LEADS) || '[]')
        const updated = current.filter(l => l.id !== id)
        localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(updated))
      } catch (e) {}
    }
  }

  const clearAllLeads = async () => {
    setLeads([])
    try {
      localStorage.removeItem(STORAGE_KEY_LEADS)
    } catch (e) {}

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('leads')
          .delete()
          .eq('site_id', SITE_ID)

        if (error) console.error('Supabase clear leads error:', error)
      } catch (err) {
        console.error('Supabase clear leads error:', err)
      }
    }
  }

  // Auth actions
  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAdminLoggedIn(true)
      try {
        sessionStorage.setItem(STORAGE_KEY_AUTH, 'true')
      } catch (e) {}
      if (isSupabaseConfigured) fetchLeads()
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdminLoggedIn(false)
    try {
      sessionStorage.removeItem(STORAGE_KEY_AUTH)
    } catch (e) {}
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
        updateLeadStatus,
        clearAllLeads,
        deleteLead,
        fetchLeads,
        isLoadingLeads,
        leadsError,
        isSupabaseConnected: isSupabaseConfigured,
        isAdminLoggedIn,
        login,
        logout,
        getLoanProgramById
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

export default MortgagesContext
