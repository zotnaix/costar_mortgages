# Co Star Mortgages Website

Official web application for **Co Star Mortgages** — Licensed Mortgage Brokerage serving Denver Metro, Colorado.

- **Broker / Principal:** Sathya R Narayan
- **NMLS Unique ID:** 2042475
- **Equal Housing Lender**

---

## 🌟 Key Website Features (As of Today)

### 1. Interactive Mortgage & PITI Calculator
- **Real-Time Calculations:** Calculates Principal, Interest, Property Taxes, Homeowners Insurance, and Monthly HOA Dues in real time.
- **Term Toggles:** Instant switching between **30-Year Fixed** and **15-Year Fixed** loans.
- **Dynamic Payment Breakdown Bar:** Visual color-coded percentage distribution of your monthly payment.
- **Responsive 40/60 Hero Split:** Generous desktop layout to ensure comfortable readability with zero text overlap.

### 2. Core 6 Loan Programs
Dedicated spec sheets, qualification requirements, pros/cons, and document checklists for:
1. **Conventional Home Loans** — Classic fixed-rate financing for 620+ credit borrowers.
2. **FHA Home Loans** — Government-backed loans with 3.5% down payment options.
3. **VA Military Loans** — Exclusive 0% down payment and zero monthly PMI for veterans and active service members.
4. **Jumbo & Non-Conforming Loans** — Luxury home financing exceeding county conforming limits.
5. **Adjustable-Rate Mortgages (ARM)** — Lower initial introductory rates for 5–7 year plans.
6. **Refinance & Cash-Out** — Rate reduction, term shortening, and home equity access.

### 3. Smart Navigation Bar with Dropdown
- **Desktop Dropdown:** Hovering over *Loan Programs* displays instant links to all 6 loan types plus "View All Programs".
- **Mobile Drawer:** Clean expandable sub-grid for seamless one-tap navigation on smartphones and tablets.
- **Radiant Call-To-Action:** High-contrast, appealing gold-amber *Get Started* button.

### 4. Custom Rate Quote & Pre-Approval Forms
- Fast digital inquiry forms on the Landing Page, Loan Program pages, Refinance portal, and Contact page.
- Direct capture of borrower name, email, phone number, loan purpose, property value, and credit score tier.

### 5. Admin CRM & Lead Management Portal (`/admin`)
- **Status Pipeline Tracking:** Organize incoming borrower inquiries by status:
  - ⏳ **Not Done Yet** (Awaiting initial review)
  - 🔄 **In Progress** (Under review / client contacted)
  - ✅ **Done** (Pre-approved / closed deal)
- **Live Summary Metrics:** Top metric cards update in real time as leads are submitted or updated.
- **Interactive Status Selectors:** Change any lead's status directly from the table dropdown.
- **Filtering & Deletion:** One-click filtering by status (`All`, `Not Done`, `In Progress`, `Done`), per-lead deletion, and a **"Clear All Inquiries"** button for fresh testing.

### 6. Refinance Hub & Educational FAQ
- Refinance quotation form with interactive break-even timeline and cash-out equity guidance.
- Concise, easy-to-read answers to the most common homeowner questions.

### 7. Introduction Video Showcase
- Responsive widescreen (16:9) video player showcasing the official Co Star Mortgages introduction video in high definition without cropping.

### 8. Broker Profile & About Us
- Profile overview of **Sathya R Narayan** highlighting 20+ years in Colorado real estate investing and 5+ years as a licensed mortgage broker.
- Verified links to the official **BrokerNearMe** profile and contact channels.

---

## 💻 Running the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Launch

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

### Admin Dashboard Access
1. Navigate to **`http://localhost:5173/admin`**
2. Authenticate using authorized administrative credentials.

---

## 📁 Project Structure

```text
costar_mortgages/
├── public/
│   ├── media/               # Profile photo, intro video, assets
│   ├── logo.svg             # Primary dark logo
│   └── logo-white.svg       # Inverted white logo
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── MortgageCalculatorWidget.jsx
│   ├── config/
│   │   └── siteConfig.js    # Broker contact info, NMLS, & site metadata
│   ├── context/
│   │   └── MortgagesContext.jsx # Lead state management & local database
│   ├── data/
│   │   ├── blogs.js         # Educational mortgage articles
│   │   └── mortgages.js     # 6 Loan programs data & criteria
│   ├── pages/
│   │   ├── Home.jsx         # Landing page with hero calculator & video
│   │   ├── MortgagePrograms.jsx # All loan programs catalogue & search
│   │   ├── MortgageProgramDetail.jsx # Individual loan specs & docs
│   │   ├── Refinance.jsx    # Refinance portal & FAQs
│   │   ├── Services.jsx     # Mortgage origination services
│   │   ├── About.jsx        # Sathya R Narayan broker profile
│   │   ├── Contact.jsx      # Direct quote form & office location
│   │   └── Admin.jsx        # Lead pipeline CRM dashboard
│   ├── styles/
│   │   └── index.css        # Vanilla CSS design tokens & navigation styles
│   ├── App.jsx              # Main routing & header with dropdown
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🚀 Production Build

To build the static production bundle:

```bash
npm run build
```

The compiled output will be generated inside the `dist/` folder, ready for deployment on **Vercel**, **Netlify**, or any static web host.
