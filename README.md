# SwiftRoute Logistics — High-Conversion B2B Service Landing Page

> **Notice:** This project is an **Original Open-Source Showcase / Demonstration System** engineered from scratch for portfolio and educational demonstration. All company metrics, shipping corridors, and rates are synthetic.

---

## 1. Business Problem
B2B logistics and regional freight providers frequently lose enterprise leads due to:
- **Opaque Pricing Friction:** Forcing prospects to wait 24–48 hours for a manual email quote.
- **Cluttered Legacy Portals:** Slow, unoptimized pages that fail to communicate SLA reliability on mobile devices.
- **Disconnected Lead Capture:** Generic contact forms that fail to capture structured route, weight, and tier context.

---

## 2. Conversion Architecture
Built with a **Light-Mode Tech Luxury** aesthetic (`#FFFFFF`, `#F8FAFC`, `#0F172A`, `#2563EB`), the page guides decision-makers through a structured conversion funnel:
1. **Above-the-Fold Trust & Value Proposition:** Live SLA indicator (`99.4% On-Time SLA`), clear B2B headline, and verified social proof metrics.
2. **Zero-Friction Interactive Quote Estimator:** Positioned directly in the hero grid so prospects get immediate pricing transparency before sharing contact details.
3. **Quote-to-Lead Pre-Fill Bridge:** Clicking *"Lock This Quote & Request Dispatch"* automatically serializes the selected corridor, weight, tier, and estimated price into the dispatch request form.
4. **Objection Handling (FAQ Accordion):** Addresses ERP onboarding speed, rate guarantees, POD automation, and SLA credits.

---

## 3. Interactive Features
- **Sticky Glassmorphism Navbar:** `backdrop-filter: blur(12px)` navigation with a responsive mobile drawer menu.
- **Real-Time JS Shipping Calculator:** Dynamically computes Base Rate + Weight Rate (`1–500 kg`) × Service Tier Multiplier (`Standard 1.0x`, `Priority 1.35x`, `Cold-Chain 1.65x`) + Optional 3.5% Cargo Protection.
- **Accessible FAQ Accordion:** Keyboard-friendly toggles with `aria-expanded` state management.
- **Validated Dispatch Form:** Client-side validation for full name, company, and work email format with instant UI confirmation and Reference ID generation (`SR-XXXXX`).

---

## 4. Tech Stack
- **Markup:** Semantic HTML5 (`<header>`, `<main>`, `<aside>`, `<section>`, `<article>`)
- **Styling:** Modular CSS3 with CSS Custom Properties, Flexbox/Grid, and mobile-first responsive breakpoints (`1024px`, `768px`)
- **Interactivity:** Zero-dependency Vanilla ES6+ JavaScript (`app.js`)

---

## 5. Visual Previews
- **Desktop (`1440×900`):** [`screenshots/desktop_1440x900.png`](screenshots/desktop_1440x900.png)
- **Mobile (`390×844`):** [`screenshots/mobile_390x844.png`](screenshots/mobile_390x844.png)

---

## 6. Live Preview Instructions
Run any static HTTP server inside this directory:
```powershell
cd D:\Freelance_Business\03_Projects\01_Conversion_Landing_Page
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.
