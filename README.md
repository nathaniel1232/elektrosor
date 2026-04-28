# Elektro Sør AS – Website

Modern, responsive website for Elektro Sør AS electrical contractor. Built with Next.js 16, Tailwind CSS, Sanity CMS, and a protected admin dashboard.

## Features

- 🎨 Fully responsive design (mobile-first)
- 📱 Clean, professional UI with no emojis
- 🔐 Protected admin dashboard (`/studio/login`)
- 📝 Sanity CMS integration for content management
- 🤖 AI chatbot (OpenAI integration)
- 🍪 GDPR-compliant cookie consent
- 📧 Contact form with email notifications
- 🌍 SEO-optimized with sitemaps and metadata

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Font**: DM Sans (Google Fonts)
- **CMS**: Sanity.io (optional)
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
# - STUDIO_PASSWORD: admin password (default: "elektrosor")
# - STUDIO_SESSION_SECRET: run `openssl rand -hex 32` to generate
# - NEXT_PUBLIC_SANITY_PROJECT_ID: get from sanity.io (optional)
# - OPENAI_API_KEY: get from openai.com (optional)

# Start dev server
npm run dev
```

Open http://localhost:3000 in your browser.

### Admin Dashboard

- **URL**: http://localhost:3000/studio/login
- **Password**: (from `.env.local` STUDIO_PASSWORD)
- After login → Sanity Studio content editor

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
# Admin credentials (required)
STUDIO_PASSWORD=elektrosor
STUDIO_SESSION_SECRET=<generate with: openssl rand -hex 32>

# Sanity CMS (optional - without it, uses fallback data)
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production

# OpenAI API (optional - chatbot works without it)
OPENAI_API_KEY=sk-<your-key>
```

**Security**: `.env.local` is in `.gitignore` and never committed to GitHub.

## Deployment to Vercel

### ✅ Step 1: Code Already on GitHub

Repository is ready at: https://github.com/nathaniel1232/elektrosor

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click **"New Project"**
4. Select `nathaniel1232/elektrosor` repository
5. Click **"Import"**

### Step 3: Add Environment Variables

In the Vercel import screen, **before deploying**, add these environment variables:

| Variable | Value | Required |
|----------|-------|----------|
| `STUDIO_PASSWORD` | `elektrosor` | ✅ Yes |
| `STUDIO_SESSION_SECRET` | `68f30dc1453a0ec7af41593e9fde9fd19081ead6e837336900157671edb7a798` | ✅ Yes |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID (if using) | ❌ Optional |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | ❌ Optional |
| `OPENAI_API_KEY` | Your OpenAI API key (if using) | ❌ Optional |

### Step 4: Deploy

Click **"Deploy"** – Vercel builds and deploys automatically (~2 minutes).

Your site will be live at: `https://elektrosor.vercel.app`

### Step 5: Admin Access on Vercel

Once deployed:
1. Go to `https://your-vercel-url.vercel.app/studio/login`
2. Enter password: **`elektrosor`**
3. You'll see Sanity Studio setup guide (if no CMS configured) or full editor

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
│   ├── studio/                  # Sanity Studio
│   │   ├── login/               # Admin login page
│   │   └── [[...tool]]/         # Studio interface
│   └── api/
│       ├── studio-auth/         # Session auth
│       ├── bestilling/          # Booking form submission
│       └── chat/                # AI chatbot
├── components/
│   ├── Navbar.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   ├── CookieConsent.tsx        # Cookie banner
│   ├── ChatBot.tsx              # AI chat widget
│   ├── BestillingForm.tsx       # Booking form
│   └── Icons.tsx                # SVG icons library
├── middleware.ts                # Protects /studio/* routes
└── sanity/
    ├── client.ts                # Sanity client config
    ├── env.ts                   # Environment variables
    ├── queries.ts               # GROQ queries
    └── schemas/                 # Content schemas
```

## Key Routes

| Route | Purpose | Auth |
|-------|---------|------|
| `/` | Homepage | Public |
| `/tjenester/privat` | Services for private customers | Public |
| `/tjenester/naring` | Services for business | Public |
| `/karriere` | Job listings | Public |
| `/kontakt` | Contact form | Public |
| `/om-oss` | About company | Public |
| `/referanser` | Case studies | Public |
| `/bestilling` | Booking form | Public |
| `/studio/login` | Admin login | Public (password protected) |
| `/studio/**` | Sanity Studio CMS | Protected (session cookie) |

## Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Performance

- ✅ All pages pre-rendered at build time (SSG)
- ✅ Responsive images with Next.js optimization
- ✅ CSS-in-JS minimized (Tailwind v4 CSS-first)
- ✅ No unused JavaScript in production
- ✅ 21 routes, 0 build errors
- ✅ Optimized for Core Web Vitals

## Troubleshooting

### Admin Dashboard Shows "Configuration must contain projectId"

**This is normal.** If you haven't set `NEXT_PUBLIC_SANITY_PROJECT_ID`, the page shows setup instructions. The site works fine without Sanity – job listings use fallback data.

To use Sanity CMS:
1. Create free account at [sanity.io](https://sanity.io)
2. Create a project and copy the Project ID
3. Add to `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID=your-id`
4. Restart dev server and redeploy to Vercel

### Contact Form Not Sending Emails

Currently the form stores submissions but doesn't send emails. To enable:
1. Choose an email provider (SendGrid, Resend, Mailgun, etc.)
2. Update `/src/app/api/bestilling/route.ts` with provider integration
3. Add API keys to Vercel environment variables

### Chatbot Not Responding

The chatbot widget is disabled without `OPENAI_API_KEY`. To enable:
1. Get API key from [openai.com](https://platform.openai.com/api-keys)
2. Add to Vercel: `OPENAI_API_KEY=sk-...`
3. Redeploy

## Maintenance & Updates

To update the site:

```bash
# Pull latest changes
git pull origin main

# Test locally
npm run dev

# Deploy
git push origin main
# → Vercel auto-deploys
```

## License

All rights reserved © 2026 Elektro Sør AS
