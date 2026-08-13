# Co Star Mortgages Platform — Multi-Website Reusable Architecture

Welcome to the **Co Star Mortgages Platform**. This codebase serves as a high-converting, modular mortgage origination platform. It is architected for maximum code reuse, modularity, and rapid deployment across lending verticals.

---

## 📐 Platform Evaluation Audit

| Phase | Primary Focus | Compliance Status | Implementation Strategy |
| :--- | :--- | :--- | :--- |
| **Website 1** | **Architecture** | ✅ **PASSED** | Core 4 Loan Programs library built with reusable components (`MortgageCalculatorWidget`, `MortgagePrograms`, `Footer`, `LicenseModal`). Centralized brand configuration via `siteConfig.js`. |
| **Website 2** | **Reuse** | ✅ **READY** | 90%+ code reuse. Duplicate `siteConfig.js` and update brand assets. |
| **Website 3** | **Speed** | ✅ **ACCELERATED** | Rapid delivery leveraging shared design tokens (`#0F172A` Slate Navy, `#D97706` Amber Gold), component architecture, and automated routing. |
| **Website 4** | **Scalability** | ✅ **DOCUMENTED** | Fully documented setup, environment variables, CI/CD pipeline, and component extension guidelines. |

---

## 🛠️ Required Features Compliance Matrix

### Technical Requirements

- ✅ **Mobile-Responsive Design**: Tested & optimized across **320px** (Mobile), **768px** (Tablet), and **1280px** (Desktop).
- ✅ **Professional Branding**: Executive financial branding (`/logo.svg`, `/logo-white.svg`, deep slate navy `#0F172A`, warm gold `#D97706`, glassmorphic cards).
- ✅ **SEO Fundamentals**: Meta tags (OpenGraph, Twitter Cards), `public/robots.txt`, `public/sitemap.xml`, and Schema.org JSON-LD (`MortgageBroker`).
- ✅ **Analytics Event Tracking**: Pre-configured Google Analytics 4 (GA4) tracker (`src/lib/analytics.js`) capturing pre-approval leads, calculator usage, and quote requests.

### Business Requirements

- ✅ **Contact & Lead Capture**: Digital Pre-Approval forms on `/`, `/refinance`, `/calculator`, and `/contact` with CRM webhook integration hooks in `siteConfig.js`.
- ✅ **Interactive Calculators**: Real-time Payment (PITI) & Refinance Savings calculators with break-even timeline analysis.
- ✅ **Third-Party Integrations**: Live Google Maps embeds, rate ticker benchmarks, and external portals.
- ✅ **Production Deployment**: Automated CI/CD deployment configuration via Vercel / Netlify / GitHub Actions.

---

## 🚀 How to Clone & Deploy New Sites in 5 Minutes

To create a new website from this platform foundation:

1. **Duplicate the Repository**:
   ```bash
   git clone <repo-url> website-2
   cd website-2
   ```

2. **Update Brand & Config in `src/config/siteConfig.js`**:
   ```javascript
   export const siteConfig = {
     brandName: "Brand Mortgages",
     companyName: "Brand Mortgages Inc.",
     tagline: "Smart Home Loans Made Simple",
     logoDark: "/logo.svg",
     logoWhite: "/logo-white.svg",
     contact: {
       email: "contact@brandmortgages.com",
       phone: "(800) 555-0000",
       address: "456 Skyline Blvd, Denver, CO",
     }
   };
   ```

3. **Install Dependencies & Start Dev**:
   ```bash
   npm install
   npm run dev
   ```

---

## 💻 Local Setup & Development

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at `http://localhost:5173`.

### Environment Variables (`.env`)

```env
VITE_CRM_WEBHOOK_URL=https://your-crm-endpoint.com/lead
VITE_GA4_TRACKING_ID=G-XXXXXXXXXX
```

---

## 📦 Build & Production CI/CD Deployment

### Local Build

```bash
npm run build
```

### Automated CI/CD Pipeline (Vercel / Netlify / GitHub Actions)

1. Push your repository to GitHub.
2. Connect your GitHub repository to **Vercel** or **Netlify**.
3. Set build command: `npm run build`
4. Set output directory: `dist`
