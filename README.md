# Elektro Sør AS – Website

Modern, responsive website for Elektro Sør AS electrical contractor. Built with Next.js 16 and Tailwind CSS. Content is edited directly in the source files via Claude.

## Features

- Fully responsive design (mobile-first)
- Clean, professional UI
- AI chatbot (OpenAI integration)
- GDPR-compliant cookie consent
- Contact form with email notifications
- SEO-optimized with sitemaps and metadata

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Font**: DM Sans (Google Fonts)
- **AI**: OpenAI API (optional)
- **Deployment**: Vercel

## Quick Start (Local Development)

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

```bash
# Clone the repo
git clone https://github.com/nathaniel1232/elektrosor.git
cd elektrosor

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Edit .env.local with your values
# - OPENAI_API_KEY: get from openai.com (optional)

# Start dev server
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
# OpenAI API (optional - chatbot works without it)
OPENAI_API_KEY=sk-<your-key>
```

**Security**: `.env.local` is in `.gitignore` and never committed to GitHub.

## Deployment to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click **"New Project"**
4. Select `nathaniel1232/elektrosor` repository
5. (Optional) Add `OPENAI_API_KEY` env var
6. Click **"Deploy"**

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles (Tailwind v4)
│   ├── tjenester/               # Service pages (private & business)
│   ├── karriere/                # Job listings
│   ├── kontakt/                 # Contact page
│   ├── om-oss/                  # About page
│   ├── referanser/              # Case studies
│   ├── sertifiseringer/         # Certifications
│   ├── esg/                     # ESG/Sustainability
│   ├── apenhetsloven/           # Legal compliance
│   ├── fagartikler/             # Blog articles
│   ├── bestilling/              # Booking form
│   └── api/
│       ├── bestilling/          # Booking form submission
│       └── chat/                # AI chatbot
└── components/
    ├── Navbar.tsx               # Navigation
    ├── Footer.tsx               # Footer
    ├── CookieConsent.tsx        # Cookie banner
    ├── ChatBot.tsx              # AI chat widget
    ├── BestillingForm.tsx       # Booking form
    └── Icons.tsx                # SVG icons library
```

## Editing Content

All content (testimonials, job postings, references, certifications, chatbot prompt) is hardcoded in the source files. Update by editing the relevant file directly — typically via Claude.

- Homepage testimonials / references / certifications → `src/app/page.tsx`
- Job postings → `src/app/karriere/page.tsx`
- Chatbot system prompt → `src/app/api/chat/route.ts`

## Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Troubleshooting

### Chatbot Not Responding

The chatbot widget is disabled without `OPENAI_API_KEY`. To enable:
1. Get API key from [openai.com](https://platform.openai.com/api-keys)
2. Add to Vercel: `OPENAI_API_KEY=sk-...`
3. Redeploy

## License

All rights reserved © 2026 Elektro Sør AS
