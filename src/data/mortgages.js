// Mortgage Loan Programs & Funded Loan Track Record for Co Star Mortgages
// Sathya R Narayan (NMLS ID: 2042475)

export const loanPrograms = [
  {
    id: 'conventional-loans',
    title: 'Conventional Home Loans',
    tagline: 'Reliable monthly payments with fixed interest rates & flexible terms.',
    intro: 'A classic, dependable mortgage option for primary residences, second homes, and investment properties.',
    termOptions: ['30-Year Fixed', '15-Year Fixed', '20-Year Fixed'],
    keyFeatures: [
      'Fixed interest rate for the entire life of your loan',
      'Flexible payment terms for qualified buyers',
      'PMI removable once you reach 20% equity',
      'Conforming loan limits up to standard FHFA guidelines',
      'Single-family, townhome, and condo options'
    ],
    pros: [
      'Predictable monthly payments',
      'Cancellable mortgage insurance',
      'No upfront government fees'
    ],
    cons: [
      'Standard credit score underwriting',
      'Standard debt-to-income guidelines'
    ],
    eligibility: 'Ideal for buyers with 620+ credit, stable employment, and verified income.',
    requiredDocs: [
      '30 days of recent pay stubs',
      '2 years of W-2 statements or tax returns',
      '2 months of bank statements',
      'Government-issued photo ID'
    ]
  },
  {
    id: 'fha-loans',
    title: 'FHA Home Loans',
    tagline: 'Accessible home financing with flexible credit and down payment options.',
    intro: 'Government-backed home loans designed to make homeownership straightforward and attainable.',
    termOptions: ['30-Year Fixed', '15-Year Fixed'],
    keyFeatures: [
      'Low down payment options starting at 3.5%',
      'Flexible credit score guidelines starting at 580',
      'Down payment gift funds permitted',
      'Accommodating Debt-to-Income (DTI) limits',
      'Assumable loan benefit for future buyers'
    ],
    pros: [
      'Flexible qualification guidelines',
      'Competitive interest rate options',
      'Non-occupant co-signers permitted'
    ],
    cons: [
      'Requires monthly mortgage insurance (MIP)',
      'Upfront MIP fee added to loan balance'
    ],
    eligibility: 'Great for first-time buyers and borrowers building their credit history.',
    requiredDocs: [
      'Recent pay stubs and 2 years W-2 forms',
      '2 months of bank statements',
      'Proof of down payment funds',
      'Valid photo ID and Social Security card'
    ]
  },
  {
    id: 'va-loans',
    title: 'VA Military Loans',
    tagline: 'Exclusive financing benefits for military service members, veterans, and spouses.',
    intro: 'Honoring service members with low down payment options and zero monthly mortgage insurance.',
    termOptions: ['30-Year Fixed', '15-Year Fixed'],
    keyFeatures: [
      '0% down payment financing options for qualifying veterans',
      'No monthly private mortgage insurance (PMI) fee',
      'Competitive interest rate structures',
      'Capped closing costs and seller concession allowance',
      'No prepayment penalties'
    ],
    pros: [
      'Exclusive benefits for eligible service members',
      'Zero monthly mortgage insurance',
      'Flexible underwriting guidelines'
    ],
    cons: [
      'Must be an eligible veteran, active military, or surviving spouse',
      'VA Funding Fee applies (waived for qualifying disabled veterans)'
    ],
    eligibility: 'Available to active-duty military, veterans, and Guard/Reserve members with a COE.',
    requiredDocs: [
      'Certificate of Eligibility (COE)',
      'DD-214 form or Statement of Service',
      'Recent pay stubs / LES and W-2 statements',
      'Bank statements'
    ]
  },
  {
    id: 'jumbo-loans',
    title: 'Jumbo & Non-Conforming Loans',
    tagline: 'Financing solutions for luxury properties exceeding conforming limits.',
    intro: 'Competitive financing tailored for higher-value homes across Denver Metro, Colorado.',
    termOptions: ['30-Year Fixed', '15-Year Fixed', '7/1 ARM'],
    keyFeatures: [
      'Loan amounts exceeding standard conforming limits',
      'Competitive fixed and adjustable rate structures',
      'Financing for primary, secondary, and investment properties',
      'Custom underwriting options for self-employed borrowers'
    ],
    pros: [
      'Finance high-value homes with one single loan',
      'Flexible fixed and ARM options',
      'Tailored asset-based qualification'
    ],
    cons: [
      'Higher credit score requirements',
      'Asset reserve requirements'
    ],
    eligibility: 'Ideal for buyers purchasing luxury homes with established credit and reserves.',
    requiredDocs: [
      '2 years of tax returns',
      '2 to 6 months of liquid asset statements',
      'Proof of income and employment'
    ]
  },
  {
    id: 'arm-loans',
    title: 'Adjustable-Rate Mortgages (ARM)',
    tagline: 'Lower introductory rates for flexible short-to-medium term plans.',
    intro: 'Enjoy lower initial payments during an introductory fixed period before adjusting periodically.',
    termOptions: ['5/1 ARM', '7/1 ARM', '10/1 ARM'],
    keyFeatures: [
      'Lower initial rate during the fixed introductory period',
      'Rate caps provide structure against steep adjustments',
      'Ideal for homeowners planning to move or refinance in 5–10 years',
      'Conforming and jumbo options available'
    ],
    pros: [
      'Lower initial monthly payment',
      'Maximizes short-term interest savings',
      'Adjustment caps protect against sudden spikes'
    ],
      'Lower initial monthly payments compared to standard fixed-rate loans',
      'Periodic rate caps that limit annual and lifetime adjustments',
      'Opportunity to build equity faster during initial low-rate period',
      'Convertible options to fixed rate during designated windows'
    ],
    pros: [
      'Lower interest rates during the initial intro period (5, 7, or 10 years)',
      'Ideal for borrowers planning to move or refinance within a few years',
      'Increased purchasing power during the fixed interest rate window'
    ],
    cons: [
      'Rate may increase after the initial intro period depending on index adjustments',
      'Monthly payments can fluctuate after the introductory period expires',
      'Requires planning for potential future rate adjustments'
    ],
    idealFor: 'Homeowners or investors planning to sell, relocate, or refinance before the introductory fixed-rate period ends.',
    requiredDocs: [
      '30 days most recent paystubs',
      'Last 2 years W-2 statements and federal tax filings',
      '2 months bank statements for down payment source verification',
      'Government-issued identification'
    ]
  },
  {
    id: 'refinance-cashout',
    title: 'Refinance & Cash-Out Loans',
    tagline: 'Lower your payment, eliminate PMI, or access built-up home equity.',
    intro: 'Replace your existing mortgage with terms that better suit your financial goals.',
    termOptions: ['30-Year Fixed', '20-Year Fixed', '15-Year Fixed'],
    keyFeatures: [
      'Rate & term refinance to secure lower monthly payments or shorten term',
      'Cash-out refinance to consolidate debts or fund improvements',
      'Opportunity to eliminate Private Mortgage Insurance (PMI)',
      'Streamline refinance options available for FHA and VA loans'
    ],
    pros: [
      'Potentially reduce your monthly payment or interest paid over loan life',
      'Tap into built-up property equity for renovations or major goals',
      'Switch from an adjustable-rate to a secure fixed-rate loan'
    ],
    cons: [
      'Closing costs apply (though often financeable into the loan amount)',
      'Extending loan term back to 30 years may increase total lifetime interest',
      'Appraisal may be required depending on property equity position'
    ],
    idealFor: 'Current homeowners wanting to lower their interest rate, shorten their loan term, or access home equity for personal financial goals.',
    requiredDocs: [
      'Current mortgage statement and homeowners insurance declaration',
      'Most recent property tax statement or escrow analysis',
      '30 days paystubs and last 2 years W-2s / Tax Returns',
      'Government-issued identification'
    ]
  }
]

export const recentFundings = [
  {
    id: 'funded-englewood-refi',
    title: 'Englewood Cash-Out Refinance',
    cityState: 'Englewood, CO',
    loanType: '30-Year Fixed Cash-Out',
    loanAmount: '$485,000',
    interestRate: '5.875%',
    monthlySavings: '$380 / month',
    turnaroundDays: 'Efficient Process',
    headline: 'Consolidated high-interest debt & structured lower monthly outlay',
    story: 'The borrower structured a 5.875% rate on their Englewood property, using built-up home equity to consolidate high-interest obligations and streamline their monthly finances.'
  },
  {
    id: 'funded-denver-metro-va',
    title: 'Denver Metro VA Purchase',
    cityState: 'Denver Metro, CO',
    loanType: 'VA 30-Year Fixed',
    loanAmount: '$620,000',
    interestRate: '5.750%',
    monthlySavings: 'No Monthly PMI',
    turnaroundDays: 'On-Time Closing',
    headline: 'Veteran family secured VA home loan with zero monthly PMI',
    story: 'Helped an Army veteran and their family move into their home in Denver Metro, Colorado with VA loan benefits and zero monthly mortgage insurance fees.'
  },
  {
    id: 'funded-parker-conventional',
    title: 'Parker First-Time Conventional Purchase',
    cityState: 'Parker, CO',
    loanType: '30-Year Conventional',
    loanAmount: '$540,000',
    interestRate: '6.250%',
    monthlySavings: 'Competitive Rate',
    turnaroundDays: 'Streamlined Approval',
    headline: 'First-time homebuyer secured conventional rate lock',
    story: 'Our digital pre-approval process allowed these buyers to present a clear, competitive offer that got accepted in a competitive Parker neighborhood.'
  }
]

export function getLoanProgramById(id) {
  return loanPrograms.find(p => p.id === id) || loanPrograms[0]
}

export default loanPrograms
