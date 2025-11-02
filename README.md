# Kaizen Strategic AI - Website

A modern, responsive Next.js website for Kaizen Strategic AI, built with TypeScript and Bootstrap 5.

## Overview

This website is a conversion of the TemplateMo 590 topic listing template, redesigned and adapted for Kaizen Strategic AI - a Northern BC-based digital strategy consultancy specializing in AI-first solutions.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Bootstrap 5** for responsive design
- **Bootstrap Icons** for iconography
- **Tailwind-ready CSS** variables for easy customization
- **Fully responsive** design for all devices
- **SEO-optimized** with proper metadata

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with fonts and global styles
│   ├── page.tsx                 # Homepage
│   ├── services/
│   │   ├── page.tsx            # Services listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Individual service detail pages
│   ├── contact/
│   │   └── page.tsx            # Contact form page
│   └── templatemo-topic-listing.css  # Custom styles
├── components/
│   ├── Navigation.tsx          # Main navigation component
│   ├── Footer.tsx               # Footer component
│   ├── HeroSection.tsx          # Hero section with search
│   ├── FeaturedSection.tsx      # Featured services section
│   ├── ServicesSection.tsx     # Services tabs section
│   ├── HowItWorksSection.tsx    # Timeline/how it works section
│   ├── FAQSection.tsx           # FAQ accordion section
│   └── ContactSection.tsx      # Contact information section
├── public/
│   ├── images/                  # Image assets
│   └── fonts/                   # Font files
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To create a production build:

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Customization

### Brand Colors

Edit the CSS variables in `app/templatemo-topic-listing.css`:

```css
:root {
  --primary-color: #13547a;
  --secondary-color: #80d0c7;
  --custom-btn-bg-color: #80d0c7;
  /* ... */
}
```

### Content

- Service details: Edit `app/services/[slug]/page.tsx`
- FAQ content: Edit `components/FAQSection.tsx`
- Company info: Edit `components/Footer.tsx` and `components/ContactSection.tsx`

## Pages

- **Homepage** (`/`): Main landing page with hero, services, how it works, FAQs, and contact
- **Services** (`/services`): Full listing of all services
- **Service Detail** (`/services/[slug]`): Individual service pages
- **Contact** (`/contact`): Contact form page

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library

## License

This project is based on TemplateMo 590 topic listing template. Please review the original template license for usage terms.

## Contact

Kaizen Strategic AI  
Terrace, BC, Canada  
Email: info@kaizenstrategicai.com

---

**Moving the North forward through Digital Strategy**

