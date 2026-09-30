# Nexovia Health

Nexovia Health is a modern healthcare-focused website for a U.S. medical billing and revenue cycle management company. This project is built with Next.js, TypeScript, Tailwind CSS, Prisma, and SQLite.

## Project overview

The application includes:

- a premium marketing website with service, specialty, solution, resource, and legal pages
- lead capture forms for contact requests and RCM assessments
- a SQLite-backed data layer using Prisma
- a protected admin dashboard for reviewing new submissions
- email notification architecture for SMTP-based lead handling
- SEO and accessibility-friendly site structure

## Tech stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite for local development
- Zod validation
- Nodemailer for outbound email

## Installation

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and update values before running the project.

- `DATABASE_URL`: SQLite database location
- `NEXT_PUBLIC_SITE_URL`: public base URL for sitemap and metadata
- `NEXT_PUBLIC_CONTACT_EMAIL`: primary contact email shown on the site
- `NEXT_PUBLIC_CONTACT_PHONE`: phone number shown in the footer and contact areas
- `NEXT_PUBLIC_COMPANY_ADDRESS`: business address shown on public pages
- `NEXT_PUBLIC_BUSINESS_HOURS`: operating hours displayed on the website
- `SMTP_HOST`: SMTP host
- `SMTP_PORT`: SMTP port
- `SMTP_USER`: SMTP username
- `SMTP_PASSWORD`: SMTP password
- `FROM_EMAIL`: from address for outbound emails
- `ADMIN_EMAIL`: admin inbox for lead notifications
- `ADMIN_PASSWORD`: admin password for `/admin`

## Development commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Database setup

```bash
npx prisma generate
npx prisma db push
```

The schema includes:

- `Lead`
- `AssessmentRequest`
- `ContactRequest`

## Email configuration

If SMTP credentials are configured, lead submission emails are sent to the configured admin inbox. If not configured, the system logs the architecture as a no-op and keeps the site functional without exposing secrets.

## Admin setup

Go to `/admin` and sign in using the configured `ADMIN_EMAIL` and `ADMIN_PASSWORD` values.

The admin dashboard supports:

- lead list view
- assessment request list
- contact request list
- status filtering and updates

## Deployment

This project is compatible with Vercel or Node.js hosting platforms. For production, use a secure environment variable store and configure SMTP and database credentials before launch.

## Content updates

Primary editable content lives in:

- `data/site.ts` for services, specialties, FAQs, blog, and navigation data
- `app/*` pages for all marketing page structure and copy
- `public/` for images and static assets

## How to add services, specialties, and blog posts

Open `data/site.ts` and update the arrays for:

- `services`
- `specialties`
- `solutions`
- `faqs`
- `blogPosts`

The dynamic route templates will reflect changes automatically.

## Placeholder notes

This project intentionally uses placeholder content where the company has not yet provided verified details, including:

- phone numbers
- email addresses
- office address
- testimonials
- case studies
- specialties
- logo

This keeps the site production-ready while making replacement easy when Nexovia provides final information.
