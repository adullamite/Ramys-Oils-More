# 🌿 Ramy's Oils & More — Botanical Luxury & Cold-Pressed Skincare

An immersive, high-end e-commerce concept for **Ramy's Oils & More**, featuring botanical luxury art direction, an interactive Three.js 3D dropper bottle experience, and a full multi-page shopping catalog.

---

## ✨ Key Features

1. **Botanical Luxury Aesthetic**
   - Palette: Deep Forest Green (`#102A22`), Warm Ivory/Cream (`#F6F1E7`), Champagne Gold Foil (`#C6A66B`).
   - Typography: **Cormorant Garamond** (high-editorial serif) paired with **Manrope** (sleek geometric sans).
   - Tailwind CSS v4 styling with custom glassmorphism and subtle micro-interactions.

2. **Interactive 3D Dropper Bottle (Three.js / React Three Fiber)**
   - Physically based amber glass shader with simulated internal amber botanical oil core.
   - Gold textured dropper collar, rubber suction bulb, and realistic contact shadow floor.
   - Ambient floating botanical golden pollen particles and smooth pointer-follow physics.

3. **Complete E-Commerce Workflow**
   - **Cart Drawer**: Real-time subtotal, free Lagos delivery progress bar (threshold: ₦30,000), item quantity management with local storage persistence.
   - **Concierge Checkout & Direct WhatsApp**: Seamless order review with 1-click formatted WhatsApp order messaging for instant Nigerian customer service.
   - **10 Dedicated Pages**:
     - `/` — Editorial Homepage with 9 custom storytelling sections
     - `/shop` — Search, category filters (Single Oils, Infused Oils, Raw Butters), price sorting
     - `/product/:id` — High-res galleries, skin & hair benefits, ritual guide, certifications
     - `/story` — Nigerian origin story, ethical harvesting, community impact
     - `/process` — Cold-press extraction, unrefined purity standard, quality testing
     - `/wholesale` — B2B salon, spa, and manufacturer bulk inquiries
     - `/checkout` — Order review with customer details & payment selection
     - `/faq` — Shelf life, hair & skin pairing, delivery timelines
     - `/contact` — Concierge contact form, showroom address, email & phone
     - `/terms`, `/privacy`, `/shipping`, `/returns` — Compliance and customer policies

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```

---

## 📦 Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router DOM v7
