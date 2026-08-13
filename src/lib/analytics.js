// Lightweight Google Analytics 4 (GA4) & Custom Action Event Tracking Helper for Co Star Mortgages

export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  } else {
    console.log(`[Co Star Mortgages Analytics Event]: ${eventName}`, eventParams)
  }
}

export function trackLeadCapture(formType, details = {}) {
  trackEvent('generate_lead', {
    form_name: formType,
    category: 'Mortgage Pre-Approval Lead',
    ...details
  })
}

export function trackLoanView(loanId, loanTitle) {
  trackEvent('view_item', {
    item_id: loanId,
    item_name: loanTitle,
    category: 'Mortgage Loan Program'
  })
}

export function trackCalculatorUsage(calculatorType, params = {}) {
  trackEvent('use_calculator', {
    calculator_type: calculatorType,
    category: 'Mortgage Calculator',
    ...params
  })
}

export function trackSearch(searchQuery) {
  trackEvent('search', {
    search_term: searchQuery,
    category: 'Loan Search'
  })
}
