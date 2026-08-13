// Mortgage Loan Programs & Funded Loan Track Record for Co Star Mortgages
// Sathya R Narayan (NMLS ID: 2042475)

export const loanPrograms = [
  {
    id: 'conventional-loans',
    title: 'Conventional & Conforming Loans',
    badge: 'Conforming & Fixed',
    category: 'Standard Purchase',
    tagline: 'Predictable monthly payments with fixed interest rates & maximum flexibility.',
    intro: 'Conventional and Fannie Mae / Freddie Mac conforming home loans are a popular choice for home buyers with good to excellent credit. Available in 30-year and 15-year fixed terms.',
    estRate: '6.375%',
    estApr: '6.450%',
    minDown: 'Standard Down Payment',
    minCreditScore: 620,
    termOptions: ['30-Year Fixed', '15-Year Fixed', '20-Year Fixed'],
    keyFeatures: [
      'Fixed interest rate for the entire life of your loan',
      'Flexible payment terms for qualified buyers',
      'Private Mortgage Insurance (PMI) can be eliminated once you reach 20% home equity',
      'Conforming loan limits up to standard FHFA guidelines',
      'Flexible property types including single-family, townhomes, and condos'
    ],
    pros: [
      'Predictable monthly Principal & Interest payment',
      'PMI is cancellable once equity threshold is met',
      'No upfront government mortgage insurance fee required'
    ],
    cons: [
      'Requires credit score qualification',
      'Standard debt-to-income (DTI) ratio underwriting'
    ],
    eligibility: 'Ideal for borrowers with credit scores of 620+, stable employment history, and verified income.',
    requiredDocs: [
      '30 days of recent pay stubs',
      '2 years of W-2 statements or tax returns',
      '2 months of bank statement history',
      'Government-issued photo ID'
    ]
  },
  {
    id: 'fha-loans',
    title: 'FHA Home Loans',
    badge: 'FHA Insured',
    category: 'Government Backed',
    tagline: 'Accessible home financing options with flexible credit criteria.',
    intro: 'FHA loans are insured by the Federal Housing Administration and designed to make homeownership accessible. If you are building credit or evaluating financing options, an FHA loan provides flexible qualification guidelines.',
    estRate: '5.750%',
    estApr: '6.320%',
    minDown: 'Flexible Terms',
    minCreditScore: 580,
    termOptions: ['30-Year Fixed', '15-Year Fixed'],
    keyFeatures: [
      'Flexible down payment options',
      'Credit score guidelines starting at 580',
      'Gift funds permitted for qualifying down payment & closing costs',
      'Flexible allowable Debt-to-Income (DTI) ratios',
      'Assumable loan option for future home buyers'
    ],
    pros: [
      'Flexible qualification guidelines',
      'Competitive benchmark interest rates',
      'Accepts qualifying non-occupant co-signers'
    ],
    cons: [
      'Requires Mortgage Insurance Premium (MIP) based on loan term',
      'Upfront MIP fee added to loan balance'
    ],
    eligibility: 'Great for home buyers or borrowers rebuilding credit with at least a 580 credit score.',
    requiredDocs: [
      'Recent pay stubs and 2 years W-2 forms',
      '2 months of recent bank statements',
      'Proof of down payment source (or gift letter)',
      'Valid ID and Social Security card'
    ]
  },
  {
    id: 'va-loans',
    title: 'VA Military Loans',
    badge: 'VA Guaranteed',
    category: 'Veterans & Military',
    tagline: 'Exclusive home loan options for active military, veterans, and military spouses.',
    intro: 'Backed by the Department of Veterans Affairs, VA loans offer eligible active-duty service members, veterans, and military spouses home financing benefits, including flexible down payment options and no monthly mortgage insurance fees.',
    estRate: '5.750%',
    estApr: '5.890%',
    minDown: 'Special VA Options',
    minCreditScore: 580,
    termOptions: ['30-Year Fixed', '15-Year Fixed'],
    keyFeatures: [
      'Flexible down payment structures for qualifying military members',
      'NO monthly private mortgage insurance (PMI) fee',
      'Competitive interest rate options',
      'Capped closing costs and seller concession allowance',
      'No prepayment penalties'
    ],
    pros: [
      'Special benefits for eligible military service members',
      'No recurring monthly mortgage insurance premiums',
      'Flexible underwriting standards'
    ],
    cons: [
      'Must be an eligible veteran, active military member, or qualifying spouse',
      'VA Funding Fee applies (can be rolled into the loan or waived for disabled veterans)'
    ],
    eligibility: 'Available to active-duty military, veterans, National Guard/Reserve members with a valid Certificate of Eligibility (COE).',
    requiredDocs: [
      'Certificate of Eligibility (COE) — we can assist in obtaining this',
      'DD-214 form (for discharged veterans) or Statement of Service',
      'Recent pay stubs / LES and W-2 statements',
      'Bank statements for liquid reserves'
    ]
  },
  {
    id: 'jumbo-loans',
    title: 'Jumbo & Non-Conforming Loans',
    badge: 'Higher Loan Limits',
    category: 'High-Value Financing',
    tagline: 'Financing solutions for luxury properties exceeding conforming loan limits.',
    intro: 'Jumbo loans provide specialized financing for higher-value homes in Denver and Highlands Ranch that exceed standard FHFA conforming loan limits.',
    estRate: '6.625%',
    estApr: '6.720%',
    minDown: 'Custom Options',
    minCreditScore: 680,
    termOptions: ['30-Year Fixed', '15-Year Fixed', '7/1 ARM'],
    keyFeatures: [
      'Loan amounts exceeding standard conforming FHFA limits',
      'Competitive fixed and adjustable-rate structures',
      'Financing for primary residences, second homes, and investment properties',
      'Tailored underwriting for self-employed borrowers and investors'
    ],
    pros: [
      'Purchase high-value properties without multiple mortgages',
      'Flexible fixed and ARM rate structures',
      'Custom asset-based underwriting options'
    ],
    cons: [
      'Requires higher credit score guidelines',
      'Larger liquid reserve requirements'
    ],
    eligibility: 'Suitable for buyers purchasing higher-value properties with strong credit and reserve profiles.',
    requiredDocs: [
      '2 years of complete tax returns',
      '2 to 6 months of liquid asset statements',
      'Proof of income and employment history'
    ]
  },
  {
    id: 'arm-loans',
    title: 'Adjustable-Rate Mortgages (ARM)',
    badge: 'Flexible Rate Terms',
    category: 'Adjustable Rate',
    tagline: 'Lower introductory interest rates for short to mid-term homeownership plans.',
    intro: 'Adjustable-Rate Mortgages (ARMs) feature an initial fixed-rate period (such as 5, 7, or 10 years), offering a lower starting interest rate before adjusting periodically based on market indices.',
    estRate: '5.875%',
    estApr: '6.550%',
    minDown: 'Flexible Terms',
    minCreditScore: 620,
    termOptions: ['5/1 ARM', '7/1 ARM', '10/1 ARM'],
    keyFeatures: [
      'Lower initial interest rate during fixed introductory period',
      'Rate caps protect against sudden large adjustments',
      'Ideal for homeowners planning to move, upgrade, or refinance within 5–10 years',
      'Conforming and non-conforming loan options'
    ],
    pros: [
      'Lower initial monthly payment during initial fixed period',
      'Maximizes short-term interest savings',
      'Rate adjustment caps limit rate increases'
    ],
    cons: [
      'Rate can adjust up or down after the initial fixed period ends'
    ],
    eligibility: 'Great for borrowers seeking lower initial rates with plans to relocate or refinance within 5 to 10 years.',
    requiredDocs: [
      'Pay stubs and W-2 statements',
      'Bank statement reserves',
      'Standard income documentation'
    ]
  },
  {
    id: 'refinance-cashout',
    title: 'Refinance & Cash-Out',
    badge: 'Rate & Equity',
    category: 'Refinancing',
    tagline: 'Explore lowering your monthly payment, shortening your loan term, or accessing home equity.',
    intro: 'Whether you want to explore locking in a lower interest rate, changing your loan term, or accessing your home equity, Co Star Mortgages customizes refinancing solutions to fit your financial goals.',
    estRate: '6.250%',
    estApr: '6.350%',
    minDown: 'Refinance Option',
    minCreditScore: 620,
    termOptions: ['30-Year Fixed', '20-Year Fixed', '15-Year Fixed'],
    keyFeatures: [
      'Rate & Term Refinance: Explore lowering your rate or changing your term',
      'Cash-Out Refinance: Access home equity options based on property valuation',
      'Debt Consolidation: Explore rolling high-interest obligations into your mortgage',
      'Remove PMI: Eliminate monthly PMI if your home value has increased sufficiently',
      'Streamlined digital paperwork process'
    ],
    pros: [
      'Explore lowering your monthly mortgage payment',
      'Options to consolidate higher interest obligations',
      'Closing costs can be structured into the loan'
    ],
    cons: [
      'Extends mortgage repayment timeline if restarting a 30-year term',
      'Appraisal may be required depending on equity cushion'
    ],
    eligibility: 'Available to existing homeowners with sufficient equity cushion and verified income history.',
    requiredDocs: [
      'Current mortgage statement',
      'Homeowner insurance policy declaration page',
      'Recent pay stubs and W-2 forms',
      'Bank statements'
    ]
  }
]

export const recentFundedLoans = [
  {
    id: 'funded-englewood-refi',
    title: 'Englewood Cash-Out Refinance',
    cityState: 'Englewood, CO',
    loanType: 'Cash-Out Refinance',
    loanAmount: '$485,000',
    interestRate: '5.875%',
    monthlySavings: 'Debt Consolidation',
    turnaroundDays: 'Efficient Process',
    headline: 'Consolidated high-interest debt & structured lower monthly outlay',
    story: 'The borrower structured a 5.875% rate on their Englewood property, using built-up home equity to consolidate high-interest obligations and streamline their monthly finances.'
  },
  {
    id: 'funded-highlands-ranch-va',
    title: 'Highlands Ranch VA Purchase',
    cityState: 'Highlands Ranch, CO',
    loanType: 'VA 30-Year Fixed',
    loanAmount: '$620,000',
    interestRate: '5.750%',
    monthlySavings: 'No Monthly PMI',
    turnaroundDays: 'On-Time Closing',
    headline: 'Veteran family secured VA home loan with zero monthly PMI',
    story: 'Helped an Army veteran and their family move into their home in Highlands Ranch with VA loan benefits and zero monthly mortgage insurance fees.'
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
